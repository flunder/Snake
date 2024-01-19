import React, { memo, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

import { pickOne } from "@snake/utils";
import { Food as FoodType } from "@snake/types";
import { FRUIT_BG } from "@snake/constants";

interface Props {
  food: FoodType;
  children?: React.ReactNode;
}

const Food = memo(({ food, children }: Props) => {
  const bgColor = useMemo(() => {
    return { backgroundColor: pickOne(FRUIT_BG) };
  }, [food]);

  const locationStyle = {
    left: food.x * 10,
    top: food.y * 10
  };

  return (
    <View style={[styles.food, locationStyle, bgColor]}>
      <Text>{food.fruit}</Text>
      {children}
    </View>
  );
});

const styles = StyleSheet.create({
  food: {
    position: "absolute",
    padding: 5,
    marginLeft: -2.5,
    marginTop: -2.5,
    borderRadius: 5
  }
});

export { Food };
