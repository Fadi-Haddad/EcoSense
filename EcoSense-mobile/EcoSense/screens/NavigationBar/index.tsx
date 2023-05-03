import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="home" size={24} color="blue"/>
      <AntDesign name="clockcircleo" size={24} color="blue"/>
      <AntDesign name="setting" size={24} color="blue"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    height: 40,
    borderWidth: 1,
    width:'90%',
    marginVertical:20,
    borderRadius:10
  },
});

export default NavigationBar;
