import {
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Point } from './types';

export const Chart = ({ points }: { points: Point[] }) => {
  const referenceLineData = [
    { x: 0, y: 0 },
    { x: 100, y: 100 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <ReferenceLine
          segment={referenceLineData}
          stroke="yellow"
          strokeWidth={2}
          ifOverflow="visible"
        ></ReferenceLine>
        <CartesianGrid></CartesianGrid>
        <XAxis type="number" dataKey="x" name="x" />
        <YAxis type="number" dataKey="y" name="y" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="points" data={points} fill="white"></Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
};
