import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface Props {
    heaterStatus: string;
    fanStatus: string;
  }

const deviceCard = ({ heaterStatus, fanStatus }:Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>{`Heater is ${heaterStatus}`}</Text>
        <Image source={heaterStatus === 'on' ? require('../../assets/heater.png') : require('../../assets/heater.png')} style={styles.image} />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>{`Fan is ${fanStatus}`}</Text>
        <Image source={fanStatus === 'on' ? require('../../assets/fan-on.gif') : require('../../assets/fan-off.png')} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    // paddingVertical: 20,
  },
  row: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingVertical: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  image: {
    height: 70,
    width: 70,
  },
});

export default deviceCard;