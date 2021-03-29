import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

class FormInputs extends Component {
  //var randomNumber=Math.floor(Math.random() * 100) + 1
  state = {
    guessNumber: Math.floor(Math.random() * 100) + 1,
    inputNumber: '',
  };
  handleInputNumber = text => {
    this.setState({ inputNumber: text });
  };
  generateNewNumber = () => {
    this.setState({ guessNumber: Math.floor(Math.random() * 100) + 1 });
  };

  game = inputNumber => {
    //alert(this.state.guessNumber);
    if (inputNumber > this.state.guessNumber) {
      alert('A gondolt szám kisebb');
    } else if(inputNumber < this.state.guessNumber) {
      alert('A gondolt szám nagyobb');
    }else{
      alert('Kitaláltad');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Szam"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleInputNumber}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.game(this.state.inputNumber)}>
          <Text style={styles.submitButtonText}> Kitalálom! </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.generateNewNumber()}>
          <Text style={styles.submitButtonText}> Újra! </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default FormInputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
