import { useMemo } from 'react';
import { scaleBand, scaleLinear } from '@visx/scale';

export const useXScale = (data: Record<string | number, string | number>[], xMax: number, xAxisKey: string, barPadding: number) => {
  return useMemo(
    () => scaleBand<string>({
      domain: data.map(d => d[xAxisKey] as string),
      round: true,
      range: [0, xMax],
      padding: barPadding
    }),
    [xMax, data, xAxisKey, barPadding],
  );
}

export const useYScale = (data: Record<string | number, string | number>[], yMax: number, yAxisKey: string) => {
  return useMemo(
    () => scaleLinear<number>({
      domain: [0, Math.max(...data.map(d => Number(d[yAxisKey]) * 100))],
      range: [yMax, 0],
      round: true,
    }),
    [yMax, data, yAxisKey],
  );
}
