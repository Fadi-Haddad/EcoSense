import React from 'react';
import { View, Image,Text } from 'react-native';
import { styles } from './styles';

export default function CoverPicture() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/background.png')} style={styles.image} />
      <Image source={require('../../../assets/logo.png')} style={styles.icon} />
      <Text >EcoSense</Text>
    </View>
  );
}
