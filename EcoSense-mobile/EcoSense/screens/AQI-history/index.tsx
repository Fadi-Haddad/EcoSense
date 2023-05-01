import { View, StyleSheet } from "react-native";
import AQIChart from "../../components/AQIChart";
import AQIGauge from "../../components/AQIGauge";

const AQIhistory =()=>{
    return(
        <View style={styles.container}>
           <AQIGauge />
           <AQIChart />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
    marginTop: 40,
  },
});

export default AQIhistory;
