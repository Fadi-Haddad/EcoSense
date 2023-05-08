import OnboardingStack from './navigator/onboardingStack';
import TabStack from './navigator/TabStack';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
      'PlusJakartaSans-Bold': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
      'PlusJakartaSans-Regular': require('./assets/fonts/PlusJakartaSans-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return <AppLoading startAsync={loadFonts} onFinish={() => setFontsLoaded(true)} onError={(err: Error) => console.warn(err)}/>;
  }
  return (
    // <OnboardingStack />
    <TabStack />
  );
}

