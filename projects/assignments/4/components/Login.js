import * as React from 'react';
import { StyleSheet, View, Text, TextInput, AsyncStorage, ImageBackground, TouchableOpacity} from 'react-native';
//import { createStackNavigator } from 'react-navigation-stack';

import db from '../db';

const userInfo = { username: '', password: '' };

 export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  static navigationOptions = {
    header: null,
  };

 render() {
    return(
    <ImageBackground
          source={require('../assets/picture.jpg')}
          style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.welcome}> Login</Text>
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
          <TouchableOpacity style={styles.btnEnter} onPress={this._login}>
            <Text style={styles.btnEnterText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

_login = async () => {

if (
      db.login(this.state.username, this.state.password)
    ) {
      await AsyncStorage.setItem('logged', '1');
      this.props.navigation.navigate('FishermanList');
    } else {
      alert('Incorrect email or password!');
    }
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FSFCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 30,
    backgroundColor: '#FFFFFF',
    color: '#008000'
  },
  input: {
    width: 200,
    backgroundColor: '#FFFFFF',
    color: '#008000',
    marginBottom: 25,
    height: 40,
    padding: 5,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#428AF8',
    borderRadius: 25,
    paddingLeft: 15,
    
    
    
  },
  btnEnter: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#008000',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    borderRadius: 25,
  },
  btnEnterText: {
    color: '#ffffff',
    fontWeight: '700',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
  },
  
})