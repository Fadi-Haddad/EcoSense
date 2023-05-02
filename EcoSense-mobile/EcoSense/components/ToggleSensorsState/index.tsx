import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const ToggleSensorsState = () => {
    const [sensorsOn, setSensorsOn] = useState(false);
  
    const toggleState = () => {
      setSensorsOn(!sensorsOn);
    };
  
    return (
      <View>
        <TouchableOpacity onPress={toggleState}>
          <Image
            source={sensorsOn ? require('../../assets/sensors-on.png') : require('../../assets/sensors-off.png')}
            style={{ width: 120, height: 120 }}
          />
        </TouchableOpacity>
        <Text>{sensorsOn ? 'Sensors are on' : 'Sensors are off'}</Text>
      </View>
    );
  };