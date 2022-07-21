import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNav from './src/navigation/mainNav';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar hidden='false' style="light" /> 
      <NavigationContainer>
        <MainNav/>
      </NavigationContainer>
    </SafeAreaView>
  );
}