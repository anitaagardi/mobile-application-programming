import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

import colors from '../constants/colors.js';

export default class ErrMsg extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ maxWidth: 360 }}>
        <Card style={styles.card}>
          <Text style={styles.cakeName}>
            Name of the cake: {this.props.cake.name}
          </Text>
          <View style={styles.details}>
            <View style={styles.dims}>
              <Text style={styles.detailTexts}>Dimensions (cm)</Text>
              <Text> Height: {this.props.cake.height}</Text>
              <Text> Length: {this.props.cake.length}</Text>
              <Text> Width: {this.props.cake.width}</Text>
            </View>
            <View style={styles.ingrs}>
              <Text style={styles.detailTexts}>Contents</Text>
              <Text> Pastry type: {this.props.cake.pastryType}</Text>
              <Text> Main ingr.: {this.props.cake.mainIngr}</Text>
              <Text> Sec. ingr.: {this.props.cake.secondaryIngr}</Text>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    backgroundColor: colors.font,
    margin: 5,
    borderWidth: 1,
  },
  cakeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 3,
  },
  details: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
  detailTexts: {
    fontStyle: 'italic',
  },
  dims: {
    flexDirection: 'column',
    marginLeft: 30,
  },
  ingrs: {
    flexDirection: 'column',
    marginLeft: 15,
    paddingLeft: 15,
    borderLeftWidth: 1,
  },
});
