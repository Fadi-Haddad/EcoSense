import { View } from "react-native";
import AQIChart from "../../components/AQIChart";
import AQIGauge from "../../components/AQIGauge";

const AQIhistory =()=>{
    return(
        <View>
           <AQIGauge />
           <AQIChart />
        </View>
    )
}
export default AQIhistory;