

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  FlatList,
  ImageBackground,
  SafeAreaView,
  Button,
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const userInfo = { username: 'admin', password: 'admin' };


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
      
      <ImageBackground
        source={require('./img/candy.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.welcome}> Login:  </Text>
          <Text style={styles.welcome}> User and PW is "admin" </Text>
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
          <TouchableOpacity style={[styles.btnEnter, {backgroundColor : '#FF00FF'}]} onPress={this._signin}>
            <Text style={styles.btnEnterText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cname: '',
      ctype: '',
      cweight: '',
      ccount: '',
      data: [
        { id: 1, name: 'Sour candy', type: 'sour', weight: 3, count: 30 },
        { id: 2, name: 'Gum', type: 'gum', weight: 2, count: 50 },
        { id: 3, name: 'Halls', type: 'menthol', weight: 6, count: 10 },
      ],
    };
  }

  static navigationOptions = {
    header: null,
  };

 
  render() {
    return (
     
      <View style={styles.container}>
        <Text style={styles.welcome}>List of the sugars</Text>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View style={styles.listV}>
                <Text style={{ fontWeight: 'bold' }}>
                  Name of the sugar: {item.name} type of the sugar: {item.type}{' '}
                </Text>
                <Text>
                  weight: {item.weight} count: {item.count}
                </Text>
                <TouchableOpacity
                  style={[
                    styles.btnEnter,
                    {
                      backgroundColor: '#f00',
                      width: 100,
                      padding: 5,
                      alignSelf: 'center',
                      marginTop: 10,
                    },
                  ]}
                  color="red"
                  onPress={() => this._deleteByID(item.id)}>
                  <Text style={styles.btnEnterText}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          />

          <Text style={styles.welcome}>Add sugar</Text>
          <View style={styles.formView}>
            <TextInput
              style={styles.inputF}
              placeholder="name"
              onChangeText={text => this.handleChange(text, 'cname')}
            />
            <TextInput
              style={styles.inputF}
              placeholder="type"
              onChangeText={text => this.handleChange(text, 'ctype')}
            />
            <TextInput
              style={styles.inputF}
              placeholder="weight"
              onChangeText={text => this.handleChange(text, 'cweight')}
              keyboardType={'numeric'}
            />
            <TextInput
              style={styles.inputF}
              placeholder="count"
              onChangeText={text => this.handleChange(text, 'ccount')}
              keyboardType={'numeric'}
            />
            <TouchableOpacity
              style={[styles.btnEnter, { marginBottom: 10 }]}
              onPress={this._addNewCandy}>
              <Text style={styles.btnEnterText}>Add</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Button onPress={this._logout} name="Logout" />
      </View>
    );
  }

 
  handleChange = (value, state) => {
    this.setState({ [state]: value });
  };

  
  _addNewCandy = () => {
    const { cname, ctype, cweight, ccount, data } = this.state;

    if (cname.length < 2) {
      alert('name is required!!!');
    } else if (ctype.length < 2) {
      alert('type  is required!!!');
    } else if (cweight.length< 1) {
      alert('weight is required!!!');
    } else if (ccount.length < 1) {
      alert('count required!!!');
    } else {
      var length = Object.keys(this.state.data).length;
      var iID = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
      iID = iID + length;
    
      this.setState(prevState => ({
        data: [
          ...prevState.data,
          {
            id: iID,
            name: cname,
            type: ctype,
            weight: cweight,
            count: ccount,
          },
        ],
      }));
    }
  };

  
  _deleteByID(candyID) {
    const candy= this.state.data.filter(item => item.id != candyID);
    this.setState({ data: candy });
  }


  _logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('LOGIN');
  };
}

class LOGINLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._loadData();
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }

  _loadData = async () => {
    const logged = await AsyncStorage.getItem('logged');
    this.props.navigation.navigate(logged !== '1' ? 'LOGIN' : 'Home');
  };
}



const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="LOGIN">
      <Stack.Screen name="LOGIN" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
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
    margin: 10,
  },
  input: {
    width: 200,
    backgroundColor: 'rgba(0,0,0,0.20)',
    color: 'rgba(255,255,255,0.7)',
    margin: 15,
    height: 40,
    padding: 5,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#FF00FF',
    borderRadius: 25,
    paddingLeft: 15,
  },
  btnEnter: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#003366',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    padding: 15,
    borderRadius: 25,
  },
  btnEnterText: {
    color: '#ffffff',
    fontWeight: '700',
    width: 50,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  listV: {
    borderRadius: 10,
    backgroundColor: '#0088cc',
    padding: 10,
    marginBottom: 10,
  },
  formView: {
    alignItems: 'center',
    backgroundColor: 'silver',
    borderRadius: 20,
    marginHorizontal: 20,
  },
  inputF: {
    width: 200,
    backgroundColor: 'white',
    color: 'black',
    margin: 15,
    height: 40,
    padding: 5,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#003366',
    borderRadius: 25,
    paddingLeft: 15,
  },
});
