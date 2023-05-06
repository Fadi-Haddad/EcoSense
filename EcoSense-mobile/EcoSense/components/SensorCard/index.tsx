import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const customcolors = {
  red: '#ff0000',
  green: '#00ff00',
  white: '#ffffff'
};
interface Props {
  name: string;
  reading: number;
  state: string;
  unit: string;
}
const SensorCard = ({ name, reading, state, unit }: Props) => {

  const [sensor_reading, setreading] = useState(0);
  useEffect(() => {
    if (reading) {
      setreading(reading);
    }
  }, [reading]);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.reading}>{sensor_reading} {unit}</Text>
      <View style={styles.state}>
        <Text style={[styles.stateText, { backgroundColor: customcolors.white }]}>{state}</Text>
      </View>
    </View>
  );
};

export default SensorCard;