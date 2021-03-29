import * as React from 'react';
import {
  Text,
  StyleSheet,
  Button,
  View,
} 
from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.menuStyle}>Menu</Text>
        <View style={styles.buttonStyle}>
          <Button
            color={'#4a4e54'}
            title="      Car List      "
            onPress={() => this.props.navigation.navigate('List')}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            color={'#4a4e54'}
            title=" Add new car"
            onPress={() => this.props.navigation.navigate('Add')}
          />
        </View>
        <View style={styles.logoutStyle}>
          <Button
            color={'#4a4e54'}
            title=" Logout "
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor: '#00022e',
  },
  buttonStyle: {
    margin: '5px',
  },
  logoutStyle:{
    margin: '30px',
  },
  menuStyle: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '60px',
    fontSize: 50,
    color: 'white',
  },
});
