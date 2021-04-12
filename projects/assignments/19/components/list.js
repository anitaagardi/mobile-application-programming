import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from 'react-native';

import Items from '../components/goods';
import styles from '../assets/appearance';
import logo from '../assets/pizza.svg';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      pName: '' ,
      pDescription: '',
      pPrice: '',
      pSize: '',
    };
  }

  render() {
    let items = this.state.array.map((val, key) => {
      return (
        <Items
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteItem(key)}
        />
      );
    });
    return (
      <View style={styles.flexContainer}>
        

        <View style={styles.header}>
        <Image style={styles.logoList} source={logo} />
          <Text style={styles.headerText}>Adding new pizza</Text>
          
        </View>

        <KeyboardAvoidingView behavior="padding">
          <View style={styles.flexItemContainer}>
            <TextInput
              style={styles.textInput}
              placeholder={'Name (min 2 character))'}
              placeholderTextColor="white"
              onChangeText={pName => this.setState({ pName })}
              value={this.state.pName}
            />
            <TextInput
              style={styles.textInput}
              placeholder={'Description (min. 5 character)'}
              placeholderTextColor="white"
              onChangeText={pDescription => this.setState({ pDescription })}
              value={this.state.pDescription}
            />
          </View>
          <View style={styles.flexItemContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType={'numeric'}
              placeholder={'Price (min. 3 character)'}
              placeholderTextColor="white"
              onChangeText={pPrice => this.setState({ pPrice })}
              value={this.state.pPrice}
            />
            <TextInput
              style={styles.textInput}
              keyboardType={'numeric'}
              placeholder={'Size (min. 2 character)'}
              placeholderTextColor="white"
              onChangeText={pSize => this.setState({ pSize })}
              value={this.state.pSize}
            />
          </View>
          <Text style={styles.buttonS} onPress={this.addItem}>Add</Text>

        </KeyboardAvoidingView>

        <View style={styles.header}>
        <Image style={styles.logoList} source={logo} />
          <Text style={styles.headerText}>Pizza</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>{items}</ScrollView>

      </View>
    );
  }

  addItem = () => {
    if (
      !this.state.pName || !this.state.pDescription || !this.state.pPrice ||!this.state.pSize) {
      alert('All field is required');
    }
    if (
      this.state.pName.length < 5 || this.state.pDescription.length < 5 || this.state.pPrice.length < 3 || this.state.pSize.length < 2 ) {
      alert('The value is not appropriate.');
    } else {
      this.setState(prevState => ({
        array: [
          ...prevState.array,
          { name: this.state.pName, description: this.state.pDescription, ar: this.state.pPrice, meret: this.state.pSize },
        ],
      }));
      this.setState({ pName: '' });this.setState({ pDescription: '' });this.setState({ pPrice: ''}); this.setState({ pSize: '' });
    }
  };

  deleteItem(key) {
    this.state.array.splice(key, 1);
    this.setState({ array: this.state.array });
  }
}
