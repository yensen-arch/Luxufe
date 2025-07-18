# Complete Landing Page Migration to Sanity CMS

## ✅ **COMPLETED SETUP**

All landing page components have been successfully updated to work with Sanity CMS:

### **Updated Components:**
- ✅ `Hero.tsx` - Accepts hero data from Sanity
- ✅ `StartJourney.tsx` - Accepts start journey data from Sanity
- ✅ `DiscoverLuxury.tsx` - Accepts discover luxury data from Sanity  
- ✅ `CuratedForYou.tsx` - Accepts curated for you data from Sanity
- ✅ `Voyages.tsx` - Accepts voyages data from Sanity
- ✅ `Testimonials.tsx` - Accepts testimonials data from Sanity
- ✅ `LuxuryPartners.tsx` - Accepts luxury partners data from Sanity
- ✅ `ElevePerks.tsx` - Accepts eleve perks data from Sanity (with images and CTA)
- ✅ `ExclusiveOffers.tsx` - Accepts exclusive offers data from Sanity
- ✅ `Inspiration.tsx` - Accepts inspiration data from Sanity (with blog posts)
- ✅ `NewsletterSignUp.tsx` - Accepts newsletter data from Sanity (with background image)
- ✅ `ContactUs.tsx` - Accepts contact us data from Sanity

### **Schema Created:**
- ✅ `landingPageType.ts` - Comprehensive schema for all sections
- ✅ `queries.ts` - GROQ queries to fetch data
- ✅ `sanity.ts` - TypeScript interfaces and data fetching utilities

## 🚀 **HOW TO MIGRATE ALL CONTENT TO SANITY**

### **Step 1: Access Sanity Studio**
1. Start your dev server: `npm run dev`
2. Go to `http://localhost:3000/studio`
3. You'll see the Sanity Studio interface

### **Step 2: Create Landing Page Document**
1. In the left sidebar, click **"Landing Page"**
2. Click **"Create new Landing Page"**
3. Fill in the content using the current hardcoded content as reference

### **Step 3: Copy Current Content to Sanity**

Here's the exact content to copy from your current components:

#### **Hero Section:**
```
Tagline: "Your travel, your way"
Main Heading: "Unforgettable Luxury\nTravel Experiences"
Description: "Time is your greatest luxury. At Luxufe, we go beyond travel, refining every unforgettable moment so that it is tailored to you."
Background Image: Upload a luxury travel image
```

#### **Start Journey Section:**
```
Heading: "Start your journey, your way"
Description: "Travel is personal. We all have different wants, needs, and desires when we consider where, when, and how you travel. Let Luxufe tailor your next travel experience for you."

Journeys:
1. Category: "DESTINATIONS"
   Title: "Begin with a place that inspires you"
   Description: "Discover the world's most iconic destinations, from the Eiffel Tower in Paris to the Great Wall of China. Let Luxufe help you find the perfect place to start your journey."
   Image: Upload destinations image
   Link Text: "DESTINATIONS"
   Link Href: "#"

2. Category: "EXPERIENCES"
   Title: "What would you like to experience?"
   Description: "From culinary adventures to cultural tours, let Luxufe help you find the perfect experience to start your journey."
   Image: Upload experiences image
   Link Text: "EXPERIENCES"
   Link Href: "#"

3. Category: "JOURNEYS"
   Title: "Indulge in itineraries designed by experts"
   Description: "Have a preferred way to travel? Whether it's a private jet, luxury cruise, or a classic train, let your style define an unforgettable experience."
   Image: Upload journeys image
   Link Text: "JOURNEYS & TOURS"
   Link Href: "#"

CTA Text: "+ MORE WAYS TO TRAVEL"
```

#### **Discover Luxury Section:**
```
Heading: "Unmatched care,\neffortless experiences"
Description: "Luxury travel is defined by the peace of mind it brings. Where every detail is thoughtfully arranged, allowing you to focus solely on the journey ahead. From seamless transitions to exceptional customer care, every aspect of your trip is designed to provide an effortless and unforgettable experience."
CTA Text: "DISCOVER LUXURY"
CTA Link: "#"
Image: Upload the couple image
```

#### **Curated For You Section:**
```
Title: "The world,"
Subtitle: "curated for you"
Description: "From iconic landmarks to hidden retreats, Luxufe takes you beyond the expected. Discover travel experiences designed around your desires, where every journey is effortless and immersive."
Features: 
- "Personalised Itineraries"
- "Insider secrets guaranteed" 
- "World-class Service"
CTA Buttons:
- Text: "JOURNEYS & TOURS", Link: "#"
- Text: "MORE WAYS TO TRAVEL", Link: "#"
```

