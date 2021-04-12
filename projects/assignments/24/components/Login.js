import * as React from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import ErrMsg from './ErrMsg.js';
import auth from '../dao/auth.js';
import colors from '../constants/colors.js';

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
    loginError: false,
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image style={styles.logo} source={require('../assets/cupcake.png')} />
        <Text style={styles.paragraph}>Login please!</Text>
        {this.state.loginError ? (
          <ErrMsg msg="Credentials are incorrect!" />
        ) : (
          <Text />
        )}
        <TextInput
          style={styles.input}
          placeholder="Email"
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
          onSubmitEditing={() => this._login()}
        />
        <Button
          color={colors.buttons}
          title="        Login        "
          onPress={() => this._login()}
        />
      </KeyboardAvoidingView>
    );
  }

  _login = () => {
    if (
      auth.login({
        email: this.state.email,
        password: this.state.password,
      }) == true
    ) {
      this.props.navigation.navigate('CakeList');
      this.setState({ loginError: false });
    } else {
      this.setState({ loginError: true });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: colors.bg,
  },
  paragraph: {
    margin: 12,
    marginTop: 0,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.font,
    textAlign: 'center',
  },
  input: {
    marginBottom: 12,
    height: 40,
    width: 250,
    textAlign: 'center',
    backgroundColor: '#F2EFF1',
    borderRadius: 5,
    fontSize: 15,
  },
  logo: {
    height: 128,
    width: 128,
  },
});
