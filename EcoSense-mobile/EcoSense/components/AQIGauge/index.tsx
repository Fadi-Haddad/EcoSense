import React, { useState, useEffect } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { View, Text } from 'react-native';

const AQIGauge = ({ Reading }) => {
  const [fill, setFill] = useState(0);

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
          <Text style={{ fontSize: 50, fontWeight: 'bold',fontFamily:'PlusJakartaSans-Bold'}}>
            { fill.toFixed(0) + '%' }
          </Text>
          <Text style={{ fontSize: 16,fontFamily:'PlusJakartaSans-Bold' }}>
            Air Quality
          </Text>
        </View>
      )}
    </AnimatedCircularProgress>
  );
};

export default AQIGauge;
