import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Button,
  AsyncStorage,
  KeyboardAvoidingView,
} from 'react-native';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import database from '../dao/Database'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };
  state = {
    email: '',
    password: '',
    error: false,
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        
        <Text style={styles.paragraph}>Biblioteca</Text>
        {
          this.state.error && 
          <Text style={styles.error}>Incorrect Email or Password</Text>
        }
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="white"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button
          color={'#6f00e1'}
          title="        Login        "
          onPress={() => this._login()}
        />
      </KeyboardAvoidingView>
    );
  }

  _login = () => {
    if (
      database.login({
        email: this.state.email,
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
    backgroundColor: 'white',
  },
  paragraph: {
    margin: 12,
    marginTop: 0,
    marginBottom: 20,
    fontSize: 38,
    fontWeight: 'bold',
    color: '#6f00e1',
    textAlign: 'center',
  },
  input: {
    marginBottom: 12,
    height: 40,
    width: 250,
    textAlign: 'center',
    backgroundColor: '#d4abff',
    borderRadius: 5,
    fontSize: 15,
    color: 'white'
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
