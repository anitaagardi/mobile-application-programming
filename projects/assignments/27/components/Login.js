import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, Button } from 'react-native';

import DB from '../db/MockDB';

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      error: false,
  };
  }
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/beerpic.jpg')} style={{width: '100%', height: '100%'}}>
          <Text style={styles.text}>Beers</Text>
          <Text style={styles.smallText}>Or track your drink consumption</Text>
          <View style={styles.inputContainer}>
          {this.state.error && <Text style={styles.error}>Incorrect username or password</Text>}
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <Button
              color={'#99CF0D'}
              title="        Login        "
              onPress={() => this._login()}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }

  _login = () => {
    if (
      DB.login({
        username: this.state.username,
        password: this.state.password,
      }) == true
    ) {
      this.props.navigation.navigate('Main');
      this.setState({ error: false });
    } else {
      this.setState({ error: true });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
  text: {
    marginTop:150,
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  smallText: {
    padding: 5,
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  input: {
    margin:15,
    height: 40,
    width: 250,
    textAlign: 'center',
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
    fontSize: 15
  },
  inputContainer:{
    marginTop:50,
    justifyContent:"center",
    alignItems:"center"
  },
  error:{
    padding:5,
    borderRadius: 5,
    color:"white",
    backgroundColor:"red"
  }
});