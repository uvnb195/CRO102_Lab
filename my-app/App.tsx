import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lab1 from './src/lab1/Lab1';
import Form from './src/lab1/Form';
import Lab2 from './src/lab2/Lab2';
import { createContext } from 'react';
import { HeaderData } from './src/lab2/Header';
import Lab3 from './src/lab3/Lab3';
import FlatlistAnim from './src/lab3/FlatlistAnim';
import Lab4Picker from './src/lab4/Lab4Picker';

export type RootParams = {
  Lab1Home: undefined,
  Lab1Bai3: undefined,
  Lab2: undefined,
  Lab3: undefined,
  Lab3Flatlist: undefined,
  Lab4Picker: undefined
}

const Stack = createNativeStackNavigator<RootParams>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Lab3Flatlist' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Lab1Home' component={Lab1} />
        <Stack.Screen name='Lab1Bai3' component={Form} />
        <Stack.Screen name='Lab2' component={Lab2} />
        <Stack.Screen name='Lab3' component={Lab3} />
        <Stack.Screen
          name='Lab3Flatlist'
          component={FlatlistAnim} />
        <Stack.Screen name='Lab4Picker' component={Lab4Picker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
