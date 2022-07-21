/**
 * Main Navigation
 * Function: Uses root navigator to connect home, profile, and activity stack
 */

//IMPORTS
import React from 'react';
import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './homeStack'
import Search from '../screens/Search'
import ProfileStack from './profileStack'

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <Stack.Navigator>

            {/* Home Stack */}
            <Stack.Screen 
                name="beFake." 
                component={HomeStack}
                options={({navigation, route}) => ({
                    headerLeft: () => (
                        <TouchableOpacity style={{marginLeft: 15}} onPress={() => navigation.navigate('Search')}>
                            <Ionicons name={'people-sharp'} size={30} color={'white'}/>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}} onPress={() => navigation.navigate('ProfileStack')}>
                            <Ionicons name={'people-circle-sharp'} size={30} color={'white'}/>
                        </TouchableOpacity>
                    ),
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTitleStyle: {color: 'white', fontSize: 20},
                    headerShadowVisible: false, 
                })}
                />

                {/* Search screen */}
                <Stack.Screen
                    name="Search"
                    component={Search}
                    options={({navigation, route}) => ({
                        headerLeft: ()=> null,
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.pop()}>
                                <Ionicons name={'arrow-forward'} style={{marginRight: 10}} size={28} color={'white'} />
                            </TouchableOpacity>
                        ),
                        title: "Search",
                        headerStyle: {
                            backgroundColor: 'black',
                        },
                        headerTitleStyle: {color: 'white', fontSize: 20, fontWeight: '600'},
                        headerShadowVisible: false, 
                    })}
                />

                 {/* Profile stack */}
                 <Stack.Screen
                    name="ProfileStack"
                    component={ProfileStack}
                    options={{headerShown: false}
                    }
                />

        </Stack.Navigator>
    )
}



  export default RootNavigation;