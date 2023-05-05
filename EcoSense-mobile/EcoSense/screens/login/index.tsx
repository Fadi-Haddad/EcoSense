// import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
// import LoginButton from '../../src/components/LoginButton';
// import CoverPicture from '../../src/components/CoverPicture';
// import EmailInput from '../../src/components/EmailInput';
// import PasswordInput from '../../src/components/PasswordInput';
// import styles from './styles';

// const LoginScreen = ()=>{
//   const [email, setEmail] = useState("");
//   const handleEmailChange = (text) => {
//     setEmail(text)
//   };
//     return (
//       <View style={styles.container}>
//         <CoverPicture />
//         <EmailInput handleEmailChange={handleEmailChange}/>
//         <PasswordInput />
//         <View>
//           <LoginButton 
//             title='Log in'
//             onPress={() => alert(email)}/>
//         </View>
//         <StatusBar style="auto" />
//       </View>)
// }
// export default LoginScreen;

import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import LoginButton from '../../src/components/LoginButton';
import CoverPicture from '../../src/components/CoverPicture';
import EmailInput from '../../src/components/EmailInput';
import PasswordInput from '../../src/components/PasswordInput';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

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
    } else if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
    } else {
      setErrorMessage('');
      // Store email and password in AsyncStorage
      try {
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);
      } catch (error) {
        console.log('Error storing data:', error);
      }
      // Navigate to the home screen
      navigation.navigate('home');
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
