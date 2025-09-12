import {defineField, defineType} from "sanity";


export const streamType = defineType({
  name: 'stream',
  title: 'Stream',
  type: 'document',
  fields: [
    defineField({
      name: 'demoVideo',
      title: 'Video',
      type: 'videoItem',
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'video',
    },
  },

})
