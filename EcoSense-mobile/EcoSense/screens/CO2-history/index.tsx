import { View, StyleSheet,Text } from "react-native";
import CO2Chart from "../../components/CO2Chart";
import CO2Gauge from "../../components/CO2Gauge";
import HighLow from "../../components/HighLow";
import NotificationSwitch from "../../components/NotificationsSwitch";
import NavigationBar from "../NavigationBar";
import { AppBar } from "@react-native-material/core";

const CO2history =()=>{
  const state= "Fair";
    return(
        <View style={styles.container}>
            <AppBar title="CO2 History" />
            <View style={styles.content}>
                <CO2Gauge />
                <Text style={styles.state}>{state}</Text>
                <Text style={styles.chartlabeltext}>Changes with time:</Text>
                <CO2Chart />
                <HighLow lowestReading={65} highestReading={93} lowestTimestamp="2023-02-05 12:25" highestTimestamp="2023-02-07 12:05"/>
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
