import React from "react";
import { TIMED_FOOD_APPEAR_CHANCE } from "@snake/constants";

const createTimedFood = (foodTimed: boolean): boolean => {
  if (foodTimed) return false; // food currently exists
  return Math.random() < 1 / TIMED_FOOD_APPEAR_CHANCE;
};

export { createTimedFood };
