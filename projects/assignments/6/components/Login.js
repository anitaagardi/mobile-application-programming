import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  AsyncStorage,
  KeyboardAvoidingView,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import db from '../dao/DB'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };
  state = {
    username: '',
    password: '',
    error: false,
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image
          style={styles.loginImage}
          source={require('../assets/HGP-Audi-RS7-Sportback-C8-Tuning-4.jpg')}
        />
        <Text style={styles.paragraph}>Welcome To Car Store</Text>
        {
          this.state.error && 
          <Text style={styles.error}>Incorrect Usernamae or Password</Text>
        }
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="black"
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="black"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button
          color={'#4a4e54'}
          title="        Login        "
          onPress={() => this._login()}
        />
      </KeyboardAvoidingView>
    );
  }

  _login = () => {
    if (
      db.login({
        username: this.state.username,
        password: this.state.password,
      }) == true
    ) {
      this.props.navigation.navigate('MainMenu');
      this.setState({ error: false });
    } else {
      this.setState({ error: true });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#00022e',
  },
  paragraph: {
    margin: 12,
    marginTop: 0,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: 200,
    marginBottom: 12,
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 15,
  },
  loginImage: {
    height: 138,
    width: 150,
  },
  error: {
    backgroundColor: 'red',
    borderRadius: 5,
    color: 'white',
    fontSize: 18,
    margin: '10px',
    padding: '5px'
  }
});
