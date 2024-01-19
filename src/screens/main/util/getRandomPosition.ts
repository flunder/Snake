import { Coordinate } from "@snake/types";
import { GAME_BOUNDS } from "@snake/constants";

export const getRandomPosition = (): Coordinate => {
  const x = Math.floor(Math.random() * GAME_BOUNDS.xMax);
  const y = Math.floor(Math.random() * GAME_BOUNDS.yMax);
  return { x, y };
};
