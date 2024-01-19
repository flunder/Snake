export const randomNumberBetween = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const pickOne = (list: string[]) => {
  const index = randomNumberBetween(1, list.length);
  return list[index - 1];
};
