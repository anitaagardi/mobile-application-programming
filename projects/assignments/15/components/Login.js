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
import db from '../db/db'

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
        <Image
          style={styles.loginImage}
          source={require('../assets/rabbit.jpg')}
        />
        <Text style={styles.paragraph}>Dark theme database</Text>
        {
          this.state.error && 
          <Text style={styles.error}>Incorrect Email or Password</Text>
        }
        <TextInput
          style={styles.input}
          placeholder="User Name"
          placeholderTextColor="black"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
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
        email: this.state.email,
        password: this.state.password,
      }) == true
    ) {
      this.props.navigation.navigate('Menu');
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
    padding: 14,
    backgroundColor: 'black',
  },
  paragraph: {
    margin: 12,
    marginTop: 0,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'lightgray',
    textAlign: 'center',
  },
  input: {
    marginBottom: 12,
    height: 40,
    width: 250,
    textAlign: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 5,
    fontSize: 15,
  },
  loginImage: {
    height: 180,
    width: 230,
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
