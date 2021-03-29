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

export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.menuStyle}>Biblioteca Main Menu</Text>
        <View style={styles.buttonStyle}>
          <Button
            color={'#6f00e1'}
            title="      Book List      "
            onPress={() => this.props.navigation.navigate('BookList')}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            color={'#6f00e1'}
            title=" Add new book "
            onPress={() => this.props.navigation.navigate('AddBook')}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            color={'#6f00e1'}
            title="       Logout      "
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
    padding: 8,
    backgroundColor: 'white',
  },
  buttonStyle: {
    margin: '20px',
    backgroundColor: '#6f00e1'
  },
  menuStyle: {
    backgroundColor: '#d4abff',
    width: '100%',
    textAlign: 'center',
    marginBottom: '150px',
    fontSize: 50,
    color: 'white',
  },
});
