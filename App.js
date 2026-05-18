import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import ShoppingScreen from './src/screens/ShoppingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerTitleAlign: 'center' }}
      >
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ title: 'Giriş' }} 
        />
        <Stack.Screen 
          name="Shopping" 
          component={ShoppingScreen} 
          options={{ title: 'Alışveriş Listesi' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}