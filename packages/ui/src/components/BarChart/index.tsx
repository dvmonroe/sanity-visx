import React from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { LinearGradient } from '@visx/gradient';
import { PatternLines } from "@visx/pattern";
import { Orientation } from '@visx/axis';
import { BarsProps, BarPatternLineOrientation } from './types';
import { useCsvData } from '../../hooks/useCsvData';
import { useBandScale, useLinearScale } from '../../hooks/useScales';
import { ChartAxis } from '../ChartAxis';
import { Grid } from '../Grid';
import { 
  DEFAULT_BACKGROUND,
  DEFAULT_BARS,
} from './constants';

export const BarChart = ({
  width,
  height,
  csvFileUrl,
  background = DEFAULT_BACKGROUND,
  bars = DEFAULT_BARS,
  leftMargin = 10,
  rightMargin = 10,
  xAxis = { label: 'X Axis' },
  yAxis = { label: 'Y Axis' },
}: BarsProps) => {
  const topMargin = bars.verticalMargin / 2
  const xMax = width - leftMargin - rightMargin;
  const yMax = height - bars.verticalMargin;
  const data = useCsvData(csvFileUrl);

  const xScale = useBandScale({
    domain: data.map(d => d[xAxis.label] as string),
    rangeMax: xMax,
    barPadding: bars.padding,
  });
  const yScale = useLinearScale({
    domainMax: Math.max(...data.map(d => Number(d[yAxis.label]))),
    rangeMax: yMax,
  });

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
      <LinearGradient id="gradient" from={background.gradient.from} to={background.gradient.to} />
      <rect width='100%' height='100%' fill="url(#gradient)" rx={background.borderRadius} />
      {bars.usePatternLines && (
        <PatternLines
          id="lines"
          height={5}
          width={5}
          stroke={bars.color}
          strokeWidth={1}
          orientation={[bars.patternLineOrientation as BarPatternLineOrientation]}
        />
      )}
      <Group top={topMargin} left={leftMargin}>
        <Grid orientation="rows" scale={yScale} width={xMax} visible={yAxis.showGrid} />
        <Grid orientation="columns" scale={xScale} height={yMax} visible={xAxis.showGrid} />
        {data.map((d: any) => {
          const xValue = d[xAxis.label];
          const barWidth = xScale.bandwidth();
          const yValue = Number(d[yAxis.label]);
          const scaledYValue = yScale(yValue);
          const barHeight = yMax - (scaledYValue ?? 0);
          const barX = xScale(xValue);
          const barY = yMax - barHeight;

          return (
            <Bar
              key={`bar-${xValue}`}
              x={barX}
              y={barY}
              width={barWidth}
              height={barHeight}
              fill={bars.usePatternLines ? "url('#lines')" : bars.color}
              stroke={bars.color}
              strokeWidth={1}
            />
          );
        })}
        <ChartAxis
          orientation={Orientation.bottom}
          scale={xScale}
          top={yMax}
          {...xAxis}
        />
        <ChartAxis
          orientation={Orientation.left}
          scale={yScale}
          {...yAxis}
        />
      </Group>
    </svg>
  );
}
