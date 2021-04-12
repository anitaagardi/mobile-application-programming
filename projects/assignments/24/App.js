import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import CakeList from './components/CakeList';
import AddCake from './components/AddCake';
import colors from './constants/colors';
import db from './dao/database';



/*const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Login: Login,
      CakeList: CakeList,
      AddCake: AddCake,
    },
    {
      initialRouteName: 'Login',
    }
  )
);*/
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CakeList" component={CakeList} />
      <Stack.Screen name="AddCake" component={AddCake} />
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

/*export default class App extends React.Component {
  render() {
    return (
        <AppContainer style={styles.mainContainer}/>
    );
  }
}*/

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 8,
    justifyContent: 'center',
  },
});
