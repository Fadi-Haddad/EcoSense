import React, { useState, useEffect } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { View, Text } from 'react-native';

const CO2Gauge = ({ Reading }) => {
  const [fill, setFill] = useState();

  useEffect(() => {
    if (Reading) {
      setFill(Reading);
    }
  }, [Reading]);
  

  return (
    <AnimatedCircularProgress
      size={200}
      width={13}
      fill={0.222*(fill-250)}
      tintColor="#527ff4"
      backgroundColor="#3d5875" 
      style={{paddingBottom:10}}>
      {(fill) => (
        <View style={{ alignItems: 'center'}}>
          <Text style={{ fontSize: 40, fontWeight: 'bold',fontFamily:'PlusJakartaSans-Bold'}}>
            { ((fill/0.222)+250).toFixed(0) + ' PPM' }
          </Text>
          <Text style={{ fontSize: 16,fontFamily:'PlusJakartaSans-Bold' }}>
            CO2 Level
          </Text>
        </View>
      )}
    </AnimatedCircularProgress>
  );
};

export default CO2Gauge;
