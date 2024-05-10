import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {visxCharts, visxStructure} from '@sanity-visx/studio'

const PROJECT_ID = process.env.SANITY_STUDIO_PROJECT_ID!
const DATASET = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'visx-test',
  title: 'Visx Test',

  projectId: PROJECT_ID,
  dataset: DATASET,

  plugins: [
    visxCharts({types: ['barChart']}),
    structureTool({structure: (S) =>
      S.list()
        .title('Home')
        .items([visxStructure(S, ['barChart'])]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
