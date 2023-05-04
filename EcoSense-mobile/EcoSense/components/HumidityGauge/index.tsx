import React, { Component } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { View, Text } from 'react-native';

export default class HumidityGauge extends Component {
    state = {fill: 100};
    render() {
      return (
        <AnimatedCircularProgress
          size={200}
          width={13}
          fill={this.state.fill}
          tintColor="#527ff4"
          backgroundColor="#3d5875" style={{paddingBottom:10}}>
          {(fill) => (
      <View style={{ alignItems: 'center'}}>
                <Text style={{ fontSize: 36, fontWeight: 'bold',fontFamily:'PlusJakartaSans-Bold'}}>
                  { Math.round(this.state.fill/3.1)+'%' }
                </Text>
                <Text style={{ fontSize: 16,fontFamily:'PlusJakartaSans-Bold' }}>
                  Humidity
                </Text>
              </View>
            )}
        </AnimatedCircularProgress>
      );
    }
  }