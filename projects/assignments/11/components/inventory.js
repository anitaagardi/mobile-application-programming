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
          date: '2020/01/21',
          name: 'Ragnar Lothbrok',
          type: 'Jarl',
          region: 'Kattegat',
          age: '30',
        },
      ],
      itemName: '',
      itemType: '',
      itemRegion: '',
      itemAge: '',
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
          <Text style={styles.headerText}>Raiding party</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>{items}</ScrollView>

        <View style={styles.header}>
          <Text style={styles.headerText}>Recruit new warrior</Text>
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
              placeholder={'Type'}
              onChangeText={itemType => this.setState({ itemType })}
              value={this.state.itemType}
            />
          </View>
          <View style={styles.flexItemContainer}>
            <TextInput
              style={styles.textInput}
              placeholder={'Region'}
              onChangeText={itemRegion => this.setState({ itemRegion })}
              value={this.state.itemRegion}
            />
            <TextInput
              style={styles.textInput}
              keyboardType={'numeric'}
              placeholder={'Age'}
              onChangeText={itemAge => this.setState({ itemAge })}
              value={this.state.itemAge}
            />
          </View>
          <Button style={styles.buttonBackground} onPress={this.addItem} title="Recruit" />
        </KeyboardAvoidingView>
      </View>
    );
  }

  addItem = () => {
    if (
      !this.state.itemName ||
      !this.state.itemType ||
      !this.state.itemRegion ||
      !this.state.itemAge
    ) {
      alert('All fields must have a value.');
    }
    if (
      this.state.itemAge.length == 0
    ) {
      alert('The length of the provided data is not adequate.');
    } else {
      var d = new Date();
      this.setState(prevState => ({
        array: [
          ...prevState.array,
          {
            date:
              d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
            name: this.state.itemName,
            type: this.state.itemType,
            region: this.state.itemRegion,
            age: this.state.itemAge,
          },
        ],
      }));
      this.setState({ itemName: '' });
      this.setState({ itemType: '' });
      this.setState({ itemRegion: '' });
      this.setState({ itemAge: '' });
    }
  };

  deleteItem(key) {
    this.state.array.splice(key, 1);
    this.setState({ array: this.state.array });
  }
}
