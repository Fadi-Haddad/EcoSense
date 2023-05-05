import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const EmailInput = ({handleEmailChange}) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name='alternate-email' size={20} color='#666' style={styles.icon} />
      <TextInput
        placeholder='Email'
        style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={handleEmailChange}
      />
    </View>
  );
};
export default EmailInput;
