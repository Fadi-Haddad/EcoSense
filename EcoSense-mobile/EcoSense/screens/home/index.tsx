import { View,Text } from 'react-native';
import SensorCard from '../../components/SensorCard';
import DeviceCard from '../../components/DeviceCard';
import AQIGauge from '../../components/AQIGauge';
import NavigationBar from '../NavigationBar';
import { useState, useEffect } from 'react';
import styles from './styles';

const Homescreen = ()=>{
  const [Data, setData] = useState({
    "readings": {
      "_id": "",
      "AQI": 0,
      "CO": 0,
      "CO2": 0,
      "Temp": 0,
      "Humidity": 0,
      "timeStamp": "0",
      "__v": 0,},
    "state": {
      "AQI": "",
      "CO": "",
      "CO2": "",
      "Temp": "",
      "Humidity": "",}
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://192.168.0.100:8000/data/get_all_readings');
      const responseData = await response.json();
      setData(responseData);
    };
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return(
    <View style={styles.container}>
      <AQIGauge Reading={Data.readings.AQI} />
      <Text style={{fontSize: 24, fontWeight:'800'}}>{Data.state.AQI}</Text>
      <Text style={styles.details}>{'Details >'}</Text>
      <View style={styles.row}>
        <View style={styles.cell}>
          <SensorCard name="CO Level :" reading={Data.readings.CO} state={Data.state.CO} unit = "PPM" />
        </View>
        <View style={styles.cell}>
          <SensorCard name="CO2 Level :" reading={Data.readings.CO2} state={Data.state.CO2} unit = "PPM"/>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <SensorCard name="Temperature :" reading={Data.readings.Temp} state={Data.state.Temp} unit = "°C"/>
        </View>
        <View style={styles.cell}>
          <SensorCard name="Humidity :" reading={Data.readings.Humidity} state={Data.state.Humidity} unit = "%"/>
        </View>
      </View>
      <View>
        <DeviceCard heaterStatus="On" fanStatus="Off"/>
      </View>
      {/* <NavigationBar /> */}
    </View>
  )
}
export default Homescreen;