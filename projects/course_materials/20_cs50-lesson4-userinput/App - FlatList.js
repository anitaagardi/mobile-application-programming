import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import Constants from 'expo-constants';

import contacts, { compareNames } from './contacts';
import Row from './components/Row';

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts,
  };

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  };

  sort = () => {
    this.setState(prevState => ({ 
      contacts: [...prevState.contacts].sort(compareNames),
      }))
  }

  renderItem = ({item}) => <Row {...item} />

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="sort" onPress={this.sort} />
        {this.state.showContacts && (
          <FlatList
            renderItem = {this.renderItem}
            data = {this.state.contacts}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
