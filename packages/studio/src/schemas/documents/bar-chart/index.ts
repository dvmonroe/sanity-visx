import { defineType, defineField } from 'sanity';
import { BarChartIcon } from '../../../icons'

import { 
  fontSizeField,
  labelField,
  showGridField,
  showLabelField,
} from './fields';

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
      description: 'Title for the chart.',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      group: 'data',
      description: 'Caption for the chart.',
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
        fontSizeField,
        showLabelField,
        showGridField,
      ],
    }),
    defineField({
      name: 'yAxis',
      title: 'Y Axis',
      type: 'object',
      group: 'data',
      fields: [
        labelField,
        fontSizeField,
        showLabelField,
        showGridField,
      ],
    }),
    defineField({
      name: 'leftMargin',
      title: 'Left Margin',
      type: 'number',
      initialValue: 10,
      group: 'styling',
    }),
    defineField({
      name: 'rightMargin',
      title: 'Right Margin',
      type: 'number',
      initialValue: 10,
      group: 'styling',
    }),
    defineField({
      name: 'bars',
      title: 'Bar Styling',
      type: 'object',
      description: 'Styling for the bars in the chart.',
      group: 'styling',
      options: {
        collapsible: true,
      },
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
      title: 'Background',
      type: 'visx.backgroundStyles',
      description: 'Background styling for the chart.',
      group: 'styling',
      options: {
        collapsible: true,
      },
    })
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
