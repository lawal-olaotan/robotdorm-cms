import {defineField, defineType} from "sanity";

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
      type: 'url',
    }),
  ],
})
