import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const deviceCard = ({heaterStatus}) => {
    return (
      <View>
        <View>
          <Text >{`Heater is ${heaterStatus}`}</Text>
        </View>
      </View>
    );
  };