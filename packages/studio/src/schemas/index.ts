import * as documents from './documents';

export { documents }
export * as objects from './objects';
export const chartTypes = Object.values(documents).map(schema => schema.name.replace('visx.', ''));
