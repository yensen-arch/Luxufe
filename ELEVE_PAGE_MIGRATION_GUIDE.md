# Elevé Page Migration Guide

This guide will help you migrate the Elevé page from hardcoded content to Sanity CMS-managed content.

## Overview

The Elevé page has been updated to use Sanity CMS for content management. All components now accept data props with fallback to hardcoded content, ensuring a smooth transition.

## Schema Setup

### 1. Create the Elevé Page Document in Sanity Studio

1. Open your Sanity Studio
2. Navigate to the "Elevé Page" document type
3. Create a new document with the following structure:

```json
{
  "title": "Elevé Page",
  "hero": {
    "backgroundImage": {
      "asset": "your-hero-background-image",
      "alt": "Luxury travel background"
    },
    "subtitle": "Elevé by Luxufe",
    "title": "Travel should feel as rewarding as the journeys themselves",
    "buttonText": "BECOME A MEMBER →"
  },
  "eleveIntro": {
    "brandName": "Elevé",
    "description": "by Luxufe is designed for discerning travelers who seek more than just points."
  },
  "whyJoinEleve": {
    "title": "Why join",
    "brandName": "Elevé",
    "items": [
      {
        "icon": "PlaneTakeoff",
        "title": "Priority Travel Upgrades",
        "content": "Enjoy complimentary room upgrades, priority boarding, and VIP airport lounge access at select destinations. Travel with ease, knowing that the best seat, suite, or experience has already been secured for you."
      },
      {
        "icon": "Star",
        "title": "Exclusive Member-Only Offers",
        "content": "Access to exclusive member-only offers, including discounts on luxury travel, hotel stays, and more."
      },
      {
        "icon": "Bell",
        "title": "Personalized Concierge Service",
        "content": "Enjoy a personalized concierge service to help you with your travel plans, including booking flights, hotels, and more."
      },
      {
        "icon": "Mail",
        "title": "Invitation-Only Events & Experiences",
        "content": "Attend invitation-only events and experiences, including exclusive travel seminars, workshops, and more."
      },
      {
        "icon": "Trophy",
        "title": "Complimentary Travel Enhancements",
        "content": "Enjoy complimentary travel enhancements, including airport lounge access, priority boarding, and more."
      },
      {
        "icon": "Gift",
        "title": "Annual Luxury Travel Gift",
        "content": "Receive an annual luxury travel gift, including a luxury travel experience, hotel stay, and more."
      }
    ],
    "buttonText": "BECOME A MEMBER →"
  },
  "discoverLuxuryEleve": {
    "title": "Unmatched care,\neffortless experiences",
    "description": "Luxury travel is defined by the peace of mind it brings. Where every detail is thoughtfully arranged, allowing you to focus solely on the journey ahead. From seamless transitions to exceptional customer care, every aspect of your trip is designed to provide an effortless and unforgettable experience.",
    "buttonText": "DISCOVER LUXURY",
    "image": {
      "asset": "your-discover-luxury-image",
      "alt": "Luxury travel experience"
    }
  },
  "speakingJourneys": {
    "backgroundImage": {
      "asset": "your-speaking-journeys-background",
      "alt": "Luxury travel background"
    },
    "title": "Journeys that speak for themselves",
    "description": "Luxufe is a travel company that specializes in creating bespoke journeys for discerning travelers.",
    "testimonials": [
      {
        "quote": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
        "supporting": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
        "name": "John Doe",
        "avatar": {
          "asset": "your-avatar-image",
          "alt": "John Doe"
        }
      }
    ]
  },
  "elevateTravel": {
    "subtitle": "Your next journey awaits",
    "title": "Elevate your travel\nwith Elevé by Luxufe.",
    "paragraph1": "Becoming a member of Elevé by Luxufe is effortless. Simply sign up to join and receive exclusive access to luxury perks, curated travel benefits, and insider privileges.",
    "paragraph2": "Members will be the first to know about VIP experiences, limited-time offers, and luxury travel enhancements delivered directly to their inbox.",
    "buttonText": "ELEVATE YOUR TRAVEL",
    "image": {
      "asset": "your-elevate-travel-image",
      "alt": "Luxury travel experience"
    }
  },
  "exploreMore": {
    "title": "Explore More",
    "subtitle": "Discover more exclusive, luxury travel experiences, tailored to you",
    "cards": [
      {
        "image": {
          "asset": "your-itineraries-image",
          "alt": "Itineraries"
        },
        "title": "Itineraries",
        "description": "Experience bespoke journeys beyond the expected, from private safaris to grand European tours, all crafted for effortless, unforgettable travel.",
        "cta": "DISCOVER",
        "href": "#"
      },
      {
        "image": {
          "asset": "your-destinations-image",
          "alt": "Destinations"
        },
        "title": "Destinations",
        "description": "Explore extraordinary destinations, from secluded island escapes to vibrant cultural capitals, each seamlessly curated for immersive travel.",
        "cta": "EXPLORE",
        "href": "#"
      },
      {
        "image": {
          "asset": "your-hotels-image",
          "alt": "Hotels"
        },
        "title": "Hotels",
        "description": "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
        "cta": "INDULGE",
        "href": "#"
      }
    ]
  },
  "becomeMemberModal": {
    "title": "Become a member",
    "description": "Loyalty should feel as effortless as your travels. With Elevé by Luxufe, every journey brings exclusive benefits, personalised perks, and priority access to unforgettable experiences. Because the more you explore with us, the more rewarding it becomes.",
    "perksTitle": "Member Perks & Benefits",
    "perks": [
      "Here is a perk that's included",
      "List another perk right here for Eleve",
      "Another one can go right here",
      "List another perk right here for Eleve"
    ],
    "footerText": "Lorem ipsum dolor  elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    "formTitle": "How did you find us?",
    "radioOptions": [
      "Referral",
      "Direct Search",
      "Saw an ad",
      "Article or News",
      "Social Media",
      "Other"
    ],
    "submitButtonText": "SUBMIT REQUEST"
  }
}
```

