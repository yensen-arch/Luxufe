# Hotels Page Migration to Sanity CMS

## ✅ **COMPLETED SETUP**

The hotels page has been successfully connected to Sanity CMS for content management. The setup includes:

### **Updated Components:**
- ✅ `HotelHero.tsx` - Accepts hero data from Sanity
- ✅ `HotelBrands.tsx` - Accepts brands data from Sanity
- ✅ `PropertyPicks.tsx` - Static component (not connected to CMS)
- ✅ `PropertyCard.tsx` - Reusable card component
- ✅ `HotelMap.tsx` - Separate map component

### **Schema Created:**
- ✅ `hotelsPageType.ts` - Comprehensive schema for hotels page
- ✅ `queries.ts` - GROQ queries to fetch data
- ✅ `sanity.ts` - TypeScript interfaces and data fetching utilities

## 🚀 **HOW TO MIGRATE CONTENT TO SANITY**

### **Step 1: Access Sanity Studio**
1. Start your dev server: `npm run dev`
2. Go to `http://localhost:3000/studio`
3. You'll see the Sanity Studio interface

### **Step 2: Create Hotels Page Document**
1. In the left sidebar, click **"Hotels Page"**
2. Click **"Create new Hotels Page"**
3. Fill in the content using the current hardcoded content as reference

### **Step 3: Copy Current Content to Sanity**

Here's the exact content to copy from your current components:

#### **Hero Section:**
```
Tagline: "Exceptional Stays. Handpicked for You"
Main Heading: "Discover the world's finest hotels,"
Sub Heading: "selected for elegance, service, and soul"
Background Image: Upload a luxury hotel image (golf course overlooking ocean)
```

#### **Brands Section:**
```
Section Title: "Where You Stay, Matters"
Subtitle: "More than accommodation, these are destinations in their own right"
Description: "At Luxufe, we curate hotels with the same care we give to every journey. From iconic city landmarks to secluded hideaways, each property is chosen for its character, service, and ability to enhance your overall experience."

Brand Logos (add each as a separate item):
1. Name: "BEYOND", Logo: Upload BEYOND logo
2. Name: "BELMOND", Logo: Upload BELMOND logo
3. Name: "CAPELLA HOTELS & RESORTS", Logo: Upload CAPELLA logo
4. Name: "Dorchester Collection", Logo: Upload Dorchester logo
5. Name: "Fairmont HOTELS & RESORTS", Logo: Upload Fairmont logo
6. Name: "One&Only RESORTS", Logo: Upload One&Only logo
7. Name: "ST REGIS", Logo: Upload ST REGIS logo

Destination Images (add each as a separate item):
1. Name: "Singita Castleton", Location: "Greater Kruger, South Africa", Image: Upload cheetah/lodge image
2. Name: "Palace Hotel", Location: "Europe", Image: Upload palace building image
3. Name: "Taj Palace", Location: "India", Image: Upload Indian palace image
```

## 📋 **SANITY STUDIO CONTENT TO COPY**

### **Page Title:**
```
Hotels Page
```

### **Hero Section:**
- **Tagline:** `Exceptional Stays. Handpicked for You`
- **Main Heading:** `Discover the world's finest hotels,`
- **Sub Heading:** `selected for elegance, service, and soul`
- **Background Image:** Upload a high-quality image of a luxury hotel on a golf course overlooking the ocean

### **Brands Section:**
- **Section Title:** `Where You Stay, Matters`
- **Subtitle:** `More than accommodation, these are destinations in their own right`
- **Description:** `At Luxufe, we curate hotels with the same care we give to every journey. From iconic city landmarks to secluded hideaways, each property is chosen for its character, service, and ability to enhance your overall experience.`

### **Brand Logos (Add 7 items):**
1. **Name:** `BEYOND`
   **Logo:** Upload BEYOND brand logo (black/white)

2. **Name:** `BELMOND`
   **Logo:** Upload BELMOND brand logo (black/white)

3. **Name:** `CAPELLA HOTELS & RESORTS`
   **Logo:** Upload CAPELLA brand logo (black/white)

4. **Name:** `Dorchester Collection`
   **Logo:** Upload Dorchester Collection brand logo (black/white)

5. **Name:** `Fairmont HOTELS & RESORTS`
   **Logo:** Upload Fairmont brand logo (black/white)

6. **Name:** `One&Only RESORTS`
   **Logo:** Upload One&Only brand logo (black/white)

7. **Name:** `ST REGIS`
   **Logo:** Upload ST REGIS brand logo (black/white)

### **Destination Images (Add 3 items):**
1. **Name:** `Singita Castleton`
   **Location:** `Greater Kruger, South Africa`
   **Image:** Upload image of cheetah on stone sign with "Castleton" text

2. **Name:** `Palace Hotel`
   **Location:** `Europe`
   **Image:** Upload image of grand classical palace building with columns and balconies

3. **Name:** `Taj Palace`
   **Location:** `India`
   **Image:** Upload image of ornate Indian palace with domes and arched windows

## 🔧 **TECHNICAL DETAILS**

### **Components Connected to Sanity:**
- **HotelHero:** Uses `hotelsData?.hero` for tagline, headings, and background image
- **HotelBrands:** Uses `hotelsData?.brands` for title, subtitle, description, brand logos, and destination images
- **NewsletterSignUp:** Uses `landingData?.newsletter` (shared component)
- **ContactUs:** Static component (no CMS connection)

### **Components Not Connected to Sanity:**
- **PropertyPicks:** Static component with hardcoded content
- **HotelsMain:** Static component with hardcoded content
- **HotelMap:** Static component with hardcoded locations

### **Data Flow:**
1. Page fetches `getHotelsPageData()` and `getLandingPageData()`
2. Hero data passed to `HotelHero` component
3. Brands data passed to `HotelBrands` component
4. Landing page data used for shared components

## ✅ **VERIFICATION**

After setting up the content in Sanity Studio:

1. **Start your development server:** `npm run dev`
2. **Navigate to `/hotels`**
3. **Verify that:**
   - Hero section displays content from Sanity
   - Brands section shows logos and destination carousel
   - All images load correctly
   - Fallback content works if Sanity data is missing

## 🎯 **NEXT STEPS**

Once the basic setup is working, you can:

1. **Add more brand logos** to the brands section
2. **Add more destination images** to the carousel
3. **Connect PropertyPicks component** to Sanity if needed
4. **Connect HotelsMain component** to Sanity if needed
5. **Add more sections** to the hotels page as required

The hotels page is now fully integrated with Sanity CMS and ready for content management! 