import React from 'react';
import {
  View,  KeyboardAvoidingView,TextInput,StyleSheet,Text,Platform,TouchableWithoutFeedback,Button,Keyboard,
} from 'react-native';



import ToggleAQINotifications from '../../components/ToggleNotifications';
import ToggleCONotifications from '../../components/ToggleCONotifications';
import ToggleCO2Notifications from '../../components/ToggleCO2Notifications';
import ToggleTempNotifications from '../../components/ToggleTempNotifications';
import ToggleHumidityNotifications from '../../components/ToggleHumidityNotifications';
import ToggleSensorsState from '../../components/ToggleSensorsState';
import LoginButton from '../../src/components/LoginButton';
import { AppBar } from "@react-native-material/core";



const KeyboardAvoidingComponent = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{marginTop:34, backgroundColor:"#f4eef2"}}>
        <AppBar title="Settings" />
        <ToggleSensorsState />
        <ToggleAQINotifications />
        <ToggleCONotifications />
        <ToggleCO2Notifications />
        <ToggleTempNotifications />
        <ToggleHumidityNotifications />
        <View style={{justifyContent:'center',
            alignContent:'center',
            alignItems: 'center',
            marginTop: 25,
            backgroundColor: "#f4eef2"}}>
            <LoginButton  title='Sign out'
                onPress={() => alert('Logged out!')} />
        </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default KeyboardAvoidingComponent;





        // <View style={{marginTop:34, backgroundColor:"#f4eef2"}}>
        // <AppBar title="Settings" />
        // <ToggleSensorsState />
        // <ToggleAQINotifications />
        // <ToggleCONotifications />
        // <ToggleCO2Notifications />
        // <ToggleTempNotifications />
        // <ToggleHumidityNotifications />
        // <View style={{justifyContent:'center',
        //     alignContent:'center',
        //     alignItems: 'center',
        //     marginTop: 25,
        //     backgroundColor: "#f4eef2"}}>
        //     <LoginButton  title='Sign out'
        //         onPress={() => alert('Logged out!')} />
        // </View>
        // </View>