## Component Updates

### 1. HeroEleve Component
- **File**: `src/components/eleve/HeroEleve.tsx`
- **Changes**: Added data prop with fallback content
- **Props**: `data` (optional) with backgroundImage, subtitle, title, buttonText

### 2. EleveIntro Component
- **File**: `src/components/eleve/EleveIntro.tsx`
- **Changes**: Added data prop with fallback content
- **Props**: `data` (optional) with brandName, description

### 3. WhyJoinEleve Component
- **File**: `src/components/eleve/WhyJoinEleve.tsx`
- **Changes**: Added data prop with fallback content and icon mapping
- **Props**: `data` (optional) with title, brandName, items array, buttonText
- **Icons**: Supports PlaneTakeoff, Star, Bell, Mail, Trophy, Gift

### 4. DiscoverLuxuryEleve Component
- **File**: `src/components/eleve/DiscoverLuxuryEleve.tsx`
- **Changes**: Added data prop with fallback content
- **Props**: `data` (optional) with title, description, buttonText, image

### 5. SpeakingJourneys Component
- **File**: `src/components/eleve/SpeakingJourneys.tsx`
- **Changes**: Added data prop with fallback content
- **Props**: `data` (optional) with backgroundImage, title, description, testimonials array

### 6. ElevateTravel Component
- **File**: `src/components/eleve/ElevateTravel.tsx`
- **Changes**: Added data prop with fallback content
- **Props**: `data` (optional) with subtitle, title, paragraph1, paragraph2, buttonText, image

### 7. ExploreMore Component
- **File**: `src/components/eleve/ExploreMore.tsx`
- **Changes**: Added data prop with fallback content
- **Props**: `data` (optional) with title, subtitle, cards array

### 8. BecomeMemberModal Component
- **File**: `src/components/eleve/BecomeMemberModal.tsx`
- **Changes**: Added data prop with fallback content
- **Props**: `data` (optional) with title, description, perksTitle, perks array, footerText, formTitle, radioOptions array, submitButtonText

## Main Page Updates

### Eleve Page
- **File**: `src/app/eleve/page.tsx`
- **Changes**: 
  - Added data fetching from Sanity
  - Added loading state
  - Passes data to all components
  - Fetches both eleve page data and landing page data (for NewsletterSignUp)

## Schema Files

### 1. elevePageType.ts
- **File**: `src/sanity/schemaTypes/elevePageType.ts`
- **Purpose**: Defines the Sanity schema for the eleve page
- **Features**: 
  - Comprehensive field definitions
  - Image hotspot support
  - Validation rules
  - Nested object structures

### 2. Updated index.ts
- **File**: `src/sanity/schemaTypes/index.ts`
- **Changes**: Added elevePageType to the schema exports

