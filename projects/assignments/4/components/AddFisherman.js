import * as React from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import db from '../db.js';

export default class AddFisherman extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  state = {
    fisherman: 
    {
      id: null,
      name: '',
      age: '',
      code: ''
    },
    error: false
  };

   render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View style={styles.container}>
            <Text style={styles.welcome}>Add a fisherman</Text>
            {this.state.error && (
              <Text style={styles.error}>Error!</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let frm = Object.assign({}, this.state.fisherman);
                frm.name = itemValue;
                this.setState({ fisherman: frm, error: false });
              }}
              value={this.state.fisherman.name}
          
                       />
            
            <TextInput
              style={styles.input}
              placeholder="Age"
              keyboardType={"numeric"}
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let frm = Object.assign({}, this.state.fisherman);
                frm.age = itemValue;
                this.setState({ fisherman: frm, error: false });
              }}
              value={this.state.fisherman.age}
            />

             <TextInput
              style={styles.input}
              placeholder="Fisherman code"
              keyboardType={"numeric"}
              placeholderTextColor="black"
              onChangeText={itemValue => {
                let frm = Object.assign({}, this.state.fisherman);
                frm.code = itemValue;
                this.setState({ fisherman: frm, error: false });
              }}
              value={this.state.fisherman.code}
            />
           
            <View style={styles.btnEnter}>
            <TouchableOpacity style={styles.btnEnter} onPress={this.AddFisherman}>
 
                <Text style={styles.btnEnterText}>Add</Text>
              </TouchableOpacity>
          </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  AddFisherman = () => {
    if (
      this.state.fisherman.name == '' ||
      this.state.fisherman.age == '' ||
      this.state.fisherman.code == ''
    ) {
      this.setState({ error: true });
    } else {
      this.setState({error: false});
      db.addFisherman(this.state.fisherman);
      this.props.navigation.navigate('FishermanList');
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
 
 