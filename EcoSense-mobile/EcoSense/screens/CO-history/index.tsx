import { useState, useEffect } from 'react';
import COGauge from "../../components/COGauge";
import COChart from "../../components/COChart";
import { View, StyleSheet,Text } from "react-native";
import HighLow from "../../components/HighLow";
import NotificationSwitch from "../../components/NotificationsSwitch";
import NavigationBar from "../NavigationBar";
import { AppBar } from "@react-native-material/core";

const COhistory =()=>{
  const [Data, setData] = useState([1,2,3,4,5,6,7,8,9,10]);
  const [minMaxData, setMinMaxData] = useState({
    "min": {"CO": 0,"timeStamp": "0",},
    "max": {"CO": 0,"timeStamp": "0",}
  });
  const [state, setState] = useState('good');

  useEffect(() => {
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('token');
      const headers = {'Authorization': `Bearer ${token}`};
      const response = await fetch('http://192.168.0.100:8000/data/get_sensor_readings/CO',{headers});
      const responseData = await response.json();
      setData(responseData);
    };
    fetchData();

    const fetchMinMaxData = async () => {
      const token = await AsyncStorage.getItem('token');
      const headers = {'Authorization': `Bearer ${token}`};
      const minMax = await fetch('http://192.168.0.100:8000/data/get/CO/min_max',{headers});
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
      const COValue = Data[0];
      if (COValue < 20) {
        setState('Perfect');
      } else if (COValue < 40) {
        setState('Good');
      } else if (COValue < 60) {
        setState('Fair');
      } else if (COValue < 80) {
        setState('Moderate');
      } else if (COValue < 90) {
        setState('Bad');
      } else {
        setState('Dangerous');
      }
  }, [Data]);

  return (
    <View style={styles.container}>
      <AppBar title="CO History" />
      <View style={styles.content}>
            <COGauge Reading={Data.length ? Data[0] : 0} />
            <Text style={styles.state}>{state}</Text>
            <Text style={styles.chartlabeltext}>Changes with time:</Text>
            <COChart Data={Data} />
            <HighLow lowestReading={minMaxData.min.CO} highestReading={minMaxData.max.CO} lowestTimestamp={formattedMinDate} highestTimestamp={formattedMaxDate} />
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

export default COhistory;