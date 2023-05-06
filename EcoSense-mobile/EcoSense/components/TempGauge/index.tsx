import React, { useState, useEffect } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { View, Text } from 'react-native';

const TempGauge = ({ Reading }) => {
  const [fill, setFill] = useState();

  useEffect(() => {
    if (Reading) {
      setFill(Reading);
      console.log(fill);
    }
  }, [Reading]);
  

  return (
    <AnimatedCircularProgress
      size={200}
      width={13}
      fill={fill}
      tintColor="#527ff4"
      backgroundColor="#3d5875" 
      style={{paddingBottom:10}}>
      {(fill) => (
        <View style={{ alignItems: 'center'}}>
          <Text style={{ fontSize: 40, fontWeight: 'bold',fontFamily:'PlusJakartaSans-Bold'}}>
            { fill.toFixed(0) + ' °C' }
          </Text>
          <Text style={{ fontSize: 16,fontFamily:'PlusJakartaSans-Bold' }}>
            Temperature
          </Text>
        </View>
      )}
    </AnimatedCircularProgress>
  );
};

export default TempGauge;
