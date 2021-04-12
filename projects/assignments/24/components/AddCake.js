import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  Picker,
} from 'react-native';
import db from '../dao/database.js';
import colors from '../constants/colors.js';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };
  state = {
    cakeToAdd: {
      id: null,
      name: '',
      height: 0,
      length: 0,
      width: 0,
      pastryType: 'Sponge',
      mainIngr: '',
      secondaryIngr: '',
    },
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
          <View>
            <Text style={styles.paragraph}>
              Add another wonderful cake to the collection
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let cake = Object.assign({}, this.state.cakeToAdd);
                cake.name = itemValue;
                this.setState({ cakeToAdd: cake });
              }}
              value={this.state.cakeToAdd.id}
            />
            <TextInput
              style={styles.input}
              keyboardType={'numeric'}
              placeholder="Height"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let cake = Object.assign({}, this.state.cakeToAdd);
                cake.height = this._validateNumbers(itemValue);
                this.setState({ cakeToAdd: cake });
              }}
              value={this.state.cakeToAdd.height}
            />
            <TextInput
              style={styles.input}
              keyboardType={'numeric'}
              placeholder="Length"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let cake = Object.assign({}, this.state.cakeToAdd);
                cake.length = this._validateNumbers(itemValue);
                this.setState({ cakeToAdd: cake });
              }}
              value={this.state.cakeToAdd.length}
            />
            <TextInput
              style={styles.input}
              keyboardType={'numeric'}
              placeholder="Width"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let cake = Object.assign({}, this.state.cakeToAdd);
                cake.width = this._validateNumbers(itemValue);
                this.setState({ cakeToAdd: cake });
              }}
              value={this.state.cakeToAdd.width}
            />
            <Picker
              selectedValue={this.state.cakeToAdd.pastryType}
              style={styles.input}
              onValueChange={itemValue => {
                let cake = Object.assign({}, this.state.cakeToAdd);
                cake.pastryType = itemValue;
                this.setState({ cakeToAdd: cake });
              }}>
              <Picker.Item label="Sponge" value="Sponge" />
              <Picker.Item label="Cheese" value="Cheese" />
              <Picker.Item label="Sfoglia" value="Sfoglia" />
              <Picker.Item label="Gelatine" value="Gelatine" />
              <Picker.Item label="Salty" value="Salty" />
              <Picker.Item label="Biscuity" value="Biscuity" />
            </Picker>
            <TextInput
              style={styles.input}
              placeholder="Main ingredient"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let cake = Object.assign({}, this.state.cakeToAdd);
                cake.mainIngr = itemValue;
                this.setState({ cakeToAdd: cake });
              }}
              value={this.state.cakeToAdd.mainIngr}
            />
            <TextInput
              style={styles.input}
              placeholder="Secondary ingredient"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let cake = Object.assign({}, this.state.cakeToAdd);
                cake.secondaryIngr = itemValue;
                this.setState({ cakeToAdd: cake });
              }}
              value={this.state.cakeToAdd.secondaryIngr}
            />
            <View style={styles.button}>
              <Button
                color={colors.buttons}
                onPress={this._addCake}
                title="     Add cake      "
              />
            </View>
            <View style={styles.button}>
              <Button
                color={colors.buttons}
                onPress={this._switchToList}
                title="          Back           "
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  _addCake = () => {
    if (
      this.state.cakeToAdd.name == '' ||
      this.state.cakeToAdd.pastryType == '' ||
      this.state.cakeToAdd.mainIngr == '' ||
      this.state.cakeToAdd.secondaryIngr == '' ||
      this.state.cakeToAdd.width <= 0 ||
      this.state.cakeToAdd.length <= 0 ||
      this.state.cakeToAdd.height <= 0
    ) {
      alert('Please fill out the form correctly!');
    } else {
      db.createCake(this.state.cakeToAdd);
      this.props.navigation.navigate('CakeList');
    }
  };
  _switchToList = () => {
    this.props.navigation.navigate('CakeList');
  };
  _validateNumbers = value => {
    return value.replace(/[^0-9]/g, '');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: colors.bg,
  },
  paragraph: {
    margin: 12,
    marginTop: 0,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.font,
    textAlign: 'center',
  },
  input: {
    marginBottom: 8,
    height: 30,
    textAlign: 'left',
    backgroundColor: '#F2EFF1',
    borderRadius: 5,
    fontSize: 15,
    alignItems: 'center',
    paddingLeft: 9,
  },
  button: {
    padding: 8,
  },
});
