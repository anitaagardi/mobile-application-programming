import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../assets/styles';

export default class Items extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.items}>
        <Text style={styles.itemText}>Added on: {this.props.val.date}</Text>
        <Text style={styles.itemText}>Name: {this.props.val.name}</Text>
        <Text style={styles.itemText}>Type: {this.props.val.type}</Text>
        <Text style={styles.itemText}>Region: {this.props.val.region}</Text>
        <Text style={styles.itemText}>Age: {this.props.val.age}</Text>

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
