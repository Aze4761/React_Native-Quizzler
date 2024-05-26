import React from 'react'
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home'
import Fetch from './src/screens/Fetch'
import Result from './src/screens/Result'
import Mode from './src/screens/Mode'

export default function App() {
  
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Fetch" component={Fetch} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="Mode" component={Mode} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
