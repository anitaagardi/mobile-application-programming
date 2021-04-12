import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../assets/appearance';

export default class Items extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.items}>
        
          
    
        <Text style={styles.itemText}>Name: {this.props.val.name}</Text>
        <Text style={styles.itemText}>Description: {this.props.val.description}</Text>
        <Text style={styles.itemText}>Price: {this.props.val.price} Ft</Text>
        <Text style={styles.itemText}>Size: {this.props.val.size} cm</Text>

        <Text>
            <Icon name={'trash'} size={50} onPress={this.props.deleteMethod}
          style={styles.deleteItem} />
          </Text>

      </View>
    );
  }
}
