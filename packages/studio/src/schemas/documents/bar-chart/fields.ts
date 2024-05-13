import { defineField } from 'sanity';

export const labelField = defineField({
  name: 'label',
  title: 'Label',
  type: 'string',
  validation: (Rule: any) => Rule.required(),
});

export const showLabelField = defineField({
  name: 'showLabel',
  title: 'Show Label',
  type: 'boolean',
  initialValue: false,
});

export const fontSizeField = defineField({
  name: 'fontSize',
  title: 'Font Size',
  type: 'number',
  initialValue: 12,
});

export const showGridField = defineField({
  name: 'showGrid',
  title: 'Show Grid',
  type: 'boolean',
  initialValue: false,
});
