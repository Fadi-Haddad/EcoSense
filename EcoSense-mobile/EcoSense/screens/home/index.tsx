import { View,Text,TouchableOpacity  } from 'react-native';
import SensorCard from '../../components/SensorCard';
import DeviceCard from '../../components/DeviceCard';
import AQIGauge from '../../components/AQIGauge';
import { useState, useEffect } from 'react';
// import styles from './styles';
import styles from './styles'

const Homescreen = ({navigation})=>{
  const [Data, setData] = useState({"readings": {"_id": "","AQI": 0,"CO": 0,"CO2": 0,"Temp": 0,"Humidity": 0,"timeStamp": "0", "__v": 0,},
    "state": {"AQI": "","CO": "","CO2": "","Temp": "","Humidity": "",}});

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
      <TouchableOpacity onPress={() => navigation.navigate('AQIhistory')}>
        <Text style={styles.details}>{'Details >'}</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('COhistory')}>
        <View style={styles.cell}>
          <SensorCard name="CO Level :" reading={Data.readings.CO} state={Data.state.CO} unit = "PPM" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CO2history')}>
        <View style={styles.cell}>
          <SensorCard name="CO2 Level :" reading={Data.readings.CO2} state={Data.state.CO2} unit = "PPM"/>
        </View>
      </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity onPress={() => navigation.navigate('Temphistory')}>
        <View style={styles.cell}>
          <SensorCard name="Temperature :" reading={Data.readings.Temp} state={Data.state.Temp} unit = "°C"/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Humidityhistory')}>
        <View style={styles.cell}>
          <SensorCard name="Humidity :" reading={Data.readings.Humidity} state={Data.state.Humidity} unit = "%"/>
        </View>
        </TouchableOpacity>
      </View>
      <View>
        <DeviceCard heaterStatus="On" fanStatus="Off"/>
      </View>
    </View>
  )
}
export default Homescreen;