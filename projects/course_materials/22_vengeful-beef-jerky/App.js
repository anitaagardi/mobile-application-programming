import * as React from 'react';
import { Button, Text, TouchableHighlight, TouchableOpacity, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableHighlight 
          style={{flex:1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}
          onPress={() => this.props.navigation.navigate('Lesson')}
        >
          <Text style={{color: 'white'}}>Start Lesson Plan</Text>
        </TouchableHighlight>
        <TouchableHighlight 
          style={{flex:1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'}}
          onPress={() => this.props.navigation.navigate('Meeting')}
        >
          <Text style={{color: 'white'}}>Start Meeting</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class LessonPlan extends React.Component {
  static navigationOptions = {
    title: 'LessonPlan'
  }

  render() {
    return(
      <View>
        <Button 
          title="Create handout"
          style={{width: 30, height: 30, backgroundColor: 'blue'}}
        />
        <Button
          title="Create slides"
        />
        <Button
          title="Set reminders"
        />
        <Button
          title="Select all"
        />
      </View>
    )
  }
}

class MeetingPlan extends React.Component {
  static navigationOptions = {
    title: 'Meeting'
  }

  render() {
    return(
      <View>
        <Button 
          title="Create handout"
          style={{width: 30, height: 30, backgroundColor: 'blue'}}
        />
        <Button
          title="Create slides"
        />
        <Button
          title="Set reminders"
        />
        <Button
          title="Select all"
        />
      </View>
    )
  }
}

/*const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Lesson: LessonPlan,
    Meeting: MeetingPlan
  }
)

const AppNavigator = createAppContainer(StackNavigator)

export default class App extends React.Component {
  render() {
    return(<AppNavigator/>)
  }
}*/
const Stack = createStackNavigator();
/*function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Lesson" component={LessonPlan} />
      <Stack.Screen name="Meeting" component={MeetingPlan} />
    </Stack.Navigator>
  );
}*/

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Lesson" component={LessonPlan} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Meeting" component={MeetingPlan} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({

});
