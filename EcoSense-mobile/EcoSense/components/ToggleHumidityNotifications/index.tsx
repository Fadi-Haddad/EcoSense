import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Switch } from "@react-native-material/core";

const ToggleHumidityNotifications = () => {
  const [checked, setChecked] = useState(true);
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  const handleSwitch  = () => {
    setChecked(!checked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Recieve notifications for Humidity</Text>
        <Switch value={checked} onValueChange={handleSwitch} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Min</Text>
        <TextInput
          style={[styles.input, checked ? null : styles.disabled]}
          value={minValue}
          onChangeText={setMinValue}
          editable={checked}
        />
        <Text style={styles.label}>Max</Text>
        <TextInput
          style={[styles.input, checked ? null : styles.disabled]}
          value={maxValue}
          onChangeText={setMaxValue}
          editable={checked}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
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

export default ToggleHumidityNotifications;
