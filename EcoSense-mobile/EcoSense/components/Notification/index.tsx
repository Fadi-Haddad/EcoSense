import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import imageSource from '../../assets/AQi.png'

const Notification = () => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>sensorName</Text>
        <Text style={styles.action}>action</Text>
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
    backgroundColor: 'lightgray',
    marginVertical: 5,
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
  action: {
    fontSize: 14,
  },
});

export default Notification;
