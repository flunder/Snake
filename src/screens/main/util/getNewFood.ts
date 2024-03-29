import { Food as FoodType } from "@snake/types";
import { getRandomFood } from "./getRandomFood";
import { getRandomPosition } from "./getRandomPosition";

export const getNewFood = (): FoodType => {
  return {
    ...getRandomPosition(),
    icon: getRandomFood("fruit")
  };
};
