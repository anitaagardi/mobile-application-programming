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
import db from '../db/db.js';
import AppCard from './AppCard';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };
  state= {
    db: {},
    apps: [],
  };
  UNSAFE_componentWillMount() {
    this.setState({ apps: db.getAppList() });
  }
  componentDidMount() {
    this.load();
    this.props.navigation.addListener('willFocus', this.load);
  }
  load = () => {
    this.setState({ apps: db.getAppList() });
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View style={{ flex: 1, width: 360, alignContent: 'center' }}>
            <Text style={styles.paragraph}>App List</Text>
            {this.state.apps.length != 0 ? (
              <FlatList style = {styles.textStyle}
                data={this.state.apps}
                renderItem={({ item }) => (
                  <AppCard app={item} />
                )}
              />
            ) : (
              <Text style={styles.paragraph}>App list is empty</Text>
            )}
          </View>
          <View style={styles.button}>
              <Button color={'lightgray'} onPress={this.menu} title="Menu" />
            </View>
        </ScrollView>
      </View>
    );
  }
  menu = () => {
    this.props.navigation.navigate('Menu');
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 40,
    alignItems: 'center',
    maxWidth: '360px'

  },
  paragraph: {
    backgroundColor: 'black',
    width: '100%',
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: 40,
    color: 'white',
    padding: '10px',
  },
  button: {
    padding: 8,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
    backgroundColor: 'black',
  },
});
