// import { View, StyleSheet,Text } from "react-native";
// import AQIChart from "../../components/AQIChart";
// import AQIGauge from "../../components/AQIGauge";
// import HighLow from "../../components/HighLow";
// import NotificationSwitch from "../../components/NotificationsSwitch";
// import NavigationBar from "../NavigationBar";
// import { AppBar } from "@react-native-material/core";

// const AQIhistory =()=>{
//   const state= "Good";
//     return(
//         <View style={styles.container}>
//             <AppBar title="Air Quality History" />
//             <View style={styles.content}>
//                 <AQIGauge />
//                 <Text style={styles.state}>{state}</Text>
//                 <Text style={styles.chartlabeltext}>Changes with time:</Text>
//                 <AQIChart />
//                 <HighLow lowestReading={65} highestReading={95} lowestTimestamp="2022-08-01 13:15" highestTimestamp="2022-01-020 04:15"/>
//                 <NotificationSwitch />
//                 <NavigationBar />
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop:34
//   },
//   content: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   state:{
//     fontSize:25,
//     fontWeight:'bold',
//   },
//   chartlabeltext:{
//     // paddingTop:10,
//     paddingLeft:10,
//     fontSize:15,
//     alignSelf:'flex-start',
//     fontWeight:'bold',
//   }
// });

// export default AQIhistory;



// ------------------------------------------------------------------------------------------------------


// import { View, StyleSheet,Text } from "react-native";
// import { useState, useEffect } from 'react';
// import AQIChart from "../../components/AQIChart";
// import AQIGauge from "../../components/AQIGauge";
// import HighLow from "../../components/HighLow";
// import NotificationSwitch from "../../components/NotificationsSwitch";
// import NavigationBar from "../NavigationBar";
// import { AppBar } from "@react-native-material/core";

// const AQIhistory = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('http://192.168.0.100:8000/data/get_sensor_readings/AQI');
//       const responseData = await response.json();
//       setData(responseData);
//       setIsLoading(false);
//     };

//     fetchData();

//     const interval = setInterval(() => {
//       fetchData();
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   const state = "Good";

//   return (
//     <View style={styles.container}>
//       <AppBar title="Air Quality History" />
//       <View style={styles.content}>
//         {!isLoading && (
//           <>
//             <AQIGauge data={data} />
//             <Text style={styles.state}>{state}</Text>
//             <Text style={styles.chartlabeltext}>Changes with time:</Text>
//             <AQIChart data={data} />
//             <HighLow lowestReading={65} highestReading={95} lowestTimestamp="2022-08-01 13:15" highestTimestamp="2022-01-020 04:15" />
//             <NotificationSwitch />
//             <NavigationBar />
//           </>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 34
//   },
//   content: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   state:{
//     fontSize:25,
//     fontWeight:'bold',
//   },
//   chartlabeltext:{
//     // paddingTop:10,
//     paddingLeft:10,
//     fontSize:15,
//     alignSelf:'flex-start',
//     fontWeight:'bold',
//   }
// });

// export default AQIhistory;
// --------------------------------------------------------------------------------------

import { useState, useEffect } from 'react';
import AQIGauge from "../../components/AQIGauge";
import AQIChart from "../../components/AQIChart";
import { View, StyleSheet,Text } from "react-native";
import HighLow from "../../components/HighLow";
import NotificationSwitch from "../../components/NotificationsSwitch";
import NavigationBar from "../NavigationBar";
import { AppBar } from "@react-native-material/core";

const AQIhistory =()=>{
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://192.168.0.100:8000/data/get_sensor_readings/AQI');
      const responseData = await response.json();
      setData(responseData);
    };

    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const state = 'good'
  return (
    <View style={styles.container}>
      <AppBar title="Air Quality History" />
      <View style={styles.content}>
            <AQIGauge Reading={Data[0]} />
            <Text style={styles.state}>{state}</Text>
            <Text style={styles.chartlabeltext}>Changes with time:</Text>
            <AQIChart Data={Data} />
            <HighLow lowestReading={65} highestReading={95} lowestTimestamp="2022-08-01 13:15" highestTimestamp="2022-01-020 04:15" />
            <NotificationSwitch />
            <NavigationBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 34
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