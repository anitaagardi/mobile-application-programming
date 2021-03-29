import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login';
import FishermanList from './components/FishermanList';
import AddFisherman from './components/AddFisherman';
import FishList from './components/FishList';
import AddFish from './components/AddFish';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component = { Login } />
      <Stack.Screen name="FishermanList" component = { FishermanList } />
      <Stack.Screen name="AddFisherman" component = { AddFisherman } />
      <Stack.Screen name="FishList" component = { FishList } />
      <Stack.Screen name="AddFish" component = { AddFish } />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}