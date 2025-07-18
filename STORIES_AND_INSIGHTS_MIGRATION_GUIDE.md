# Stories & Insights Page Migration Guide

This guide will help you migrate the Stories & Insights page from hardcoded content to Sanity CMS-managed content.

## Overview

The Stories & Insights page has been updated to use Sanity CMS for content management. All components now accept data props with fallback to hardcoded content, ensuring a smooth transition. Dynamic content components (ExploreBar and BlogMasonryGrid) are excluded from CMS management as they will show dynamic content.

## Schema Setup

### 1. Create the Stories & Insights Page Document in Sanity Studio

1. Open your Sanity Studio
2. Navigate to the "Stories & Insights Page" document type
3. Create a new document with the following structure:

```json
{
  "title": "Stories & Insights Page",
  "hero": {
    "backgroundImage": {
      "asset": "your-hero-background-image",
      "alt": "Luxury travel stories background"
    },
    "subtitle": "Stories & insights",
    "title": "Inspiration for the Discerning Traveler",
    "description": "Discover expert insights, curated guides, and exclusive luxury travel tips designed to elevate every journey."
  },
  "travelChoice": {
    "title": "Your Travel,\nYour Choice",
    "description": "Share your thoughts on luxury travel and see how fellow discerning travelers vote on the week's hottest destinations, experiences, and trends.",
    "socialLinks": [
      {
        "platform": "instagram",
        "url": "https://instagram.com/your-handle",
        "enabled": true
      },
      {
        "platform": "facebook",
        "url": "https://facebook.com/your-page",
        "enabled": true
      },
      {
        "platform": "tripadvisor",
        "url": "https://tripadvisor.com/your-page",
        "enabled": true
      },
      {
        "platform": "google",
        "url": "https://google.com/your-business",
        "enabled": true
      }
    ],
    "image": {
      "asset": "your-travel-choice-image",
      "alt": "Luxury travel choice"
    }
  },
  "effortlessLuxury": {
    "title": "The Art of Effortless Luxury Travel",
    "subtitle": "Seamless luxury travel,\ntailored to you - effortless,\npersonal, unforgettable",
    "paragraph1": "We believe that true luxury is felt, not just seen. It is the ease of knowing every detail has been anticipated, the quiet confidence of seamless transitions, and the joy of experiencing something truly personal. Travel should never feel complicated or transactional, but rather it should unfold naturally.",
    "paragraph2": "From the first touchpoint to the final farewell, our ethos ensures that luxury is not just what you experience, but how effortlessly you experience it",
    "buttonText": "EXPLORE LUXURY",
    "image": {
      "asset": "your-effortless-luxury-image",
      "alt": "Luxury travel experience"
    }
  }
}
```

## Component Updates

### 1. HeroStories Component
- **File**: `src/components/storiesAndInsights/HeroStories.tsx`
- **Changes**: Added data prop with fallback content
- **Props**: `data` (optional) with backgroundImage, subtitle, title, description
- **Note**: ExploreBar component remains dynamic and is not managed by CMS

### 2. TravelChoice Component
- **File**: `src/components/storiesAndInsights/TravelChoice.tsx`
- **Changes**: Added data prop with fallback content and dynamic social media icons
- **Props**: `data` (optional) with title, description, socialLinks array, image
- **Social Platforms**: Supports Instagram, Facebook, TripAdvisor, Google

### 3. EffortlessLuxury Component
- **File**: `src/components/storiesAndInsights/EffortlessLuxury.tsx`
- **Changes**: Added data prop with fallback content
- **Props**: `data` (optional) with title, subtitle, paragraph1, paragraph2, buttonText, image

### 4. Shared Components (Using Landing & Eleve Page Data)
- **ElevePerks**: Uses landing page data (`landingData?.elevePerks`)
- **ExploreMore**: Uses eleve page data (`eleveData?.exploreMore`)
- **NewsletterSignUp**: Uses landing page data (`landingData?.newsletter`)
- **ContactUs**: Uses landing page data (`landingData?.contactUs`)

### 5. Dynamic Components (Excluded from CMS)
- **BlogMasonryGrid**: Will show dynamic blog content
- **ExploreBar**: Will show dynamic filter/search functionality

## Main Page Updates

### Stories & Insights Page
- **File**: `src/app/stories-and-insights/page.tsx`
- **Changes**: 
  - Added data fetching from Sanity
  - Added loading state
  - Passes data to all components
  - Fetches stories page, landing page, and eleve page data
  - Uses appropriate data sources for shared components

## Schema Files

