
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HighLow = ({ lowestReading, highestReading, lowestTimestamp, highestTimestamp }: Props) => {
    return (
      <View >
        <View>
        <Text >Lowest Reading:</Text>
        <Text >lowestReading</Text>
        <Text >lowestTimestamp</Text>
      </View>
      <View >
      <Text >Lowest Reading:</Text>
        <Text >lowestReading</Text>
        <Text >lowestTimestamp</Text>
      </View>
      </View>
    );
  };