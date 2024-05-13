import React from 'react';
import { GridRows, GridColumns } from '@visx/grid';
import { DEFAULT_GRID_COLOR } from './constants';
import { GridProps } from './types';

export const Grid = ({ 
  scale,
  width = 0,
  height = 0,
  stroke = DEFAULT_GRID_COLOR,
  opacity = 0.5,
  orientation,
  visible = false
}: GridProps) => {
  if (!visible) {
    return null;
  }

  if (orientation === 'rows') {
    return <GridRows
      scale={scale}
      width={width}
      stroke={stroke}
      opacity={opacity}
    />;
  } else if (orientation === 'columns') {
    return <GridColumns
      scale={scale}
      height={height}
      stroke={stroke}
      opacity={opacity}
    />;
  }
};
