import { defineField } from 'sanity';

export const axis = {
  name: 'visx.axis',
  type: 'object',
  fields: [
    defineField({
      name: 'showGrid',
      title: 'Show Grid',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'showLabel',
      title: 'Show Label',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'axisColor',
      title: 'Axis Color',
      type: 'string',
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      fieldset: 'label',
    }),
    defineField({
      name: 'labelColor',
      title: 'Label Color',
      type: 'string',
      fieldset: 'label',
    }),
    defineField({
      name: 'labelFontFamily',
      title: 'Label Font Family',
      type: 'string',
      fieldset: 'label',
    }),
    defineField({
      name: 'labelFontSize',
      title: 'Label Font Size',
      type: 'number',
      initialValue: 10,
      fieldset: 'label',
    }),
    defineField({
      name: 'labelSpacingX',
      title: 'Label Spacing X',
      type: 'number',
      fieldset: 'label',
    }),
    defineField({
      name: 'labelSpacingY',
      title: 'Label Spacing Y',
      type: 'number',
      fieldset: 'label',
    }),
    defineField({
      name: 'numTicks',
      title: 'Number of Ticks',
      type: 'number',
      fieldset: 'tick',
    }),
    defineField({
      name: 'tickLabelColor',
      title: 'Tick Label Color',
      type: 'string',
      fieldset: 'tick',
    }),
    defineField({
      name: 'tickLabelFontFamily',
      title: 'Tick Label Font Family',
      type: 'string',
      fieldset: 'tick',
    }),
    defineField({
      name: 'tickLabelFontSize',
      title: 'Tick Label Font Size',
      type: 'number',
      initialValue: 10,
      fieldset: 'tick',
    }),
    defineField({
      name: 'tickLabelTextAnchor',
      title: 'Tick Label Text Anchor',
      type: 'string',
      options: {
        list: ['middle', 'end', 'start', 'inherit'],
      },
      fieldset: 'tick',
    })
  ],
  fieldsets: [
    { name: 'label', title: 'Label' },
    { name: 'tick', title: 'Tick' },
  ].sort((a, b) => a.name.localeCompare(b.name)),
};
