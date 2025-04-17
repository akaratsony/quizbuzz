// In App.js in a new project

import * as React from 'react';
import { View, Text,Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Questions from '../screens/Questions';
import Score from '../screens/Score';
import { ImageBackground } from 'react-native';


const Stack = createNativeStackNavigator();
    const isWeb = Platform.OS === 'web'; // Ellenőrizzük, hogy weben fut-e

function RootStack() {
  return (

    
    <Stack.Navigator
  screenOptions={{
    headerStyle: {
      backgroundColor: isWeb ? '#121212' : "fff" , // Navigációs sáv háttérszíne
      elevation: 0,  // Android-ra, hogy ne legyen árnyék
      shadowOpacity: 0,  // iOS-ra, hogy ne legyen árnyék
      borderBottomWidth: 0,  // Ne legyen alsó szegély
    },
    headerTintColor: isWeb ? '#fff' : "#121212" , 
      // Ikonok és szöveg színe
    headerTitleStyle: {
      fontWeight: 'bold', // Címsor stílus
    },
  }}
>
      <Stack.Screen name="Brainrot university" component={Splash} />
      <Stack.Screen name="Question" component={Questions} />
      <Stack.Screen name="Score" component={Score} />


    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer c>
      <RootStack />
    </NavigationContainer>
  );
}