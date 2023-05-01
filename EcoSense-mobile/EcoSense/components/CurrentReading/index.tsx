import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CurrentReading = () => {
    const aqi = 5;
    const state = 'fair';
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.number}>Air Quality:</Text>
        </View>
        <View>
          <Text style={styles.number}>{aqi}</Text>
        </View>
        <Text style={styles.state}>{state}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent:'space-around',
      backgroundColor: '#FD6B68',
      borderRadius:20,
      paddingVertical:5,
      paddingHorizontal:10,
      marginBottom: 5,
      width:'88%',
    },
    number: {
      fontWeight: 'bold',
      fontSize: 25,
      color: 'black',
    },
    state: {
      fontWeight: 'bold',
      fontSize: 25,
      color: 'black',
    },
  });