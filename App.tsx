import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './src/screen/mainScreen';
import ProductCard from './src/screen/productCard';
import IndexScreen from './src/screen/index'; // Renomeado para IndexScreen para evitar conflito com "index.tsx" da raiz

export type RootStackParamList = {
  Index: undefined;
  Main: undefined;
  Product: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Product" component={ProductCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}