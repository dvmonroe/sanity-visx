import { defineType, defineField } from 'sanity';

export const backgroundStyles = defineType({
  name: 'visx.backgroundStyles',
  title: 'Background Styles',
  type: 'object',
  fields: [
    defineField({
      name: 'gradientTop',
      title: 'Gradient Top',
      type: 'color',
    }),
    defineField({
      name: 'gradientBottom',
      title: 'Gradient Bottom',
      type: 'color',
    }),
    defineField({
      name: 'borderRadius',
      title: 'Border Radius',
      type: 'number',
      initialValue: 0,
    }),
  ],
})
