import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  StyleSheet,
} from 'react-native';
const userInfo = { username: 'admin', password: 'admin' };

//LOGIN - username and password states
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      //LOGIN VIEW
      <View style={styles.container}>
        <Text style={styles.welcome}> Please login to view the inventory </Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.btnEnter} onPress={this._signin}>
          <Text style={styles.btnEnterText}>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _signin = async () => {
    if (
      userInfo.username === this.state.username &&
      userInfo.password === this.state.password
    ) {
      await AsyncStorage.setItem('logged', '1');
      this.props.navigation.navigate('Home');
    } else {
      alert('Username or Password invalid');
    }
  };
}

export default LoginScreen;

//STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FSFCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    width: 300,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(250,250,250,0.5)',
    color: 'rgba(0,0,0,0.7)',
    margin: 15,
    height: 40,
    padding: 5,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#41352F',
    borderRadius: 0,
    paddingLeft: 15,
  },
  btnEnter: {
    justifyContent: 'center',
    backgroundColor: '#003366',
    alignItems: 'center',
    width: 300,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderRadius: 0,
    alignSelf: 'center',
  },
  btnEnterText: {
    color: '#ffffff',
    fontWeight: '700',
    width: 200,
    textAlign: 'center',
  },
});
