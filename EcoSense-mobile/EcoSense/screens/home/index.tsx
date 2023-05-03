import { View } from 'react-native';
import SensorCard from '../../components/SensorCard';
import DeviceCard from '../../components/DeviceCard';
import AQIGauge from '../../components/AQIGauge';

import styles from './styles';
const Homescreen = ()=>{
  return(
    <View style={styles.container}>
      <AQIGauge />
      <View style={styles.row}>
        <View style={styles.cell}>
          <SensorCard name="CO" reading="4 PPM" state="OK" />
        </View>
        <View style={styles.cell}>
          <SensorCard name="CO2" reading="95 PPM" state="OK" />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <SensorCard name="Teperature" reading="22°C" state="OK" />
        </View>
        <View style={styles.cell}>
          <SensorCard name="Humidity" reading="35%" state="OK" />
        </View>
      </View>
      <View>
        <DeviceCard heaterStatus="On" fanStatus="Off"/>
      </View>
    </View>
  )
}
export default Homescreen;