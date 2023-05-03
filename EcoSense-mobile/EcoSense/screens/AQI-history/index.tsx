import { View, StyleSheet,Text } from "react-native";
import AQIChart from "../../components/AQIChart";
import AQIGauge from "../../components/AQIGauge";
import HighLow from "../../components/HighLow";
import NotificationSwitch from "../../components/NotificationsSwitch";
import NavigationBar from "../NavigationBar";
import { AppBar } from "@react-native-material/core";

const AQIhistory =()=>{
  const state= "Good";
    return(
        <View style={styles.container}>
            <AppBar title="Air Quality History" />
            <View style={styles.content}>
                <AQIGauge />
                <Text style={styles.state}>{state}</Text>
                <Text style={styles.chartlabeltext}>Changes with time:</Text>
                <AQIChart />
                <HighLow lowestReading={65} highestReading={99} lowestTimestamp="2022-08-01 13:15:14" highestTimestamp="2022-01-020 04:15:45"/>
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

export default AQIhistory;
