import {definePlugin} from 'sanity'
import { barChart } from './schemas'
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
  const allTypes: Record<ChartType, any> = { barChart };

  const types = config && 'types' in config 
    ? config.types
      ?.filter(schema => schema !== null)
      .map(schema => schema && allTypes[schema]) 
    : Object.values(allTypes);

  return {
    name: 'sanity-plugin-visx',
    plugins: [
      colorInput()
    ],
    schema: {
      types
    }
  }
})

export {
  visxCharts,
  visxStructure
}
