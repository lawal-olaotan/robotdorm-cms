import { defineType, defineField } from 'sanity';

export const videoType = defineType({
  name: 'videoItem',
  title: 'Video item',
  type:'object',
  fields:[
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'subTitle', title: 'Subtitle', type: 'string' }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: { hotspot: true },
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
    defineField({ name: 'video', title: 'Mux Video', type: 'mux.video', validation: r => r.required() }),
  ],
  preview:{
    select:{title:'title'},
    prepare: ({title }) => ({title:title || 'untitled video'})
  }
})
