import React, { Component } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { View, Text } from 'react-native';

export default class COGauge extends Component {
    state = {fill: 94};
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
                  { this.state.fill/20+' PPM' }
                </Text>
                <Text style={{ fontSize: 16,fontFamily:'PlusJakartaSans-Bold' }}>
                  CO Level
                </Text>
              </View>
            )}
        </AnimatedCircularProgress>
      );
    }
  }