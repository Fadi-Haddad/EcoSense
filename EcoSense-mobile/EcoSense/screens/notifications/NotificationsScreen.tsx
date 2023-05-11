import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Notification from "../../components/Notification";
import { AppBar } from "@react-native-material/core";
import * as notification from "expo-notifications"
import AsyncStorage from '@react-native-async-storage/async-storage';

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const interval = setInterval(async() => {
      const token = await AsyncStorage.getItem('token');
      const headers = {'Authorization': `Bearer ${token}`};
      fetch("http://192.168.0.100:8000/data/get_notifications_list",{headers})
        .then((response) => response.json())
        .then((data) => {
          setNotifications(data);
        })
        .catch((error) => console.log(error));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    notification.requestPermissionsAsync()
    notification.scheduleNotificationAsync({
      content: {
        title: 'New Notification',
        body: 'You have a new notification'
      },
      trigger: {seconds:1}
    });
  }, [notifications]);

  return (
    <View style={{ flex: 1, backgroundColor: "#f4eef2", marginTop: 34 }}>
      <AppBar title="Notifications History" />
      {notifications.map((notification, index) => (
        <Notification
          key={index}
          sensorName={notification.sensorName}
          action={notification.action}
          time={notification.timestamp}
        />
      ))}
    </View>
  )
}

export default NotificationsScreen;
