import {defineField, defineType} from "sanity";
import {ctaFields} from "@/sanity/schemaTypes/shared/ctaFields";

export  const stepType = defineType ({
  name: 'step',
  title: 'Step',
  type: 'object',
  fields: [
    defineField({
      name: 'stepTitle',
      title: 'Step Title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'stepDescription',
      title: 'Step Description',
      type: 'text',
    }),
    defineField({
      name: 'stepVideo',
      title: 'Step Video URL',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'Describe the thumbnail for accessibility & SEO',
          validation: r => r.required().min(4),
        }),
      ],
    }),
    defineField({
      name: 'stepCta',
      title: 'Step CTA',
      type: 'object',
      fields: ctaFields,
    }),
  ],
})