### 3. Updated queries.ts
- **File**: `src/sanity/lib/queries.ts`
- **Changes**: Added elevePageQuery with comprehensive GROQ query

### 4. Updated sanity.ts
- **File**: `src/lib/sanity.ts`
- **Changes**: 
  - Added ElevePageData interface
  - Added getElevePageData function
  - Updated imports

## Migration Steps

### Step 1: Deploy Schema Changes
```bash
# Deploy the updated schema to Sanity
npm run build
# or
yarn build
```

### Step 2: Create Content in Sanity Studio
1. Open Sanity Studio
2. Navigate to "Elevé Page"
3. Create a new document
4. Fill in all required fields
5. Upload and configure images
6. Publish the document

### Step 3: Test the Implementation
1. Start your development server
2. Navigate to `/eleve`
3. Verify that content is loading from Sanity
4. Check that fallback content appears when data is missing

### Step 4: Update Content
1. Use Sanity Studio to update content
2. Test changes on the live site
3. Verify that all components display correctly

## Fallback Content

All components include comprehensive fallback content that matches the original hardcoded content. This ensures:

- **Smooth Transition**: No broken pages during migration
- **Content Safety**: Original content preserved as fallback
- **Development Flexibility**: Components work without CMS data

## Image Management

### Image Requirements
- All images support hotspot functionality
- Alt text is required for accessibility
- Images are optimized through Sanity's image pipeline

### Image Upload Process
1. Upload images to Sanity Studio
2. Configure hotspot and crop settings
3. Add descriptive alt text
4. Use the generated URL in your content

## Icon System

The WhyJoinEleve component uses a dynamic icon system:

### Supported Icons
- `PlaneTakeoff` - Priority Travel Upgrades
- `Star` - Exclusive Member-Only Offers
- `Bell` - Personalized Concierge Service
- `Mail` - Invitation-Only Events & Experiences
- `Trophy` - Complimentary Travel Enhancements
- `Gift` - Annual Luxury Travel Gift

### Adding New Icons
1. Import the icon from lucide-react
2. Add it to the iconMap object
3. Update the schema documentation

## Testing Checklist

- [ ] Hero section displays correctly with Sanity data
- [ ] EleveIntro shows brand name and description
- [ ] WhyJoinEleve accordion works with all items
- [ ] DiscoverLuxuryEleve displays image and content
- [ ] SpeakingJourneys carousel functions properly
- [ ] ElevateTravel shows all content sections
- [ ] ExploreMore displays all cards
- [ ] BecomeMemberModal opens and shows form
- [ ] NewsletterSignUp uses landing page data
- [ ] Fallback content appears when data is missing
- [ ] Loading state displays correctly
- [ ] All images load properly
- [ ] All links work correctly

## Troubleshooting

### Common Issues

1. **Content Not Loading**
   - Check Sanity Studio for published content
   - Verify schema deployment
   - Check browser console for errors

2. **Images Not Displaying**
   - Ensure images are uploaded to Sanity
   - Check image asset references
   - Verify alt text is provided

3. **Icons Not Showing**
   - Verify icon names match the iconMap
   - Check that icons are imported from lucide-react
   - Ensure icon names are spelled correctly

4. **Modal Not Opening**
   - Check that modal state is managed correctly
   - Verify event handlers are passed properly
   - Test with fallback data

### Debug Steps

1. **Check Network Tab**
   - Verify Sanity queries are successful
   - Check for 404 or 500 errors

2. **Console Logs**
   - Look for JavaScript errors
   - Check data structure in console

3. **Component Props**
   - Verify data is being passed correctly
   - Check prop types and interfaces

## Performance Considerations

- **Image Optimization**: All images use Sanity's optimization pipeline
- **Lazy Loading**: Consider implementing lazy loading for images
- **Caching**: Sanity queries are cached by default
- **Bundle Size**: Icons are imported individually to minimize bundle size

## Future Enhancements

1. **Real-time Updates**: Implement live preview with Sanity's real-time features
2. **A/B Testing**: Use Sanity's content versioning for testing
3. **Multi-language**: Extend schema for internationalization
4. **Analytics**: Track content performance and engagement
5. **SEO**: Add meta fields for better SEO management

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Sanity documentation
3. Check component prop types and interfaces
4. Verify schema validation rules

---

This migration guide ensures a smooth transition from hardcoded content to CMS-managed content while maintaining all existing functionality and design. 