import { Text, View, Button, Image, KeyboardAvoidingView, StyleSheet,
  AsyncStorage, TextInput, TouchableOpacity, ActivityIndicator, StatusBar, ScrollView,
  FlatList } from 'react-native';
  import{Picker} from '@react-native-picker/picker';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import dog from './img/dog.png';
import cat from './img/cat.png';
import rabbit from './img/rabbit.png';


const userInfo = { username: 'admin', password: 'admin' };

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    
    
  }
  
  static navigationOptions = {
    header: null,
  };
 handleChange = (value, state) => {
    this.setState({ [state]: value });
  };

  _signin = async () => {
    if (
      userInfo.username === this.state.username &&
      userInfo.password === this.state.password
    ) {
      await AsyncStorage.setItem('logged', '1');
      

      this.textInputName.clear();
      this.textInputPassword.clear();
      this.handleChange('', 'username');
      this.handleChange('', 'password')
      this.props.navigation.navigate('Home');

      
    
    } else {
      alert('Username or Password invalid');
    }
  };

  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.paragraph}> GET A NEW ANIMAL 🤗 </Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            ref={inputName => { this.textInputName = inputName }}
            onChangeText={username => this.handleChange(username, 'username')}
            value={this.state.username}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            ref={inputPassword => { this.textInputPassword = inputPassword }}
            onChangeText={password => this.handleChange(password, 'password')}
            value={this.state.password}
           secureTextEntry={true}
          />
          <View style={styles.button}>
           <Button color ="#D2691E" title="Login" onPress={this._signin} />
          </View>

        </View>

        
    );
  }

  
}

class HomeScreen extends React.Component {
  _logout = async () => {
    await AsyncStorage.setItem('logged', '0');
    this.props.navigation.navigate('Login');
    
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.button}>  
          <Button
            title="Rabbit"
            color="#f194ff"
            onPress={() => this.props.navigation.navigate('Rabbit')}
          />
          <br />
          <Button
            title="Dogs"
            onPress={() => this.props.navigation.navigate('Dog')}
          />
          <br />
          <Button
            title="Cats"
            color="#ffff00"
            onPress={() => this.props.navigation.navigate('Cat')}
          />
          <br />
          <br />
          <br />
          <Button
            title="Logout"
            color="#D2691E"
            onPress={this._logout}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
//RABBIT
  class RabbitScreen extends React.Component {
    constructor(props) {
    super(props);
  
    this.state = {
      iname: '',
      iage: '',
      itype: 'dwarf',
      idescription: '',
      data: [
        { id: 1, name: 'Hógolyó', age: 1, type:'rabbit', description: 'friendly'},
        { id: 2,  name: 'Pehely', age: 1, type: 'domestic', description: 'light' },
        { id: 3,  name: 'Nyuli', age: 2, type: 'dwarf', description: 'biting' },
      ],
    };
  }

  static navigationOptions = {
    header: null,
  };
  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={rabbit} />
      
        <Text style={styles.paragraph}>Rabbits</Text>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View style={styles.listR}>
                <Text style={{ fontWeight: 'bold' }}>
                  Name : {item.name}
                </Text>
                <Text style={{ fontWeight: 'bold' }}>     
                  Age: {item.age}
                </Text>
                <Text>
                  Type: {item.type}
                </Text>
                <Text>
                  Description: {item.description}
                </Text>
                <View style={styles.button}>
                  <Button
                  title="Get a rabbit"
                  color="#D2691E"
                  onPress={() => this._deleteByID(item.id)}
                  />
                </View>
              </View>
            )}
          />

          <Text style={styles.paragraph}>New rabbit</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Name"
              ref={inputName => { this.textInputName = inputName }}
              onChangeText={text => this.handleChange(text, 'iname')}
            />
            <TextInput
              style={styles.input}
              placeholder="Age"
              ref={inputAge => { this.textInputAge = inputAge }}
              onChangeText={text => this.handleChange(text, 'iage')}
            />

            <Picker
              selectedValue={this.state.itype}
              style={styles.input}
              inputType = { this.textInputType}
              placeholder="Type"
              onValueChange={itemValue => {
                this.setState({ itype: itemValue });
              }}>
                <Picker.Item label="rabbit" value="rabbit" />
                <Picker.Item label="domestic" value="domestic" />
                <Picker.Item label="dwarf" value="dwarf" />
            </Picker>
            <TextInput
              style={styles.input}
              placeholder="Description"
              ref={inputDescription => { this.textInputDescription = inputDescription }}
              onChangeText={text => this.handleChange(text, 'idescription')}
              
            />
            <View style={styles.button}>
                <Button
                title="Add new rabbit"
                color="#D2691E"
                onPress={this._addNewRabbit}
                />
            </View>
          </View>
          <View style={styles.button}>
            <Button
              color="#f194ff"
              title="Back to the main menu"
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
  handleChange = (value, state) => {
    this.setState({ [state]: value });
  };

  _addNewRabbit = () => {
    const { iname, iage, itype, idescription, data } = this.state;

    if (iname.length < 2) {
      alert('Name required!!!');
    } else if (iage.length < 1) {
      alert('Age required!!!');
    } else if (itype.length < 1) {
      alert('Type required!!!');
    } else if (idescription.length < 1) {
      alert('Description required!!!');
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
            type: itype,
            description: idescription,
          },
        ],
      }))
      this.textInputName.clear();
      this.textInputAge.clear();
      this.textInputDescription.clear();
      this.handleChange('dwarf', 'itype');
    }
  };

  _deleteByID(rabbitID) {
    const rabbits = this.state.data.filter(item => item.id != rabbitID);
    this.setState({ data: rabbits });
  }

  
}

