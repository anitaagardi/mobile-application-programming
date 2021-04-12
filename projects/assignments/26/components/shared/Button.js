import * as React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import css from '../../css/css';

interface Props {
  label: string;
  onPress: () => void;
}

class Button extends React.Component<Props> {
  render() {
    const {label, onPress} = this.props;
    return(
      <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    justifyContent: "center",
    backgroundColor: "#965d2b",
    marginBottom:12,
    paddingVertical: 12,
    borderRadius:15,
    width:'90%',
    borderWidth:StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)"
  },
  text:{
    color:"#FFFFFF",
    textAlign:"center",
    height:20
  }
});


export default Button;