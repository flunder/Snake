import React from "react";
import { StyleSheet, View } from "react-native";

import { Colors } from "@snake/theme";
import { SnakeEyes } from "./SnakeEyes";
import { Coordinate, Direction } from "@snake/types";

interface Props {
  snake: Coordinate[];
  direction: Direction;
  isGameOver: boolean;
}

const Snake = ({ snake, direction, isGameOver }: Props): JSX.Element => {
  return (
    <>
      {snake.map((segment: Coordinate, index) => {
        const isFirst = index === 0;
        const isLast = index === snake.length - 1;
        const borderRadius = isFirst || isLast ? 7 : 0;

        const segmentStyle = {
          left: segment.x * 10,
          top: segment.y * 10,
          borderRadius: borderRadius
        };
        return isFirst ? (
          <View key={index} style={[styles.snake, segmentStyle]}>
            <SnakeEyes direction={direction} isGameOver={isGameOver} />
          </View>
        ) : (
          <View
            key={index}
            style={[styles.snake, segmentStyle, { zIndex: -1 }]}
          />
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  snake: {
    width: 15,
    height: 15,
    backgroundColor: Colors.black,
    position: "absolute"
  }
});

export { Snake };