//DOG
class DogScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      iname: '',
      iage: '',
      itype: 'Samoyed',
      idescription: '',
      data: [
        { id: 1, name: 'Maya', age: 5, type:'Samoyed', description: 'friendly'},
        { id: 2,  name: 'Tacsi', age: 3, type: 'dachshund', description: 'runs fast' },
        { id: 3,  name: 'Tisza', age: 2, type: 'labrador', description: 'likes to dig' },
      ],
    };
  }

  static navigationOptions = {
    header: null,
  };
  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={dog} />
      
        <Text style={styles.paragraph}>Dogs</Text>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View style={styles.listD}>
                <Text style={{ fontWeight: 'bold' }}>
                  Name : {item.name}
                </Text>
                <Text style={{ fontWeight: 'bold' }}>     
                  Age: {item.age}
                </Text>
                <Text>
                  TYpe: {item.type}
                </Text>
                <Text>
                  Description: {item.description}
                </Text>
                <View style={styles.button}>
                  <Button
                  title="Get a dog"
                  color="#D2691E"
                  onPress={() => this._deleteByID(item.id)}
                  />
                </View>
              </View>
            )}
          />

          <Text style={styles.paragraph}>New dog</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Name"
              ref={inputName => { this.textInputName = inputName }}
              onChangeText={text => this.handleChange(text, 'iname')}
            />
            <TextInput
              style={styles.input}
              placeholder="Age"
              ref={inputAge => { this.textInputAge = inputAge }}
              onChangeText={text => this.handleChange(text, 'iage')}
            />

            <Picker
              selectedValue={this.state.itype}
              style={styles.input}
              inputType = { this.textInputType}
              placeholder="Type"
              onValueChange={itemValue => {
                this.setState({ itype: itemValue });
              }}>
                <Picker.Item label="Samoyed" value="Samoyed" />
                <Picker.Item label="dachshund" value="dachshund" />
                <Picker.Item label="labrador" value="ladrador" />
                <Picker.Item label="vizsla" value="vizsla" />
                <Picker.Item label="pug" value="pug" />
            </Picker>
            <TextInput
              style={styles.input}
              placeholder="Description"
              ref={inputDescription => { this.textInputDescription = inputDescription }}
              onChangeText={text => this.handleChange(text, 'idescription')}
              
            />
            <View style={styles.button}>
                <Button
                title="Add new dog"
                color="#D2691E"
                onPress={this._addNewDog}
                />
            </View>
          </View>
          <View style={styles.button}>
            <Button
              title="Back to home"
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
  handleChange = (value, state) => {
    this.setState({ [state]: value });
  };

  _addNewDog = () => {
    const { iname, iage, itype, idescription, data } = this.state;

    if (iname.length < 2) {
      alert('Name required!!!');
    } else if (iage.length < 1) {
      alert('Age required!!!');
    } else if (itype.length < 1) {
      alert('Type required!!!');
    } else if (idescription.length < 1) {
      alert('Description required!!!');
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
            type: itype,
            description: idescription,
          },
        ],
      }))
      this.textInputName.clear();
      this.textInputAge.clear();
      this.textInputDescription.clear();
      this.handleChange('Samoyed', 'itype');

    }
  };

  _deleteByID(dogID) {
    const dogs = this.state.data.filter(item => item.id != dogID);
    this.setState({ data: dogs });
  }

  }

