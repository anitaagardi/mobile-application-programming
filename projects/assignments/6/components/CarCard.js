import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class CarCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.textStyle}>
        <Text>ID: {this.props.car.id}</Text>
        <Text>Brand: {this.props.car.brand}</Text>
        <Text>Type: {this.props.car.type}</Text>
        <Text>Year of manufacture: {this.props.car.yearOfManufacture}</Text>
        <Text>Engine Type: {this.props.car.engineType}</Text>
        <Text>Milage: {this.props.car.milage} km</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'left',
    fontSize: 12,
    color: '#4a4e54',
    backgroundColor: 'lightgray',
    marginTop: '10px',
    marginBottom: '10px',
    paddingLeft: '50px',
    position: 'relative',
  }
});
