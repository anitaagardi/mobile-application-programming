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
import AnimalCard from './AnimalCard';

export default class AnimalList extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };
  state= {
    db: {},
    animals: [],
  };
  UNSAFE_componentWillMount() {
    this.setState({ animals: db.getAnimalList() });
  }
  componentDidMount() {
    this.load();
    this.props.navigation.addListener('willFocus', this.load);
  }
  load = () => {
    this.setState({ animals: db.getAnimalList() });
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View style={{ flex: 1, width: 360, alignContent: 'center' }}>
            <Text style={styles.paragraph}>Animal List</Text>
            <View style={styles.button}>
              <Button color={'#0abab5'} onPress={this.menu} title="Menu" />
            </View>
            {this.state.animals.length != 0 ? (
              <FlatList style = {styles.textStyle}
                data={this.state.animals}
                renderItem={({ item }) => (
                  <AnimalCard animal={item} />
                )}
              />
            ) : (
              <Text style={styles.paragraph}>Animal list is empty</Text>
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
    backgroundColor: '#c8fcf7',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 40,
    alignItems: 'center',
    maxWidth: '360px'

  },
  paragraph: {
    backgroundColor: '#46dbad',
    width: '100%',
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: 40,
    color: '#4a4e54',
    padding: '10px',
  },
  button: {
    padding: 8,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 40,
    color: '#4a4e54',
  },
});
