 export enum Tab {
  Home = 'Home',
   WhatIsNew = 'What-is-new',
   Blog = 'Blog',
 }

 export type tabsTitle = Record<Tab, string>

 export const tabsTitle: tabsTitle = {
  [Tab.Home]: 'Recent news',
  [Tab.WhatIsNew]: 'What is new',
  [Tab.Blog]: 'Blog',
 }
