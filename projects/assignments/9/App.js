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
        <View style={styles.container}>
          <Text style={styles.welcome}> Login! </Text>
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

// Home - Film List , Add Film and Logout
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    //states- ititle, icategory, ilength, irating - for user inputs / data -for saving films
    this.state = {
      ititle: '',
      icategory: '',
      ilength: '',
      irating: '',
      data: [
        { id: 1, title: 'Film1', category: 'Comedy', length: 90, rating: 9 },
        { id: 2, title: 'Film2', category: 'Horror', length: 120, rating: 5 },
        { id: 3, title: 'Film3', category: 'Action', length: 70, rating: 7 },
      ],
    };
  }

  static navigationOptions = {
    header: null,
  };

  //Film VIEW
  render() {
    return (
      //Film list + Add film text inputs and button  + Logout Button
      <View style={styles.container}>
        <Text style={styles.welcome}>Film List</Text>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View style={styles.listV}>
                <Text style={{ fontWeight: 'bold' }}>
                  Film title: {item.title} Category: {item.category}{' '}
                </Text>
                <Text>
                  Length: {item.length} Rating: {item.rating}
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

          <Text style={styles.welcome}>Add Film</Text>
          <View style={styles.formView}>
            <TextInput
              style={styles.inputF}
              placeholder="Title"
              onChangeText={text => this.handleChange(text, 'ititle')}
            />
            <TextInput
              style={styles.inputF}
              placeholder="Category"
              onChangeText={text => this.handleChange(text, 'icategory')}
            />
            <TextInput
              style={styles.inputF}
              placeholder="Length"
              onChangeText={text => this.handleChange(text, 'ilength')}
              keyboardType={'numeric'}
            />
            <TextInput
              style={styles.inputF}
              placeholder="Rating"
              onChangeText={text => this.handleChange(text, 'irating')}
              keyboardType={'numeric'}
            />
            <TouchableOpacity
              style={[styles.btnEnter, { marginBottom: 10 }]}
              onPress={this._addNewFilm}>
              <Text style={styles.btnEnterText}>Add</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Button onPress={this._logout} title="Logout" />
        <Button onPress={this._actor_navigate} title="Actor navigate" />
      </View>
    );
  }

  //Saving states from TextInput
  handleChange = (value, state) => {
    this.setState({ [state]: value });
  };

  // Add new film to state.data with random ID
  _addNewFilm = () => {
    const { ititle, icategory, ilength, irating, data } = this.state;

    if (ititle.length < 2) {
      alert('Title required!!!');
    } else if (icategory.length < 2) {
      alert('Category required!!!');
    } else if (ilength.length < 1) {
      alert('Length required!!!');
    } else if (irating.length < 1) {
      alert('Rating required!!!');
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
            title: ititle,
            category: icategory,
            length: ilength,
            rating: irating,
          },
        ],
      }));
    }
  };

  //delete Film by ID
  _deleteByID(filmID) {
    //console.log(filmID)
    const films = this.state.data.filter(item => item.id != filmID);
    this.setState({ data: films });
  }

  //Logout
  _logout = async () => {
    await AsyncStorage.setItem('logged', '0');
    this.props.navigation.navigate('Auth');
  };
  _actor_navigate = async () => {
    await AsyncStorage.setItem('logged', '2');
    this.props.navigation.navigate('Actor');
  };
}

//Actor
// Actor List , Add Actor and Logout
class ActorScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      iname: '',
      iage: '',
      ifilms: '',
      irating: '',
      data: [
        { id: 1, name: 'Actor1', age: 35, films: 90, rating: 9 },
        { id: 2,  name: 'Actor2', age: 45, films: 120, rating: 5 },
        { id: 3,  name: 'Actor3', age: 55, films: 70, rating: 7 },
      ],
    };
  }

  static navigationOptions = {
    header: null,
  };

  //Actor VIEW
  render() {
    return (
      //Acotor list + Add actor text inputs and button  + Logout Button + Film navigate Button
      <View style={styles.container}>
        <Text style={styles.welcome}>Actor List</Text>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View style={styles.listV}>
                <Text style={{ fontWeight: 'bold' }}>
                  Name : {item.name} Age: {item.age}{' '}
                </Text>
                <Text>
                  Films: {item.films} Rating: {item.rating}
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

          <Text style={styles.welcome}>Add Actor</Text>
          <View style={styles.formView}>
            <TextInput
              style={styles.inputF}
              placeholder="Name"
              onChangeText={text => this.handleChange(text, 'iname')}
            />
            <TextInput
              style={styles.inputF}
              placeholder="Age"
              onChangeText={text => this.handleChange(text, 'iage')}
            />
            <TextInput
              style={styles.inputF}
              placeholder="Films"
              onChangeText={text => this.handleChange(text, 'ifilms')}
              keyboardType={'numeric'}
            />
            <TextInput
              style={styles.inputF}
              placeholder="Rating"
              onChangeText={text => this.handleChange(text, 'irating')}
              keyboardType={'numeric'}
            />
            <TouchableOpacity
              style={[styles.btnEnter, { marginBottom: 10 }]}
              onPress={this._addNewActor}>
              <Text style={styles.btnEnterText}>Add</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Button onPress={this._logout} title="Logout" />
        <Button onPress={this._film_navigate} title="Film navigate" />
      </View>
    );
  }

  //Saving states from TextInput
  handleChange = (value, state) => {
    this.setState({ [state]: value });
  };

  // Add new actor to state.data with random ID
  _addNewActor = () => {
    const { iname, iage, ifilms, irating, data } = this.state;

    if (iname.length < 2) {
      alert('Name required!!!');
    } else if (iage.length < 1) {
      alert('Age required!!!');
    } else if (ifilms.length < 1) {
      alert('Film required!!!');
    } else if (irating.length < 1) {
      alert('Rating required!!!');
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
            films: ifilms,
            rating: irating,
          },
        ],
      }));
    }
  };

  //delete Film by ID
  _deleteByID(actorID) {
    //console.log(filmID)
    const actors = this.state.data.filter(item => item.id != actorID);
    this.setState({ data: actors });
  }

  //Logout
  _logout = async () => {
    await AsyncStorage.setItem('logged', '0');
    this.props.navigation.navigate('Auth');
  };

   _film_navigate = async () => {
    await AsyncStorage.setItem('logged', '1');
    this.props.navigation.navigate('Home');
  };
}

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen name="Auth" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Actor" component={ActorScreen} />
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
    backgroundColor: '#FSFCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    width: 200,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    margin: 15,
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
