import OnboardingStack from './navigator/onboardingStack';
import TabStack from './navigator/TabStack';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { LogBox, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
LogBox.ignoreAllLogs();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [token, setToken] = useState(null);

  const loadFonts = async () => {
    await Font.loadAsync({
      'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
      'PlusJakartaSans-Bold': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
      'PlusJakartaSans-Regular': require('./assets/fonts/PlusJakartaSans-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        setToken(value);
      }
    } catch (e) {
      console.log("Error retrieving token: ", e);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err: Error) => console.warn(err)}
      />
    );
  } else {
    return (
      <View>
        {token ? <TabStack /> : <OnboardingStack />}
      </View>
    );
  }
}
