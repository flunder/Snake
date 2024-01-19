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

export const GAME_OVER_PHRASES = [
  "Oh Gooddddd!",
  "Oh, for the love of all that's holy!",
  "Sweet mercy, why?",
  "Well, that's just fantastic!",
  "Good grief, not again!",
  "Oh heavens, not this time!",
  "Great, just what I needed.",
  "Oh dear, ffs game over.",
  "Well, that escalated quickly.",
  "Oh, the agony of defeat.",
  "Oh, the humanity!",
  "Not on my watch!",
  "What in the world just happened?",
  "Oh, the horror!",
  "This is a disaster!",
  "Good gracious, no way!",
  "Well, that's a wrap.",
  "Oh, the despair!",
  "You've got to be kidding me."
];
