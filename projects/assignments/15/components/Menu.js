import * as React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Button,
  AsyncStorage,
  View,
} from 'react-native';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.menuStyle}>What to do</Text>
        <View style={styles.buttonStyle}>
          <Button
            color={'#4a4e54'}
            title="      List of Apps      "
            onPress={() => this.props.navigation.navigate('List')}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            color={'#4a4e54'}
            title=" Add App "
            onPress={() => this.props.navigation.navigate('Add')}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            color={'#4a4e54'}
            title=" Logout "
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    backgroundColor: 'black',
  },
  buttonStyle: {
    margin: '30px',
    borderWidth: 1,
    borderColor: 'red',
  },
  menuStyle: {
    backgroundColor: 'black',
    width: '100%',
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: 50,
    color: 'lightgray',
  },
});