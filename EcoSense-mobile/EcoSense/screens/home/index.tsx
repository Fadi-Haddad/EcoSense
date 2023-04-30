import { View } from 'react-native';
import SensorCard from '../sensorcard';
import styles from './styles';
const Homescreen = ()=>{
  return(
    <View style={styles.container}>
      <View style={styles.row}>
      <View style={styles.cell}>
    <SensorCard name="Sensor 1" reading="25°C" state="OK" />
      </View>
      <View style={styles.cell}>
    <SensorCard name="Sensor 2" reading="30°C" state="OK" />
      </View>
      </View>
    </View>
  )
}
export default Homescreen;