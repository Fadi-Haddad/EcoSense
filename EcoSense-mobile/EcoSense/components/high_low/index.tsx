
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
    lowestReading: number,
    highestReading: number,
    lowestTimestamp: string,
    highestTimestamp: string,
  };

  const HighLow = ({ lowestReading, highestReading, lowestTimestamp, highestTimestamp }: Props) => {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
  
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Highest Reading:</Text>
          <Text style={styles.value}>{highestReading}</Text>
          <Text style={styles.timestamp}>{highestTimestamp}</Text>
        </View>
      </View>
    );
  };