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
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/Login';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      price: '',
      qty: '',
      data: [
        {
          name: 'Bread',
          type: 'White',
          price: '500',
          qty: '15',
        },
        {
          name: 'Milk',
          type: 'Type',
          price: '2500',
          qty: '3',
        },
      ],
    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Items</Text>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <View>
                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>Name: {item.name}</Text>
                  </View>

                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>Type: {item.type} </Text>
                  </View>

                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>Price: {item.price} </Text>
                  </View>

                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>Quantity: {item.qty} </Text>
                  </View>

                  <View style={styles.msgContainer}>
                    <TouchableOpacity
                      style={[styles.msgTxt, { backgroundColor: '#ffffff' }]}
                      onPress={() => this._deleteByName(item.name)}>
                      <Text style={(styles.msgTxt, { color: 'red' })}>
                        Delete
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />

          <Text style={styles.welcome}>Adding an item</Text>
          <View style={styles.formView}>
            <TextInput
              style={styles.inputFields}
              placeholder="Name"
              onChangeText={(text) => this.handleChange(text, 'iName')}
            />

            <TextInput
              style={styles.inputFields}
              placeholder="Type"
              onChangeText={(text) => this.handleChange(text, 'iType')}
            />

            <TextInput
              style={styles.inputFields}
              placeholder="Price"
              onChangeText={(text) => this.handleChange(text, 'iPrice')}
            />

            <TextInput
              style={styles.inputFields}
              placeholder="Quantity"
              onChangeText={(text) => this.handleChange(text, 'iQty')}
            />

            <TouchableOpacity
              style={[styles.btnEnter, { marginBottom: 10 }]}
              onPress={this._addItem}>
              <Text style={styles.btnEnterText}>Adding the item</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Button onPress={this._logout} title="Logout" />
      </View>
    );
  }

  handleChange = (value, state) => {
    this.setState({ [state]: value });
  };

  _addItem = () => {
    const { iName, iType, iPrice, iQty, data } = this.state;
    if (typeof(iName) === 'undefined') {
      alert('Name is missing');
    } if (typeof(iType) === 'undefined') {
      alert('Type is missing');
    } if (typeof(iPrice) === 'undefined') {
      alert('Price is missing');
    } if (typeof(iQty) === 'undefined') {
      alert('Quantity is missing');
    } else {
      var length = Object.keys(this.state.data).length;
      this.setState((prevState) => ({
        data: [
          ...prevState.data,
          {
            name: iName,
            type: iType,
            price: iPrice,
            qty: iQty,
          },
        ],
      }));
    }
  };

  _deleteByName(name) {
    console.log(name);
    const items = this.state.data.filter((item) => item.name != name);
    this.setState({ data: items });
  }

  //Logout
  _logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };
}



const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
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
    backgroundColor: '#21d3dd',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  btnEnter: {
    justifyContent: 'center',
    backgroundColor: '#003366',
    alignItems: 'center',
    width: 300,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderRadius: 0,
  },
  btnEnterText: {
    color: '#ffffff',
    fontWeight: '700',
    width: 200,
    textAlign: 'center',
  },
  scrollView: {
    backgroundColor: '#b7f8fc',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  formView: {
    alignItems: 'center',
    backgroundColor: '#d0f7f9',
    borderRadius: 0,
    marginHorizontal: 20,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
  inputFields: {
    width: 291,
    backgroundColor: '#eaf9fa',
    color: 'black',
    margin: 7,
    height: 30,
    padding: 2,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#076cff',
    borderRadius: 0,
    paddingLeft: 10,
  },
});
