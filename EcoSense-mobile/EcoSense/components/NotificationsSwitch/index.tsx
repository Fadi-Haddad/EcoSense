import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Stack, Switch } from "@react-native-material/core";

const NotificationSwitch = () => {
    const [checked, setChecked] = useState(true);
  
    return (
      <View >
        <Text>Enable Notifications</Text>
        <Switch value={checked} onValueChange={() => setChecked(!checked)} />
      </View>
    );
  };