import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "@snake/theme";
import { Food as FoodType } from "@snake/types";

const Food = ({ food }: { food: FoodType }): JSX.Element => {
  const locationStyle = {
    left: food.x * 10,
    top: food.y * 10
  };

  return (
    <View style={[styles.food, locationStyle]}>
      <Text>{food.fruit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  food: {
    position: "absolute",
    backgroundColor: `${Colors.red}99`,
    padding: 5,
    marginLeft: -2.5,
    marginTop: -2.5,
    borderRadius: 5
  }
});

export { Food };
