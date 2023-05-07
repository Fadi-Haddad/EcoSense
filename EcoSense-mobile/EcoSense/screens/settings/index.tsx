import { View, useState, useEffect} from 'react-native';
import ToggleAQINotifications from '../../components/ToggleNotifications';
import ToggleCONotifications from '../../components/ToggleCONotifications';
import ToggleCO2Notifications from '../../components/ToggleCO2Notifications';
import ToggleTempNotifications from '../../components/ToggleTempNotifications';
import ToggleHumidityNotifications from '../../components/ToggleHumidityNotifications';
import ToggleSensorsState from '../../components/ToggleSensorsState';
import LoginButton from '../../src/components/LoginButton';
import { AppBar } from "@react-native-material/core";

const settings = ()=>{
    const [sensorsData, setSensorsData] = useState(null);
    useEffect(() => {
        fetch('http://192.168.0.100:8000/data/get/thresholds_and_notification_state')
          .then(response => response.json())
          .then(data => setSensorsData(data));
      }, []);
    
    return (
        <View style={{marginTop:34, backgroundColor:"#f4eef2"}}>
        <AppBar title="Settings" />
        <ToggleSensorsState />
        <ToggleAQINotifications />
        <ToggleCONotifications />
        <ToggleCO2Notifications />
        <ToggleTempNotifications />
        <ToggleHumidityNotifications />
        <View style={{justifyContent:'center',
            alignContent:'center',
            alignItems: 'center',
            marginTop: 25,
            backgroundColor: "#f4eef2"}}>
            <LoginButton  title='Sign out'
                onPress={() => alert('Logged out!')} />
        </View>
        </View>
    )
}
export default settings;