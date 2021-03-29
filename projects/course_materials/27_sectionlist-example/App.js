//This is an example code for SectionList//
import React, { Component } from 'react';
//import react in our code.
import {
  StyleSheet,
  View,
  SectionList,
  Text,
  Platform,
  Alert,
} from 'react-native';
//import all the components we are going to use.

export default class App extends Component<{}> {
  scrollRef=React.createRef()
  GetSectionListItem = item => {
    //Function for click on an item
    this.scrollRef.scrollToLocation({itemIndex:18})
    Alert.alert(item);
  };
  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View
        style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}
      />
    );
  };

  render() {
    var A = [
      { id: '1', value: 'Afghanistan' },
      { id: '2', value: 'Afghanistan' },
      { id: '3', value: 'Afghanistan' },
    ];
    var B = [
      { id: '4', value: 'Benin' },
      { id: '5', value: 'Bhutan' },
      { id: '6', value: 'Bosnia' },
      { id: '7', value: 'Botswana' },
      { id: '8', value: 'Brazil' },
      { id: '9', value: 'Brunei' },
      { id: '10', value: 'Bulgaria' },
    ];
    var C = [
      { id: '11', value: 'Cambodia' },
      { id: '12', value: 'Cameroon' },
      { id: '13', value: 'Canada' },
      { id: '14', value: 'Cabo' },
    ]

    return (
      <View style={{ marginTop: Platform.OS == 'ios' ? 20 : 30 }}>
      
        <SectionList
          ref={ref=>(this.scrollRef=ref)}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          sections={[
            { title: 'Section Head For Data A', data: A },
            { title: 'Section Head For Data B', data: B },
            { title: 'Section Head For Data C', data: C }
          ]}
          renderSectionHeader={({ section }) => (
            <Text style={styles.SectionHeaderStyle}> {section.title} </Text>
          )}
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <Text
              style={styles.SectionListItemStyle}
              //Item Separator View
              onPress={this.GetSectionListItem.bind(
                this,
                'Id: ' + item.id + ' Name: ' + item.value
              )}>
              {item.value}
            </Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SectionHeaderStyle: {
    backgroundColor: '#CDDC89',
    fontSize: 20,
    padding: 5,
    color: '#fff',
  },

  SectionListItemStyle: {
    fontSize: 15,
    padding: 15,
    color: '#000',
    backgroundColor: '#F5F5F5',
  },
});
