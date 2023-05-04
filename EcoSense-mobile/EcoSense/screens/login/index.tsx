import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import LoginButton from '../../src/components/LoginButton';
import CoverPicture from '../../src/components/CoverPicture';
import EmailInput from '../../src/components/EmailInput';
import PasswordInput from '../../src/components/PasswordInput';
import styles from './styles';

const LoginScreen = ()=>{
  const [email, setEmail] = useState("");
  const handleEmailChange = (text) => {
    setEmail(text)
  };
    return (
      <View style={styles.container}>
        <CoverPicture />
        <EmailInput handleEmailChange={handleEmailChange}/>
        <PasswordInput />
        <View>
          <LoginButton 
            title='Log in'
            onPress={() => alert(email)}/>
        </View>
        <StatusBar style="auto" />
      </View>)
}
export default LoginScreen;