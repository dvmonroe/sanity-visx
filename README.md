# Sanity Visx

Semi-opinionated charting library for Sanity using primitives from [Visx](https://github.com/airbnb/visx).

> [!CAUTION]
> This library is still in active development and should be used at your own risk. There may be breaking changes without correct semver applied.

## Features

- Studio schemas and desk structure for creating charts within the Sanity studio.
- UI components for previewing charts in the studio AND rendering them in your React app.

## Installation

Install the library in your Sanity studio:

```sh
npm install @sanity-visx/studio
```
or

```sh
yarn add @sanity-visx/studio
```

To render the charts in your FE React app:

```sh
npm install @sanity-visx/ui
```

or

```sh
yarn add @sanity-visx/ui
```

## Usage

Usage in `sanity.config.ts` (or .js)

```ts
import {defineConfig} from 'sanity'
import {visxCharts} from '@sanity-visx/studio'

export default defineConfig({
  // ...
  plugins: [visxCharts({types: ['barChart']})],
})
```

Use the types param to specify the chart types you want to make available in the studio. All charts are opt-in only.

To use the opionanted desk structure, add the following to the same `sanity.config.ts`:

```ts
import {structureTool} from 'sanity/structure'
import {visxCharts, visxStructure} from '@sanity-visx/studio'

export default defineConfig({
  // ...
  plugins: [visxCharts({types: ['barChart']})],
  // This is a simple setup for the structure tool.
  // You likely have other documents that you want to show in the studio, in which case
  // you'd have those spread here in the items array as well
  structureTool({structure: (S) =>
      S.list()
        .title('Home')
        .items([visxStructure(S, ['barChart'])]),
    }),
  // ...
})
```

## LICENSE

[MIT](./LICENSE)


## Development

This project uses [Turborepo](https://turbo.build)

To get started, run the following commands:

```sh
npm install
npm run dev
```
