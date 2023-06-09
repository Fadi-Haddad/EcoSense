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
          <Text style={styles.label}>Highest Reading:</Text>
          <Text style={styles.value}>{highestReading}</Text>
          <Text style={styles.timestamp}>{highestTimestamp}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Lowest Reading:</Text>
          <Text style={styles.value}>{lowestReading}</Text>
          <Text style={styles.timestamp}>{lowestTimestamp}</Text>
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        paddingHorizontal: 25,
        paddingVertical: 10,
        backgroundColor: '#7398fe',
        borderRadius: 5,
        marginTop: 15,
        marginHorizontal: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
      },
      value: {
        fontSize: 16,
        color: '#333',
        marginLeft: 8,
        marginRight: 8,
        fontWeight: 'bold',
      },
      timestamp: {
        fontSize: 14,
        color: '#333',
        marginLeft: 5,
        fontWeight: 'bold',
      },
  })
  export default HighLow;