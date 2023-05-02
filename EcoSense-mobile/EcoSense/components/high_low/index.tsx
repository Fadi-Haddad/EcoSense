
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