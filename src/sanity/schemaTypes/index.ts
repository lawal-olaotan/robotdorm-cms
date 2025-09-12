import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {videoType} from "@/sanity/schemaTypes/videoType";
import {onBoardingDemos} from "@/sanity/schemaTypes/onBoardingDemos";
import {streamType} from "@/sanity/schemaTypes/streamType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, videoType, onBoardingDemos, streamType],
}
