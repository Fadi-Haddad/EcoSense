import { useState, useEffect } from 'react';
import AQIGauge from "../../components/AQIGauge";
import AQIChart from "../../components/AQIChart";
import { View, StyleSheet,Text } from "react-native";
import HighLow from "../../components/HighLow";
import { AppBar } from "@react-native-material/core";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AQIhistory =()=>{
  const [Data, setData] = useState([1,2,3,4,5,6,7,8,9,10]);
  const [minMaxData, setMinMaxData] = useState({
    "min": {"AQI": 0,"timeStamp": "0",},
    "max": {"AQI": 0,"timeStamp": "0",}
  });
  const [state, setState] = useState('good');

  useEffect(() => {
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('token');
      const headers = {'Authorization': `Bearer ${token}`};
      const response = await fetch('http://192.168.0.100:8000/data/get_sensor_readings/AQI',{headers});
      const responseData = await response.json();
      setData(responseData);
    };
    fetchData();

    const fetchMinMaxData = async () => {
      const token = await AsyncStorage.getItem('token');
      const headers = {'Authorization': `Bearer ${token}`};
      const minMax = await fetch('http://192.168.0.100:8000/data/get/AQI/min_max',{headers});
      const minMaxData = await minMax.json();
      setMinMaxData(minMaxData);
    };
    fetchMinMaxData();

    const interval = setInterval(() => {
      fetchData();
      fetchMinMaxData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const minTimeStamp = minMaxData.min.timeStamp
  const minDate = new Date(minTimeStamp);
  const formattedMinDate = `${minDate.getMonth() + 1}/${minDate.getDate()}/${minDate.getFullYear()} ${minDate.getHours()}:${minDate.getMinutes()}`;
  
  const maxTimeStamp = minMaxData.max.timeStamp
  const maxDate = new Date(maxTimeStamp);
  const formattedMaxDate = `${maxDate.getMonth() + 1}/${maxDate.getDate()}/${maxDate.getFullYear()} ${maxDate.getHours()}:${maxDate.getMinutes()}`;
  
  useEffect(() => {
      const AQIValue = Data[0];
      if (AQIValue < 20) {
        setState('Dangerous');
      } else if (AQIValue < 40) {
        setState('Bad');
      } else if (AQIValue < 60) {
        setState('Unhealthy');
      } else if (AQIValue < 80) {
        setState('Fair');
      } else if (AQIValue < 90) {
        setState('Good');
      } else {
        setState('Perfect');
      }
  }, [Data]);

  return (
    <View style={styles.container}>
      <AppBar title="Air Quality History" />
      <View style={styles.content}>
            <AQIGauge Reading={Data.length ? Data[0] : 0} />
            <Text style={styles.state}>{state}</Text>
            <Text style={styles.chartlabeltext}>Changes with time:</Text>
            <AQIChart Data={Data} />
            <HighLow lowestReading={minMaxData.min.AQI} highestReading={minMaxData.max.AQI} lowestTimestamp={formattedMinDate} highestTimestamp={formattedMaxDate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 34
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  state:{
    fontSize:25,
    fontWeight:'bold',
  },
  chartlabeltext:{
    paddingTop:10,
    paddingLeft:10,
    fontSize:15,
    alignSelf:'flex-start',
    fontWeight:'bold',
  }
});

export default AQIhistory;