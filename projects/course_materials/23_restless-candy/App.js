
import React, { Component } from 'react';
 
import { StyleSheet, Alert, TextInput, View, Button ,Image} from 'react-native';
 
export default class App extends Component<{}> {
 
  constructor(){
 
    super();
 
    this.state={
 
      Holder : ''
 
    }
  }
 
 FindSquare=()=>{
 
  var A = this.state.Holder ;
 
  var B = Math.pow(A, 2);
 
  alert("Square = " + B.toString());
 
  }
 
 FindCube=()=>{
  
    var A = this.state.Holder ;
  
    var B = Math.pow(A, 3);
  
    alert("Cube = " + B.toString());
  
  }
 
 FindSquareRoot=()=>{
    
        var A = this.state.Holder ;
      
        var B = Math.sqrt(A)
      
        alert("SquareRoot = " + B.toString());
    
  }
 
  FindCubeRoot=()=>{
    
        var A = this.state.Holder ;
      
        var B = Math.cbrt(A)
      
        alert("CubeRoot = " + B.toString());
    
   }
 
 
 render() {

       let pic = {
      uri: 'https://image.freepik.com/free-vector/math-science-concept-with-school-lesson-items-retro-cartoon-style_1284-8084.jpg'
    };
 
   return (
     <View style={styles.MainContainer}>
                <Image source={pic} style={{ width: 280,
            height: 250,
           justifyContent:'center',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 45,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 45,
            overflow: 'hidden',}}/>
       
 
         <TextInput
                 
             placeholder="Enter Value here"
 
             keyboardType={'numeric'}
         
             onChangeText={ TextInputValue => this.setState({ Holder : TextInputValue }) }
         
             style={styles.TextInputStyle}
             
           />
 
        <View style={{marginTop: 5}}>
 
          <Button title=" Find Square Of Given Number " onPress={this.FindSquare} />
 
        </View>
 
        <View style={{marginTop: 5}}>
 
          <Button title=" Find Cube Of Given Number " onPress={this.FindCube} />
 
        </View>
 
        <View style={{marginTop: 5}}>
 
          <Button title=" Find Square Root Of Given Number " onPress={this.FindSquareRoot} />
 
        </View>
 
        <View style={{marginTop: 5}}>
 
          <Button title=" Find Cube Root Of Given Number " onPress={this.FindCubeRoot} />
 
        </View>
 
 
     </View>
   );
 }
}
 
const styles = StyleSheet.create({
 
 MainContainer: {
   flex: 1,
 
   justifyContent: 'Center',
   backgroundColor:'#feb2b2',
   margin: 20
   
   
 },
 TextInputStyle:{
   
      textAlign: 'center',
      height: 50,
      width: '95%',
      marginBottom: 10
    },
});