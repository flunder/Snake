import { Coordinate } from "./types";

export const FRUIT = {
  "🍒": "🍒",
  "🍓": "🍓",
  "🍇": "🍇",
  "🍉": "🍉",
  "🍑": "🍑",
  "🍊": "🍊"
};

export const MEAT = {
  "🍔": "🍔",
  "🍖": "🍖",
  "🌭": "🌭",
  "🌯": "🌯"
};

export const FRUIT_BG = [`#EDA0A9`, "#FFD98B"];
export const SNAKE_INITIAL_POSITION: Coordinate[] = [{ x: 5, y: 5 }];
export const GAME_BOUNDS = { xMin: 0, xMax: 35, yMin: 0, yMax: 65 };
export const MOVE_INTERVAL = 25;
export const SCORE_INCREMENT = 10;
export const SCORE_INCREMENT_TIMED = 100;
export const MINIMUM_SNAKE_LENGTH = 4;
export const COUNTDOWN_START = 5;
export const TIMED_FOOD_APPEAR_CHANCE = 200; /* 1 in 200 */

export const ASYNC_STORAGE_KEYS = {
  ENABLE_KEYS: "ENABLE_KEYS"
};
