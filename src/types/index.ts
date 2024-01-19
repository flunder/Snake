import { FRUIT } from "@snake/constants";
import { MEAT } from "@snake/constants";

// Util
export type Values<T> = T[keyof T];

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

export type FruitType = Values<typeof FRUIT>;
export type MeatType = Values<typeof MEAT>;

export interface Food extends Coordinate {
  icon: FruitType | MeatType;
}
