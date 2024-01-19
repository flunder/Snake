import { Coordinate } from "@snake/types";

const checkEatsFood = (
  head: Coordinate,
  food: Coordinate,
  area: number
): boolean => {
  const distanceX = Math.abs(food.x - head.x);
  const distanceY = Math.abs(food.y - head.y);
  return distanceX < area && distanceY < area;
};

export { checkEatsFood };
