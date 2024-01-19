import * as Updates from "expo-updates";
import React, { useState, useEffect, useCallback } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import { Colors } from "@snake/theme";
import { Coordinate, Direction, Food as FoodType } from "@snake/types";

import { Snake } from "./components/Snake";
import { Food } from "./components/Food";
import { FoodTimed } from "./components/FoodTimed";
import { Header } from "./components/Header";
import { checkEatsFood } from "./util/checkEatsFood";
import { checkGameOver } from "./util/checkgameOver";
import { createTimedFood } from "./util/createTimedFood";

import {
  SNAKE_INITIAL_POSITION,
  GAME_BOUNDS,
  MOVE_INTERVAL,
  SCORE_INCREMENT,
  SCORE_INCREMENT_TIMED,
  MINIMUM_SNAKE_LENGTH
} from "@snake/constants";
import { getNewFood } from "./util/getNewFood";
import { KeyboardInput } from "./components/KeyboardInput";

const Main = (): JSX.Element => {
  const [direction, setDirection] = useState<Direction>(Direction.Right);
  const [snake, setSnake] = useState<Coordinate[]>(SNAKE_INITIAL_POSITION);
  const [food, setFood] = useState<FoodType>(getNewFood());
  const [foodTimed, setFoodTimed] = useState<FoodType | null>(getNewFood());
  const [isKeyboardEnabled, setIsKeyboardEnabled] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!isGameOver) {
      const intervalId = setTimeout(
        () => !isPaused && moveSnake(),
        MOVE_INTERVAL
      );
      return () => clearTimeout(intervalId);
    }
  }, [snake, isGameOver, isPaused]);

  const moveSnake = () => {
    const snakeHead = snake[0];
    const newSnakeHead = { ...snakeHead };

    if (checkGameOver(snake, GAME_BOUNDS)) {
      setIsGameOver((prev) => !prev);
      return;
    }

    if (createTimedFood(!!foodTimed)) {
      setFoodTimed(getNewFood());
    }

    switch (direction) {
      case Direction.Up:
        newSnakeHead.y -= 1;
        break;
      case Direction.Down:
        newSnakeHead.y += 1;
        break;
      case Direction.Right:
        newSnakeHead.x += 1;
        break;
      case Direction.Left:
        newSnakeHead.x -= 1;
        break;
      default:
        break;
    }

    if (checkEatsFood(snakeHead, food, 3)) {
      setFood(getNewFood());
      setScore((val) => (val += SCORE_INCREMENT));
      setSnake([newSnakeHead, ...snake]);
    } else if (foodTimed && checkEatsFood(snakeHead, foodTimed, 3)) {
      setFoodTimed(null);
      setScore((val) => (val += SCORE_INCREMENT_TIMED));
      setSnake([newSnakeHead, ...snake]);
    } else {
      const minLengthReached = snake.length >= MINIMUM_SNAKE_LENGTH;
      const tail = minLengthReached ? snake.slice(0, -1) : snake;
      setSnake([newSnakeHead, ...tail]);
    }
  };

  const pan = Gesture.Pan().onUpdate(({ translationX, translationY }) => {
    if (Math.abs(translationX) > Math.abs(translationY)) {
      if (translationX > 0) {
        setDirection(Direction.Right);
      } else {
        setDirection(Direction.Left);
      }
    } else {
      if (translationY > 0) {
        setDirection(Direction.Down);
      } else {
        setDirection(Direction.Up);
      }
    }
  });

  const handlePause = useCallback(() => {
    setIsPaused((isPaused) => !isPaused);
  }, [isPaused]);

  const handleRestart = useCallback(() => {
    setScore(0);
    setSnake(SNAKE_INITIAL_POSITION);
    setFood(getNewFood());
    setIsPaused(false);
    setIsGameOver(false);
  }, []);

  const handleToggleKeyboard = useCallback(() => {
    setIsKeyboardEnabled(!isKeyboardEnabled);
  }, [isKeyboardEnabled]);

  const handleKeyPressed = useCallback(
    ({ key }: { key: string }) => {
      switch (key) {
        case "A":
          if (direction === Direction.Right) return; // Prevent suicide
          setDirection(Direction.Left);
          break;
        case "S":
          if (direction === Direction.Up) return;
          setDirection(Direction.Down);
          break;
        case "D":
          if (direction === Direction.Left) return;
          setDirection(Direction.Right);
          break;
        case "W":
          if (direction === Direction.Down) return;
          setDirection(Direction.Up);
          break;
        case "R":
          Updates.reloadAsync();
          break;
        default:
          break;
      }
    },
    [direction]
  );

  const clearTimedFood = useCallback(() => {
    setFoodTimed(null);
  }, []);

  return (
    <GestureDetector gesture={pan}>
      <SafeAreaView style={styles.container}>
        <Header
          score={score}
          isPaused={isPaused}
          handlePause={handlePause}
          handleRestart={handleRestart}
          isKeyboardEnabled={isKeyboardEnabled}
          handleToggleKeyboard={handleToggleKeyboard}
        />
        <View style={styles.boundaries}>
          <Snake snake={snake} direction={direction} isGameOver={isGameOver} />
          <Food food={food} />
          <FoodTimed
            food={foodTimed}
            clearTimedFood={clearTimedFood}
            isPaused={isPaused}
          />
          <KeyboardInput
            isKeyboardEnabled={isKeyboardEnabled}
            handleKeyPressed={handleKeyPressed}
          />
        </View>
      </SafeAreaView>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black
  },
  boundaries: {
    flex: 1,
    borderColor: Colors.black,
    borderWidth: 12,
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  }
});

export { Main };
