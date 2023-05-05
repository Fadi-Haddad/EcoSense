// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// import LoginScreen from '../screens/login';
// import HomeScreen from '../screens/home';
// import AQIhistory from '../screens/AQI-history';
// import COhistory from '../screens/CO-history';
// import CO2history from '../screens/CO2-history';
// import Temphistory from '../screens/Temp-history';
// import Humidityhistory from '../screens/Humidity-history';
// import Settings from '../screens/settings';
// import KeyboardAvoidingComponent from '../screens/test-floating-keyboard';


// const OnboardingStack =() =>{
//     const Stack = createStackNavigator ()
//     const isSignedIn = true; // hardcoded variable for testing
//     return (
//         <NavigationContainer>
//         <Stack.Navigator initialRouteName={!isSignedIn ? "login" : "settings"}>
//         <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }}/>
//         <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }}/>
//         <Stack.Screen name="AQIhistory" component={AQIhistory} options={{ headerShown: false }}/>
//         <Stack.Screen name="COhistory" component={COhistory} options={{ headerShown: false }}/>
//         <Stack.Screen name="CO2history" component={CO2history} options={{ headerShown: false }}/>
//         <Stack.Screen name="Temphistory" component={Temphistory} options={{ headerShown: false }}/>
//         <Stack.Screen name="Humidityhistory" component={Humidityhistory} options={{ headerShown: false }}/>
//         <Stack.Screen name="settings" component={Settings} options={{ headerShown: false }}/>
//         {/* <Stack.Screen name="test" component={KeyboardAvoidingComponent} options={{ headerShown: false }}/> */}
//         </Stack.Navigator>
//         </NavigationContainer>
//     );
//     };
//     export default OnboardingStack;

import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import LoginScreen from '../screens/login';
import HomeScreen from '../screens/home';
import AQIhistory from '../screens/AQI-history';
import COhistory from '../screens/CO-history';
import CO2history from '../screens/CO2-history';
import Temphistory from '../screens/Temp-history';
import Humidityhistory from '../screens/Humidity-history';
import Settings from '../screens/settings';
import KeyboardAvoidingComponent from '../screens/test-floating-keyboard';

const OnboardingStack = () => {
  const Stack = createStackNavigator();
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const email = await AsyncStorage.getItem('email');
      const password = await AsyncStorage.getItem('password');
      if (email && password) {
        try {
          const response = await axios.post('https://your-backend-url.com/login', {
            email: email,
            password: password,
          });
          if (response.status === 200) {
            setIsSignedIn(true);
          }
        } catch (error) {
          console.error(error);
        }
      }
      setIsLoading(false);
    };

    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <Stack.Navigator>
          <Stack.Screen name="loading" component={LoadingScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName={!isSignedIn ? 'login' : 'home'}>
          <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AQIhistory" component={AQIhistory} options={{ headerShown: false }} />
          <Stack.Screen name="COhistory" component={COhistory} options={{ headerShown: false }} />
          <Stack.Screen name="CO2history" component={CO2history} options={{ headerShown: false }} />
          <Stack.Screen name="Temphistory" component={Temphistory} options={{ headerShown: false }} />
          <Stack.Screen name="Humidityhistory" component={Humidityhistory} options={{ headerShown: false }} />
          <Stack.Screen name="settings" component={Settings} options={{ headerShown: false }} />
          {/* <Stack.Screen name="test" component={KeyboardAvoidingComponent} options={{ headerShown: false }}/> */}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default OnboardingStack;
