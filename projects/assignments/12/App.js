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
import LoginScreen from './components/login';

// The home of the bicycle inventory
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    // states - bmanufactor, btype, bsize, bgears, bprice, binventory
    this.state = {
      bmanufactor: '',
      bmodel: '',
      btype: '',
      bsize: '',
      bgears: '',
      bprice: '',
      binstock: '',
      bimg: '',
      data: [
        {
          id: 1,
          manufactor: 'Aventon',
          model: 'Cordoba',
          type: 'Roadbike',
          size: 'M',
          gears: 1,
          price: 300,
          instock: 'In stock',
          img:
            'https://cdn.shopify.com/s/files/1/1520/2468/products/DmjyVfaoRvuML0M3kidk_STICKER_1_LOGO_LETTER_800x.jpg?v=1527266679',
        },
        {
          id: 2,
          manufactor: 'Cinelli',
          model: 'Nemo Tig',
          type: 'Fixie',
          size: 'M',
          gears: 1,
          price: 1300,
          instock: 'In stock',
          img:
            'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032017/untitled-6_47.png?itok=izmbUGUY',
        },
        {
          id: 3,
          manufactor: 'Specialized',
          model: 'Roubax',
          type: 'Roadbike',
          size: 'M',
          gears: 18,
          price: 2300,
          instock: 'In stock',
          img:
            'https://bike4trade.sport-press.it/wp-content/uploads/sites/4/2016/12/ancora-spostamenti-sulle-date-questa-volta-tocca-a-specialized.png',
        },
      ],
    };
  }

  static navigationOptions = {
    header: null,
  };

  //Bike VIEW
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bicycle inventory</Text>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Image source={{ uri: item.img }} style={styles.pic} />

                <View>
                  <View style={styles.nameContainer}>
                    <Text
                      style={styles.nameTxt}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {item.manufactor}
                    </Text>
                    <Text style={styles.mblTxt}>{item.instock}</Text>
                    <TouchableOpacity
                      style={[styles.mblTxt, { backgroundColor: '#ffffff' }]}
                      onPress={() => this._deleteByID(item.id)}>
                      <Text style={(styles.mblTxt, { color: 'red' })}>
                        Delete
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>Model: {item.model}</Text>
                  </View>

                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>
                      Type: {item.type} Size: {item.size}{' '}
                    </Text>
                  </View>

                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>
                      Gears: {item.gears} Price: {item.price}{' '}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />

          <Text style={styles.welcome}>Add bike into inventory</Text>
          <View style={styles.formView}>
            <TextInput
              style={styles.inputBike}
              placeholder="Manufactor"
              onChangeText={text => this.handleChange(text, 'bmanufactor')}
            />

            <TextInput
              style={styles.inputBike}
              placeholder="Model"
              onChangeText={text => this.handleChange(text, 'bmodel')}
            />

            <TextInput
              style={styles.inputBike}
              placeholder="Type"
              onChangeText={text => this.handleChange(text, 'btype')}
            />

            <TextInput
              style={styles.inputBike}
              placeholder="Size"
              onChangeText={text => this.handleChange(text, 'bsize')}
            />

            <TextInput
              style={styles.inputBike}
              placeholder="Gears"
              onChangeText={text => this.handleChange(text, 'bgears')}
              keyboardType={'numeric'}
            />

            <TextInput
              style={styles.inputBike}
              placeholder="Logo Image url"
              onChangeText={text => this.handleChange(text, 'bimg')}
            />

            <TextInput
              style={styles.inputBike}
              placeholder="Price"
              onChangeText={text => this.handleChange(text, 'bprice')}
              keyboardType={'numeric'}
            />

            <TextInput
              style={styles.inputBike}
              placeholder="In Stock"
              onChangeText={text => this.handleChange(text, 'binstock')}
            />

            <TouchableOpacity
              style={[styles.btnEnter, { marginBottom: 10 }]}
              onPress={this._addNewBike}>
              <Text style={styles.btnEnterText}>Add item into inventory</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Button onPress={this._logout} title="Logout" />
      </View>
    );
  }

  //Saving states from TextInput
  handleChange = (value, state) => {
    this.setState({ [state]: value });
  };

  // Add new bike to state.data with random ID
  _addNewBike = () => {
    const {
      bmanufactor,
      bmodel,
      btype,
      bsize,
      bgears,
      bimg,
      bprice,
      binstock,
      data,
    } = this.state;
    if (bmanufactor.length < 2) {
      alert('Manufactor required!!!');
    } else if (bmanufactor.length < 2) {
      alert('Model required!!!');
    } else if (bmodel.length == 0) {
      alert('Type required!!!');
    } else if (btype.length == 0) {
      alert('Type required!!!');
    } else if (bsize.length == 0) {
      alert('Size required!!!');
    } else if (bgears.length == 0) {
      alert('Gears required!!!');
    } else if (bprice.length == 0) {
      alert('Price required!!!');
    } else if (bimg.length == 0) {
      alert('Logo image required!!!');
    } else if (binstock.length == 0) {
      alert('Stock state required!!!');
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
            manufactor: bmanufactor,
            model: bmodel,
            type: btype,
            size: bsize,
            gears: bgears,
            img: bimg,
            price: bprice,
            instock: binstock,
          },
        ],
      }));
    }
  };

  //delete Bike by ID
  _deleteByID(bikeID) {
    //console.log(bikeID)
    const bikes = this.state.data.filter(item => item.id != bikeID);
    this.setState({ data: bikes });
  }

  //Logout
  _logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Auth">
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
    backgroundColor: 'white',
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
    backgroundColor: '#F6F6F6',
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
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },

  inputBike: {
    width: 300,
    backgroundColor: 'white',
    color: 'black',
    margin: 15,
    height: 40,
    padding: 5,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#003366',
    borderRadius: 0,
    paddingLeft: 15,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
});
