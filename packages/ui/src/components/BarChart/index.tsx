import React from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { LinearGradient } from '@visx/gradient';
import { PatternLines } from "@visx/pattern";
import { Text } from '@visx/text';

import { BarsProps, BarPatternLineOrientation } from './types';
import { useCsvData } from '../../hooks/useCsvData';
import { useXScale, useYScale } from '../../hooks/useScales';

const WHITE = "#fff"
const BLACK = "#000"
const DEFAULT_FONT_SIZE = 12
const DEFAULT_LABEL_PADDING = 10

const DEFAULT_BACKGROUND = {
  gradient: {
    from: WHITE,
    to: WHITE,
  },
  borderRadius: 0
}

const DEFAULT_BARS = {
  color: BLACK,
  padding: 0.3,
  usePatternLines: false,
  patternLineOrientation: 'diagonal' as BarPatternLineOrientation,
  verticalMargin: 120,
}

export const BarChart = ({
  width,
  height,
  csvFileUrl,
  background = DEFAULT_BACKGROUND,
  bars = DEFAULT_BARS,
  xAxis = {
    label: 'X Axis',
    showLabel: false,
    fontSize: DEFAULT_FONT_SIZE,
    labelPaddingFromBottom: DEFAULT_LABEL_PADDING,
  },
  yAxis = {
    label: 'Y Axis',
    showLabel: true,
    fontSize: DEFAULT_FONT_SIZE,
    labelPaddingFromLeft: DEFAULT_LABEL_PADDING,
  },
}: BarsProps) => {
  const leftMargin = yAxis.showLabel ? (yAxis.labelPaddingFromLeft ?? 0) : 0;
  const xMax = width - leftMargin;
  const yMax = height - bars.verticalMargin;
  const data = useCsvData(csvFileUrl);
  const xScale = useXScale(data, xMax, xAxis.label, bars.padding);
  const yScale = useYScale(data, yMax, yAxis.label);
  
  console.log(bars)
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
      <Group top={bars.verticalMargin / 2} left={leftMargin}>
        {data.map((d: any) => {
          const xValue = d[xAxis.label];
          const barWidth = xScale.bandwidth();
          const yValue = Number(d[yAxis.label]) * 100;
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
      </Group>
      {xAxis.showLabel && (
        <Text
          x={width / 2}
          y={height - (xAxis.labelPaddingFromBottom ?? 0)}
          textAnchor="middle"
          fontSize={xAxis.fontSize}
        >
          {xAxis.label}
        </Text>
      )}
      {yAxis.showLabel && (
        <Text
          x={yAxis.labelPaddingFromLeft ?? 0}
          y={height / 2}
          transform={`rotate(-90, 15, ${height / 2})`}
          textAnchor="middle"
          fontSize={yAxis.fontSize}
        >
          {yAxis.label}
        </Text>
      )}
    </svg>
  );
}
