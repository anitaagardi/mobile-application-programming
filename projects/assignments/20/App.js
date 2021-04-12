import React from 'react';
import {
  StyleSheet,
  ScrollView,
  FlatList,
  ImageBackground,
  Image,
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
        source={require('./images/background.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.container}>  
        <Image source={require('./images/books.jpg')} />
          <Text style={styles.welcome}>Username and password is: admin </Text>
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
            <Text style={styles.btnEnterText}>Sign in</Text>
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
      alert('Incorrect username or password. Try it again!');
    }
  };
}


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      iTitle: '',
      iCategory: '',
      iPageNumber: '',
   
      data: [
        { id: 1, title: 'Lachlain', category: 'Romantikus', pageNumber: 90},    
      ],
    };
  }

  static navigationOptions = {
    header: null,
  };


  render() {
    return (
        <View style={styles.container}>      
        <Text style={styles.welcome}>List of favourite books</Text>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View style={styles.listV}>
                <Text style={{ fontWeight: 'bold' }}>
                 Title: {item.title}          Category: {item.category}{' '}
                </Text>
  
                <Text>
                  Page number: {item.pageNumber} 
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
                  color="green"
                  onPress={() => this._deleteByID(item.id)}>
                  <Text style={styles.btnEnterText}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          />

          <Text style={styles.welcome}>Add new book</Text>
          <View style={styles.formView}>
            <TextInput
              style={styles.inputF}
              placeholder="Title"
              onChangeText={text => this.handleChange(text, 'iTitle')}
            />
            <TextInput
              style={styles.inputF}
              placeholder="Category"
              onChangeText={text => this.handleChange(text, 'iCategory')}
            />
            <TextInput
              style={styles.inputF}
              placeholder="PageNumber"
              onChangeText={text => this.handleChange(text, 'iPageNumber')}
              keyboardType={'numeric'}
            />
            <TouchableOpacity
              style={[styles.btnEnter, { marginBottom: 10 }]}
              onPress={this._addNewBook}>
              <Text style={styles.btnEnterText}>Add new book</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

         <Button onPress={this._logout} title="Logout" />
      </View>      
    );
  }

     handleChange = (value, state) => {
        this.setState({ [state]: value })
        }
        
    _addNewBook = () => {
    const { iTitle, iCategory, iPageNumber, data } = this.state;

    if (iTitle.length < 1) {
      alert('Title is required!!!');
    } else if (iCategory.length < 1) {
      alert('Category is required!!!');
    } else if (iPageNumber.length < 1)  {
      alert('Page number is required!!!');
    }     
     else {
      var length = Object.keys(this.state.data).length;
      var iID = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
      iID = iID + length;
      
      this.setState(prevState => ({
        data: [
          ...prevState.data,
          {
            id: iID,
            title: iTitle,
            category: iCategory,
            pageNumber: iPageNumber,
          }
        ]
      }))
    }
  }


  _deleteByID(bookID) {
   
    const books = this.state.data.filter(item => item.id != bookID);
    this.setState({ data: books });
  }

  
  _logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}


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


/*export default createAppContainer(
  createStackNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Home: HomeScreen,
      Auth: LoginScreen,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);*/

const Stack = createStackNavigator();


function MyStack() {
  return (
     <Stack.Navigator initialRouteName="AuthLoading">
      <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Auth" component={LoginScreen} />
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
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#d7f9ac',
  },
  welcome: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    width: 200,
    backgroundColor: 'rgba(0,0,0,0.45)',
    color: ' #641e16',
    margin: 15,
    height: 50,
    padding: 15,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#123d11',
    borderRadius: 50,
    paddingLeft: 25,
  },
  btnEnter: {
    justifyContent: 'center',
    flexDirection: 'row-reverse',
    backgroundColor: '#003366',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
    borderRadius: 25,
  },
  btnEnterText: {    
    color: '#ffffff',
    fontWeight: '500',
    fontSize:18,   
    width: 80,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
  },
  scrollView: {
    backgroundColor: '#e8f8f5',
  },
  listV: {
    borderRadius: 30,
    backgroundColor: '#8fe3a1',
    padding: 5,
    marginBottom: 10,
  },
  formView: {
    alignItems: 'center',    
    backgroundColor: '#f5b041',
    borderRadius: 40,
    marginHorizontal: 10,
  },
  inputF: {
    width: 200,
    backgroundColor: '#d3f0d9',
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
