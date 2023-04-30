import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
interface Props {
    name: string;
    reading: string;
    state: string;
  }
const SensorCard = ({ name, reading, state }:Props) => {
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