import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


export default class FishermanCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() 
  {
    return(
      <View>
        <Text style={styles.id}>ID: {this.props.fisherman.id}</Text>
        <Text style={styles.other}>Name of the fishernam: {this.props.fisherman.name}</Text>
        <Text style={styles.other}>Age: {this.props.fisherman.age}</Text>
        <Text style={styles.other}>Code of the fisherman: {this.props.fisherman.code} </Text>
          <TouchableOpacity style={styles.delete} onPress={() => {this.props.db.removeFisherman(this.props.fisherman.id),this.props.load()}} >
                  <Text style={styles.deleteText}>Delete</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  id: {
    padding: 5,
    fontSize: 14,
    fontWeight: "bold"
  },

  other: {
    padding: 5,
    fontSize: 14
  },

  delete: {
    padding: 3,
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#ff0000",
    textAlign: "center"
  
  },

  deleteText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  }


})