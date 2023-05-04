import { View, StyleSheet,Text } from "react-native";
import TempChart from "../../components/TempChart";
import TempGauge from "../../components/TempGauge";
import HighLow from "../../components/HighLow";
import NotificationSwitch from "../../components/NotificationsSwitch";
import NavigationBar from "../NavigationBar";
import { AppBar } from "@react-native-material/core";

const CO2history =()=>{
  const state= "Good";
    return(
        <View style={styles.container}>
            <AppBar title="Temperature History" />
            <View style={styles.content}>
                <TempGauge />
                <Text style={styles.state}>{state}</Text>
                <Text style={styles.chartlabeltext}>Changes with time:</Text>
                <TempChart />
                <HighLow lowestReading={5} highestReading={35} lowestTimestamp="2022-12-05 05:25" highestTimestamp="2022-08-16 1:35"/>
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

export default CO2history;
