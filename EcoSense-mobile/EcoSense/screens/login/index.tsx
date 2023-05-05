import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import LoginButton from '../../src/components/LoginButton';
import CoverPicture from '../../src/components/CoverPicture';
import EmailInput from '../../src/components/EmailInput';
import PasswordInput from '../../src/components/PasswordInput';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const LoginScreen = ({ props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPassword = await AsyncStorage.getItem('password');
      if (storedEmail && storedPassword) {
        setEmail(storedEmail);
        setPassword(storedPassword);
      }
    };
    checkLoginStatus();
  }, []);

  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
    } else if (!email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
    } else if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
    } else {
      setErrorMessage('');
      try {
        const response = await axios.post("http://192.168.0.100:8000/auth/login", 
          {email,password,userType: 'user'},
          {headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}});
        console.log(email , password);
        const { token } = response.data;
        await AsyncStorage.setItem('isSignedIn', 'true');
        await AsyncStorage.setItem('token', token);
        navigation.navigate('home');
      } catch (error) {
        setErrorMessage('Invalid email or password.');
        console.log(error)
      }
    }
  };
  
  return (
    <View style={styles.container}>
      <CoverPicture />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <EmailInput handleEmailChange={handleEmailChange} email={email} />
      <PasswordInput handlePasswordChange={handlePasswordChange} password={password} />
      <View>
        <LoginButton 
          title='Log in'
          onPress={handleLogin}/>
      </View>
      <StatusBar style="auto" />
    </View>
  )
};

export default LoginScreen;
