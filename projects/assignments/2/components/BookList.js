import * as React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Button,
  AsyncStorage,
  View,
} from 'react-native';
import database from '../dao/Database.js';
import BookListElement from './BookListElement';

export default class BookList extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };
  state: {
    database: {},
    books: [],
  };
  UNSAFE_componentWillMount() {
    this.setState({ books: database.getBookList() });
  }
  componentDidMount() {
    this.load();
    this.props.navigation.addListener('willFocus', this.load);
  }
  load = () => {
    this.setState({ books: database.getBookList() });
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View style={{ flex: 1, width: 360, alignContent: 'center' }}>
            <Text style={styles.paragraph}>Book List</Text>
            <View style={styles.button}>
              <Button color={'#6f00e1'} onPress={this.menu} title="Menu" />
            </View>
            {this.state.books.length != 0 ? (
              <FlatList style = {styles.textStyle}
                data={this.state.books}
                renderItem={({ item }) => (
                  <BookListElement book={item} />
                )}
              />
            ) : (
              <Text style={styles.paragraph}>Book list is empty</Text>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
  menu = () => {
    this.props.navigation.navigate('MainMenu');
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 40,
    alignItems: 'center',
    maxWidth: '360px'

  },
  paragraph: {
    backgroundColor: '#d4abff',
    width: '100%',
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: 40,
    color: 'white',
    padding: '10px',
  },
  button: {
    padding: 8,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
  },
});
