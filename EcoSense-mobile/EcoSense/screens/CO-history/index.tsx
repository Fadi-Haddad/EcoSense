import { View, StyleSheet,Text } from "react-native";
import COChart from "../../components/COChart";
import COGauge from "../../components/COGauge";
import HighLow from "../../components/HighLow";
import NotificationSwitch from "../../components/NotificationsSwitch";
import NavigationBar from "../NavigationBar";
import { AppBar } from "@react-native-material/core";

const COhistory =()=>{
  const state= "Good";
    return(
        <View style={styles.container}>
            <AppBar title="CO History" />
            <View style={styles.content}>
                <COGauge />
                <Text style={styles.state}>{state}</Text>
                <Text style={styles.chartlabeltext}>Changes with time:</Text>
                <COChart />
                <HighLow lowestReading={3.2} highestReading={4.8} lowestTimestamp="2023-12-05 15:55" highestTimestamp="2023-03-10 07:12"/>
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

export default COhistory;
