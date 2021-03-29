import React, { Component } from 'react'
import { Text, View } from 'react-native'
/*The state is mutable while props are immutable. This means that state can be updated in the future while props cannot be updated.*/
class Home extends Component {
   state = {
      myState: 'Click me '
   }
   updateState = () => {
      this.setState({ myState: 'The state is updated' })
   }
   render() {
      return (
         <View>
            <Text onPress = {this.updateState}>
               {this.state.myState}
            </Text>
         </View>
      );
   }
}
export default Home;