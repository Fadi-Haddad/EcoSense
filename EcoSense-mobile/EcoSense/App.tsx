import OnboardingStack from './navigator/onboardingStack';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';

async function loadFonts() {
  await Font.loadAsync({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    });
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return <AppLoading startAsync={loadFonts} onFinish={() => setFontsLoaded(true)} onError={(err: Error) => console.warn(err)}/>;
  }
  return (
    <OnboardingStack />
  );
}

