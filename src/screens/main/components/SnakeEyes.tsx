import React, { memo } from "react";
import { View } from "react-native";
import { Direction } from "@snake/types";
import { SnakeEyesAlive, SnakeEyesDead } from "@snake/components/Icons";

const SnakeEyes = memo(
  ({
    direction,
    isGameOver
  }: {
    direction: Direction;
    isGameOver: boolean;
  }) => {
    const rotate = {
      0: "180deg", // Left
      1: "0deg", // Right
      2: "270deg", // Up
      3: "90deg" // Down
    }[direction];

    return (
      <View
        style={{
          width: 22,
          height: 22,
          alignSelf: "center",
          top: -3,
          alignItems: "flex-end",
          justifyContent: "center",
          zIndex: 1,
          transform: [{ rotate }]
        }}
      >
        {isGameOver ? <SnakeEyesDead /> : <SnakeEyesAlive />}
      </View>
    );
  }
);

export { SnakeEyes };
