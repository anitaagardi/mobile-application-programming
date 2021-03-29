import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
//import { createStackNavigator } from 'react-navigation-stack';


import db from '../db.js';
import FishCard from './FishCard';

export default class FishList extends React.Component {
  constructor(props) {
    super (props);
  }

  static navigationOptions = {
    header: null,
  };
  state: {
    db: {}, 
    fishes: [],
  };

  UNSAFE_componentWillMount() {
    this.setState({fishes : db.getFishList()});
  }
  
  componentDidMount() {
    this.load();
    this.props.navigation.addListener('willFocus', this.load);
  }

  load = () => {
    this.setState({fishes: db.getFishList()});
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <Text style= {styles.welcome}>Fishes</Text>{
              this.state.fishes.length != 0 ? (
                <FlatList
                data={this.state.fishes} 
                style={styles.list}
                renderItem = { ( {item} ) => (
                  <FishCard fish = {item} load={this.load} db={db}/>
              )}
              /> ) : (<Text>There are no fishes in the database.</Text>)}
          </View>
             <TouchableOpacity style={styles.btnEnter} onPress={() => this.props.navigation.navigate('AddFisherman')}>
            <Text style={styles.btnEnterText}>Add fisherman</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnEnter} onPress={() => this.props.navigation.navigate('AddFish')}>
            <Text style={styles.btnEnterText}>Add fishes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnEnter} onPress={() => this.props.navigation.navigate('FishermanList')}>
            <Text style={styles.btnEnterText}>List fisherman</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  btnEnter: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#008000',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    borderRadius: 25,
    marginTop: 5
  },
  btnEnterText: {
    color: '#ffffff',
    fontWeight: '700',
  },
   list: {
    backgroundColor: '#008000',
  }
 
})

  