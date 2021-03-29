/*To create a list, we will use the map() method. This will iterate over an array of items, and render each one.*/
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
class EightExampleList extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Ben',
            age:15,
         },
         {
            id: 1,
            name: 'Susan',
            age:20,
         },
         {
            id: 2,
            name: 'Robert',
            age:21,
         },
         {
            id: 3,
            name: 'Mary',
            age:12,
         }
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   render() {
      return (
         <View>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
                        {item.name} 
                     </Text>
                     <Text style = {styles.text}>
                        {item.age}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default EightExampleList

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})