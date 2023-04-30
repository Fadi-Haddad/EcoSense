import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SensorCard = ({ name, reading, state }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.reading}>{reading}</Text>
        </View>
      </View>
    );
  };