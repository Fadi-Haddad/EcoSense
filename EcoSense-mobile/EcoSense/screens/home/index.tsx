import { View,Text } from 'react-native';
import SensorCard from '../../components/SensorCard';
import DeviceCard from '../../components/DeviceCard';
import AQIGauge from '../../components/AQIGauge';
import NavigationBar from '../NavigationBar';
import { useState, useEffect } from 'react';
import styles from './styles';

const Homescreen = ()=>{
  const [Data, setData] = useState([1,2,3,4,5,6,7,8,9,10]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://192.168.0.100:8000/data/get_all_readings');
      const responseData = await response.json();
      setData(responseData);
    };
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);


  return(
    <View style={styles.container}>
      <AQIGauge Reading={Data.length ? Data[0].AQI : 0} />
      <Text style={styles.details}>{'Details >'}</Text>
      <View style={styles.row}>
        <View style={styles.cell}>
          <SensorCard name="CO Level :" reading={Data[0].CO} state="OK" unit = "PPM" />
        </View>
        <View style={styles.cell}>
          <SensorCard name="CO2 Level :" reading={Data[0].CO2} state="OK" unit = "PPM"/>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <SensorCard name="Temperature :" reading={Data[0].Temp} state="OK" unit = "°C"/>
        </View>
        <View style={styles.cell}>
          <SensorCard name="Humidity :" reading={Data[0].Humidity} state="OK"unit = "%"/>
        </View>
      </View>
      <View>
        <DeviceCard heaterStatus="On" fanStatus="Off"/>
      </View>
      <NavigationBar />
    </View>
  )
}
export default Homescreen;