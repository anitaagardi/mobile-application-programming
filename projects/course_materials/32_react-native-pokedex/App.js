import React, { Component } from 'react';
import {
  FlatList,
  View,
  Text,
  AsyncStorage,
  StyleSheet,
  Modal,
  Image,
  StatusBar,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  Button,
} from 'react-native';

export default class App extends Component {
  state = {
    pokedex: [],
    modalVisible: false,
    selectedPokemon: null,
  };

  componentDidMount() {
    this.fetchPokedex();
  }

  fetchPokedex = async () => {
    let pokedex = await this.getData('pokedex');
    if (!pokedex || !pokedex.length) {
      const pokedexType = Platform.OS === 'ios' ? 1 : 2;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokedex/${pokedexType}/`
      );
      const data = await response.json();
      pokedex = data.pokemon_entries;
      await this.saveData('pokedex', pokedex);
    }
    this.setState({ pokedex });
  };

  fetchPokemon = async index => {
    const { pokedex } = this.state;
    if (!pokedex[index].id) {
      const response = await fetch(
        pokedex[index].pokemon_species.url.replace('-species', '')
      );
      const pokemon = await response.json();
      pokedex[index] = { ...pokedex[index], ...pokemon };
      this.setState({ pokedex });
      this.saveData('pokedex', pokedex);
    }
  };

  saveData = async (key, data) => {
    try {
      const stringData = JSON.stringify(data);
      await AsyncStorage.setItem(key, stringData);
      return true;
    } catch (error) {
      return false;
    }
  };

  getData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : value;
    } catch (error) {
      return null;
    }
  };

  renderPokemonItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => this.onPressPokemonItem(index)}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>{item.pokemon_species.name}</Text>
      </View>
    </TouchableOpacity>
  );

  renderPokemonDetails = () => {
    const { pokedex, selectedPokemon } = this.state;
    return (
      <View style={styles.modalContainer}>
        {pokedex &&
        selectedPokemon &&
        pokedex[selectedPokemon] &&
        pokedex[selectedPokemon].sprites ? (
          <>
            <Image
              style={styles.pokeImage}
              source={{ uri: pokedex[selectedPokemon].sprites.front_default }}
            />
            <Text style={styles.pokeName}>{pokedex[selectedPokemon].name}</Text>
          </>
        ) : (
          <ActivityIndicator size="large" />
        )}
        <Button title="Back" onPress={this.onPressBackButton} />
      </View>
    );
  };
  
  renderEmptyPlaceholder = () => (
    <View style={styles.emptyComponentContainer}>
      <ActivityIndicator size="large" />
    </View>
  );

  onPressPokemonItem = index => {
    this.fetchPokemon(index);
    this.setState({ selectedPokemon: index });
    this.openModal();
  };

  onPressBackButton = () => {
    this.closeModal();
    this.setState({ selectedPokemon: null });
  };

  openModal = () => {
    this.setState({ modalVisible: true });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  keyExtractor = item => item.entry_number.toString();

  render() {
    return (
      <>
        <StatusBar hidden />
        <Modal
          animationType="slide"
          transparent
          visible={this.state.modalVisible}
          onRequestClose={this.closeModal}>
          {this.renderPokemonDetails()}
        </Modal>
        <FlatList
          style={styles.list}
          data={this.state.pokedex}
          renderItem={this.renderPokemonItem}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmptyPlaceholder}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemLabel: {
    fontSize: 20,
  },
  emptyComponentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    opacity: 0.8,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokeImage: {
    height: 200,
    width: 200,
  },
  pokeName: {
    fontSize: 25,
  },
});
