/* You can use the style property to add the styles inline. However, this is not the best practice because it can be hard to read the code.

In this chapter, we will use the Stylesheet for styling.*/
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SeventhExamplePresentationalComponent from './SeventhExamplePresentationalComponent'

export default class App extends React.Component {
   state = {
      myState: 'This is my state',
      myState2:'This is my state2'
   }
   render() {
      return (
         <View>
            <SeventhExamplePresentationalComponent myState = {this.state.myState}/>
            <SeventhExamplePresentationalComponent myState = {this.state.myState2}/>
         </View>
      );
   }
}