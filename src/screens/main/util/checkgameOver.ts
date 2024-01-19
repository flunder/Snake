import { Boundaries, Coordinate } from "@snake/types";

const checkGameOver = (
  snake: Coordinate[],
  boundaries: Boundaries
): boolean => {
  const snakeHead = snake[0];
  const snakeTail = snake.slice(1);

  // Snake ate itself?

  const snakeEatsSnake = snakeTail.some(
    (segment) => segment.x === snakeHead.x && segment.y === snakeHead.y
  );
  if (snakeEatsSnake) return true;

  // Snake hit the bounds?

  return (
    snakeHead.x < boundaries.xMin ||
    snakeHead.x > boundaries.xMax ||
    snakeHead.y < boundaries.yMin ||
    snakeHead.y > boundaries.yMax
  );
};

export { checkGameOver };
