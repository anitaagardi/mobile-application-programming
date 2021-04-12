import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class NoteListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      note: null
    }
  }

  static getDerivedStateFromProps(props, state){
    return {note: props.note};
  }

  handleModify = () => {
    let note = {
      title: this.state.note.title,
      text: this.state.note.text,
    }
    this.props.handleModify(note);
  }

  handleDelete = () => {
    this.props.handleDelete(this.state.note);
  }

  render(){
    const note = this.state.note;

    return(
      <Text style={styles.listItem} >
        <Text>{note.title + "\n"}</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.button} >
              <Button title="Delete" onPress={this.handleDeletePress}></Button>
          </View>
          <View style={styles.button} >
              <Button title="Update" onPress={this.handleModifyPress} ></Button>
          </View>
        </View>
      </Text>
    );
  }
}

export default NoteListItem;

const styles = StyleSheet.create({
 listItem: {
   fontFamily: 'Arial',
   backgroundColor: '#00477e',
   color: '#ffffff',
   marginTop: 10,
   marginLeft: 10,
   marginRight: 10,
   padding: 10,
   borderRadius: 5
 },
 buttonsContainer:{
   flexDirection: 'row'
 },
 button:{
   marginTop: 10,
   marginLeft: 10
 }
});