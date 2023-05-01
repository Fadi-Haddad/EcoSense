import React, { Component } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { View, Text, StyleSheet } from 'react-native';

export default class AQIGauge extends Component {
    state = {fill: 70,};
    render() {
      return (
        <AnimatedCircularProgress
          size={200}
          width={20}
          fill={this.state.fill}
          tintColor="#00e0ff"
          backgroundColor="#3d5875">
          {(fill) => (
      <View style={{ alignItems: 'center'}}>
                <Text style={{ fontSize: 50, fontWeight: 'bold',fontFamily:'poppins-bold'}}>
                  { this.state.fill }
                </Text>
                <Text style={{ fontSize: 20,fontFamily:'poppins-bold' }}>
                  AQI
                </Text>
              </View>
            )}
        </AnimatedCircularProgress>
      );
    }
  }