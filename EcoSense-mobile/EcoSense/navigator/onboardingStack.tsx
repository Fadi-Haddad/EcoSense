import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/login';
import HomeScreen from '../screens/home';

const OnboardingStack =() =>{
    const Stack = createStackNavigator ()
    const isSignedIn = false; // hardcoded variable for testing
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName={!isSignedIn ? "login" : "home"}>
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
    };
    export default OnboardingStack;