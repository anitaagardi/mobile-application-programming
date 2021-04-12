import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  Picker,
  Alert,
} from 'react-native';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import db from '../db/db.js';

export default class Add extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };

  state = {
    app: {
      id: null,
      name: '',
      status: '',
      version: '',
      neededmemory: '',
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
            <Text style={styles.paragraph}>Add new App</Text>
            {this.state.error && (
              <Text style={styles.error}>Form Invalid</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="App Name"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let app = Object.assign({}, this.state.app);
                app.name = itemValue;
                this.setState({ app: app, error: false });
              }}
              value={this.state.app.name}
            />
            <TextInput
              style={styles.input}
              placeholder="Status"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let app = Object.assign({}, this.state.app);
                app.status = itemValue;
                this.setState({ app: app, error: false });
              }}
              value={this.state.app.status}
            />
            <TextInput
              style={styles.input}
              placeholder="Version"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let app = Object.assign({}, this.state.app);
                app.version = itemValue;
                this.setState({ app: app, error: false });
              }}
              value={this.state.app.version}
            />
            <TextInput
              style={styles.input}
              placeholder="Needed memory"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let app = Object.assign({}, this.state.app);
                app.neededmemory = itemValue;
                this.setState({ app: app, error: false });
              }}
              value={this.state.app.neededmemory}
            />
            <TextInput
              style={styles.input}
              placeholder="Supported OS"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let app = Object.assign({}, this.state.app);
                app.supportedOS = itemValue;
                this.setState({ app: app, error: false });
              }}
              value={this.state.app.supportedOS}
            />
            <View style={styles.button}>
              <Button
                color={'#4a4e54'}
                onPress={this.addapp}
                title="     Add app      "
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

  addapp = () => {
    if (
      this.state.app.name == '' ||
      this.state.app.status == '' ||
      this.state.app.version == '' ||
      this.state.app.neededmemory == '' ||
      this.state.app.supportedOS == ''
    ) {
      this.setState({ error: true });
    } else {
      this.setState({error: false});
      db.add(this.state.app);
      this.props.navigation.navigate('List');
    }
  };
  menu = () => {
    this.props.navigation.navigate('Menu');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'black',
  },
  paragraph: {
    backgroundColor: 'black',
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
