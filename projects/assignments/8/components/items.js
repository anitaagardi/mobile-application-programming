import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../assets/styles';

export default class Items extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.items}>
        <Text style={styles.itemText}>Added on: {this.props.val.date}</Text>
        <Text style={styles.itemText}>Title: {this.props.val.title}</Text>
        <Text style={styles.itemText}>Author: {this.props.val.author}</Text>
        <Text style={styles.itemText}>Published: {this.props.val.publish}</Text>
        <Text style={styles.itemText}>Quantity: {this.props.val.quantity}</Text>

        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.deleteItem}>
          <Text>
            <Icon name={'trash'} size={20} />
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
