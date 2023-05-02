import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Switch } from "@react-native-material/core";

const Settings = () => {
    const [checked, setChecked] = useState(true);
    const [minValue, setMinValue] = useState("");
    const [maxValue, setMaxValue] = useState("");
  
    const handleSwitch  = () => {
      setChecked(!checked);
    };

}