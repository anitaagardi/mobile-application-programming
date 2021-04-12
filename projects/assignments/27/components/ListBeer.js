import React from 'react';
import { Text, View, StyleSheet, ImageBackground, FlatList, Image } from 'react-native';

import DB from '../db/MockDB'

export default class ListBeer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      beers: []
    };
  }
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.load();
  }

  load = () => {
    this.setState({beers:DB.getAll()});
  }



  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/beerbg.jpg')} style={{width: '100%', height: '100%'}}>
          <FlatList
            data={this.state.beers}
            renderItem={renderItem}
            keyExtractor={beer => beer.id}
          />
        </ImageBackground>
      </View>
    )
  }
}

const LOGOS = {
  borsodi: require('../assets/borsodi.jpg'),
  soproni: require('../assets/soproni.jpg'),
  kőbányai: require('../assets/kobanyai.jpg')
}

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Image
          style={styles.logo}
          source={LOGOS[item.name.toLowerCase()]}
    />
    <View style={{alignItems:'flex-end', width:'75%'}}>
      <Text style={styles.title}>{item.name}, {item.type}</Text>
      <Text style={styles.title}>{item.currentDate}</Text>
    </View>  
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
  item: {
    backgroundColor: 'gold',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:'row',
    borderRadius:15
  },
  title: {
    fontSize: 16
  },
  logo:{
    width:50,
    height:50
  }
});