#### **Voyages Section:**
```
Voyages:
1. Title Part 1: "Unforgettable voyages,"
   Title Part 2: "luxury"
   Description: "Set sail on a journey where every detail is designed for your ultimate comfort and discovery. From elegant ocean liners to intimate yacht charters, Luxufe curates the most exclusive cruise experiences, blending luxurious accommodation with breathtaking destinations."
   Image: Upload luxury cruise image
   Button Text: "LUXURY CRUISES"

2. Title Part 1: "Exclusive rail journeys,"
   Title Part 2: "elegance"
   Description: "Embark on a classic adventure aboard some of the world's most iconic trains. Traverse stunning landscapes in unparalleled comfort, enjoying gourmet dining and exquisite service. A journey by rail is a return to the golden age of travel."
   Image: Upload luxury train image
   Button Text: "CLASSIC TRAINS"

3. Title Part 1: "Private jet charters,"
   Title Part 2: "travel"
   Description: "Experience the pinnacle of convenience and luxury with our private jet charters. Skip the queues and travel on your own schedule to any destination worldwide. Enjoy personalized service and unmatched comfort from takeoff to landing."
   Image: Upload private jet image
   Button Text: ""
```

#### **Itineraries (Add these to Curated For You):**
```
1. Egypt - Pyramids & Nile Cruise
   - Location: "EGYPT"
   - Nights: 9
   - Name: "Pyramids & Nile Cruise"
   - Description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no"
   - Price: 25756
   - Image: Upload Egypt image

2. Antarctica - Journey to the Ice Kingdom
   - Location: "ANTARCTICA"
   - Nights: 12
   - Name: "Journey to the Ice Kingdom"
   - Description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no"
   - Price: 27756
   - Image: Upload Antarctica image

3. South America - Inca Trails & Machu Picchu
   - Location: "SOUTH AMERICA"
   - Nights: 8
   - Name: "Inca Trails & Machu Picchu"
   - Description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no"
   - Price: 18756
   - Image: Upload South America image

4. South Africa - Cape Town & Safari
   - Location: "SOUTH AFRICA"
   - Nights: 9
   - Name: "Cape Town & Safari"
   - Description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no"
   - Price: 22756
   - Image: Upload South Africa image

5. Greece - Islands of the Aegean
   - Location: "GREECE"
   - Nights: 7
   - Name: "Islands of the Aegean"
   - Description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no"
   - Price: 19756
   - Image: Upload Greece image
```

#### **Testimonials Section:**
```
Heading: "Journeys that speak for themselves"
Description: "At Luxufe, our clients' experiences define us. But don't take our word for it. Explore their experiences of effortless journeys, impeccable service, and unforgettable moments."

Testimonials:
1. Quote: "At Luxufe, our clients' experiences define us. But don't take our word for it. Explore their experiences of effortless journeys, impeccable service, and unforgettable moments."
   Author: "Name Here"
   Location: "USA"

2. Quote: "The attention to detail was simply extraordinary. From the private transfers to the curated daily excursions, every aspect of our trip was seamless. We felt truly cared for."
   Author: "Jane & John Smith"
   Location: "UK"

3. Quote: "A journey that surpassed all expectations. The insider access Luxufe provided gave us a perspective we never would have gotten on our own. Unforgettable."
   Author: "Samantha Bee"
   Location: "Canada"

4. Quote: "Impeccable service from start to finish. The team was responsive, knowledgeable, and genuinely passionate about creating the perfect trip for us. We'll be back!"
   Author: "Carlos Rodriguez"
   Location: "Spain"
```

#### **Luxury Partners Section:**
```
Heading: "Our trusted, luxury partners"
Description: "Excellence elevated"

Partners: Add all the hotel, cruise, and airline partners with their logos
```

#### **Eleve Perks Section:**
```
Heading: "Experience more with Elevé by Luxufe"
Description: "Loyalty should feel as effortless as your travels. With Elevé by Luxufe, every journey brings exclusive benefits, personalised perks, and priority access to unforgettable experiences."

Perks:
1. Title: "Elevé"
   Description: "Loyalty should feel as effortless as your travels. With Elevé by Luxufe, every journey brings exclusive benefits, personalised perks, and priority access to unforgettable experiences."
   Image: Upload resort pool image
   Icon: "star"

2. Title: "Priority Access"
   Description: "Gain early access to our most sought-after itineraries and exclusive partner offers. As an Elevé member, you're always at the front of the line for new and unique travel opportunities."
   Image: Upload priority access image
   Icon: "star"

3. Title: "Personalised Service"
   Description: "Your journey is tailored to your preferences. Enjoy complimentary upgrades, bespoke amenities, and a dedicated travel concierge who understands your unique style and desires."
   Image: Upload personal service image
   Icon: "star"

CTA Text: "ELEVATE YOUR TRAVEL"
```

