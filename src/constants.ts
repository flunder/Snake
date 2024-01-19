import { Coordinate } from "./types";

export const FRUIT = {
  "🍒": "🍒",
  "🍓": "🍓",
  "🍇": "🍇",
  "🍉": "🍉",
  "🍑": "🍑",
  "🍊": "🍊"
};

export const SNAKE_INITIAL_POSITION: Coordinate[] = [{ x: 5, y: 5 }];
export const FOOD_INITIAL_POSITION: Coordinate = { x: 5, y: 20 };
export const GAME_BOUNDS = { xMin: 0, xMax: 35, yMin: 0, yMax: 65 };
export const MOVE_INTERVAL = 25;
export const SCORE_INCREMENT = 10;
export const MINIMUM_SNAKE_LENGTH = 4;
