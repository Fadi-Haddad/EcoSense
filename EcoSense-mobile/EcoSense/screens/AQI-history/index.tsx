import { useState, useEffect } from 'react';
import AQIGauge from "../../components/AQIGauge";
import AQIChart from "../../components/AQIChart";
import { View, StyleSheet,Text } from "react-native";
import HighLow from "../../components/HighLow";
import NotificationSwitch from "../../components/NotificationsSwitch";
import NavigationBar from "../NavigationBar";
import { AppBar } from "@react-native-material/core";

const AQIhistory =()=>{
  const [Data, setData] = useState([1,2,3,4,5,6,7,8,9,10]);
  const [minMaxData, setMinMaxData] = useState({
    "min": {
      "_id": "6455928321ec9d52999a5a40",
      "AQI": 0,
      "CO": 57,
      "CO2": 56,
      "Temp": 55,
      "Humidity": 37,
      "timeStamp": "2023-05-06T02:34:27.623Z",
      "__v": 0
    },
    "max": {
      "_id": "644a99c614ed97a23c0afd21",
      "AQI": 99,
      "CO": 36,
      "CO2": 74,
      "Temp": 5,
      "Humidity": 29,
      "timeStamp": "2022-03-27T14:50:30.708Z",
      "__v": 0
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://192.168.0.100:8000/data/get_sensor_readings/AQI');
      const responseData = await response.json();
      setData(responseData);
    };
    fetchData();

    const fetchMinMaxData = async () => {
      const minMax = await fetch('http://192.168.0.100:8000/data/get/AQI/min_max');
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
  
  const state = 'good'
  return (
    <View style={styles.container}>
      <AppBar title="Air Quality History" />
      <View style={styles.content}>
            <AQIGauge Reading={Data[0]} />
            <Text style={styles.state}>{state}</Text>
            <Text style={styles.chartlabeltext}>Changes with time:</Text>
            <AQIChart Data={Data} />
            <HighLow lowestReading={minMaxData.min.AQI} highestReading={minMaxData.max.AQI} lowestTimestamp={formattedMinDate} highestTimestamp={formattedMaxDate} />
            <NotificationSwitch />
            <NavigationBar />
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
    // paddingTop:10,
    paddingLeft:10,
    fontSize:15,
    alignSelf:'flex-start',
    fontWeight:'bold',
  }
});

export default AQIhistory;