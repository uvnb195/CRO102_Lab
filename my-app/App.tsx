import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lab1 from './src/lab1/Lab1';
import Form from './src/lab1/Form';

export type RootParams = {
  Lab1Home: undefined,
  Lab1Bai3: undefined
}

const Stack = createNativeStackNavigator<RootParams>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Lab1Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Lab1Home' component={Lab1} />
        <Stack.Screen name='Lab1Bai3' component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
