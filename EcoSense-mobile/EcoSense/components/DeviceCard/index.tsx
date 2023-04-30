import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface Props{
    heaterStatus: string;
    fanStatus: string;
}


const deviceCard = ({heaterStatus,fanStatus}:Props) => {
    return (
      <View>
        <View>
          <Text >{`Heater is ${heaterStatus}`}</Text>
          <Image source={heaterStatus === 'on' ? require('../../assets/heater.png') : require('../../assets/heater.png')} style={styles.image} />
        </View>
        <View>
          <Text >{`Fan is ${fanStatus}`}</Text>
          <Image source={fanStatus === 'on' ? require('../../assets/fan.png') : require('../../assets/fan.png')} style={styles.image} />
        </View>
      </View>
    );
  };

