/**
 * Home Stack
 * Function: Stack navigator for all screens on Home including Posts & Camera
 * TODO: Create navigation for camera, comments, and realmojis
 */

import React from 'react'
import {View, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Post from '../components/Post'
import Template from '../screens/Home/template'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
        <Stack.Screen 
            name="Home" 
            component={Home} 
                />

        <Stack.Screen 
            name="Post" 
            component={Post} 
        />
                
        <Stack.Screen 
            name="Template" 
            component={Template} 
        />
                
        </Stack.Navigator>
    )
};

export default RootNavigation;