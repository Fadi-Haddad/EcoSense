import React, { Component } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { View, Text, StyleSheet } from 'react-native';

export default class AQIGauge extends Component {
    state = {fill: 70,};
    render() {
      return (
        <AnimatedCircularProgress>
          {(fill) => (
          <View style={{ alignItems: 'center'}}>
                <Text>
                  { this.state.fill }
                </Text>
              </View>
            )}
        </AnimatedCircularProgress>
      );
    }
  }