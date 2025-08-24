import { defineType, defineField } from 'sanity';
import { VideoIcon } from "@sanity/icons";

export const onBoardingDemos = defineType({
  name: 'onBoardingDemoItem',
  title: 'Demo item',
  type:'document',
  icon: VideoIcon,
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'videoSet', title: 'Videos List', type: 'array', of: [{type: 'videoItem'}] }),

  ],
  preview:{
    select:{title:'title'},
    prepare: ({title }) => ({title:title || 'untitled video'})
  }
})
