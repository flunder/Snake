import { Food as FoodType } from "@snake/types";
import { getRandomFruit } from "./getRandomFruit";
import { getRandomPosition } from "./getRandomPosition";

export const getNewFood = (): FoodType => {
  return {
    ...getRandomPosition(),
    fruit: getRandomFruit()
  };
};
