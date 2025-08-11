import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

export interface BrandPageData {
  hero?: {
    heading?: string
    description?: string
    backgroundImage?: any
    ctaText?: string
    ctaLink?: string
  }
  philosophy?: {
    heading?: string
    description?: string
    image?: any
  }
  whyWeTravel?: {
    heading?: string
    subheading?: string
    paragraph1?: string
    paragraph2?: string
    image?: any
  }
  benefits?: {
    heading?: string
    description?: string
    benefits?: Array<{
      title?: string
      description?: string
      icon?: string
    }>
  }
  main?: {
    heading?: string
    description?: string
    content?: any[]
  }
  itineraries?: {
    heading?: string
    description?: string
  }
}

export async function getBrandPageData(brandName: string): Promise<BrandPageData | null> {
  const query = `*[_type == "brandPage" && brand == $brandName][0] {
    hero {
      heading,
      description,
      backgroundImage,
      ctaText,
      ctaLink
    },
    philosophy {
      heading,
      description,
      image
    },
    whyWeTravel {
      heading,
      subheading,
      paragraph1,
      paragraph2,
      image
    },
    benefits {
      heading,
      description,
      benefits[] {
        title,
        description,
        icon
      }
    },
    main {
      heading,
      description,
      content
    },
    itineraries {
      heading,
      description
    }
  }`

  try {
    const data = await client.fetch(query, { brandName })
    return data || null
  } catch (error) {
    console.error('Error fetching brand page data:', error)
    return null
  }
}

// Helper function to get image URL
export function getImageUrl(image: any): string {
  if (!image) return "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  return urlFor(image).url()
} 