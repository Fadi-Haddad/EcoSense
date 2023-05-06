import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import sensorsOnImage from '../../assets/sensors-on.png';
import sensorsOffImage from '../../assets/sensors-off.png';

const ToggleSensorsState = () => {

    const [sensorsOn, setSensorsOn] = useState('off');
    useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://192.168.0.100:8000/data/get_sensors_state');
      const data = await response.json();
      setSensorsOn(data.state);
    };
    fetchData();
  }, []);
    const toggleState = async () => {

      const newState = sensorsOn =='on' ? 'off' : 'on';
      const res= await fetch(`http://192.168.0.100:8000/data/set_sensors_state/${newState}`)
      if (res.status == 200)
      setSensorsOn(newState);
      }
  
    return (
      <View style={{alignItems: 'center',}}>
        <TouchableOpacity onPress={toggleState}>
          <Image
            source={sensorsOn == 'on' ? sensorsOnImage : sensorsOffImage}
            style={{ width: 100, height: 100 }}
          />
        </TouchableOpacity>
        <Text style={{fontSize:16,marginBottom:15}}>{sensorsOn=='on' ? `Sensors are ON` : 'Sensors are OFF'}</Text>
      </View>
    );
  };
  export default ToggleSensorsState;
