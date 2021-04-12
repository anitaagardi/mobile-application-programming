import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ListView,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      inputValue: '',
      dataSource: ds.cloneWithRows([]),
    };
    this._handleTextChange = this._handleTextChange.bind(this);
    this._handleDeleteButtonPress = this._handleDeleteButtonPress.bind(this);
  }
  _handleTextChange = value => {
    const inputValue = value;
    this.setState(() => ({
      inputValue,
    }));
  };
  _handleSendButtonPress = () => {
    if (!this.state.inputValue) {
      return;
    }
    const textArray = this.state.dataSource._dataBlob.s1;
    textArray.push(this.state.inputValue);
    this.setState(() => ({
      dataSource: this.state.dataSource.cloneWithRows(textArray),
      inputValue: '',
    }));
  };
  _handleDeleteButtonPress = id => {
    this.setState(a => {
      const newItem = a.dataSource._dataBlob.s1.filter(
        (item, i) => parseInt(id) !== i
      );
      return {
        dataSource: this.state.dataSource.cloneWithRows(newItem),
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{
            text: 'Todo list',
            style: {
              color: '#fff',
              width: 320,
              height: 20,
              padding: 0,
              textAlign: 'center',
            },
          }}
        />
        <View style={styles.formView}>
          <Text style={styles.paragraph2}>Add new TODO</Text>
          <TextInput
            style={styles.inputForm}
            value={this.state.inputValue}
            onChangeText={this._handleTextChange}
            placeholder="Add new TODO"
          />
          <Button title="Adding" onPress={this._handleSendButtonPress} />
        </View>
        <Text style={styles.paragraph2}>Lista:</Text>
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionID, rowID) => {
            const handleDelete = () => {
              return this._handleDeleteButtonPress(rowID);
            };
            return (
              <View style={styles.todoItem}>
                <Text style={styles.todoText}>{rowData}</Text>
                <Button
                  title="Deleting"
                  onPress={handleDelete}
                  style={styles.deleteButton}
                />
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  formView: {
    borderBottomWidth: 3,
    borderColor: '#ccc',
    paddingBottom: 8,
  },
  inputForm: {
    backgroundColor: '#fff',
    width: 320,
    height: 40,
    padding: 8,
    marginBottom: 8,
  },
  todoItem: {
    alignItems: 'center',
    padding: 8,
    width: 320,
    borderBottomWidth: 1.5,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    border: '1 solid #333',
    flex: 1,
    flexDirection: 'row',
  },
  todoText: {
    flex: 1,
  },
  paragraph2: {
    margin: 10,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph3: {
    margin: 10,
    fontSize: 14,
    fontWeight: 'italic',
    textAlign: 'center',
  },
});
