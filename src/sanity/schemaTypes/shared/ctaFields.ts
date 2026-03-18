import { defineField } from 'sanity';

export const ctaFields = [
  defineField({
    name: 'ctaText',
    title: 'CTA Text',
    type: 'string',
  }),
  defineField({
    name: 'ctaUrl',
    title: 'CTA URL',
    type: 'url',
  }),
];
