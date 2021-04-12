import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Picker,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Button from './shared/Button';
import FormTextInput from './shared/FormTextInput';
import MyListView from './ShoppingCart';
import db from '../db-mock/db-mock';
import css from '../css/css';



class AddMyItem extends React.Component {
  state= {
    name: '',
    type: 'Élelmiszer',
    price: null,
    piece: null,
    measure: 'liter',
  };

  static navigationOptions = {
    header: null,
  };

  handleNameChange = (name) => {
    this.setState({ name: name });
  };

  handleTypeChange = (type) => {
    this.setState({ type: type });
  };

  handlePriceChange = (price) => {
    price.replace(/[^0-9]/g, '');
    if (price < 0) {
      price = null;
    }
    this.setState({ price: price });
  };

  handlePieceChange = (piece) => {
    piece.replace(/[^0-9]/g, '');
    if (piece < 0) {
      piece = null;
    }
    this.setState({ piece: piece });
  };
  handleMeasureChange = (measure) => {
    this.setState({ measure: measure });
  };

  handleSubmitPress = () => {
    if (
      this.state.name == '' ||
      this.state.type == '' ||
      this.state.price == null ||
      this.state.price == '' ||
      this.state.piece == null ||
      this.state.piece == '' ||
      this.state.measure == ''
    ) {
      alert('Hiányzó adatok vannak a form-ban, kérlek töltsd ki!');
    } else {
      db.addNewItem(this.state);
      this.handleBackPress();
    }
  };

  handleBackPress = () => {
    this.props.navigation.navigate('ShoppingCart');
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View>
            <Text style={styles.title}>Adjon hozzá új itemet a bevásárlólistához, ami még nincs a listán!</Text>

            <FormTextInput
              value={this.state.name}
              onChangeText={this.handleNameChange}
              placeholder="Élelmiszer"
              style={styles.form}
            />
            <Picker
              selectedValue={this.state.type}
              style={styles.form}
              onValueChange={(itemValue) => {
                this.setState({ type: itemValue });
              }}>
              <Picker.Item label="Élelmiszer" value="Élelmiszer" />
              <Picker.Item label="Zöldség/Gyümölcs" value="Zöldség/Gyümölcs" />
              <Picker.Item label="NonFood" value="NonFood" />
            </Picker>
            <FormTextInput
              value={this.state.price}
              onChangeText={this.handlePriceChange}
              keyboardType="numeric"
              style={styles.form}
              placeholder="Ára"
            />
            <FormTextInput
              value={this.state.piece}
              onChangeText={this.handlePieceChange}
              keyboardType="numeric"
              style={styles.form}
              placeholder="Mennyiség"
            />
            <Picker
              selectedValue={this.state.measure}
              style={styles.form}
              onValueChange={(itemValue) => {
                this.setState({ measure: itemValue });
              }}>
              <Picker.Item label="liter" value="liter" />
              <Picker.Item label="kg" value="kg" />
              <Picker.Item label="csomag" value="csomag" />
            </Picker>
            <Button
              label="Send"
              style={css.button}
              onPress={this.handleSubmitPress}
            />
            <Button
              label="Back"
              style={css.button}
              onPress={this.handleBackPress}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#d1c8c5',
  },
  form: {
    marginBottom: 20,
    height: 30,
    textAlign: 'left',
    borderRadius: 5,
    fontSize: 15,
    alignItems: 'center',
    paddingLeft: 9,
    backgroundColor: '#fff'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,

  },
});

export default AddMyItem;
