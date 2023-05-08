import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';


const OnboardingStack =() =>{
    const Stack = createStackNavigator ()
    const isSignedIn = AsyncStorage.getItem('isSignedIn');
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName={isSignedIn == true ? "home" : "login"}>
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
    };
    export default OnboardingStack;
