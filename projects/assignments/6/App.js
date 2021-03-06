import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login';
import Add from './components/AddCar';
import List from './components/CarList';
import Main from './components/MainMenu';

import { Card } from 'react-native-paper';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Add" component={Add} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="MainMenu" component={Main} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack style={styles.mainContainer} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'red',
    padding: 8,
    justifyContent: 'center',
  },
});
