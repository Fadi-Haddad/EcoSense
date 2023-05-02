import { View, StyleSheet } from "react-native";
import AQIChart from "../../components/AQIChart";
import AQIGauge from "../../components/AQIGauge";
import HighLow from "../../components/HighLow";
import NotificationSwitch from "../../components/NotificationsSwitch";
import { AppBar } from "@react-native-material/core";

const AQIhistory =()=>{
    return(
        <View style={styles.container}>
            <AppBar title="Air Quality History" />
            <View style={styles.content}>
                <AQIGauge />
                <AQIChart />
                <HighLow lowestReading={0} highestReading={42} lowestTimestamp="2022-08-01 13:15:14" highestTimestamp="2022-01-020 04:15:45"/>
                <NotificationSwitch />
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
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AQIhistory;
