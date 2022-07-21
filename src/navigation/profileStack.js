/**
 * Profile Stack
 * Function: Uses root navigator to connect profile and editProfile screen
 */

import React from 'react'
import {View, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../screens/Profile'
import EditProfile from '../screens/Profile/editProfile'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
            <Stack.Navigator
                screenOptions={({navigation, route}) => ({
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.pop()}>
                            <Ionicons name={'arrow-back'} style={{marginLeft: 10}} size={28} color={'white'} />
                        </TouchableOpacity>
                    ),
                    title: "Profile",
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTitleStyle: {color: 'white', fontSize: 20, fontWeight: '600'},
                    headerShadowVisible: false, 
                })}
            >
            <Stack.Screen 
                name="Profile" 
                component={Profile} 
            />

            <Stack.Screen 
                name="EditProfile" 
                component={EditProfile} 
                options={({navigation, route}) => ({
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.pop()}>
                            <Text style={{marginLeft: 10, fontSize: 18, color:'white'}}>Cancel</Text>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.pop()}>
                            <Text style={{marginRight: 10, fontSize: 18, color:'#8d8c92'}}>Save</Text>
                        </TouchableOpacity>
                    ),
                    title: "Edit Profile",
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTitleStyle: {color: 'white', fontSize: 20, fontWeight: '600'},
                    headerShadowVisible: false, 
                })}
            />
                
                
            </Stack.Navigator>
    )
};

export default RootNavigation;