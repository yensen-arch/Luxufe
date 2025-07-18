# Contact Us Page - Sanity CMS Migration Guide

This guide provides the exact content to paste into Sanity Studio for the Contact Us page integration.

## Overview

The Contact Us page has been integrated with Sanity CMS for the following components:
- **ContactHero**: Background image, subtitle, title, button text, description, and contact information
- **Carousel**: Carousel image
- **TravelInsuranceInfo**: Title, subtitle, description, additional info, image, and button text

## Components NOT Connected to CMS

The following components remain hardcoded and are NOT managed through Sanity:
- Navbar
- ElevePerks
- Testimonials
- Inspiration
- NewsletterSignUp
- ContactUsJourneys
- Footer

## Sanity Studio Setup

### 1. Create New Document

1. Go to Sanity Studio
2. Click "Create new document"
3. Select "Contact Us Page"
4. Fill in the following content:

### 2. Page Title
```
Contact Us Page
```

### 3. Contact Hero Section

#### Background Image
- Upload a high-quality image (recommended: 1500px width)
- Suggested: Sydney Opera House and Harbour Bridge image

#### Subtitle
```
Contact Us
```

#### Main Title
```
Here for You, Wherever You Are
```

#### Button Text
```
JUMP TO QUIZ
```

#### Description
```
Whether you need expert travel advice, personalized recommendations, or seamless support, we're always ready to assist you at every step of your journey.
```

#### Contact Information

**Call Us Section:**
- Title: `Call Us`
- Phone Numbers: 
  - `+12 345 5678 8999`
  - `+12 345 5678 8999`

**Email Us Section:**
- Title: `Email Us`
- Email: `info@luxufe.com`

**Book a Call Section:**
- Title: `Book a call`
- Description: `Schedule a call with us`
- Link Text: `Calendly`
- Link URL: `#` (or your actual Calendly URL)

### 4. Carousel Section

#### Carousel Image
- Upload a cocktail or luxury travel image
- Recommended: 800px width
- Alt text: `Cocktail`

### 5. Travel Insurance Info Section

#### Section Title
```
Travel with Confidence with insurance
```

#### Subtitle
```
Luxufe offers comprehensive travel insurance through our trusted partner, Travelex, ensuring that every journey is protected against the unexpected.
```

#### Description
```
Luxufe offers comprehensive travel insurance through our trusted partner, Travelex, ensuring that every journey is protected against the unexpected.
```

#### Additional Information
```
True luxury means traveling without worry. From last-minute itinerary changes to unforeseen medical emergencies, having the right insurance ensures that your journey remains seamless, no matter what happens. Luxufe partners with Travelex to offer tailored coverage, including trip cancellations, medical assistance, lost luggage protection, and exclusive emergency support.

When you book with Luxufe, remember to add comprehensive travel insurance and enjoy the world's finest travel experiences with complete peace of mind.
```

#### Section Image
- Upload a woman with hat by water image
- Recommended: 800px width
- Alt text: `Woman with hat by water`

#### Button Text
```
Explore Luxury
```

## Technical Notes

### Image Requirements
- **Hero Background**: 1500px width minimum, high quality
- **Carousel Image**: 800px width minimum
- **Travel Insurance Image**: 800px width minimum
- All images should be optimized for web

### Content Guidelines
- Keep titles concise and impactful
- Descriptions should be engaging and informative
- Contact information should be accurate and up-to-date
- Button text should be action-oriented

### Fallback Content
If any CMS data is missing, the components will fall back to the original hardcoded content to ensure the page always displays properly.

## Testing

After setting up the content in Sanity Studio:

1. **Check Hero Section**: Verify background image, titles, and contact information display correctly
2. **Check Carousel**: Ensure the carousel image appears properly
3. **Check Travel Insurance**: Verify title, description, image, and button display correctly
4. **Test Responsiveness**: Ensure all content looks good on mobile and desktop
5. **Verify Fallbacks**: Temporarily remove some content to test fallback behavior

## Troubleshooting

### Common Issues:
1. **Images not displaying**: Check image URLs in browser dev tools
2. **Content not updating**: Clear browser cache and restart development server
3. **TypeScript errors**: Ensure all required fields are filled in Sanity Studio

### Debug Steps:
1. Check browser console for errors
2. Verify Sanity Studio content is published
3. Check network tab for API calls to Sanity
4. Verify GROQ query is working correctly

## Next Steps

Once the Contact Us page is working correctly:
1. Test all functionality thoroughly
2. Optimize images for performance
3. Consider adding more dynamic content sections if needed
4. Document any customizations made to the components 