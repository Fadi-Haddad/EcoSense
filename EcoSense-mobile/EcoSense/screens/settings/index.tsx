import React from 'react';
import { View, ScrollView } from 'react-native';
import ToggleAQINotifications from '../../components/ToggleAQINotifications';
import ToggleCONotifications from '../../components/ToggleCONotifications';
import ToggleCO2Notifications from '../../components/ToggleCO2Notifications';
import ToggleTempNotifications from '../../components/ToggleTempNotifications';
import ToggleHumidityNotifications from '../../components/ToggleHumidityNotifications';
import ToggleSensorsState from '../../components/ToggleSensorsState';
import LoginButton from '../../components/LoginButton';
import { AppBar } from "@react-native-material/core";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = ({navigation} ) => {
  const logoutHandler = async () => {
    await AsyncStorage.removeItem('isSignedIn');
    navigation.replace('login');
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Login' }],
    // });
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#f4eef2",marginTop:34 }}>
      <AppBar title="Settings" />
      <ScrollView>
        <ToggleSensorsState />
        <ToggleAQINotifications />
        <ToggleCONotifications />
        <ToggleCO2Notifications />
        <ToggleTempNotifications />
        <ToggleHumidityNotifications />
        <View style={{ justifyContent: 'center',
         alignContent: 'center',
         alignItems: 'center',
         marginTop: 25 }}>
          <LoginButton title='Sign out' onPress={() => navigation.reset({index: 0,routes: [{ name: 'Login' }]})} />
        </View>
      </ScrollView>
    </View>
  )
}

export default Settings;
