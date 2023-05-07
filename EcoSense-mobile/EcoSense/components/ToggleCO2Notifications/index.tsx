// import React, { useState } from "react";
// import { View, Text, TextInput, StyleSheet } from "react-native";
// import { Switch } from "@react-native-material/core";

// const ToggleCO2Notifications = () => {
//   const [checked, setChecked] = useState(true);
//   const [minValue, setMinValue] = useState("");
//   const [maxValue, setMaxValue] = useState("");

//   const handleSwitch  = () => {
//     setChecked(!checked);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.row}>
//         <Text style={styles.text}>Recieve notifications for CO2 level</Text>
//         <Switch value={checked} onValueChange={handleSwitch} />
//       </View>
//       <View style={styles.row}>
//         <Text style={styles.label}>Min</Text>
//         <TextInput
//           style={[styles.input, checked ? null : styles.disabled]}
//           value={minValue}
//           onChangeText={setMinValue}
//           editable={checked} keyboardType="numeric"
//         />
//         <Text style={styles.label}>Max</Text>
//         <TextInput
//           style={[styles.input, checked ? null : styles.disabled]}
//           value={maxValue}
//           onChangeText={setMaxValue}
//           editable={checked} keyboardType="numeric"
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 10,
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: 'space-between',
//     alignItems: "center",
//     marginHorizontal: 10,
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginRight: 10,
//   },
//   label: {
//     width: 40,
//     textAlign: "center",
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//   },
//   disabled: {
//     backgroundColor: "#bcc",
//     color: "#ccc",
//   },
// });

// export default ToggleCO2Notifications;
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Switch } from "@react-native-material/core";

const ToggleCO2Notifications = () => {
  const [checked, setChecked] = useState(false);
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  useEffect(() => {
    fetch(`http://192.168.0.100:8000/data/get/thresholds_and_notification_state`)
      .then((response) => response.json())
      .then((data) => {
        setChecked(data.CO2.notifications === "on");
        setMinValue(data.CO2.min.toString());
        setMaxValue(data.CO2.max.toString());
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(
      `http://192.168.0.100:8000/data/set/CO2/${minValue}/${maxValue}/${checked ? "on" : "off"}`)
      .then(() => console.log("state updated successfully"))
      .catch((error) => console.error(error));
  }, [checked]);

  useEffect(() => {
    if (checked) {
      fetch(
        `http://192.168.0.100:8000/data/set/CO2/${minValue}/${maxValue}/${checked ? "on" : "off"}`)
        .then(() => console.log("thresholds set successfully"))
        .catch((error) => console.error(error));
    }
  }, [minValue, maxValue]);

  const handleSwitch = () => {
    setChecked(!checked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Recieve notifications for CO2 level</Text>
        <Switch value={checked} onValueChange={handleSwitch} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Min</Text>
        <TextInput
          style={[styles.input, checked ? null : styles.disabled]}
          value={minValue}
          onChangeText={setMinValue}
          editable={checked}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Max</Text>
        <TextInput
          style={[styles.input, checked ? null : styles.disabled]}
          value={maxValue}
          onChangeText={setMaxValue}
          editable={checked}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  label: {
    width: 40,
    textAlign: "center",
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  disabled: {
    backgroundColor: "#bcc",
    color: "#ccc",
  },
});

export default ToggleCO2Notifications;

