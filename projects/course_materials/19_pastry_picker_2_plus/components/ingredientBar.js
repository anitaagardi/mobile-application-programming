import React, { type Element } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//type checking
type PropType = {
  backgroundColor: string,
  label: string,
  flex: number,
};

const styles = StyleSheet.create({
  ingredientColumn: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
  },
  bar: {
    alignSelf: 'flex-start',
    flexGrow: 0,
  },
  label: {
    flex: 0.2,
  },
});

export default function IngredientBar({
  backgroundColor,
  flex,
  label,
}: PropType): Element<View> {
  return (
    <View style={styles.ingredientColumn}>
      <View style={styles.bar} />
      <View style={{ backgroundColor, flex }} />
      <View style={styles.label}>
        <Text>{label}</Text>
      </View>
    </View>
  );
}
