import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import thermometerIcon from '../../assets/thermometer.png'
import CO2Icon from '../../assets/carbon-monoxide.png'
import HumidityIcon from '../../assets/humidity.png'
import AQIIcon from '../../assets/AQI.png'

const Notification = ({ sensorName, action, time }) => {
    let imageSource;
    switch (sensorName) {
      case 'Temp':
        imageSource = thermometerIcon;
        break;
      case 'AQI':
        imageSource = AQIIcon;
        break;
      case 'CO':
        imageSource = CO2Icon;
        break;
      case 'CO2':
        imageSource = CO2Icon;
        break;
      case 'Humidity':
        imageSource = HumidityIcon;
        break;
    }
    return (
        <View style={styles.container}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.textContainer}>
            <Text style={styles.title}>{sensorName}</Text>
            <Text style={styles.action}>{action}</Text>
            <Text style={styles.time}>{time}</Text>
            </View>
        </View>
        );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'black',
    backgroundColor: '#99e4',
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 10,
  },
  image: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  time: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 5,
  },
  action: {
    fontSize: 14,
  },
});

export default Notification;
