import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../assets/styles';

export default class Items extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.items}>
        <Text style={styles.itemText}>Brand: {this.props.val.brand}</Text>
        <Text style={styles.itemText}>Type: {this.props.val.type}</Text>
        <Text style={styles.itemText}>Size: {this.props.val.size}</Text>
        <Text style={styles.itemText}>Processor: {this.props.val.processor}</Text>
        <Text style={styles.itemText}>Memory: {this.props.val.memory}</Text>
        <Text style={styles.itemText}>Price: {this.props.val.price}</Text>


        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.deleteItem}>
          <Text style={styles.buttonText}>Sold</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
