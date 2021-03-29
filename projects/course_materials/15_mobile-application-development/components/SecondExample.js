import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SecondExample extends React.Component {
   render() {
      return (
         <View style = {styles.container}>
            <Text>Here you can find some text</Text>
            
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});