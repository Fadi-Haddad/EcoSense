import { View } from 'react-native';
import SensorCard from '../sensorcard';
const Homescreen = ()=>{
  return(
    <View>
    <SensorCard name="Sensor 1" reading="25°C" state="OK" />
    </View>
  )
}
export default Homescreen;