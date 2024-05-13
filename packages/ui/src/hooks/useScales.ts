import { useMemo } from 'react';
import { scaleBand, scaleLinear } from '@visx/scale';

interface LinearScaleProps {
  domainMin?: number;
  domainMax: number;
  rangeMin?: number;
  rangeMax: number;
}

interface BandScaleProps {
  domain: string[];
  rangeMin?: number;
  rangeMax: number;
  barPadding?: number;
}

export const useBandScale = ({
  domain = [],
  rangeMin = 0,
  rangeMax,
  barPadding = 0.1
}: BandScaleProps) => {
  return useMemo(
    () => scaleBand<string>({
      domain: domain,
      round: true,
      range: [rangeMin, rangeMax],
      padding: barPadding,
    }),
    [domain, rangeMin, rangeMax, barPadding],
  );
}

export const useLinearScale = ({
  domainMin = 0,
  domainMax,
  rangeMin = 0,
  rangeMax
}: LinearScaleProps) => {
  return useMemo(
    () => scaleLinear<number>({
      domain: [domainMin, domainMax],
      range: [rangeMax, rangeMin],
      round: true,
      nice: true,
    }),
    [domainMin, domainMax, rangeMin, rangeMax],
  );
}
