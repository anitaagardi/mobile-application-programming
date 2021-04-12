import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';

export default class Event extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.items}>
        <Text style={styles.itemText}>Event name: {this.props.val.name}</Text>
        <Text style={styles.itemText}>Description: {this.props.val.description}</Text>
        <Text style={styles.itemText}>Date: {this.props.val.date}</Text>
        <Text style={styles.itemText}>Max participants: {this.props.val.participants}</Text>

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
