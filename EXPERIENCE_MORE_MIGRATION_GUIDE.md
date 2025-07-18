# Experience More Page Migration Guide

This guide will help you migrate the Experience More page from hardcoded content to Sanity CMS-managed content.

## Overview

The Experience More page has been updated to use Sanity CMS for content management. All components now accept data props with fallback to hardcoded content, ensuring a smooth transition. The filter functionality in LatestGreatestFilter remains dynamic and is not managed by CMS.

## Schema Setup

### 1. Create the Experience More Page Document in Sanity Studio

1. Open your Sanity Studio
2. Navigate to the "Experience More Page" document type
3. Create a new document with the following structure:

```json
{
  "title": "Experience More Page",
  "hero": {
    "backgroundImage": {
      "asset": "your-hero-background-image",
      "alt": "Luxury travel experience background"
    },
    "title": "Experience More with\nExclusive Travel Offers",
    "description": "Indulge with bespoke upgrades, VIP perks, and limited-time promotions\ndesigned to elevate your next journey."
  },
  "latestGreatestFilter": {
    "title": "The Latest from The Greatest",
    "description": "We always want our clients to experience more. Here are the latest, and greatest, luxury travel offers, promotions and itineraries from our elite partners."
  }
}
```

## Component Updates

### 1. ExperienceMoreHero Component
- **File**: `src/components/experienceMore/ExperienceMoreHero.tsx`
- **Changes**: Added data prop with fallback content
- **Props**: `data` (optional) with backgroundImage, title, description

### 2. LatestGreatestFilter Component
- **File**: `src/components/experienceMore/LatestGreatestFilter.tsx`
- **Changes**: Added data prop with fallback content for text only
- **Props**: `data` (optional) with title, description
- **Note**: Filter functionality remains dynamic and is not managed by CMS

### 3. Shared Components (Using Landing Page Data)
- **ElevePerks**: Uses landing page data (`landingData?.elevePerks`)
- **NewsletterSignUp**: Uses landing page data (`landingData?.newsletter`)
- **ContactUs**: Uses landing page data (`landingData?.contactUs`)

### 4. Dynamic Components (Excluded from CMS)
- **LatestGreatestGrid**: Will show dynamic content
- **EffortlessLuxury**: Uses existing blog component

## Main Page Updates

### Experience More Page
- **File**: `src/app/experience-more/page.tsx`
- **Changes**: 
  - Added data fetching from Sanity
  - Added loading state
  - Passes data to all components
  - Fetches both experience more page and landing page data
  - Uses appropriate data sources for shared components

## Schema Files

### 1. experienceMorePageType.ts
- **File**: `src/sanity/schemaTypes/experienceMorePageType.ts`
- **Purpose**: Defines the Sanity schema for the experience more page
- **Features**: 
  - Comprehensive field definitions
  - Image hotspot support
  - Validation rules
  - Nested object structures

### 2. Updated index.ts
- **File**: `src/sanity/schemaTypes/index.ts`
- **Changes**: Added experienceMorePageType to the schema exports

### 3. Updated queries.ts
- **File**: `src/sanity/lib/queries.ts`
- **Changes**: Added experienceMorePageQuery with comprehensive GROQ query

### 4. Updated sanity.ts
- **File**: `src/lib/sanity.ts`
- **Changes**: 
  - Added ExperienceMorePageData interface
  - Added getExperienceMorePageData function
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
2. Navigate to "Experience More Page"
3. Create a new document
4. Fill in all required fields
5. Upload and configure images
6. Publish the document

### Step 3: Test the Implementation
1. Start your development server
2. Navigate to `/experience-more`
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

## Dynamic Content Components

### Excluded from CMS Management
- **LatestGreatestGrid**: Will display dynamic content
- **Filter Functionality**: Remains dynamic for user interaction

### Future Implementation
These components will be connected to:
- Dynamic content queries from Sanity
- User interaction and filtering
- Real-time content updates

## Testing Checklist

- [ ] Hero section displays correctly with Sanity data
- [ ] LatestGreatestFilter shows title and description
- [ ] Filter functionality remains dynamic
- [ ] ElevePerks uses landing page data
- [ ] NewsletterSignUp uses landing page data
- [ ] ContactUs uses landing page data
- [ ] Fallback content appears when data is missing
- [ ] Loading state displays correctly
- [ ] All images load properly
- [ ] LatestGreatestGrid remains dynamic (placeholder)
- [ ] EffortlessLuxury displays correctly

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

3. **Shared Components Not Working**
   - Verify that landing page data is being fetched
   - Check that the correct data properties are being passed
   - Ensure all required schemas are deployed

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
- **Bundle Size**: Components are optimized for performance

## Future Enhancements

1. **Dynamic Grid**: Connect LatestGreatestGrid to Sanity's content schema
2. **Filter Integration**: Implement dynamic filtering with Sanity queries
3. **Real-time Updates**: Implement live preview with Sanity's real-time features
4. **A/B Testing**: Use Sanity's content versioning for testing
5. **Multi-language**: Extend schema for internationalization
6. **Analytics**: Track content performance and engagement
7. **SEO**: Add meta fields for better SEO management

## Content Strategy

### Hero Section
- **Background Image**: High-quality luxury travel imagery
- **Title**: Compelling headline for exclusive offers
- **Description**: Clear value proposition for upgrades and perks

### Latest Greatest Filter Section
- **Title**: Engaging section headline
- **Description**: Clear explanation of the content and offers
- **Filter Functionality**: Remains dynamic for user interaction

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Sanity documentation
3. Check component prop types and interfaces
4. Verify schema validation rules

---

This migration guide ensures a smooth transition from hardcoded content to CMS-managed content while maintaining all existing functionality and design. The dynamic components (LatestGreatestGrid and filter functionality) are preserved for future implementation with real-time content and functionality. 