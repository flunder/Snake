import React, { memo, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Food as FoodType } from "@snake/types";
import { COUNTDOWN_START } from "@snake/constants";
import { Colors } from "@snake/theme";

import { Food } from "./Food";

interface Props {
  food: FoodType | null;
  clearTimedFood: () => void;
  isPaused: boolean;
}

const FoodTimed = memo(({ food, clearTimedFood, isPaused }: Props) => {
  const [counter, setCounter] = useState(COUNTDOWN_START);
  const foodHasTimedOut = () => counter <= 0;

  useEffect(() => {
    if (!foodHasTimedOut()) {
      const timer = setTimeout(() => {
        !isPaused && setCounter((val) => val - 1);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      clearTimedFood();
    }
  }, [counter, isPaused]);

  useEffect(() => {
    setCounter(COUNTDOWN_START);
  }, [food]);

  if (food === null) return null;

  return (
    <Food food={food}>
      <View style={styles.container}>
        <Text style={styles.text}>{counter}</Text>
      </View>
    </Food>
  );
});

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
    opacity: 0.8
  }
});

export { FoodTimed };
