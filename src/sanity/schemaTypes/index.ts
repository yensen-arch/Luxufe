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
import {tailorMadeTravelPageType} from './tailorMadeTravelPageType'
import {contactUsPageType} from './contactUsPageType'
import {linkInBioPageType} from './linkInBioPageType'
import {waysToTravelPageType} from './waysToTravelPageType'
import {notFoundPageType} from './notFoundPageType'
import {privacyPolicyPageType} from './privacyPolicyPageType'
import {paymentsPageType} from './paymentsPageType'
import {membersLoginPageType} from './membersLoginPageType'
import {searchPageType} from './searchPageType'
import {tripWizardPageType} from './tripWizardPageType'
import {hotelsPageType} from './hotelsPageType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, landingPageType, aboutPageType, beforeYouTravelPageType, elevePageType, storiesAndInsightsPageType, experienceMorePageType, blogPageType, tailorMadeTravelPageType, contactUsPageType, linkInBioPageType, waysToTravelPageType, notFoundPageType, privacyPolicyPageType, paymentsPageType, membersLoginPageType, searchPageType, tripWizardPageType, hotelsPageType],
}
