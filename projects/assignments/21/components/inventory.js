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
          brand: 'ASUS',
          type: 'ROG Strix G15',
          size: '15.6"',
          processor: 'Intel Core i7-10875H',
          memory: '32 GB',
          price: '739990 Ft'
        },
      ],
      itemBrand: '',
      itemType: '',
      itemSize: '',
      itemProcessor: '',
      itemMemory: '',
      itemPrice: '',
    };
  }

  render() {
    let items = this.state.array.map((val, key) => {
      //let items = this.props.testTomb.map((val, key) => {
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
          <Text style={styles.headerText}>Available notebooks</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>{items}</ScrollView>

        <View style={styles.header}>
          <Text style={styles.headerText}>Adding notebooks</Text>
        </View>

        <KeyboardAvoidingView behavior="padding">
          <View style={styles.flexItemContainer}>
            <TextInput
              style={styles.textInput}
              placeholder={'Brand'}
              onChangeText={itemBrand => this.setState({ itemBrand })}
              value={this.state.itemBrand}
            />
            <TextInput
              style={styles.textInput}
              placeholder={'Type'}
              onChangeText={itemType => this.setState({ itemType })}
              value={this.state.itemType}
            />
          </View>
          <View style={styles.flexItemContainer}>
            <TextInput
              style={styles.textInput}
              //keyboardType={'numeric'}
              placeholder={'Size'}
              onChangeText={itemSize => this.setState({ itemSize })}
              value={this.state.itemSize}
            />
            <TextInput
              style={styles.textInput}
              //keyboardType={'numeric'}
              placeholder={'Processor'}
              onChangeText={itemProcessor => this.setState({ itemProcessor })}
              value={this.state.itemProcessor}
            />
            <TextInput
              style={styles.textInput}
              //keyboardType={'numeric'}
              placeholder={'Memory'}
              onChangeText={itemMemory => this.setState({ itemMemory })}
              value={this.state.itemMemory}
            />
            <TextInput
              style={styles.textInput}
              //keyboardType={'numeric'}
              placeholder={'Price'}
              onChangeText={itemPrice => this.setState({ itemPrice })}
              value={this.state.itemPrice}
            />
          </View>
          <Button onPress={this.addItem} title="Add" />
        </KeyboardAvoidingView>
      </View>
    );
  }

  addItem = () => {
    if (
      !this.state.itemBrand ||
      !this.state.itemType ||
      !this.state.itemSize ||
      !this.state.itemProcessor ||
      !this.state.itemMemory ||
      !this.state.itemPrice
    ) {
      alert('All field is required!');
    }
     if (
      this.state.itemBrand.length < 3 ||
      this.state.itemType.length < 3 ||
      this.state.itemSize.length < 2 ||
      this.state.itemProcessor.length < 5 ||
      this.state.itemMemory.length < 1 ||
      this.state.itemPrice.length < 4
    ) {
      alert('Bad data!');
    } else {
      var d = new Date();
      this.setState(prevState => ({
        array: [
          ...prevState.array,
          {
            date:
              d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
            brand: this.state.itemBrand,
            type: this.state.itemType,
            size: this.state.itemSize,
            processor: this.state.itemProcessor,
            memory: this.state.itemMemory,
            price: this.state.itemPrice,
          },
        ],
      }));
      this.setState({ itemBrand: '' });
      this.setState({ itemType: '' });
      this.setState({ itemSize: '' });
      this.setState({ itemProcessor: '' });
      this.setState({ itemMemory: '' });
      this.setState({ itemPrice: '' });
    }
  };

  deleteItem(key) {
    this.state.array.splice(key, 1);
    this.setState({ array: this.state.array });
  }
}
