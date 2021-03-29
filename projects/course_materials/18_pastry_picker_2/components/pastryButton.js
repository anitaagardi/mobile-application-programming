import React, { Component, type Element } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

type PropType = {
  isActive?: boolean,
  label: string,
  onPress: (key: string) => void,
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    minWidth: 140,
    justifyContent: 'center',
    backgroundColor: '#5A8282',
    borderRadius: 10,
  },
  buttonContainer: {
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
  },
});

//Component<PropType>
export default class PastryButton extends Component<PropType> {
  //static defaultProps
  static defaultProps = {
    isActive: false,
  };
//props: PropType;
  props: PropType;

//Element<View>
  render(): Element<View> {
    //const { isActive, onPress, label } = this.props;
    //nem kell kiírni a this.props.valami-t
    const { isActive, onPress, label } = this.props;
    return (
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          onPress={onPress}
          style={[
            styles.button,
            { backgroundColor: isActive ? '#CD7734' : '#54250B' },
          ]}
          underlayColor="#CD7734">
          <Text style={styles.buttonText}>{label}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
