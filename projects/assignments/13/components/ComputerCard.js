import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class ComputerCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.textStyle}>
        <Text>ID: {this.props.computer.id}</Text>
        <Text>Name: {this.props.computer.name}</Text>
        <Text>Year: {this.props.computer.year}</Text>
        <Text>Processor: {this.props.computer.processor}</Text>
        <Text>Ram: {this.props.computer.ram}</Text>
        <Text>SupportedOS: {this.props.computer.supportedOS}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'left',
    fontSize: 10,
    color: '#4a4e54',
    backgroundColor: 'lightgray',
    marginTop: '10px',
    marginBottom: '10px',
    paddingLeft: '50px',
    position: 'relative',
  }
});
