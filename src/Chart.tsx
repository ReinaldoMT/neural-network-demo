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

export interface ChartParams {
    points: Point[];
    chartPointClassifier: (point: Point) => 1 | -1;
}

export const Chart = ({ points, chartPointClassifier }: ChartParams) => {
  const referenceLineData = [
    { x: 0, y: 0 },
    { x: 100, y: 100 },
  ];
  const positivePoints = points.filter(point => chartPointClassifier(point)<0);
  const negativePoints = points.filter(point => chartPointClassifier(point)>=0);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <ReferenceLine
          segment={referenceLineData}
          stroke="cyan"
          strokeWidth={1}
          ifOverflow="visible"
        ></ReferenceLine>
        <CartesianGrid></CartesianGrid>
        <XAxis type="number" dataKey="x" name="x" />
        <YAxis type="number" dataKey="y" name="y" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="positive" data={positivePoints} fill="lime"></Scatter>
        <Scatter name="negative" data={negativePoints} fill="red"></Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
};
