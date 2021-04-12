import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// You can import from local files
import Login from './components/Login';
import Menu from './components/Menu';
import List from './components/List';
import Add from './components/Add';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

/*const AppContainer = createAppContainer(createStackNavigator(
  {
    Login: Login,
    Add: Add,
    List: List,
    Menu: Menu
  },
  {
    initialRouteName: 'Login',
  }
)
);*/


/*export default class App extends React.Component {
  render() {
    return (
      <AppContainer style = {styles.mainContainer}/>
    );
  }
}*/
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Add" component={Add} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack style = {styles.mainContainer}/>
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

