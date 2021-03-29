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
import database from '../dao/Database.js';

export default class AddBook extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };
  state = {
    book: {
      id: null,
      title: '',
      author: '',
      year: null,
      type: ''
    },
    error: false,
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View>
            <Text style={styles.paragraph}>Add new book</Text>
            {this.state.error && (
              <Text style={styles.error}>Form Invalid</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Title"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let newbook = Object.assign({}, this.state.book);
                newbook.title = itemValue;
                this.setState({ book: newbook, error: false });
              }}
              value={this.state.book.title}
            />
            <TextInput
              style={styles.input}
              placeholder="Author"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let newBook = Object.assign({}, this.state.book);
                newBook.author = itemValue;
                this.setState({ book: newBook, error: false });
              }}
              value={this.state.book.author}
            />
            <TextInput
              style={styles.input}
              keyboardType={'numeric'}
              placeholder="Year"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let newBook = Object.assign({}, this.state.book);
                newBook.year = itemValue;
                this.setState({ book: newBook, error: false });
              }}
              value={this.state.book.year}
            />
            <TextInput
              style={styles.input}
              placeholder="Type"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let newBook = Object.assign({}, this.state.book);
                newBook.type = itemValue;
                this.setState({ book: newBook, error: false });
              }}
              value={this.state.book.type}
            />
            <View style={styles.button}>
              <Button
                color={'#6f00e1'}
                onPress={this.addNewBook}
                title="     Add Book      "
              />
            </View>
            <View style={styles.button}>
              <Button
                color={'#6f00e1'}
                onPress={this.menu}
                title="          Menu           "
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  addNewBook = () => {
    if (
      this.state.book.title == '' ||
      this.state.book.author == '' ||
      this.state.book.year == null ||
      this.state.book.year > new Date().getFullYear() ||
      this.state.book.type == ''
    ) {
      this.setState({ error: true });
    } else {
      this.setState({error: false});
      database.add(this.state.book);
      this.props.navigation.navigate('BookList');
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
    width: '100%'
  },
  paragraph: {
    backgroundColor: '#6f00e1',
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
    backgroundColor: '#d4abff',
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