//CAT
class CatScreen extends React.Component {
   constructor(props) {
    super(props);
  
    this.state = {
      iname: '',
      iage: '',
      itype: 'domestic',
      idescription: '',
      data: [
        { id: 1, name: 'Cirmi', age: 1, type:'domestic', description: 'sharp'},
        { id: 2,  name: 'Kormi', age: 5, type: 'Persian', description: 'hiding' },
        { id: 3,  name: 'Pöttyi', age: 12, type: 'ragdoll', description: 'moans a lot' },
      ],
    };
  }

  static navigationOptions = {
    header: null,
  };
  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={cat} />
      
        <Text style={styles.paragraph}>Cats</Text>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View style={styles.listC}>
                <Text style={{ fontWeight: 'bold' }}>
                  Name: {item.name}
                </Text>
                <Text style={{ fontWeight: 'bold' }}>     
                  Age: {item.age}
                </Text>
                <Text>
                  Type: {item.type}
                </Text>
                <Text>
                  Description: {item.description}
                </Text>
                <View style={styles.button}>
                  <Button
                  title="Get a cat"
                  color="#D2691E"
                  onPress={() => this._deleteByID(item.id)}
                  />
                </View>
              </View>
            )}
          />

          <Text style={styles.paragraph}>New cat</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Name"
              ref={inputName => { this.textInputName = inputName }}
              onChangeText={text => this.handleChange(text, 'iname')}
            />
            <TextInput
              style={styles.input}
              placeholder="Age"
              ref={inputAge => { this.textInputAge = inputAge }}
              onChangeText={text => this.handleChange(text, 'iage')}
            />

            <Picker
              selectedValue={this.state.itype}
              style={styles.input}
              inputType = { this.textInputType}
              placeholder="Type"
              onValueChange={itemValue => {
                this.setState({ itype: itemValue });
              }}>
               <Picker.Item label="domestic" value="domestic" />
               <Picker.Item label="ragdoll" value="ragdoll" />
               <Picker.Item label="Persian" value="Persian" />
               <Picker.Item label="Siamese" value="Siamese" />
               <Picker.Item label="angora" value="angora" />
            </Picker>
            <TextInput
              style={styles.input}
              placeholder="Description"
              ref={inputDescription => { this.textInputDescription = inputDescription }}
              onChangeText={text => this.handleChange(text, 'idescription')}
              
            />
            <View style={styles.button}>
                <Button
                title="Add a new cat"
                color="#D2691E"
                onPress={this._addNewCat}
                />
            </View>
          </View>
          <View style={styles.button}>
            <Button
              color="#ffff00"
              title="Back to the main menu"
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
  handleChange = (value, state) => {
    this.setState({ [state]: value });
  };

  _addNewCat = () => {
    const { iname, iage, itype, idescription, data } = this.state;

    if (iname.length < 2) {
      alert('Name required!!!');
    } else if (iage.length < 1) {
      alert('Age required!!!');
    } else if (itype.length < 1) {
      alert('Type required!!!');
    } else if (idescription.length < 1) {
      alert('Description required!!!');
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
            type: itype,
            description: idescription,
          },
        ],
      }))
      this.textInputName.clear();
      this.textInputAge.clear();
      this.textInputDescription.clear();
      this.handleChange('domestic', 'itype');
    }
  };

  _deleteByID(catID) {
    const cats = this.state.data.filter(item => item.id != catID);
    this.setState({ data: cats });
  }

  }


const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Rabbit" component={RabbitScreen} />
      <Stack.Screen name="Dog" component={DogScreen} />
      <Stack.Screen name="Cat" component={CatScreen} />
      
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
    backgroundColor: '#fff7e6',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    height: 128,
    width: 128,
  },
  button: {
    marginHorizontal: 16,
    padding:10,
  },
  paragraph: {
    margin: 12,
    marginTop: 0,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    marginBottom: 12,
    marginHorizontal: 31,
    height: 50,
    width: 250,
    textAlign: 'center',
    backgroundColor: '#F2EFF1',
    borderRadius: 5,
    fontSize: 15,
  },
  listR: {
    borderRadius: 10,
    backgroundColor: '#FFE4C4',
    padding: 10,
    marginBottom: 10,
  },
  listD: {
    borderRadius: 10,
    backgroundColor: '#ADD8E6',
    padding: 10,
    marginBottom: 10,
  },
  listC: {
    borderRadius: 10,
    backgroundColor: '#ffffb3',
    padding: 10,
    marginBottom: 10,
  },
 
});
