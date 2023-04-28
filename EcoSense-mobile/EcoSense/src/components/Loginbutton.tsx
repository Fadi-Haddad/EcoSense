import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, title }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };
  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#FD6B68',
      padding: 10,
      borderRadius: 5,
      margin: 10,
      width:336,
      height:60,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  export default Button;