interface Axis {  
  label: string;
  showLabel?: boolean;
  fontSize?: number;
}

interface Background {
  gradient: {
    from: string;
    to: string;
  };
  borderRadius: number;
}

interface Bars {
  color: string;
  padding: number;
  usePatternLines?: boolean;
  patternLineOrientation?: BarPatternLineOrientation;
  verticalMargin: number;
}

export type BarPatternLineOrientation = 'horizontal' | 'vertical' | 'diagonal' | 'diagonalRightToLeft';

export type BarsProps = {
  width: number;
  height: number;
  csvFileUrl: string;
  background?: Background;
  bars?: Bars;
  xAxis?: Axis & { labelPaddingFromBottom?: number };
  yAxis?: Axis & { labelPaddingFromLeft?: number };
};
