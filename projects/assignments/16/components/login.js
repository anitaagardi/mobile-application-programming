import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles.js';

const loginUser = { 
  userName: 'admin',
  password: 'admin'
  };
export default class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    }
  }

  checkLogin = async () => {
    if (loginUser.username === this.state.username && loginUser.password === this.state.password) {
      this.setState({
        password: ''
      })
      this.props.navigation.navigate('Home');
    } else {
      alert('Wrong username or password');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
        <Text style={styles.paragraph}>
          Log in to the application
        </Text>
        <View style={styles.loginContainer}>
          <Text style={styles.simpleText}>Username</Text>
          <TextInput name="userName" style={styles.inputLogin} onChangeText={userName => this.setState({userName})} value={this.state.userName}/>
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.simpleText}>Password</Text>
          <TextInput name="password" secureTextEntry={true} style={styles.inputLogin} onChangeText={password => this.setState({password})} value={this.state.password}/>
        </View>
        <TouchableOpacity style={styles.buttonLogin} onPress={this.checkLogin}>
              <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}