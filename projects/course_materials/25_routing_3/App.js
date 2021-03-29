

import { Text, View, Button } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




class HomeScreen extends React.Component {
   _navigate = () => {
    this.props.navigation.navigate('Profile');
   };
   _navigateList=()=>{
      this.props.navigation.navigate('List');
   }
  render() {
    
    return (
      <View>
        <Button
          title="Go to Jane's profile"
          onPress={() => this._navigate()}
        />
        <Button
          title="Go to List"
          onPress={() => this._navigateList()}
        />
      </View>
    );
  }
}
  class ProfileScreen extends React.Component {
   _navigate = () => {
    this.props.navigation.navigate('Home');
   };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="It is Jane's profile"
        onPress={() => this._navigate()}
      />
    );
  }
}
class ListScreen extends React.Component {
   _navigate = () => {
    this.props.navigation.navigate('Home');
   };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="It is List"
        onPress={() => this._navigate()}
      />
    );
  }
}
/*export default createAppContainer(createStackNavigator(
  {
  Home:  HomeScreen,
  Profile: ProfileScreen,
  },
  {
      initialRouteName: 'Home',
  }

)
);*/
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="List" component={ListScreen} />
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
