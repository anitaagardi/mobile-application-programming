import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import colors from '../constants/colors.js';

export default class ErrMsg extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.errContainer}>
        <Text style={styles.msg}>{this.props.msg}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 5,
    marginBottom: 10,
  },
  msg: {
    margin: 5,
    color: colors.font,
    fontWeight: 'bold',
  },
});
