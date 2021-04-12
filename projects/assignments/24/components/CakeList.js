import * as React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Button,
  AsyncStorage,
  View,
} from 'react-native';
import CakeCard from './CakeCard';
import db from '../dao/database.js';
import colors from '../constants/colors';

export default class CakeList extends React.Component {
  constructor(props) {
    super(props);
    this.setState({db:{}});
    //this.setState({ cakes: db.getCakes() });
  }
  static navigationOptions = {
    header: null,
  };
  
  UNSAFE_componentWillMount() {
    this.setState({ cakes: db.getCakes() });
  }
  
  componentDidMount() {
  
    //this.load();
    this.props.navigation.addListener('willFocus', this.load);
  }
  load = () => {
    this.setState({ cakes: db.getCakes() });
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View style={{ flex: 1, width: 360, alignContent: 'center' }}>
            <Text style={styles.paragraph}>Our Finest Cakes</Text>
            <View style={styles.button}>
              <Button
                color={colors.buttons}
                onPress={this._switchToAdd}
                title="New cake"
              />
            </View>
            <View style={styles.button}>
              <Button
                color={colors.buttons}
                onPress={this._logout}
                title="Logout"
              />
            </View>
            {this.state.cakes.length != 0 ? (
              <FlatList
                style={styles.list}
                data={this.state.cakes}
                renderItem={({ item }) => {
                  return <CakeCard cake={item} />;
                }}
                keyExtractor={(item, index) => index}
                extraData={this.state}
              />
            ) : (
              <Text style={styles.paragraph}>No cake in store for ya!</Text>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
  _switchToAdd = () => {
    this.props.navigation.navigate('AddCake');
  };
  _logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    flex: 1,
    flexDirection: 'column',
    paddingTop: 40,
    alignItems: 'center',
  },
  paragraph: {
    margin: 12,
    marginTop: 0,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.font,
    textAlign: 'center',
  },
  button: {
    padding: 8,
  },
});
