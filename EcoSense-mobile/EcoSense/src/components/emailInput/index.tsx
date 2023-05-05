// import React, { useState } from 'react';
// import { View, TextInput } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import styles from './styles';

// const EmailInput = ({handleEmailChange}) => {
//   return (
//     <View style={styles.container}>
//       <MaterialIcons name='alternate-email' size={20} color='#666' style={styles.icon} />
//       <TextInput
//         placeholder='Email'
//         style={styles.input}
//         underlineColorAndroid='transparent'
//         onChangeText={handleEmailChange}
//       />
//     </View>
//   );
// };
// export default EmailInput;
import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const EmailInput = ({ handleEmailChange }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const getEmail = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('email');
        if (storedEmail !== null) {
          setEmail(storedEmail);
        }
      } catch (e) {
        console.log('Error reading email from AsyncStorage: ', e);
      }
    };
    getEmail();
  }, []);

  const saveEmail = async (text) => {
    try {
      await AsyncStorage.setItem('email', text);
      console.log('Email saved successfully');
    } catch (e) {
      console.log('Error saving email to AsyncStorage: ', e);
    }
  };

  const handleEmailChangeWithSave = (text) => {
    setEmail(text);
    saveEmail(text);
    handleEmailChange(text);
  };

  return (
    <View style={styles.container}>
      <MaterialIcons name='alternate-email' size={20} color='#666' style={styles.icon} />
      <TextInput
        placeholder='Email'
        style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={handleEmailChangeWithSave}
        value={email}
      />
    </View>
  );
};

export default EmailInput;
