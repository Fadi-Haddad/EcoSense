// import React from 'react';
// import { View, TextInput } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { styles } from './styles';

// const PasswordInput= ()=> {
//   return (
//     <View style={styles.inputContainer}>
//       <Ionicons name='ios-lock-closed-outline' size={20} color='#666' style={styles.icon} />
//       <TextInput placeholder='password' style={styles.input} secureTextEntry={true} />
//     </View>
//   );
// }

// export default PasswordInput;

// PasswordInput.js

import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

const PasswordInput = ({ handlePasswordChange }) => {
  const [password, setPassword] = useState('');

  useEffect(() => {
    const getPassword = async () => {
      try {
        const storedPassword = await AsyncStorage.getItem('password');
        if (storedPassword !== null) {
          setPassword(storedPassword);
        }
      } catch (e) {
        console.log('Error reading password from AsyncStorage: ', e);
      }
    };
    getPassword();
  }, []);

  const savePassword = async (text) => {
    try {
      await AsyncStorage.setItem('password', text);
      console.log('Password saved successfully');
    } catch (e) {
      console.log('Error saving password to AsyncStorage: ', e);
    }
  };

  const handlePasswordChangeWithSave = (text) => {
    setPassword(text);
    savePassword(text);
    handlePasswordChange(text);
  };

  return (
    <View style={styles.inputContainer}>
      <Ionicons name='ios-lock-closed-outline' size={20} color='#666' style={styles.icon} />
      <TextInput
        placeholder='password'
        style={styles.input}
        secureTextEntry={true}
        onChangeText={handlePasswordChangeWithSave}
        value={password}
      />
    </View>
  );
};

export default PasswordInput;


// EmailInput.js

