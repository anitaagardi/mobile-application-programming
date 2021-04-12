import * as React from "react";
import {StyleSheet, Text, TextInput} from "react-native";

type Props = TextInputProps;

class FormTextInput extends React.Component<Props> {
  render() {
    const {stype, ...otherProps} = this.props;
    return(
      <TextInput
        selectionColor={"#1e90ff"}
        style={[styles.TextInput]}
        {...otherProps}
        />
    )
  }
}

const styles = StyleSheet.create({
  TextInput: {
    height: 40,
    borderColor: "#D3D3D3",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  }
});

export default FormTextInput;	