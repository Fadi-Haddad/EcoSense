import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';


const customcolors = {
  red: '#ff0000',
  green: '#00ff00',
  white: '#ffffff'
};
interface Props {
  name: string;
  reading: string;
  state: string;
}
const SensorCard = ({ name, reading, state }: Props) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.reading}>{reading}</Text>
      <View style={styles.state}>
        <Text style={[styles.stateText, { backgroundColor: customcolors.white }]}>{state}</Text>
      </View>
    </View>
  );
};

export default SensorCard;