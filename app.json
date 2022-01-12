import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar } from 'react-native-paper';

import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: "News Application"}} />
      <Stack.Screen name="DetailsScreen" component = {DetailsScreen} options = {{title: "Article"}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
