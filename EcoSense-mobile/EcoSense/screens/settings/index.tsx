import { View } from 'react-native';
import ToggleAQINotifications from '../../components/ToggleNotifications';
import ToggleCONotifications from '../../components/ToggleCONotifications';
import ToggleCO2Notifications from '../../components/ToggleCO2Notifications';
import ToggleTempNotifications from '../../components/ToggleTempNotifications';
import ToggleHumidityNotifications from '../../components/ToggleHumidityNotifications';
import { AppBar } from "@react-native-material/core";
const settings = ()=>{
    return (
        <View style={{marginTop:34}}>
        <AppBar title="Settings" />
        <ToggleAQINotifications />
        <ToggleCONotifications />
        <ToggleCO2Notifications />
        <ToggleTempNotifications />
        <ToggleHumidityNotifications />
        </View>
    )
}
export default settings;