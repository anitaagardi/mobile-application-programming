import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-paper';

import database from '../dao/Database';

export default class BookListElement extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.textStyle}>
        <Text><strong>Title: {this.props.book.title}</strong></Text>
        <Text>Author: {this.props.book.author}</Text>
        <Text>Year: {this.props.book.year}</Text>
        <Text>Type: {this.props.book.type}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'left',
    fontSize: 10,
    color: 'white',
    backgroundColor: '#d4abff',
    marginTop: '10px',
    marginBottom: '10px',
    paddingLeft: '50px',
    position: 'relative',
  }
});
