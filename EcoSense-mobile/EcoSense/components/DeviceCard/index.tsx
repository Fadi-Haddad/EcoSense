import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface Props{
    heaterStatus: string;
}


const deviceCard = ({heaterStatus}:Props) => {
    return (
      <View>
        <View>
          <Text >{`Heater is ${heaterStatus}`}</Text>
        </View>
      </View>
    );
  };