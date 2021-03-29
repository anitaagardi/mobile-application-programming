import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: 'haxe',
      firstLanguage: 'java',
      secondLanguage: 'js',
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Unstyled:</Text>
        <Picker
          style={styles.picker} itemStyle={styles.pickerItem}
          selectedValue={this.state.language}
          onValueChange={(itemValue) => this.setState({language: itemValue})}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Python" value="python" />
          <Picker.Item label="Haxe" value="haxe" />
        </Picker>
        
        <Text style={styles.title}>Shows one row:</Text>
        <Picker
          style={styles.onePicker} itemStyle={styles.onePickerItem}
          selectedValue={this.state.firstLanguage}
          onValueChange={(itemValue) => this.setState({firstLanguage: itemValue})}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Python" value="python" />
          <Picker.Item label="Haxe" value="haxe" />
        </Picker>
        
        <Text style={styles.title}>Shows above and below values:</Text>
        <Picker
          style={styles.twoPickers} itemStyle={styles.twoPickerItems}
          selectedValue={this.state.secondLanguage}
          onValueChange={(itemValue) => this.setState({secondLanguage: itemValue})}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Python" value="python" />
          <Picker.Item label="Haxe" value="haxe" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  picker: {
    width: 200,
    backgroundColor: '#FFF0E0',
    borderColor: 'black',
    borderWidth: 1,
  },
  pickerItem: {
    color: 'red'
  },
  onePicker: {
    width: 200,
    height: 44,
    backgroundColor: '#FFF0E0',
    borderColor: 'black',
    borderWidth: 1,
  },
  onePickerItem: {
    height: 44,
    color: 'red'
  },
  twoPickers: {
    width: 200,
    height: 88,
    backgroundColor: '#FFF0E0',
    borderColor: 'black',
    borderWidth: 1,
  },
  twoPickerItems: {
    height: 88,
    color: 'red'
  },
});
