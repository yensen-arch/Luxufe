import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

export interface BrandPageData {
  hero?: {
    tagline?: string
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
    description?: string
    reasons?: Array<{
      title?: string
      description?: string
      icon?: string
    }>
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
}

export async function getBrandPageData(brandName: string): Promise<BrandPageData | null> {
  const query = `*[_type == "brandPage" && brand == $brandName][0] {
    hero {
      tagline,
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
      description,
      reasons[] {
        title,
        description,
        icon
      }
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
export function getImageUrl(image: any): string | undefined {
  if (!image) return undefined
  return urlFor(image).url()
} 