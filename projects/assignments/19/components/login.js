import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage,
  KeyboardAvoidingView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import logo from '../assets/pizza.svg';
import styles from '../assets/appearance';

const usrpw = { username: 'admin', password: 'admin' };

export default class LoginComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ImageBackground style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <View style={styles.loginContainer}>
              <Icon name={'user-circle'} size={20} style={styles.inputIcons} />
              <TextInput
                style={styles.inputLogin}
                placeholder={'Username'}
                onChangeText={username => this.setState({ username })}
                value={this.state.username}
              />
            </View>
            <View style={styles.loginContainer}>
              <Icon name={'lock'} size={20} style={styles.inputIcons} />
              <TextInput
                style={styles.inputLogin}
                placeholder={'Passsword'}
                secureTextEntry={true}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
            </View>
            <TouchableOpacity style={styles.buttonLogin} onPress={this._login}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }

  _login = async () => {
    if (
      usrpw.username === this.state.username &&
      usrpw.password === this.state.password
    ) {
      await AsyncStorage.setItem('logged', '1');
      this.props.navigation.navigate('List');
    } else {
      alert('Incorrect username or password!');
    }
  };
}
