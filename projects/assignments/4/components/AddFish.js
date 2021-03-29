import * as React from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import db from '../db.js';

export default class AddFish extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  state = {
    fish: 
    {
      id: null,
      type: '',
      weight: '',
    },
    error: false
  };

   render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View style={styles.container}>
            <Text style={styles.welcome}>Add a fish</Text>
            {this.state.error && (
              <Text style={styles.error}>Error</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Type of the fish"
              
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let fsh = Object.assign({}, this.state.fish);
                fsh.type = itemValue;
                this.setState({ fish: fsh, error: false });
              }}
              value={this.state.fish.type}
            />
            <TextInput
              style={styles.input}
              placeholder="Weight of the fish"
              keyboardType={"numeric"}
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let fsh = Object.assign({}, this.state.fish);
                fsh.weight = itemValue;
                this.setState({ fish: fsh, error: false });
              }}
              value={this.state.fish.weight}
            />
            <View style={styles.btnEnter}>
            <TouchableOpacity style={styles.btnEnter} onPress={this.AddFish}>
 
                <Text style={styles.btnEnterText}>Add</Text>
              </TouchableOpacity>
          </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  AddFish = () => {
    if (
      this.state.fish.type == '' ||
      this.state.fish.weight == ''
    ) {
      this.setState({ error: true });
    } else {
      this.setState({error: false});
      db.addFish(this.state.fish);
      this.props.navigation.navigate('FishList');
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 12,
    marginHorizontal: 31,
    height: 50,
    width: 250,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    color: '#008000',
    margin: 15,
    padding: 5,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#428AF8',
    borderRadius: 25,
    paddingLeft: 15,
  },
  btnEnter: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#008000',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
    borderRadius: 25,
  },
  btnEnterText: {
    color: '#ffffff',
    justifyContent: 'center',
    fontWeight: '700',
  },
})