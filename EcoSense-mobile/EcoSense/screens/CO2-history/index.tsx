import { useState, useEffect } from 'react';
import CO2Gauge from "../../components/CO2Gauge";
import CO2Chart from "../../components/CO2Chart";
import { View, StyleSheet,Text } from "react-native";
import HighLow from "../../components/HighLow";
import NotificationSwitch from "../../components/NotificationsSwitch";
import NavigationBar from "../NavigationBar";
import { AppBar } from "@react-native-material/core";

const CO2history =()=>{
  const [Data, setData] = useState([1,2,3,4,5,6,7,8,9,10]);
  const [minMaxData, setMinMaxData] = useState({
    "min": {"CO2": 0,"timeStamp": "0",},
    "max": {"CO2": 0,"timeStamp": "0",}
  });
  const [state, setState] = useState('good');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://192.168.0.100:8000/data/get_sensor_readings/CO2');
      const responseData = await response.json();
      setData(responseData);
    };
    fetchData();

    const fetchMinMaxData = async () => {
      const minMax = await fetch('http://192.168.0.100:8000/data/get/CO2/min_max');
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
      const CO2Value = Data[2];
      if (CO2Value < 20) {
        setState('Perfect');
      } else if (CO2Value < 40) {
        setState('Good');
      } else if (CO2Value < 60) {
        setState('Fair');
      } else if (CO2Value < 80) {
        setState('Moderate');
      } else if (CO2Value < 90) {
        setState('Bad');
      } else {
        setState('Dangerous');
      }
  }, [Data]);

  return (
    <View style={styles.container}>
      <AppBar title="CO2 History" />
      <View style={styles.content}>
            <CO2Gauge Reading={Data.length ? Data[0] : 0} />
            <Text style={styles.state}>{state}</Text>
            <Text style={styles.chartlabeltext}>Changes with time:</Text>
            <CO2Chart Data={Data} />
            <HighLow lowestReading={minMaxData.min.CO2} highestReading={minMaxData.max.CO2} lowestTimestamp={formattedMinDate} highestTimestamp={formattedMaxDate} />
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

export default CO2history;