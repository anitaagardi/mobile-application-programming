import * as React from 'react';
import { Image, StyleSheet, View, Text, AsyncStorage } from 'react-native';
import Button from './shared/Button';
import FormTextInput from './shared/FormTextInput';
import css from '../css/css';
import auth from '../db-mock/auth';



class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  };

  static navigationOptions = {
    header: null,
  };

  handlerEmailChange = (email) => {
    console.log('email: ' + email);
    this.setState({ email: email });
  };

  handlerPasswordChange = (password) => {
    this.setState({ password: password });
  };

  handlerLoginPress = async () => {
    if (
      auth.login({
        email: this.state.email,
        password: this.state.password,
      }) == true
    ) {
      console.log('logged succes')
      await AsyncStorage.setItem('loggedIn', '1');
      this.props.navigation.navigate('ShoppingCart');
      this.setState({ loginError: false });
    } else {
      this.setState({ loginError: true });
      alert('Invalid credentials');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Shopping cart 0.1</Text>
        <Image
          style={styles.cover}
          source={
            'https://png2.cleanpng.com/sh/ab3bf723dfce0a0991fae5229af8715c/L0KzQYi4UsE4N5U1SZGAYUO5RLO9hMJkPWY6T5CCNUe7Q4K5VsE2OWQ6SKkBOUO0SIK9TwBvbz==/5a364b6d2c5557.7578312615135076931816.png'
          }
        />
        <FormTextInput
          style={styles.form}
          value={this.state.email}
          onChangeText={this.handlerEmailChange}
          placeholder="Username"
        />
        <FormTextInput
          style={styles.form}
          value={this.state.password}
          onChangeText={this.handlerPasswordChange}
          secureTextEntry={true}
          placeholder="Password"
        />
        <Button
          style={css.button}
          label="Login"
          onPress={this.handlerLoginPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4a4949',
  },
  form: {
    marginBottom: 12,
    height: 40,
    width: 250,
    textAlign: 'center',
    backgroundColor: '#F2EFF1',
    borderRadius: 5,
    fontSize: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '22',
    textAlign: 'center',
    marginBottom: 20,
  },
  cover: {
    height: 90,
    width: 120,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});

export default LoginScreen;
