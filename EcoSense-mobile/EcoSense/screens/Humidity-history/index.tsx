import { View, StyleSheet,Text } from "react-native";
import HumidityChart from "../../components/HumidityChart";
import HumidityGauge from "../../components/HumidityGauge";
import HighLow from "../../components/HighLow";
import NotificationSwitch from "../../components/NotificationsSwitch";
import NavigationBar from "../NavigationBar";
import { AppBar } from "@react-native-material/core";

const Humidityhistory =()=>{
  const state= "Good";
    return(
        <View style={styles.container}>
            <AppBar title="Humidity History" />
            <View style={styles.content}>
                <HumidityGauge />
                <Text style={styles.state}>{state}</Text>
                <Text style={styles.chartlabeltext}>Changes with time:</Text>
                <HumidityChart />
                <HighLow lowestReading={20} highestReading={50} lowestTimestamp="2022-12-08 06:30" highestTimestamp="2022-07-15 02:20"/>
                <NotificationSwitch />
                <NavigationBar />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:34
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

export default Humidityhistory;
