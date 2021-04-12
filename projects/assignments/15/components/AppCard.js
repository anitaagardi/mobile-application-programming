import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class AppCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.textStyle}>
        <Text>ID: {this.props.app.id}</Text>
        <Text>Name: {this.props.app.name}</Text>
        <Text>Status: {this.props.app.status}</Text>
        <Text>Version: {this.props.app.version}</Text>
        <Text>Used Ram: {this.props.app.neededram}</Text>
        <Text>SupportedOS: {this.props.app.supportedOS}</Text>
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
