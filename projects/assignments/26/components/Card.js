import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-paper';
import css from '../css/css';
import db from '../db-mock/db-mock';

export default class MyCard extends React.Component {
  constructor(props) {
    super(props);
  }
  reduction = () => {
    console.log(this.props.item);
    db.deg(this.props.item);
    this.setState({ item: db.getShoppingCart() });
  };
  increase = () => {
    console.log(this.props.item);
    db.inc(this.props.item);
    this.setState({ item: db.getShoppingCart() });
  };
  render() {
    return (
      <View style={{ maxWidth: '100%' }}>
        <Card style={styles.card}>
          <Text style={styles.itemName}>{this.props.item.name}</Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View>
              <Text style={styles.subText}>
                Mennyiség:
                <Text style={styles.priceText}>
                  {this.props.item.piece}
                  {this.props.item.measure}
                </Text>{' '}
              </Text>
              <Text style={styles.subText}>
                Ára:
                <Text style={styles.priceText}>
                  {this.props.item.price} Ft
                </Text>{' '}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
                width: '100%',
              }}>
              <Text style={styles.subText}>
                <Button onPress={this.reduction} title="-" color="#ff4b4b" />
                <Text style={styles.priceText}>{this.props.item.pc}</Text>
                <Button onPress={this.increase} title="+" color="#307b38" />
              </Text>
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
    backgroundColor: css.font,
    margin: 5,
    borderWidth: 1,
  },

  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  subText: {
    fontSize: 14,
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 5,
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
});
