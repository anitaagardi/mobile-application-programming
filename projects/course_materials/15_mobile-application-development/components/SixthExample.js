import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SixthExamplePresentationalComponent from './SixthExamplePresentationalComponent'

/*Presentational components should get all data by passing props. Only container components should have state.*/
/*Container component is only used for handling state. All functionality related to view(styling etc.) will be handled in the presentational component.*/
/*Presentational components should be used only for presenting view to the users. These components do not have state. They receive all data and functions as props.
The best practice is to use as much presentational components as possible.*/
export default class SixthExample extends React.Component {
   state = {
      myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod'
      
   }
   updateState = () => {
      this.setState({ myState: 'The state is updated' })
   }
   render() {
      return (
         <View>
            <SixthExamplePresentationalComponent myState = {this.state.myState} updateState = {this.updateState}/>
         </View>
      );
   }
}