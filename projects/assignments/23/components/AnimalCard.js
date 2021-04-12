import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class AnimalCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.textStyle}>
        <Text>ID: {this.props.animal.id}</Text>
        <Text>Name: {this.props.animal.name}</Text>
        <Text>Birth: {this.props.animal.birth}</Text>
        <Text>Title: {this.props.animal.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'left',
    fontSize: 10,
    color: '#4a4e54',
    backgroundColor: '#b0f8d8',
    marginTop: '10px',
    marginBottom: '10px',
    paddingLeft: '50px',
    position: 'relative',
  }
});
