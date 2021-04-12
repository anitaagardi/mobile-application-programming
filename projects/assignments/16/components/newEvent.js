import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles.js';

export default class NewEvent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      eventDescription: '',
      eventDate: '',
      eventParticipant: ''
    }
  }

  render() {
    const {eventName, eventDescription, eventDate, eventParticipant} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          New Event
        </Text>
        <View style={styles.loginContainer}>
          <Text style={styles.simpleText}>Event name</Text>
          <TextInput name="eventName" style={styles.inputLogin} onChangeText={eventName => this.setState({eventName})} value={this.state.eventName}/>
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.simpleText}>Description</Text>
          <TextInput name="eventDescription" style={styles.inputLogin} onChangeText={eventDescription => this.setState({eventDescription})} value={this.state.eventDescription}/>
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.simpleText}>Date of event</Text>
          <TextInput name="eventDate" style={styles.inputLogin} onChangeText={eventDate => this.setState({eventDate})} value={this.state.eventDate}/>
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.simpleText}>Maximum participants</Text>
          <TextInput name="eventParticipant" style={styles.inputLogin} onChangeText={eventParticipant => this.setState({eventParticipant})} value={this.state.eventParticipant}/>
        </View>
        <TouchableOpacity style={styles.buttonLogin} onPress={() => this.props.addEvent(this.state.eventName, this.state.eventDescription, this.state.eventDate, this.state.eventParticipant)}>
              <Text style={styles.buttonText}>Add Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLogin} onPress={() => this.props.cancel()}>
              <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }
}