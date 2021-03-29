import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class FirstExample extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}

