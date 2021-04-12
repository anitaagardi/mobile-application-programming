import React from 'react';
import { View, AsyncStorage, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginComp from './components/login';
import List from './components/list';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './assets/appearance';
class Auth extends React.Component {
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
    this.props.navigation.navigate(logged !== '1' ? 'Login' : 'List');
  };
}

class ListComp extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.flexContainer}>
        <StatusBar hidden={true} />
        <List />
        <Text style={styles.buttonS} onPress={this._logout} >Logout</Text>
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
      <Stack.Screen name="Login" component={LoginComp} />
      <Stack.Screen name="List" component={ListComp} />
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