### 1. storiesAndInsightsPageType.ts
- **File**: `src/sanity/schemaTypes/storiesAndInsightsPageType.ts`
- **Purpose**: Defines the Sanity schema for the stories and insights page
- **Features**: 
  - Comprehensive field definitions
  - Image hotspot support
  - Validation rules
  - Social media platform management
  - Nested object structures

### 2. Updated index.ts
- **File**: `src/sanity/schemaTypes/index.ts`
- **Changes**: Added storiesAndInsightsPageType to the schema exports

### 3. Updated queries.ts
- **File**: `src/sanity/lib/queries.ts`
- **Changes**: Added storiesAndInsightsPageQuery with comprehensive GROQ query

### 4. Updated sanity.ts
- **File**: `src/lib/sanity.ts`
- **Changes**: 
  - Added StoriesAndInsightsPageData interface
  - Added getStoriesAndInsightsPageData function
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
2. Navigate to "Stories & Insights Page"
3. Create a new document
4. Fill in all required fields
5. Upload and configure images
6. Configure social media links
7. Publish the document

### Step 3: Test the Implementation
1. Start your development server
2. Navigate to `/stories-and-insights`
3. Verify that content is loading from Sanity
4. Check that fallback content appears when data is missing
5. Test social media links functionality

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

## Social Media Integration

The TravelChoice component includes dynamic social media icon rendering:

### Supported Platforms
- **Instagram**: Uses lucide-react Instagram icon
- **Facebook**: Uses lucide-react Facebook icon
- **TripAdvisor**: Custom SVG icon
- **Google**: Custom SVG icon with Google colors

### Social Media Configuration
- Each platform can be enabled/disabled
- URLs are optional but recommended
- Icons are rendered dynamically based on platform name
- Platform names are case-insensitive

### Adding New Social Platforms
1. Add the platform to the schema options
2. Add the icon mapping in the component
3. Update the TypeScript interface

## Dynamic Content Components

### Excluded from CMS Management
- **BlogMasonryGrid**: Will display dynamic blog posts from Sanity's post schema
- **ExploreBar**: Will provide dynamic filtering and search functionality

### Future Implementation
These components will be connected to:
- Blog post queries from Sanity
- Dynamic filtering based on categories
- Search functionality
- Real-time content updates

## Testing Checklist

- [ ] Hero section displays correctly with Sanity data
- [ ] TravelChoice shows title, description, and social links
- [ ] Social media icons render correctly
- [ ] EffortlessLuxury displays all content sections
- [ ] ElevePerks uses landing page data
- [ ] ExploreMore uses eleve page data
- [ ] NewsletterSignUp uses landing page data
- [ ] ContactUs uses landing page data
- [ ] Fallback content appears when data is missing
- [ ] Loading state displays correctly
- [ ] All images load properly
- [ ] All social media links work correctly
- [ ] BlogMasonryGrid remains dynamic (placeholder)
- [ ] ExploreBar remains dynamic (placeholder)

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

3. **Social Media Icons Not Showing**
   - Verify platform names match the icon mapping
   - Check that platforms are enabled
   - Ensure platform names are spelled correctly

4. **Shared Components Not Working**
   - Verify that landing page and eleve page data is being fetched
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
- **Bundle Size**: Social media icons are imported individually

## Future Enhancements

1. **Blog Integration**: Connect BlogMasonryGrid to Sanity's post schema
2. **Search Functionality**: Implement dynamic search in ExploreBar
3. **Real-time Updates**: Implement live preview with Sanity's real-time features
4. **A/B Testing**: Use Sanity's content versioning for testing
5. **Multi-language**: Extend schema for internationalization
6. **Analytics**: Track content performance and engagement
7. **SEO**: Add meta fields for better SEO management

## Content Strategy

### Hero Section
- **Background Image**: High-quality travel imagery
- **Subtitle**: Brand-consistent messaging
- **Title**: Compelling headline for stories and insights
- **Description**: Clear value proposition

### Travel Choice Section
- **Title**: Engaging call-to-action
- **Description**: Community-focused messaging
- **Social Links**: Active social media presence
- **Image**: Lifestyle or destination imagery

### Effortless Luxury Section
- **Title**: Brand positioning statement
- **Subtitle**: Core value proposition
- **Content**: Detailed brand philosophy
- **Image**: Luxury travel experience imagery

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Sanity documentation
3. Check component prop types and interfaces
4. Verify schema validation rules

---

This migration guide ensures a smooth transition from hardcoded content to CMS-managed content while maintaining all existing functionality and design. The dynamic components (BlogMasonryGrid and ExploreBar) are preserved for future implementation with real-time content and functionality. 