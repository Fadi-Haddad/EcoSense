import { useState, useEffect } from 'react';
import TempGauge from "../../components/TempGauge";
import TempChart from "../../components/TempChart";
import { View, StyleSheet,Text } from "react-native";
import HighLow from "../../components/HighLow";
import NotificationSwitch from "../../components/NotificationsSwitch";
import NavigationBar from "../NavigationBar";
import { AppBar } from "@react-native-material/core";

const Temphistory =()=>{
  const [Data, setData] = useState([1,2,3,4,5,6,7,8,9,10]);
  const [minMaxData, setMinMaxData] = useState({
    "min": {"Temp": 0,"timeStamp": "0",},
    "max": {"Temp": 0,"timeStamp": "0",}
  });
  const [state, setState] = useState('good');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://192.168.0.100:8000/data/get_sensor_readings/Temp');
      const responseData = await response.json();
      setData(responseData);
    };
    fetchData();

    const fetchMinMaxData = async () => {
      const minMax = await fetch('http://192.168.0.100:8000/data/get/Temp/min_max');
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
    const tempValue = Data[0];
    if (tempValue <= 10 || tempValue >= 40) {
      setState('Dangerous');} 
      else if (tempValue <= 16 || tempValue >= 30) {
      setState('Not Good');} 
      else if (tempValue <= 20 || tempValue >= 26) {
      setState('Fair');}
    else {
      setState('Perfect');}
  }, [Data]);

  return (
    <View style={styles.container}>
      <AppBar title="Temerature History" />
      <View style={styles.content}>
            <TempGauge Reading={Data.length ? Data[0] : 0} />
            <Text style={styles.state}>{state}</Text>
            <Text style={styles.chartlabeltext}>Changes with time:</Text>
            <TempChart Data={Data} />
            <HighLow lowestReading={minMaxData.min.Temp} highestReading={minMaxData.max.Temp} lowestTimestamp={formattedMinDate} highestTimestamp={formattedMaxDate} />
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

export default Temphistory;