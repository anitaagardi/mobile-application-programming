import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  StyleSheet,
} from 'react-native';
const userInfo = { name: 'admin', pw: 'admin' };
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', pw: '' };
  }
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Login </Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={pw => this.setState({ pw })}
          value={this.state.pw}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.btnEnter} onPress={this._login}>
          <Text style={styles.btnEnterText}>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _login = async () => {
    if (
      userInfo.name === this.state.name &&
      userInfo.pw === this.state.pw
    ) {
      this.props.navigation.navigate('Home');
    } else {
      alert('Name or password is not correct!');
    }
  };
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0d23ce',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff'
  },
  input: {
    width: 300,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(250,250,250,1.5)',
    color: 'rgba(0,0,0,1)',
    margin: 15,
    height: 40,
    padding: 5,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#41352F',
    borderRadius: 0,
    paddingLeft: 10,
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
