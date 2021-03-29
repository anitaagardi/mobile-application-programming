import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


export default class FishCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() 
  {
    return(
      <View>
        <Text style={styles.id}>ID: {this.props.fish.id}</Text>
        <Text style={styles.other}>Type of the fish: {this.props.fish.type}</Text>
        <Text style={styles.other}>weight of the fish: {this.props.fish.weight} </Text>
                  <TouchableOpacity style={styles.delete} onPress={() => {this.props.db.removeFish(this.props.fish.id),this.props.load()}} >
                  <Text style={styles.deleteText}>Remove</Text></TouchableOpacity>
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