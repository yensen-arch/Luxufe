# Sanity CMS Setup for Landing Page

## Overview

The landing page has been connected to Sanity CMS for content management. The setup includes:

1. **New Schema Type**: `landingPage` - A comprehensive schema for managing all landing page content
2. **Data Fetching**: Utility functions to fetch data from Sanity
3. **Component Updates**: All components now accept data props with fallback to hardcoded content

## Schema Structure

The `landingPage` schema includes sections for:

- **Hero**: Tagline, main heading, description, background image
- **Discover Luxury**: Heading, description, CTA button, image
- **Curated For You**: Title, subtitle, description, features, itineraries, CTA buttons
- **Testimonials**: Heading, description, testimonials array
- **Luxury Partners**: Heading, description, partners array
- **Eleve Perks**: Heading, description, perks array
- **Exclusive Offers**: Heading, description, offers array
- **Inspiration**: Heading, description, blog posts references
- **Newsletter**: Heading, description, placeholder, CTA text
- **Contact Us**: Heading, description, contact information

## Setup Instructions

### 1. Access Sanity Studio

Navigate to `/studio` in your application to access the Sanity Studio.

### 2. Create Landing Page Content

1. In the Sanity Studio, you'll see a new "Landing Page" document type
2. Create a new Landing Page document
3. Fill in the content for each section using the current hardcoded content as reference

### 3. Environment Variables

Make sure your environment variables are set up correctly:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-07-16
```

### 4. Test the Connection

1. Start your development server: `npm run dev`
2. Navigate to the landing page
3. The page should now display content from Sanity (if data exists) or fall back to hardcoded content

## Component Updates

All landing page components have been updated to:

- Accept `data` props with TypeScript interfaces
- Provide fallback to hardcoded content when no data is available
- Handle dynamic content rendering

## Data Flow

1. **Page Level**: `src/app/page.tsx` fetches data using `getLandingPageData()`
2. **Component Level**: Each component receives relevant data section as props
3. **Fallback**: If no Sanity data exists, components use hardcoded content

## Next Steps

1. **Populate Content**: Add your landing page content in Sanity Studio
2. **Customize Schema**: Modify the schema if you need additional fields
3. **Add More Sections**: Extend the schema for additional landing page sections
4. **Image Optimization**: Consider using Sanity's image URL builder for optimized images

## Troubleshooting

- **No Data Displaying**: Check that you've created a Landing Page document in Sanity Studio
- **Environment Variables**: Ensure all Sanity environment variables are correctly set
- **TypeScript Errors**: Make sure all components are properly typed with the new interfaces

## Files Modified

- `src/sanity/schemaTypes/landingPageType.ts` - New schema definition
- `src/sanity/schemaTypes/index.ts` - Added schema to exports
- `src/sanity/lib/queries.ts` - GROQ query for landing page data
- `src/lib/sanity.ts` - Data fetching utility and TypeScript interfaces
- `src/app/page.tsx` - Updated to fetch and pass data to components
- `src/components/landing/Hero.tsx` - Updated to accept data props
- `src/components/landing/DiscoverLuxury.tsx` - Updated to accept data props
- `src/components/landing/CuratedForYou.tsx` - Updated to accept data props
- `src/components/landing/Testimonials.tsx` - Updated to accept data props 