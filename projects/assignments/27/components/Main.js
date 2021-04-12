import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';

export default class Main extends React.Component{
  constructor(props){
    super(props);
  }
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/beerbg.jpg')} style={{width: '100%', height: '100%'}}>
          <View style={styles.btnContainer}>
            <Button
              buttonStyle={styles.btn}
              titleStyle={{color:'black', fontWeight:'bold'}}
              title="Add"
              onPress={() => this.props.navigation.navigate("AddBeer")}
            />
            <Button
              buttonStyle={styles.btn}
              titleStyle={{color:'black', fontWeight:'bold'}}
              title="List"
              onPress={() => this.props.navigation.navigate("ListBeer")}
            />
            <Button
              buttonStyle={styles.btn, {backgroundColor:'#ffcccc'}}
              titleStyle={{color:'black', fontWeight:'bold'}}
              title="Logout"
              onPress={() => this.props.navigation.navigate("Login")}
            />
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
  btnContainer:{
    width:'75%',
    margin:'auto'
  },
  btn:{
    marginBottom:50,
    backgroundColor:'#99CF0D'
  }
});