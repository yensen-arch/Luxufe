import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {landingPageType} from './landingPageType'
import {aboutPageType} from './aboutPageType'
import {beforeYouTravelPageType} from './beforeYouTravelPageType'
import {elevePageType} from './elevePageType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, landingPageType, aboutPageType, beforeYouTravelPageType, elevePageType],
}
