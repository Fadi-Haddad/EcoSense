import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

type ButtonProps = {
    onPress: () => void;
    title: string;
  };

const LoginButton = ({ onPress, title }:ButtonProps) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };
  export default LoginButton;  