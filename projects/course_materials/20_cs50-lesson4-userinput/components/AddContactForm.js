import React from 'react';
import {
  TextInput,
  View,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import PropTypes from 'prop-types';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
  },
  input: {
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    borderColor: 'black',
    borderWidth: 1,
  },
});
export default class AddContactForm extends React.Component {
  static propTypes = {
    addContact: PropTypes.func,
  };

  state = {
    name: '',
    phone: '',
    isFormValid: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.name !== prevState.name ||
      this.state.phone !== prevState.phone
    ) {
      this.validateForm();
    }
  }

  getHandler = key => val => {
    this.setState({ [key]: val });
  };

  handlePhoneChange = phone => {
    // The + operator tries to convert the string to a number, if it has a letter it gives back NaN, on "" it gives back 0.
    if (+phone >= 0 && phone.length <= 10) {
      this.setState({ phone });
    }
  };

  validateForm = () => {
    if (
      +this.state.phone >= 0 &&
      this.state.phone.length === 10 &&
      this.state.name.length >= 3
    ) {
      this.setState({ isFormValid: true });
    } else {
      this.setState({ isFormValid: false });
    }
  };

  handleSubmit = () => {
    if (
      +this.state.phone >= 0 &&
      this.state.phone.length === 10 &&
      this.state.name.length >= 3
    ) {
      this.props.onSubmit(this.state);
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.getHandler('name')}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.getHandler('phone')}
          keyboardType="numeric"
          placeholder="Phone"
        />
        <Button
          title="Submit"
          onPress={this.handleSubmit}
          disabled={!this.state.isFormValid}
        />
      </KeyboardAvoidingView>
    );
  }
}
