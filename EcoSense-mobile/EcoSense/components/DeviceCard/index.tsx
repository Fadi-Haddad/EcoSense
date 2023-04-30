import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface Props{
    heaterStatus: string;
}


const deviceCard = ({heaterStatus}:Props) => {
    return (
      <View>
        <View>
          <Text >{`Heater is ${heaterStatus}`}</Text>
          <Image source={heaterStatus === 'on' ? require('../../assets/heater.png') : require('../../assets/heater.png')} style={styles.image} />
        </View>
      </View>
    );
  };