#### **Exclusive Offers Section:**
```
Heading: "Exclusive offers,\nunforgettable experiences"
Description: "Discover exclusive promotions and bespoke travel offers designed to elevate your journey. From elite upgrades to personalised perks, Luxufe ensures every experience is seamless, exceptional, and tailored just for you."
```

#### **Inspiration Section:**
```
Heading: "Inspiration for the discerning traveller"
Description: "Explore expert insights, curated guides, and insider tips to elevate your travel experiences. Discover the world's finest destinations, luxury stays, and bespoke journeys, all designed to inspire your next adventure."
CTA Text: "FIND INSPIRATION"
CTA Link: "#"

Blog Posts: Add your featured blog posts directly:
1. Category: "DESTINATIONS"
   Title: "The Allure of the Amalfi Coast"
   Description: "Discover the breathtaking beauty of Italy's most iconic coastline, where dramatic cliffs meet crystal-clear waters."
   Image: Upload Amalfi Coast image
   Button Text: "READ MORE"
   Button Link: "/blog/amalfi-coast"

2. Category: "EXPERIENCES"
   Title: "A Culinary Journey Through Japan"
   Description: "Embark on a gastronomic adventure through the diverse flavors and traditions of Japanese cuisine."
   Image: Upload Japan food image
   Button Text: "READ MORE"
   Button Link: "/blog/japan-culinary"

3. Category: "DESTINATIONS"
   Title: "Luxury Safari in South Africa"
   Description: "Experience the thrill of the wild with unparalleled luxury in the heart of the African savanna."
   Image: Upload safari image
   Button Text: "READ MORE"
   Button Link: "/blog/south-africa-safari"

4. Category: "EXPERIENCES"
   Title: "Exploring the Greek Islands"
   Description: "Sail through the azure waters of the Aegean and discover the timeless beauty of the Greek archipelago."
   Image: Upload Greek islands image
   Button Text: "READ MORE"
   Button Link: "/blog/greek-islands"
```

#### **Newsletter Section:**
```
Heading: "Stay inspired. Travel seamlessly."
Description: "Join the Luxufe newsletter for exclusive travel insights, curated offers, and the latest in luxury experiences. Be the first to discover extraordinary journeys, tailored just for you."
Placeholder: "Email*"
CTA Text: "STAY INSPIRED"
Background Image: Upload newsletter background image
```

#### **Contact Us Section:**
```
Heading: "Contact Us"
Description: "Whether you need expert travel advice, personalised recommendations, or seamless support, don't hesitate to get in touch and let us craft your next effortless journey."
Contact Info:
- Phone: "+1 (555) 123-4567"
- Email: "info@luxufe.com"
- Address: "123 Luxury Street, Suite 100, New York, NY 10001"
```

### **Step 4: Publish Content**
1. Click **"Publish"** to make your changes live
2. Your landing page will automatically update with the new content

### **Step 5: Test the Migration**
1. Go to your landing page (`http://localhost:3000`)
2. Verify that all content is displaying correctly from Sanity
3. Test that the fallback content still works if you remove data from Sanity

## 🎯 **BENEFITS OF THIS MIGRATION**

1. **Content Management**: All landing page content is now manageable through Sanity's user-friendly interface
2. **No Code Changes**: Content updates don't require code changes or deployments
3. **Fallback Safety**: Components gracefully fall back to hardcoded content if Sanity data is missing
4. **Type Safety**: Full TypeScript support with proper interfaces
5. **Scalable**: Easy to add new sections or modify existing ones

## 🔧 **TROUBLESHOOTING**

- **No Data Showing**: Check that you've created and published a Landing Page document in Sanity Studio
- **Environment Variables**: Ensure all Sanity environment variables are set correctly
- **Build Errors**: Run `npm run build` to check for any TypeScript errors

## 📝 **NEXT STEPS**

1. **Populate Content**: Use the guide above to copy all current content to Sanity
2. **Customize**: Modify the schema if you need additional fields
3. **Optimize Images**: Use Sanity's image optimization features
4. **Add More Sections**: Extend the schema for additional landing page sections

The migration is complete! Your landing page is now fully connected to Sanity CMS. 🎉 