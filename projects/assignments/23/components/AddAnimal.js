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

export default class AddAnimal extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };
  state = {
    animal: {
      id: null,
      name: '',
      birth: null,
      title: '',
    },
    error: false,
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View>
            <Text style={styles.paragraph}>Add new animal</Text>
            {this.state.error && (
              <Text style={styles.error}>Sorry, unfortunately you failed to add the animal. Try again! :)</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Animal Name"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let comp = Object.assign({}, this.state.animal);
                comp.name = itemValue;
                this.setState({ animal: comp, error: false });
              }}
              value={this.state.animal.name}
            />
            <TextInput
              style={styles.input}
              keyboardType={'numeric'}
              placeholder="Animal of Birthday"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let comp = Object.assign({}, this.state.animal);
                comp.birth = itemValue;
                this.setState({ animal: comp, error: false });
              }}
              value={this.state.animal.birth}
            />
            <TextInput
              style={styles.input}
              placeholder="Animal title"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let comp = Object.assign({}, this.state.animal);
                comp.title = itemValue;
                this.setState({ animal: comp, error: false });
              }}
              value={this.state.animal.title}
            />
            <View style={styles.button}>
              <Button
                color={'#0abab5'}
                onPress={this.addAnimal}
                title="     Add Animal      "
              />
            </View>
            <View style={styles.button}>
              <Button
                color={'#0abab5'}
                onPress={this.menu}
                title="          Menu           "
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  addAnimal = () => {
    if (
      this.state.animal.name == '' ||
      this.state.animal.birth == null ||
      this.state.animal.birth > new Date().getFullYear() ||
      this.state.animal.title == ''
     ) {
      this.setState({ error: true });
    } else {
      this.setState({error: false});
      db.add(this.state.animal);
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
    backgroundColor: '#c8fcf7',
  },
  paragraph: {
    backgroundColor: '#46dbad',
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
    backgroundColor: '#b0f8d8',
    borderRadius: 5,
    fontSize: 15,
    alignItems: 'center',
    paddingLeft: 9,
  },
  button: {
    padding: 8,
  },
    error: {
    backgroundColor: '#c8fcf7',
    borderRadius: 5,
    textAlign: 'center',
    color: 'red',
    fontSize: 18,
    margin: '10px',
    padding: '5px'
  }
});
