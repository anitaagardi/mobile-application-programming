import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import contacts, { compareNames } from './contacts';
import ContactList from './components/ContactList';
import AddContactFrom from './components/AddContactForm';

export default class App extends React.Component {
  state = {
    showContacts: false,
    showForm: false,
    contacts: contacts,
  };

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  };

  toggleForm = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }));
  };

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames),
    }));
  };

  addContact = newContact => {
    this.setState(prevState => ({
      showForm: false,
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    if (this.state.showForm) return <AddContactFrom onSubmit = {this.addContact} />;
    return (
      <View style={styles.container}>
        <Button title="Toggle Contacts" onPress={this.toggleContacts} />
        <Button title="Add Contact" onPress={this.toggleForm} />
        {this.state.showContacts && (
          <ContactList contacts={this.state.contacts} />
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
