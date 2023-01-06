import { Point, Weights } from './types';

export const guessPointType = (weigts: Point, point: Point) => {
  // Ponderação
  const sum = point.x * weigts.x + point.y * weigts.y;

  // Função de ativação
  return sum > 0 ? 1 : -1;
};

export const generateRandomWeights = (): Weights => ({
  x: Math.random() * 2 - 1,
  y: Math.random() * 2 - 1,
});

export const train = (
  weights: Weights,
  point: Point,
  expected: 1 | -1
): Weights => {
  const guess = guessPointType(weights, point);

  const error = expected - guess;

  return {
    x: weights.x + error * point.x,
    y: weights.y + error * point.y,
  };
};
