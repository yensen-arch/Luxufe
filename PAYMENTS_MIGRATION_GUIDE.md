// 1. Create src/sanity/schemaTypes/paymentsPageType.ts

```ts
import { defineType, defineField } from 'sanity';

export const paymentsPageType = defineType({
  name: 'paymentsPage',
  title: 'Payments Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: { hotspot: true },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          description: 'The italic subtitle (e.g., Secure your journey)',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'title',
          title: 'Main Title',
          type: 'string',
          description: 'The main hero title',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'The description text below the title',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      heroTitle: 'hero.title',
    },
    prepare({ title, heroTitle }) {
      return {
        title: title || 'Payments Page',
        subtitle: heroTitle ? `Hero: ${heroTitle}` : 'No hero title set',
      };
    },
  },
});
```

// 2. Add to src/sanity/schemaTypes/index.ts

```ts
import {paymentsPageType} from './paymentsPageType'
// ...
types: [
  // ...
  paymentsPageType,
]
```

// 3. Add to src/sanity/lib/queries.ts

```ts
export const paymentsPageQuery = groq`
  *[_type == "paymentsPage"][0] {
    title,
    hero {
      backgroundImage {
        asset->{
          url,
          metadata { dimensions }
        },
        alt
      },
      subtitle,
      title,
      description
    }
  }
`
```

// 4. Add to src/lib/sanity.ts

```ts
export interface PaymentsPageData {
  title: string;
  hero: {
    backgroundImage: {
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
        };
      };
      alt: string | null;
    };
    subtitle: string;
    title: string;
    description: string;
  };
}

export async function getPaymentsPageData(): Promise<PaymentsPageData | null> {
  try {
    const data = await client.fetch(paymentsPageQuery);
    return data;
  } catch (error) {
    console.error('Error fetching payments page data:', error);
    return null;
  }
}
```

// 5. Create src/components/payments/PaymentsHero.tsx

```tsx
import React from "react";

interface PaymentsHeroProps {
  data?: {
    backgroundImage: {
      url: string;
      alt: string | null;
    };
    subtitle: string;
    title: string;
    description: string;
  };
}

const PaymentsHero: React.FC<PaymentsHeroProps> = ({ data }) => {
  const displayBackgroundImage = data?.backgroundImage?.url || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80";
  const displaySubtitle = data?.subtitle || "Secure your journey";
  const displayTitle = data?.title || "You’re one step away from something extraordinary";
  const displayDescription = data?.description || "This secure payment page confirms your booking and finalizes your travel arrangements. Our team remains available should you have any questions before, during, or after your journey.";

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={displayBackgroundImage}
        alt={data?.backgroundImage?.alt || "Payments Hero Background"}
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center">
        <span className="font-bellarina text-4xl md:text-5xl text-white mb-4 block italic">{displaySubtitle}</span>
        <h1 className="text-white text-4xl md:text-6xl font-arpona font-medium mb-8 leading-tight">
          {displayTitle}
        </h1>
        <p className="text-white text-lg md:text-2xl font-inter font-bold max-w-2xl mx-auto">
          {displayDescription}
        </p>
      </div>
    </section>
  );
};

export default PaymentsHero;
```

// 6. Update src/app/payments/page.tsx

```tsx
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PaymentsHero from "@/components/payments/PaymentsHero";
import ContactUs from "@/components/regions/ContactUs";
import { getPaymentsPageData } from "@/lib/sanity";

const PaymentsPage = async () => {
  const paymentsData = await getPaymentsPageData();
  return (
    <main>
      <Navbar />
      <PaymentsHero data={paymentsData?.hero} />
      <div className="bg-[#f7f7fa] py-24">
        <div className="max-w-4xl mx-auto">
          <ContactUs />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PaymentsPage;
``` 