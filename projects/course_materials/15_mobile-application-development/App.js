import * as React from 'react';
import { ScrollView,Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import FirstExample from './components/FirstExample';
import SecondExample from './components/SecondExample';
import ThirdExample from './components/ThirdExample';
import FourthExample from './components/FourthExample';
import FifthExample from './components/FifthExample';
import SixthExample from './components/SixthExample';
import SeventhExample from './components/SeventhExample';
import EightExample from './components/EightExample';
import NinthExample from './components/NinthExample';
import EleventhExample from './components/TenthExamples/EleventhExample';
import TwelfthExample from './components/TenthExamples/TwelfthExample';
import ThirteenthExample from './components/TenthExamples/ThirteenthExample';
import FourteenthExample from './components/TenthExamples/FourteenthExample';
import FifteenthExample from './components/TenthExamples/FifteenthExample';
import SixteenthExample from './components/TenthExamples/SixteenthExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone! Save to get a shareable.
        </Text>
        <ScrollView>
        <Card>
         <FirstExample />
        </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
