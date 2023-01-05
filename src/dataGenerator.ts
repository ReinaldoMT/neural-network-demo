import { Point } from './types'

export const generatePoints = (length: number): Point[] => Array.from({length}, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
    }));