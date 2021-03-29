import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import MainMenu from './components/MainMenu';

import { Card } from 'react-native-paper';

const Stack = createStackNavigator();

function MyStack() {
  return (
     <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AddBook" component={AddBook} />
         <Stack.Screen name="BookList" component={BookList} />
         <Stack.Screen name="MainMenu" component={MainMenu} />
      </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack style={styles.mainContainer}/>
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
