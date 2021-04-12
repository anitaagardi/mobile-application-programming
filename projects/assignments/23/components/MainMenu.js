import * as React from 'react';
import {
  Text,
   Image,
  StyleSheet,
  Button,
  View,
} from 'react-native';

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
        <Image
          style={styles.image}
          source={require('../assets/tappancs.jpg')}
        />
        <View style={styles.buttonStyle}>
          <Button
            color={'#46dbad'}
            title="      Animal List      "
            onPress={() => this.props.navigation.navigate('List')}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            color={'#46dbad'}
            title=" Add new Animal "
            onPress={() => this.props.navigation.navigate('Add')}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            color={'#46dbad'}
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
    padding: 8,
    backgroundColor: '#c8fcf7',
  },
  buttonStyle: {
    margin: '20px',
  },
  image: {
    height: 138,
    width: 240,
  },
  menuStyle: {
    backgroundColor: '#0abab5',
    width: '100%',
    textAlign: 'center',
    marginBottom: '55px',
    fontSize: 50,
    color: 'Black',
  },
});
