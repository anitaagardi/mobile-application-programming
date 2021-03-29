import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, FlatList} from 'react-native';
//import { createStackNavigator } from 'react-navigation-stack';


import db from '../db.js';
import FishermanCard from './FishermanCard';

export default class FishermanList extends React.Component {
  constructor(props) {
    super (props);
  }

  static navigationOptions = {
    header: null,
  };
  state: {
    db: {}, 
    fishermen: [],
  };

  UNSAFE_componentWillMount() {
    this.setState({fishermen : db.getFishermanList()});
  }
  
  componentDidMount() {
    this.load();
    this.props.navigation.addListener('willFocus', this.load);
  }

  load = () => {
    this.setState({fishermen: db.getFishermanList()});
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.welcome }>Fishermen</Text>{
              this.state.fishermen.length != 0 ? (
                <FlatList
                data={this.state.fishermen} 
                style={styles.list}
                renderItem = { ( {item} ) => (
                  <FishermanCard fisherman = {item} load={this.load} db={db}>
                </FishermanCard>

              )}
              /> ) : (<Text>There are no fishermen in the database.</Text>)}
          </View>
          <TouchableOpacity style={styles.btnEnter} onPress={() => this.props.navigation.navigate('AddFisherman')}>
            <Text style={styles.btnEnterText}>Add a fisherman</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnEnter} onPress={() => this.props.navigation.navigate('FishList')}>
            <Text style={styles.btnEnterText}>List the fishes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnEnter} onPress={() => this.props.navigation.navigate('AddFish')}>
            <Text style={styles.btnEnterText}>Add a fish</Text>
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

  