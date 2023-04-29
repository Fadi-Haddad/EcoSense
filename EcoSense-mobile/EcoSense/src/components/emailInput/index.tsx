import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const EmailInput = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name='alternate-email' size={20} color='#666' style={styles.icon} />
      <TextInput
        placeholder='Email'
        style={styles.input}
        underlineColorAndroid='transparent'
      />
    </View>
  );
};
export default EmailInput;