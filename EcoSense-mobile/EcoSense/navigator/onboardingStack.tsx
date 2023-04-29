import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/login';
import HomeScreen from '../screens/home';

const OnboardingStack =() =>{
    const Stack = createStackNavigator ()
    return (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
    };
    export default OnboardingStack;