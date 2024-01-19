export type Values<T> = T[keyof T];

import { FRUIT } from "@snake/constants";

export interface Coordinate {
  x: number;
  y: number;
}

export enum Direction {
  Left,
  Right,
  Up,
  Down
}

export interface Boundaries {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
}

export type fruitType = Values<typeof FRUIT>;

export interface Food extends Coordinate {
  fruit: fruitType;
}
