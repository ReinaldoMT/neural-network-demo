import { Point } from './types';

export const generatePoints = (length: number): Point[] =>
  Array.from({ length }, () => generatePoint());

export const generatePoint = (): Point => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
});

export const getSample = ({ x, y }: Point) => (y < x ? 1 : -1);
