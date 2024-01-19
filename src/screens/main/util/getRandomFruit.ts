import { FRUIT } from "@snake/constants";
import { fruitType } from "@snake/types";

const getRandomFruit = (): fruitType => {
  const randomId = Math.floor(Math.random() * Object.keys(FRUIT).length);
  return Object.keys(FRUIT)[randomId];
};

export { getRandomFruit };
