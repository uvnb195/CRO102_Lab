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
import Content from './src/lab5-6/Content';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import DummyJson from './src/lab5-6/DummyJson';

export type RootParams = {
  Lab1Home: undefined,
  Lab1Bai3: undefined,
  Lab2: undefined,
  Lab3: undefined,
  Lab3Flatlist: undefined,
  Lab4Picker: undefined,
  Lab56: undefined,
  Lab56Api: undefined
}

const Stack = createNativeStackNavigator<RootParams>()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Lab56' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Lab1Home' component={Lab1} />
          <Stack.Screen name='Lab1Bai3' component={Form} />
          <Stack.Screen name='Lab2' component={Lab2} />
          <Stack.Screen name='Lab3' component={Lab3} />
          <Stack.Screen
            name='Lab3Flatlist'
            component={FlatlistAnim} />
          {/* <Stack.Screen name='Lab4Picker' component={Lab4Picker} /> */}
          <Stack.Screen name='Lab56' component={Content} /><Stack.Screen name='Lab56Api' component={DummyJson} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}
