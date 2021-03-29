import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
  row: {
    padding: 20,
  },
})

const Row = props => (
  <View key={props.key} style={styles.row}>
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </View>
);

export default Row;
