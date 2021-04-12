import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import Items from '../components/items';
import styles from '../assets/styles';

export default class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [
        {
          date: '2020/12/01',
          name: 'GTX 1070',
          manufacturer: 'Nvidia',
          memorysize: '8',
          quantity: '3',
        },
      ],
      itemName: '',
      itemManufacturer: '',
      itemMemorysize: '',
      itemQuantity: '',
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
          <Text style={styles.headerText}>Stock</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>{items}</ScrollView>

        <View style={styles.header}>
          <Text style={styles.headerText}>Add a video card</Text>
        </View>

        <KeyboardAvoidingView behavior="padding">
          <View style={styles.flexItemContainer}>
            <TextInput
              style={styles.textInput}
              placeholder={'Name'}
              onChangeText={itemName => this.setState({ itemName })}
              value={this.state.itemName}
            />
            <TextInput
              style={styles.textInput}
              placeholder={'Manufacturer'}
              onChangeText={itemManufacturer => this.setState({ itemManufacturer })}
              value={this.state.itemManufacturer}
            />
          </View>
          <View style={styles.flexItemContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType={'numeric'}
              placeholder={'Memory size'}
              onChangeText={itemMemorysize => this.setState({ itemMemorysize })}
              value={this.state.itemMemorysize}
            />
            <TextInput
              style={styles.textInput}
              keyboardType={'numeric'}
              placeholder={'Quantity'}
              onChangeText={itemQuantity => this.setState({ itemQuantity })}
              value={this.state.itemQuantity}
            />
          </View>
          <Button onPress={this.addItem} title="Add a new product" />
        </KeyboardAvoidingView>
      </View>
    );
  }

  addItem = () => {
    if (
      !this.state.itemName ||
      !this.state.itemManufacturer ||
      !this.state.itemMemorysize ||
      !this.state.itemQuantity
    ) {
      alert('All fields are required.');
    }
    if (
      this.state.itemName.length < 5 ||
      this.state.itemManufacturer.length < 5
    ) {
      alert('One of the data provided is not long enough.');
    } else {
      var d = new Date();
      this.setState(prevState => ({
        array: [
          ...prevState.array,
          {
            date:
              d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
            name: this.state.itemName,
            manufacturer: this.state.itemManufacturer,
            memorysize: this.state.itemMemorysize,
            quantity: this.state.itemQuantity,
          },
        ],
      }));
      this.setState({ itemName: '' });
      this.setState({ itemManufacturer: '' });
      this.setState({ itemMemorysize: '' });
      this.setState({ itemQuantity: '' });
    }
  };

  deleteItem(key) {
    this.state.array.splice(key, 1);
    this.setState({ array: this.state.array });
  }
}
