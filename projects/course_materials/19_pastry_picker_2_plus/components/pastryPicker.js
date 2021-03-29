import React, { Component, type Element } from 'react';
import { StyleSheet, View } from 'react-native';

import IngredientBar from './ingredientBar';
import PastryButton from './pastryButton';

const PASTRIES = {
  croissant: {
    label: '🥐  Croissants',
    flour: 0.7,
    butter: 0.5,
    sugar: 0.2,
    eggs: 0,
  },
  cookie: {
    label: '🍪  Cookies',
    flour: 0.5,
    butter: 0.4,
    sugar: 0.5,
    eggs: 0.2,
  },
  pancake: {
    label: '🥞  Pancakes',
    flour: 0.7,
    butter: 0.5,
    sugar: 0.3,
    eggs: 0.3,
  },
  doughnut: {
    label: '🍩  Dougnuts',
    flour: 0.5,
    butter: 0.2,
    sugar: 0.8,
    eggs: 0.1,
  },
  muffin: {
    label: '🍩  Muffins',
    flour: 0.8,
    butter: 0.3,
    sugar: 0.7,
    eggs: 0.2,
    oil:0.3,
  },
};

const styles = StyleSheet.create({
  pastryPicker: {
    flex: 1,
    flexDirection: 'column',
    margin: 20,
  },
  ingredientContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  /*ingredientColumn: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
  },*/
  buttons: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingRight: 20,
    paddingLeft: 20,
    flex: 0.3,
  },
});

type StateType = {
  selectedPastry: string,
};

export default class PastryPicker extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selectedPastry: 'croissant',
    };
  }

  state: StateType;

  setPastry = (selectedPastry: string) => {
    this.setState({ selectedPastry });
  };

  buttons(): Array<View> {
    return Object.keys(PASTRIES).map(
      (key: string): Element<View> => (
        <PastryButton
          key={key}
          isActive={this.state.selectedPastry === key}
          onPress={() => {
            this.setPastry(key);
          }}
          label={PASTRIES[key].label}
        />
      )
    );
  }

  render(): Element<View> {
    const { flour, butter, sugar, eggs,oil } = PASTRIES[this.state.selectedPastry];

    return (
      <View style={styles.pastryPicker}>
        <View style={styles.buttons}>{this.buttons()}</View>
        <View style={styles.ingredientContainer}>
          <IngredientBar backgroundColor="#F2D8A6" flex={flour} label="Flour" />
          <IngredientBar
            backgroundColor="#FFC049"
            flex={butter}
            label="Butter"
          />
          <IngredientBar backgroundColor="#CACACA" flex={sugar} label="Sugar" />
          <IngredientBar backgroundColor="#FFDE59" flex={eggs} label="Eggs" />
           <IngredientBar backgroundColor="#c4ce22" flex={oil} label="Oil" />
        </View>
      </View>
    );
  }
}
