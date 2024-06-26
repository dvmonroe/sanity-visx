import React from 'react';
import { Axis } from '@visx/axis';

import {
  DEFAULT_AXIS_COLOR,
  DEFAULT_TICK_LABEL_COLOR,
  DEFAULT_TICK_LABEL_FONT_SIZE,
  DEFAULT_TICK_LABEL_TEXT_ANCHOR,
  DEFAULT_TICK_LABEL_FONT_FAMILY,
  DEFAULT_TICK_STROKE_COLOR,
  DEFAULT_LABEL_COLOR,
  DEFAULT_LABEL_FONT_SIZE,
  DEFAULT_LABEL_FONT_FAMILY,
} from './constants';

interface ChartAxisProps {
  orientation: 'top' | 'bottom' | 'left' | 'right' |  undefined;
  scale: any;
  top?: number;
  numTicks?: number | undefined;
  showLabel?: boolean;
  label?: string;
  axisColor?: string;
  tickLabelColor?: string;
  tickLabelFontSize?: number;
  tickLabelTextAnchor?: 'middle' | 'end' | 'start' | 'inherit' | undefined;
  tickLabelFontFamily?: string;
  tickStrokeColor?: string;
  labelColor?: string;
  labelFontSize?: number;
  labelFontFamily?: string;
  labelSpacingX?: number;
  labelSpacingY?: number;
}

export const ChartAxis = ({
  orientation,
  scale,
  top = 0,
  numTicks = undefined,
  showLabel = false,
  label,
  axisColor = DEFAULT_AXIS_COLOR,
  tickStrokeColor = DEFAULT_TICK_STROKE_COLOR,
  tickLabelColor = DEFAULT_TICK_LABEL_COLOR,
  tickLabelFontSize = DEFAULT_TICK_LABEL_FONT_SIZE,
  tickLabelTextAnchor = DEFAULT_TICK_LABEL_TEXT_ANCHOR,
  tickLabelFontFamily = DEFAULT_TICK_LABEL_FONT_FAMILY,
  labelColor = DEFAULT_LABEL_COLOR,
  labelFontSize = DEFAULT_LABEL_FONT_SIZE,
  labelFontFamily = DEFAULT_LABEL_FONT_FAMILY,
  labelSpacingX = 0,
  labelSpacingY = 0,
}: ChartAxisProps) => (
  <Axis
    orientation={orientation}
    scale={scale}
    top={top}
    stroke={axisColor}
    tickStroke={tickStrokeColor}
    tickLabelProps={{
      fill: tickLabelColor,
      fontSize: tickLabelFontSize,
      textAnchor: tickLabelTextAnchor,
      fontFamily: tickLabelFontFamily,
    }}
    numTicks={numTicks}
    label={showLabel ? label : undefined}
    labelProps={showLabel ? {
      fill: labelColor,
      fontSize: labelFontSize,
      fontFamily: labelFontFamily,
      x: labelSpacingX,
      y: labelSpacingY,
    } : undefined}
  />
);
