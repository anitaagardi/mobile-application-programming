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
import db from '../dao/DB.js';
import CarCard from './CarCard';

export default class CakeList extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };
  state: {
    db: {},
    cars: [],
  };
  UNSAFE_componentWillMount() {
    this.setState({ cars: db.getCarList() });
  }
  componentDidMount() {
    this.load();
    this.props.navigation.addListener('willFocus', this.load);
  }
  load = () => {
    this.setState({ cars: db.getCarList() });
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View style={{ flex: 1, width: 360, alignContent: 'center' }}>
            <Text style={styles.paragraph}>Car List</Text>
            
            {this.state.cars.length != 0 ? (
              <FlatList style = {styles.textStyle}
                data={this.state.cars}
                renderItem={({ item }) => (
                  <CarCard car={item} />
                )}
              />
            ) : (
              <Text style={styles.paragraph}>Car list is empty</Text>
            )}
            <View style={styles.button}>
              <Button color={'#4a4e54'} onPress={this.menu} title="Menu" />
            </View>
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
    backgroundColor: '#00022e',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 40,
    alignItems: 'center',
    maxWidth: '360px'

  },
  paragraph: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: 40,
    color: 'white',
    padding: '10px',
  },
  button: {
    padding: 8,
    width: '368px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 40,
    color: '#4a4e54',
  },
});
