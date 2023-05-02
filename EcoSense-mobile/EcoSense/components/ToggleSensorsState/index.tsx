import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const ToggleSensorsState = () =>{
    const sensorsOn = true;
  return (
    <View>
        <Image
          source={sensorsOn ? require('../../assets/sensors-on.png') : require('../../assets/sensors-off.png')}
          style={{ width: 120, height: 120 }}
        />
      <Text>{sensorsOn ? 'Sensors are on' : 'Sensors are off'}</Text>
    </View>
  );
};