import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles.js';
import Event from './events';
import NewEvent from './newEvent';

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      //+example event
      events: [{name: 'General meeting', description: 'Talking about stuff', date: '2020/10/22', participants: '30'}],
      addingEvent: false
    };
  }

  addEventClick = async () => {
    this.setState({
      addingEvent: true
    })
  };

  addEvent(name, description, date, participants) {
    let events = this.state.events;
    events.push({
      name: name,
      description: description,
      date: date,
      participants: participants
    })
    this.setState({ 
      events: events,
      addingEvent: false
    });
  }

  cancel() {
    this.setState({
      addingEvent:false
    })
  }

  addEvents() {
    this.setState({
      addingEvent: false
    })
    console.log('bruh')
  }

  logOut = async () => {
    this.props.navigation.navigate('Login');
  };

  deleteItem (key) {
    let events = [...this.state.events];
    events.splice(key, 1);
    this.setState({ 
      events: events
    });
  }

  render() {
    let eventList = this.state.events.map((value, key) => {
      return (
        <Event key={key} keyval={key} val={value} deleteMethod={() => this.deleteItem(key)} />
      );
    });

    if(this.state.addingEvent){
      return(
        <NewEvent addEvent={(name, description, date, participants) => this.addEvent(name, description, date, participants)} cancel = {() => this.cancel()}/>
      )
    }else{
    return (
        <View style={styles.flexContainer}>
          <Image style={styles.logoMargin} source={require('../assets/snack-icon.png')} />
          <Text style={styles.paragraph}>
            List of all events
          </Text>
          <ScrollView style={styles.scrollContainer}>{eventList}</ScrollView>
        
          <View style={styles.cointainerLogin}>
            <TouchableOpacity style={styles.buttonLogin} onPress={this.addEventClick}>
              <Text style={styles.buttonText}>Add new event</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogin} onPress={this.logOut}>
              <Text style={styles.buttonText}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}