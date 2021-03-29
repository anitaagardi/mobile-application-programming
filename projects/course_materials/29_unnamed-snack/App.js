import React, { Component } from 'react';
import { View, StyleSheet, ListView, Text } from 'react-native';

export default class MyComponent extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2','row 3', 'row 4','row 5']),
    };
  }
  
  render() {
    return (
            <View style={styles.container}>
      <ListView contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text style={styles.item}>{rowData}</Text>}
      />
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
       flex: 1,    
        alignItems:'center',
        justifyContent:'center'
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    item: {
        backgroundColor: 'red',
        margin: 6,
    }
});