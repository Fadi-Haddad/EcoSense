import { View } from 'react-native';
import SensorCard from '../../components/SensorCard';
import DeviceCard from '../../components/DeviceCard';
import AQIChart from '../../components/AQIChart';
import AQIGauge from '../../components/AQIGauge';

import styles from './styles';
const Homescreen = ()=>{
  return(
    <View style={styles.container}>
      <AQIGauge />
      <View style={styles.row}>
        <View style={styles.cell}>
          <SensorCard name="Sensor 1" reading="25°C" state="OK" />
        </View>
        <View style={styles.cell}>
          <SensorCard name="Sensor 2" reading="20°C" state="OK" />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <SensorCard name="Sensor 3" reading="30°C" state="OK" />
        </View>
        <View style={styles.cell}>
          <SensorCard name="Sensor 4" reading="35°C" state="OK" />
        </View>
      </View>
      <View>
        <DeviceCard heaterStatus="on" fanStatus="off"/>
      </View>
    </View>
  )
}
export default Homescreen;