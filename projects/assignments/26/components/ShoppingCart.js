import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import db from '../db-mock/db-mock';
import css from '../css/css';
import Button from './shared/Button';
import MyCard from './Card';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };
  state= {
    db: {},
    items: [],
    itemToDelete: {},
  };

  UNSAFE_componentWillMount() {
    this.setState({ items: db.getShoppingCart() });
  }
  componentDidMount() {
    this.load();
    this.props.navigation.addListener('willFocus', this.load);
  }

  onSwipeValueChange = (swipeData) => {
    const { key, value } = swipeData;
    this.rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  };

  load = () => {
    this.setState({ item: db.getShoppingCart() });
    console.log('load called');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.container, { marginBottom: 40 }]}>
          <Button label="Adding new element" onPress={this.handleAddPress}></Button>
        </View>
       
        <ScrollView
          style={styles.listContainer}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <SwipeListView
            style={styles.listContainer}
            data={this.state.items}
            renderItem={(data, rowMap) => <MyCard item={data.item} />}
            renderHiddenItem={(data, rowMap) => (
              <TouchableOpacity
                style={styles.hiddenItemRemove}
                onPress={() => {
                  this.setState({ itemToDelete: data.item });
                  this.deleteItem();
                }}>
                <Text style={css.buttonText}>Remove</Text>
              </TouchableOpacity>
            )}
            leftOpenValue={0}
            rightOpenValue={-85}
          />
        </ScrollView>
         <View style={[styles.container, { marginBottom: 40 }]}>
          <Button label="Logout" onPress={this.handleBackPress}></Button>
        </View>
      </View>
    );
  }

  deleteItem = async () => {
    console.log('delete pressed');
    db.deleteItem(this.state.itemToDelete);
    this.load();
  };

  handleBackPress = () => {
    this.props.navigation.navigate('Login');
  };

  handleAddPress = () => {
    this.props.navigation.navigate('AddItem');
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: css.bg,
    flex: 1,
    flexDirection: 'column',
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  listContainer: {
    width: '100%',
  },
  hiddenItemRemove: {
    width: '50%',
    right: '10%',
    textAlign: 'right',
    alignSelf: 'flex-end',
    backgroundColor: '#ff0000',
    marginBottom: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.7)',
    borderRadius: 4,
    margin: 5,
  },
});
