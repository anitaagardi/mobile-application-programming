import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import db from '../dao/DB.js';

export default class AddComputer extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };
  state = {
    computer: {
      id: null,
      name: '',
      year: null,
      processor: '',
      ram: '',
      supportedOS: '',
    },
    error: false,
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View>
            <Text style={styles.paragraph}>Add new computer</Text>
            {this.state.error && (
              <Text style={styles.error}>Form Invalid</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Computer Name"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let comp = Object.assign({}, this.state.computer);
                comp.name = itemValue;
                this.setState({ computer: comp, error: false });
              }}
              value={this.state.computer.name}
            />
            <TextInput
              style={styles.input}
              keyboardType={'numeric'}
              placeholder="Manufacturing Year"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let comp = Object.assign({}, this.state.computer);
                comp.year = itemValue;
                this.setState({ computer: comp, error: false });
              }}
              value={this.state.computer.year}
            />
            <TextInput
              style={styles.input}
              placeholder="Processor Type"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let comp = Object.assign({}, this.state.computer);
                comp.processor = itemValue;
                this.setState({ computer: comp, error: false });
              }}
              value={this.state.computer.processor}
            />
            <TextInput
              style={styles.input}
              placeholder="Amount of Ram"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let comp = Object.assign({}, this.state.computer);
                comp.ram = itemValue;
                this.setState({ computer: comp, error: false });
              }}
              value={this.state.computer.ram}
            />
            <TextInput
              style={styles.input}
              placeholder="Supported OS"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let comp = Object.assign({}, this.state.computer);
                comp.supportedOS = itemValue;
                this.setState({ computer: comp, error: false });
              }}
              value={this.state.computer.supportedOS}
            />
            <View style={styles.button}>
              <Button
                color={'#4a4e54'}
                onPress={this.addComputer}
                title="     Add Computer      "
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
  addComputer = () => {
    if (
      this.state.computer.name == '' ||
      this.state.computer.year == null ||
      this.state.computer.year < 1950 ||
      this.state.computer.year > new Date().getFullYear() ||
      this.state.computer.processor == '' ||
      this.state.computer.ram == '' ||
      this.state.computer.supportedOS == ''
    ) {
      this.setState({ error: true });
    } else {
      this.setState({error: false});
      db.add(this.state.computer);
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
    backgroundColor: 'white',
  },
  paragraph: {
    backgroundColor: 'darkgray',
    width: '100%',
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: 40,
    color: '#4a4e54',
    borderRadius: 5,
  },
  input: {
    marginBottom: 8,
    height: 30,
    textAlign: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 5,
    fontSize: 15,
    alignItems: 'center',
    paddingLeft: 9,
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
