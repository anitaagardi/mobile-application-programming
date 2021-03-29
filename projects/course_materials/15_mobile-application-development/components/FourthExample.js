import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
/*The state is mutable while props are immutable. This means that state can be updated in the future while props cannot be updated.*/
export default class FourthExample extends React.Component {
   state = {
      myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod'
     
   }
   render() {
      return (
      <View>
         <Text> {this.state.myState} </Text>
      </View>
      );
   }
}