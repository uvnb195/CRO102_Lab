import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lab1 from './src/lab1/Lab1';
import Form from './src/lab1/Form';
import Lab2 from './src/lab2/Lab2';

export type RootParams = {
  Lab1Home: undefined,
  Lab1Bai3: undefined,
  Lab2: undefined
}

const Stack = createNativeStackNavigator<RootParams>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Lab2' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Lab1Home' component={Lab1} />
        <Stack.Screen name='Lab1Bai3' component={Form} />
        <Stack.Screen name='Lab2' component={Lab2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
