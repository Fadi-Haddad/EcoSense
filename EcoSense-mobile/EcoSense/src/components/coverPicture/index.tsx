import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';

export default function CoverPicture() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/background.png')} style={styles.image} />
    </View>
  );
}
