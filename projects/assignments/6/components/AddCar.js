import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import db from '../dao/DB.js';

export default class AddCar extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };
  state = {
    car: {
      id: null,
      brand: '',
      type: '',
      yearOfManufacture: null,
      engineType: '',
      milage: null,
    },
    error: false,
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View>
            <Text style={styles.paragraph}>Add new car</Text>
            {this.state.error && (
              <Text style={styles.error}>Form Invalid</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Car brand"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let comp = Object.assign({}, this.state.car);
                comp.brand = itemValue;
                this.setState({ car: comp, error: false });
              }}
              value={this.state.car.brand}
            />
            <TextInput
              style={styles.input}
              placeholder="Car type"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let comp = Object.assign({}, this.state.car);
                comp.type = itemValue;
                this.setState({ car: comp, error: false });
              }}
              value={this.state.car.type}
            />
  	    <TextInput
              style={styles.input}
              keyboardType={'numeric'}
              placeholder="Manufacturing Year"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let comp = Object.assign({}, this.state.car);
                comp.yearOfManufacture = itemValue;
                this.setState({ car: comp, error: false });
              }}
              value={this.state.car.yearOfManufacture}
            />
            <TextInput
              style={styles.input}
              placeholder="Engine type"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let comp = Object.assign({}, this.state.car);
                comp.engineType = itemValue;
                this.setState({ car: comp, error: false });
              }}
              value={this.state.car.engineType}
            />
           <TextInput
              style={styles.input}
              keyboardType={'numeric'}
              placeholder="Milage in km"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let comp = Object.assign({}, this.state.car);
                comp.milage = itemValue;
                this.setState({ car: comp, error: false });
              }}
              value={this.state.car.milage}
            />
            <View style={styles.button}>
              <Button
                color={'#4a4e54'}
                onPress={this.addCar}
                title="     Add Car      "
              />
            </View>
            <View style={styles.button}>
              <Button
                color={'#4a4e54'}
                onPress={this.menu}
                title="          Menu           "
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  addCar = () => {
    if (
      this.state.car.brand == '' ||
      this.state.car.type == null ||
      this.state.car.yearOfManufacture < 1900 ||
      this.state.car.yearOfManufacture > new Date().getFullYear() ||
      this.state.car.engineType == '' ||
      this.state.car.milage == ''
    ) {
      this.setState({ error: true });
    } else {
      this.setState({error: false});
      db.add(this.state.car);
      this.props.navigation.navigate('List');
    }
  };
  menu = () => {
    this.props.navigation.navigate('MainMenu');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#00022e',
  },
  paragraph: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: 40,
    color: 'white',
    borderRadius: 5,
  },
  input: {
    marginBottom: 8,
    height: 30,
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 15,
    alignItems: 'center',
  },
  button: {
    padding: 8,
  },
    error: {
    backgroundColor: 'red',
    borderRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    margin: '10px',
    padding: '5px'
  }
});
