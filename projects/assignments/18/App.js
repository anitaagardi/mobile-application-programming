import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
//import NoteListItem from './components/NoteListItem';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {

constructor(props){
    super(props);
    this.state = {
      noteFormVisible: false,
      title: '',
      text: '',
      notes: [
        {
          title: 'Example',
          text: 'More example text',
        },
        {
          title: 'Another',
          text: 'More example text',
        }
      ],
      note: {
        title: '',
        text: ''
      }
    }
  }

  handleNoteDelete = (title, text) => {
    const newNotes = this.state.notes.filter(note => (note.title != title || note.text != text));
    this.setState({notes : newNotes});
    this.toggleNoteForm();
  }

  handleNoteModify = (title, text) => {
    this.handleNoteDelete(title, text);
    this.setState({title: title, text:text});
  }

  handleNoteSave = () => {
    let title = this.state.title;
    const text = this.state.text;

    if(title.length == 0){
      title = text.split(' ', 1);
    }

    this.setState(prevState => ({
        noteFormVisible: false,
        title: '',
        text: '',
        notes: [
          ...prevState.notes,
          {
            title: title,
            text: text
          },
        ],
      }));

  }

  toggleNoteForm = () => {
    this.setState({noteFormVisible: !this.state.noteFormVisible})
  }

  render() {

    return (
      <ScrollView style={styles.background}>
      <View>
        <Button title="Add" onPress={this.toggleNoteForm}></Button>
      </View>

      { this.state.noteFormVisible &&

      <Text style={styles.container}>
        <View style={styles.header}><Text>Add/Modify Note</Text></View>
        <View style={styles.row} >
          <Text>Title:  
          <TextInput name="title" style={styles.textInput} value={this.state.title} onChangeText={title => this.setState({title})} />
          </Text>
        </View>
        <View style={styles.row} >
          <Text>Text:  
          <TextInput name="text" style={styles.textInput} value={this.state.text} onChangeText={text => this.setState({text})} />
          </Text>
        </View>
        <View style={styles.button}>
          <Button title="Save" onPress={this.handleNoteSave} />
        </View>
      </Text>
      }
      
      <View>
          {
            this.state.notes.map( (note) => (<NoteListItem note={note} handleDelete={this.handleNoteDelete} handleModify={this.handleNoteModify}/>) )
          }
      </View>
    </ScrollView>
  );
  }
  
}

class NoteListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      textVisibility:false,
      note: null
    }
  }

  static getDerivedStateFromProps(props, state){
    return {note: props.note};
  }

  handleModify = () => {
    this.props.handleModify(this.state.note.title, this.state.note.text);
  }

  handleDelete = () => {
    this.props.handleDelete(this.state.note.title, this.state.note.text);
  }

  toggleText = () => {
    this.setState({textVisibility: !this.state.textVisibility})
  }

  render(){
    const note = this.state.note;

    return(
      <Text style={styles.listItem} onPress={this.toggleText}>
        <Text >{note.title}</Text>

        {this.state.textVisibility &&
          <Text>{"\n" + note.text + "\n"}</Text>
        }

        <View style={styles.buttonsContainer}>
          <View style={styles.button} >
              <TouchableOpacity style={styles.touchOpacityButton} onPress={this.handleDelete}>
                <Image style={styles.logo} source={require('./assets/del.png')} onPress={this.handleDelete}/>
              </TouchableOpacity>
          </View>
          <View style={styles.button} >
            <TouchableOpacity style={styles.touchOpacityButton} onPress={this.handleModify}>
                <Image style={styles.logo} source={require('./assets/edit.png')} onPress={this.handleDelete}/>
            </TouchableOpacity>
          </View>
        </View>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  background:{
    backgroundColor: '#f7edba'
  },
  listItem: {
   fontFamily: 'Arial',
   backgroundColor: '#ebd88d',
   color: '#000000',
   fontWeight: 700,
   marginTop: 10,
   marginLeft: 10,
   marginRight: 10,
   padding: 10,
   borderRadius: 5
  },
  buttonsContainer:{
   alignItems:"flex-end"
  },
  button:{
   marginTop: 10,
   marginLeft: 10
 },
 container: {
    fontFamily: 'Arial',
    backgroundColor: '#00477e',
    color: '#ffffff',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderRadius: 5
  },
  textInput:{
    backgroundColor: '#ffffff',
    padding: 5,
    height: 40
  },
  row:{
    paddingBottom: 10
  },
  header:{
    marginBottom: 20,
    fontSize: 18
  },
  touchOpacityButton: {
    flexDirection: 'row', 
    justifyContent: 'flex-end'
  },
  logo: {
    height: 24,
    width: 24,
  }
});
