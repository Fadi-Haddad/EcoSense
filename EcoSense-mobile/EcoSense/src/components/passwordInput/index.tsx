import React from 'react';
import { View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

const PasswordInput= ({handlePasswordChange})=> {
  return (
    <View style={styles.inputContainer}>
      <Ionicons name='ios-lock-closed-outline' size={20} color='#666' style={styles.icon} />
      <TextInput placeholder='password' style={styles.input} secureTextEntry={true} onChangeText={handlePasswordChange}/>
    </View>
  );
}

export default PasswordInput;