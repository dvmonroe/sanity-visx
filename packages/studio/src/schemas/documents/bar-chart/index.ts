import { defineType, defineField } from 'sanity';
import { BarChartIcon } from '../../../icons'

export const barChart = defineType({
  type: 'document',
  name: 'visx.barChart',
  title: 'Bar Chart',
  icon: BarChartIcon,
  groups: [
    {
      name: 'core',
      title: 'Core',
      default: true,
    },
    {
      name: 'xAxis',
      title: 'X Axis',
    },
    {
      name: 'yAxis',
      title: 'Y Axis',
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
      group: 'core',
      description: 'Title for the chart.',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      group: 'core',
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
      group: 'core',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'xAxisKey',
      title: 'X Axis Key',
      type: 'string',
      description: 'The key in the CSV file to use for the x axis.',
      group: 'core',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'yAxisKey',
      title: 'Y Axis Key',
      type: 'string',
      description: 'The key in the CSV file to use for the y axis.',
      group: 'core',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'xAxis',
      title: 'X Axis',
      type: 'visx.axis',
      group: 'xAxis',
      description: 'The x-axis of the bar chart.',
    }),
    defineField({
      name: 'yAxis',
      title: 'Y Axis',
      type: 'visx.axis',
      group: 'yAxis',
      description: 'The y-axis of the bar chart.',
    }),
    defineField({
      name: 'leftMargin',
      title: 'Left Margin',
      type: 'number',
      initialValue: 10,
      group: 'styling',
      description: 'The left margin of the bar chart.',
    }),
    defineField({
      name: 'rightMargin',
      title: 'Right Margin',
      type: 'number',
      initialValue: 10,
      group: 'styling',
      description: 'The right margin of the bar chart.',
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
          description: 'The color of the bars.',
        }),
        defineField({
          name: 'usePatternLines',
          title: 'Use Pattern Lines',
          type: 'boolean',
          initialValue: false,
          description: 'Whether to use pattern lines for the bars.',
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
            layout: 'radio',
          },
          description: 'The orientation of the pattern lines.',
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
