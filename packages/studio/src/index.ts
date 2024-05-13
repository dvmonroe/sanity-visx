import {definePlugin} from 'sanity'
import { objects, documents } from './schemas'
import { visxStructure } from './structure'
import {colorInput} from '@sanity/color-input'
import { ChartType } from './types'

interface visxChartsConfig {
  types?: Array<ChartType | null>;
}

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {visxCharts} from '@sanity-visx/studio'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [visxCharts({types: ['barChart']})],
 * })
 * ```
 */
const visxCharts = definePlugin<visxChartsConfig>((config = {}) => {
  const types = config && 'types' in config 
    ? config.types
      ?.map(type => Object.values(documents).find((doc: any) => doc.name === `visx.${type}`))
    : Object.values(documents);

  const schemasTypes: any[] = [
    ...(types || []),
    ...Object.values(objects),
  ];

  return {
    name: 'sanity-plugin-visx',
    plugins: [
      colorInput()
    ],
    schema: {
      types: schemasTypes,
    }
  }
})

export {
  visxCharts,
  visxStructure
}
