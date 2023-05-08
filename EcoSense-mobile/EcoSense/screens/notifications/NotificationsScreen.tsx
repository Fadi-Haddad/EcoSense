import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Notification from "../../components/Notification";
import { AppBar } from "@react-native-material/core";

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://192.168.0.100:8000/data/get_notifications_list")
        .then((response) => response.json())
        .then((data) => {
          setNotifications(data);
        })
        .catch((error) => console.log(error));
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (null)
}
  export default NotificationsScreen;