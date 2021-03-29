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
          date: '2001/01/01',
          title: 'Henry IV, Part 2',
          author: 'Shakespeare',
          publish: 'N/A',
          quantity: '11',
        },
      ],
      itemTitle: '',
      itemAuthor: '',
      itemPublish: '',
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
          <Text style={styles.headerText}>Inventory</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>{items}</ScrollView>

        <View style={styles.header}>
          <Text style={styles.headerText}>Add new item</Text>
        </View>

        <KeyboardAvoidingView behavior="padding">
          <View style={styles.flexItemContainer}>
            <TextInput
              style={styles.textInput}
              placeholder={'Title'}
              onChangeText={itemTitle => this.setState({ itemTitle })}
              value={this.state.itemTitle}
            />
            <TextInput
              style={styles.textInput}
              placeholder={'Author'}
              onChangeText={itemAuthor => this.setState({ itemAuthor })}
              value={this.state.itemAuthor}
            />
          </View>
          <View style={styles.flexItemContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType={'numeric'}
              placeholder={'Year Published'}
              onChangeText={itemPublish => this.setState({ itemPublish })}
              value={this.state.itemPublish}
            />
            <TextInput
              style={styles.textInput}
              keyboardType={'numeric'}
              placeholder={'Quantity'}
              onChangeText={itemQuantity => this.setState({ itemQuantity })}
              value={this.state.itemQuantity}
            />
          </View>
          <Button onPress={this.addItem} title="Add new item" />
        </KeyboardAvoidingView>
      </View>
    );
  }

  addItem = () => {
    if (
      !this.state.itemTitle ||
      !this.state.itemAuthor ||
      !this.state.itemPublish ||
      !this.state.itemQuantity
    ) {
      alert('All fields must have a value.');
    }
    if (
      this.state.itemTitle.length < 5 ||
      this.state.itemAuthor.length < 5 ||
      this.state.itemPublish.length != 4 ||
      this.state.itemQuantity.length < 1
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
            title: this.state.itemTitle,
            author: this.state.itemAuthor,
            publish: this.state.itemPublish,
            quantity: this.state.itemQuantity,
          },
        ],
      }));
      this.setState({ itemTitle: '' });
      this.setState({ itemAuthor: '' });
      this.setState({ itemPublish: '' });
      this.setState({ itemQuantity: '' });
    }
  };

  deleteItem(key) {
    this.state.array.splice(key, 1);
    this.setState({ array: this.state.array });
  }
}
