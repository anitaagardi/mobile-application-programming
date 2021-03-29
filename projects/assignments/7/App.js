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
        source={require('./pictures/bg.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.welcome}> Login Screen! </Text>
          <TextInput
            style={styles.input}
            placeholder="Nickname"
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
      this.props.navigation.navigate('Laptop');
    } else {
      alert('Error: Username or Password');
    }
  };
}

class LaptopScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ilaptop: '',
      icategory: '',
      iwarrantly: '',
      iprice: '',
      data: [
        { id: 1, title: 'Acer Nitro', category: 'AMD', warrantly: 36, price: 9 },
        { id: 2, title: 'HP Elit', category: 'Intel i3', warrantly: 12, price: 5 },
        { id: 3, title: 'ASUS Predator', category: 'i5', warrantly: 24, price: 7 },
        { id: 4, title: 'DELL Vostro', category: 'AMD', warrantly: 24, price: 7 },
        { id: 5, title: 'ASUS', category: 'i9', warrantly: 36, price: 7 },
      ],
    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Laptop List</Text>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View style={styles.listV}>
                <Text style={{ fontWeight: 'bold' }}>
                  Laptop name: {item.title} Category: {item.category}{' '}
                </Text>
                <Text>
                  Warrantly: {item.warrantly} Rating: {item.price} HUF
                </Text>
                <TouchableOpacity
                  style={[
                    styles.btnEnter,
                    {
                      backgroundColor: 'yellow',
                      width: 90,
                      padding: 5,
                      alignSelf: 'center',
                      marginTop: 10,
                    },
                  ]}
                  color="red"
                  onPress={() => this._deleteByID(item.id)}>
                  <Text style={styles.btnEnterText}>Delete Laptop</Text>
                </TouchableOpacity>
              </View>
            )}
          />

          <Text style={styles.welcome}>Add Laptop</Text>
          <View style={styles.formView}>
            <TextInput
              style={styles.inputF}
              placeholder="Name"
              onChangeText={text => this.handleChange(text, 'ilaptop')}
            />
            <TextInput
              style={styles.inputF}
              placeholder="Category"
              onChangeText={text => this.handleChange(text, 'icategory')}
            />
            <TextInput
              style={styles.inputF}
              placeholder="Warrantly"
              onChangeText={text => this.handleChange(text, 'iwarrantly')}
              keyboardType={'numeric'}
            />
            <TextInput
              style={styles.inputF}
              placeholder="Price"
              onChangeText={text => this.handleChange(text, 'iprice')}
              keyboardType={'numeric'}
            />
            <TouchableOpacity
              style={[styles.btnEnter, { marginBottom: 10 }]}
              onPress={this._addNewLaptop}>
              <Text style={styles.btnEnterText}>Add</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Button onPress={this._logout} title="Logout App!" />
        <Button onPress={this._pc_navigate} title="PC List" />
      </View>
    );
  }

  handleChange = (value, state) => {
    this.setState({ [state]: value });
  };

  _addNewLaptop = () => {
    const { ilaptop, icategory, iwarrantly, iprice, data } = this.state;

    if (ilaptop.length < 2) {
      alert('Laptop required!!!');
    } else if (icategory.length < 2) {
      alert('Category required!!!');
    } else if (iwarrantly.length < 1) {
      alert('Warrantly required!!!');
    } else if (iprice.length < 1) {
      alert('Price required!!!');
    } else {
      var length = Object.keys(this.state.data).length;
      var iID = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
      iID = iID + length;
      this.setState(prevState => ({
        data: [
          ...prevState.data,
          {
            id: iID,
            title: ilaptop,
            category: icategory,
            warrantly: iwarrantly,
            price: iprice,
          },
        ],
      }));
    }
  };

  _deleteByID(laptopID) {

    const Laptops = this.state.data.filter(item => item.id != laptopID);
    this.setState({ data: Laptops });
  }

  _logout = async () => {
    await AsyncStorage.setItem('logged', '0');
    this.props.navigation.navigate('Auth');
  };
  _pc_navigate = async () => {
    await AsyncStorage.setItem('logged', '2');
    this.props.navigation.navigate('Pc');
  };
}

class PcScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      ipcname: '',
      ipccategory: '',
      ipcwarrantly: '',
      ipcprice: '',
      data: [
        { id: 1, name: 'Noname PC', category: 'AMD', warrantly: 36, price: 9 },
        { id: 2, name: 'HP Elit', category: 'i5', warrantly: 12, price: 2 },
        { id: 3, name: 'ASUS Desktop', category: 'i7', warrantly: 24, price: 7 },
        { id: 4, name: 'DELL Mini Tower', category: 'AMD', warrantly: 24, price: 7 },
      ],
    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>PC List</Text>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View style={styles.listV}>
                <Text style={{ fontWeight: 'bold' }}>
                  PC Name : {item.name} Category: {item.category}{' '}
                </Text>
                <Text>
                  Warrantly: {item.warrantly} Rating: {item.price} Forint
                </Text>
                <TouchableOpacity
                  style={[
                    styles.btnEnter,
                    {
                      backgroundColor: 'red',
                      width: 100,
                      padding: 5,
                      alignSelf: 'center',
                      marginTop: 10,
                    },
                  ]}
                  color="yellow"
                  onPress={() => this._deleteByID(item.id)}>
                  <Text style={styles.btnEnterText}>Delete PC</Text>
                </TouchableOpacity>
              </View>
            )}
          />

          <Text style={styles.welcome}>Add PC</Text>
          <View style={styles.formView}>
            <TextInput
              style={styles.inputF}
              placeholder="Name"
              onChangeText={text => this.handleChange(text, 'ipcname')}
            />
            <TextInput
              style={styles.inputF}
              placeholder="Category"
              onChangeText={text => this.handleChange(text, 'ipccategory')}
            />
            <TextInput
              style={styles.inputF}
              placeholder="Warrantly"
              onChangeText={text => this.handleChange(text, 'ipcwarrantly')}
              keyboardType={'numeric'}
            />
            <TextInput
              style={styles.inputF}
              placeholder="Rating"
              onChangeText={text => this.handleChange(text, 'ipcprice')}
              keyboardType={'numeric'}
            />
            <TouchableOpacity
              style={[styles.btnEnter, { marginBottom: 10 }]}
              onPress={this._addNewPC}>
              <Text style={styles.btnEnterText}>Add PC</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Button onPress={this._logout} title="Logout App!" />
        <Button onPress={this._laptop_navigate} title="Laptop List" />
      </View>
    );
  }

  handleChange = (value, state) => {
    this.setState({ [state]: value });
  };

  _addNewPC = () => {
    const { ipcname, ipccategory, ipcwarrantly, ipcprice, data } = this.state;

    if (ipcname.length < 2) {
      alert('PC name required!!!');
    } else if (ipccategory.length < 1) {
      alert('Category required!!!');
    } else if (ipcwarrantly.length < 1) {
      alert('Warrantly required!!!');
    } else if (ipcprice.length < 1) {
      alert('Price required!!!');
    } else {
      var length = Object.keys(this.state.data).length;
      var iID = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
      iID = iID + length;
      this.setState(prevState => ({
        data: [
          ...prevState.data,
          {
            id: iID,
            name: ipcname,
            category: ipccategory,
            warrantly: ipcwarrantly,
            price: ipcprice,
          },
        ],
      }));
    }
  };

  _deleteByID(pcID) {
    const pcs = this.state.data.filter(item => item.id != pcID);
    this.setState({ data: pcs });
  }

  _logout = async () => {
    await AsyncStorage.setItem('logged', '0');
    this.props.navigation.navigate('Auth');
  };

   _laptop_navigate = async () => {
    await AsyncStorage.setItem('logged', '1');
    this.props.navigation.navigate('Laptop');
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
    if(logged=='0'){
      this.props.navigation.navigate('Auth');
    }else if(logged=='1'){
      this.props.navigation.navigate('Laptop');
    }else if(logged=='2'){
      this.props.navigation.navigate('Pc');
    }else{
      this.props.navigation.navigate('Auth');
    }
  };
}

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen name="Auth" component={LoginScreen} />
      <Stack.Screen name="Laptop" component={LaptopScreen} />
<Stack.Screen name="Pc" component={PcScreen} />
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
    backgroundColor: 'yellow',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    padding: 15,
    borderRadius: 25,
  },
  btnEnterText: {
    color: 'black',
    fontWeight: '500',
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
