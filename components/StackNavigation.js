import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Login";
import SignUp from "./SignUp";
import Landing from './Landing';

const Stack=createStackNavigator();
export default function StackNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Landing" component={Landing}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
                </Stack.Navigator>
            </NavigationContainer>

    )
}