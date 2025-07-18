import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {landingPageType} from './landingPageType'
import {aboutPageType} from './aboutPageType'
import {beforeYouTravelPageType} from './beforeYouTravelPageType'
import {elevePageType} from './elevePageType'
import {storiesAndInsightsPageType} from './storiesAndInsightsPageType'
import {experienceMorePageType} from './experienceMorePageType'
import {blogPageType} from './blogPageType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, landingPageType, aboutPageType, beforeYouTravelPageType, elevePageType, storiesAndInsightsPageType, experienceMorePageType, blogPageType],
}
