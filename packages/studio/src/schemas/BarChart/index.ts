import { defineType, defineField } from 'sanity';
import { BarChartIcon } from '../../icons'
import { labelField, showLabelField, fontSizeField } from './fields';

export const barChart = defineType({
  type: 'document',
  name: 'visx.barChart',
  title: 'Bar Chart',
  icon: BarChartIcon,
  groups: [
    {
      name: 'data',
      title: 'Data',
      default: true,
    },
    {
      name: 'styling',
      title: 'Styling',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'data',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      group: 'data',
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      description: 'A CSV file with 2 columns (x, y). You must use headers and these headers must match the x and y axis keys you define below. Order of the columns does not matter.',
      options: {
        accept: 'text/csv',
      },
      group: 'data',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'xAxis',
      title: 'X Axis',
      type: 'object',
      group: 'data',
      fields: [
        labelField,
        showLabelField,
        fontSizeField,
        defineField({
          name: 'labelPaddingFromBottom',
          title: 'Label Padding From Bottom',
          type: 'number',
        }),
      ],
    }),
    defineField({
      name: 'yAxis',
      title: 'Y Axis',
      type: 'object',
      group: 'data',
      fields: [
        labelField,
        showLabelField,
        fontSizeField,
        defineField({
          name: 'labelPaddingFromLeft',
          title: 'Label Padding From Left',
          type: 'number'
        }),
      ],
    }),
    defineField({
      name: 'bars',
      title: 'Bar Styling',
      type: 'object',
      group: 'styling',
      fields: [
        defineField({
          name: 'padding',
          title: 'Bar Padding',
          type: 'number',
          description: 'Padding between bars. Any value between 0.1 and 0.9.',
          initialValue: 0.3,
          validation: (Rule: any) => Rule.min(0.1).max(0.9).precision(2),
        }),
        defineField({
          name: 'color',
          title: 'Bar Color',
          type: 'color',
        }),
        defineField({
          name: 'usePatternLines',
          title: 'Use Pattern Lines',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'patternLineOrientation',
          title: 'Pattern Line Orientation',
          type: 'string',
          options: {
            list: [
              { title: 'Horizontal', value: 'horizontal' },
              { title: 'Vertical', value: 'vertical' },
              { title: 'Diagonal', value: 'diagonal' },
              { title: 'Diagonal Right to Left', value: 'diagonalRightToLeft' },
            ],
          },
        }),
        defineField({
          name: 'verticalMargin',
          title: 'Vertical Margin',
          description: 'Margin from the top of the chart to the bottom of the chart.',
          type: 'number',
          initialValue: 120,
        }),
      ],
    }),
    defineField({
      name: 'background',
      title: 'Background Styling',
      type: 'object',
      group: 'styling',
      fields: [
        defineField({
          name: 'gradientFrom',
          title: 'Gradient Top',
          type: 'color',
        }),
        defineField({
          name: 'gradientTo',
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
    }),
  ],
  preview: {
    select: {
      title: 'title',
      caption: 'caption',
    },
    prepare({title, caption}: {title: string, caption: string}) {
      return {
        title: title,
        subtitle: caption
      };
    },
  },
});
