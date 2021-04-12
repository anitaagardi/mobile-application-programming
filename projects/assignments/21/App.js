import React from 'react';
import { View, AsyncStorage, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginView from './components/login';
import Inventory from './components/inventory';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './assets/styles';


// Username: admin
// Password: admin


class AuthView extends React.Component {
  constructor(props) {
    super(props);
    this._loadData();
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
      </View>
    );
  }


  _loadData = async () => {
    const logged = await AsyncStorage.getItem('logged');
    this.props.navigation.navigate(logged !== '1' ? 'Login' : 'Inventory');
  };
}

class InventoryView extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.flexContainer}>
        <StatusBar hidden={true} />
        <Inventory />
        <Button onPress={this._logout} title="Logout" />
      </View>
    );
  }
  _logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };
}

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginView} />
      <Stack.Screen name="Inventory" component={InventoryView} />
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
