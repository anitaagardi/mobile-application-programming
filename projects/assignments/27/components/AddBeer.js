import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Button} from "react-native";

import DB from '../db/MockDB'

const DATA = [
  {
    title: "Beers",
    data: ["Borsodi", "Soproni", "Kőbányai"]
  },
  {
    title: "Types",
    data: ["bottle", "box", "jar", "glass"]
  }
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item}</Text>
  </TouchableOpacity>
);

export default class AddBeer extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedBeer: null,
      selectedType: null
    };
  }

  renderBeer = ({ item }) => {
    const backgroundColor = item === this.state.selectedBeer ? "goldenrod" : "gold";

    return (
      <Item
        item={item}
        onPress={() => this.setState({selectedBeer:item})}
        style={{ backgroundColor }}
      />
    );
  };

  renderType = ({ item }) => {
    const backgroundColor = item === this.state.selectedType ? "goldenrod" : "gold";

    return (
      <Item
        item={item}
        onPress={() => this.setState({selectedType:item})}
        style={{ backgroundColor }}
      />
    );
  };

  currentDate=()=>{

      const date = new Date().getDate();
      const month = new Date().getMonth() + 1;
      const year = new Date().getFullYear();

      return year + '-' + month + '-' + date;
  }

  addNewBeer = () => {
    DB.add({name: this.state.selectedBeer, type: this.state.selectedType, currentDate: this.currentDate()});
    this.setState({selectedBeer:null, selectedType:null})
    this.props.navigation.navigate("ListBeer");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../assets/beerbg.jpg')} style={{width: '100%', height: '100%'}}>
          <View style={styles.header}>{DATA[0].title}</View>
          <FlatList
            data={DATA[0].data}
            renderItem={this.renderBeer}
            keyExtractor={(item) => item.id}
            extraData={this.state.selectedBeer}
          />
          <View style={styles.header}>{DATA[1].title}</View>
          <FlatList
            data={DATA[1].data}
            renderItem={this.renderType}
            keyExtractor={(item) => item.id}
            extraData={this.state.selectedType}
          />
          <Button
            color={'#99CF0D'}
            title="Adding"
            onPress={() => this.addNewBeer()}
          />
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  item: {
    width:'80%',
    margin:'auto',
    marginTop: 16,
    paddingVertical: 15,
    borderWidth: 3,
    borderColor: "#20232a",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  header: {
    padding:10,
    fontSize: 32,
    fontFamily:'arial',
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 16,
  }
});