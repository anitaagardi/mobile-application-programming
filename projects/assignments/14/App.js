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
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Username: cica / password: cica
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
      <ImageBackground
        source={require('./img/background.jpg')}
        style={styles.backgroundImage}>
        <Text style={styles.login}>LOGIN</Text>
        <View style={styles.container}>
          <View style={{bottom: 60}}>
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
            <TouchableOpacity style={styles.btn} onPress={this._signin}>
              <Text style={styles.btnText}>LogIn</Text>
            </TouchableOpacity>
          </View>
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

// Home - Cat List , Add Cats and Logout
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    //states- iname, iage, icolor, iweight - for user inputs / data -for saving cats
    this.state = {
      iname: '',
      iage: '',
      icolor: '',
      iweight: '',
      data: [
        { id: 1, name: 'Micike', age: 5, color: 'white', weight: 9 },
        { id: 2, name: 'Miu', age: 2, color: 'black', weight: 5 },
        { id: 3, name: 'Nyafi', age: 1, color: 'black&white', weight: 2 },
      ],
    };
  }

  static navigationOptions = {
    header: null,
  };

  //Cat VIEW
  render() {
    return (
      //Cat list + Add cat text inputs and button  + Logout Button
      <View style={styles.container}>
        <Text style={styles.catTitle}>Cat list</Text>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View style={styles.listCats}>
                <View style={styles.catIconName}>
                  <Image style={styles.caticon} source={require('./img/caticon.png')}></Image>
                  <Text style={styles.catName}>
                    {item.name}
                  </Text>
                </View>
                  <Text style={styles.catInput}>
                    Age: {item.age}{' '}
                  </Text>
                  <Text style={styles.catInput}>
                    Color: {item.color}
                  </Text>
                  <Text style={styles.catInput}>
                    Weight: {item.weight}
                  </Text>
                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: 'lightcoral',
                      width: '-webkit-fill-available',
                      padding: 10,
                      margin: 0,
                      alignSelf: 'center',
                    },
                  ]}
                  color="lightcoral"
                  onPress={() => this._deleteByID(item.id)}>
                  <Text style={styles.btnText}>DELETE</Text>
                </TouchableOpacity>
              </View>
            )}
          />

          
          <View style={[styles.listCats, {alignItems: 'center'}]}>
              <Text style={[styles.catTitle,{backgroundColor: '#004080',
              marginBottom:20,
              width: '-webkit-fill-available'}]}>Add new cat</Text>
            <TextInput
              style={styles.catFormInput}
              placeholder="Name"
              onChangeText={text => this.handleChange(text, 'iname')}
            />
            <TextInput
              style={styles.catFormInput}
              placeholder="Age"
              onChangeText={text => this.handleChange(text, 'iage')}
			        keyboardType={'numeric'}
            />
            <TextInput
              style={styles.catFormInput}
              placeholder="Color"
              onChangeText={text => this.handleChange(text, 'icolor')}
            />
            <TextInput
              style={styles.catFormInput}
              placeholder="Weight"
              onChangeText={text => this.handleChange(text, 'iweight')}
              keyboardType={'numeric'}
            />
            <TouchableOpacity
              style={[styles.btn, { 
                width: '-webkit-fill-available',
                marginTop:20,
                margin: 0,
                padding: 10
              }]}
              onPress={this._addNewCat}>
              <Text style={styles.btnText}>ADD</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Button  onPress={this._logout} title="Logout" style={[{backgroundColor: '#004080'}]} />
      </View>
    );
  }

  //Saving states from TextInput
  handleChange = (value, state) => {
    this.setState({ [state]: value });
  };

  // Add new cat to state.data with random ID
  _addNewCat = () => {
    const { iname, iage, icolor, iweight, data } = this.state;

    if (iname.length < 2) {
      alert('Name required!!!');
    } else if (iage.length < 2) {
      alert('Age required!!!');
    } else if (icolor.length < 1) {
      alert('Color required!!!');
    } else if (iweight.length < 1) {
      alert('Weight required!!!');
    } else {
      var length = Object.keys(this.state.data).length;
      var iID = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
      iID = iID + length;
      //console.log(iID);
      this.setState(prevState => ({
        data: [
          ...prevState.data,
          {
            id: iID,
            name: iname,
            age: iage,
            color: icolor,
            weight: iweight,
          },
        ],
      }));
    }
  };

  //delete Cat by ID
  _deleteByID(catID) {
    const cats = this.state.data.filter(item => item.id != catID);
    this.setState({ data: cats });
  }

  //Logout
  _logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

// Logged in user? + navigate
class AuthLoadingScreen extends React.Component {
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
    this.props.navigation.navigate(logged !== '1' ? 'Auth' : 'Home');
  };
}

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen name="Auth" component={LoginScreen} />
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

//STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FSFCFF'
  },
  login: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    color: 'white',
    backgroundColor: '#262626',
    width: '-webkit-fill-available'
  },
  input: {
    width: 200,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    margin: 15,
    height: 40,
    padding: 5,
    fontSize: 16,
    paddingLeft: 15,
    outline: 0
  },
  btn: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#80bfff',
    alignItems: 'center',
    margin: 15,
    padding: 10
  },
  btnText: {
    color: '#ffffff',
    fontWeight: '700',
    width: 50,
    textAlign: 'center'
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
  },
  scrollView: {
    backgroundColor: '#787878',
  },
  listCats: {
    backgroundColor: 'lightgrey',
    marginTop: 15,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 15,
    borderRadius: '120px 120px 0px 0px'
  },
  caticon: {
    width: 80,
    height: 80,
    alignContent: 'center'
  },
  catName: {
    display: "flex",
    fontSize: 20,
    fontWeight: 600
  },
  catIconName: {
    alignItems: 'center',
    padding: 8
  },
  catInput: {
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
    fontSize: 16,
    padding: 10
  },
  catTitle: {
    padding: 10,
    backgroundColor: '#710e0e',
    color: 'whitesmoke',
    fontWeight: 600,
    textAlign: 'center',
    margin: 0,
    fontSize: 24
  },
  catFormInput: {
    backgroundColor: '#f2f2f2',
    width: 200,
    color: 'black',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    height: 40,
    padding: 5,
    fontSize: 16,
    paddingLeft: 15,
  }
});
