import { FRUIT } from "@snake/constants";
import { MEAT } from "@snake/constants";
import { FruitType, MeatType } from "@snake/types";

const getRandomFood = (type?: "meat" | "fruit"): FruitType | MeatType => {
  const pool = type === "fruit" ? FRUIT : MEAT;
  const randomId = Math.floor(Math.random() * Object.keys(pool).length);
  return Object.keys(pool)[randomId];
};

export { getRandomFood };
