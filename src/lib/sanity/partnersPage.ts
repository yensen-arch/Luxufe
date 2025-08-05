import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

export interface PartnersPageData {
  heroPartners?: {
    heading?: string
    description?: string
    backgroundImage?: any
    ctaText?: string
    ctaLink?: string
  }
  globalNetwork?: {
    heading?: string
    description?: string
    backgroundImage?: any
    ctaText?: string
    ctaLink?: string
  }
  benefitsSection?: {
    heading?: string
    description?: string
    benefits?: Array<{
      title?: string
      description?: string
      icon?: string
    }>
  }
  partnerHighlight?: {
    heading?: string
    description?: string
    partners?: Array<{
      name?: string
      logo?: any
      description?: string
    }>
  }
  highestBrandSearch?: {
    heading?: string
    description?: string
  }
  selectedFavs?: {
    heading?: string
    description?: string
    itineraries?: Array<{
      id?: string
      location?: string
      nights?: number
      name?: string
      description?: string
      price?: number
      image?: any
    }>
    ctaText?: string
    ctaLink?: string
  }
  contactUs?: {
    heading?: string
    description?: string
    contactInfo?: {
      phone?: string
      email?: string
      address?: string
    }
  }
}

export async function getPartnersPageData(): Promise<PartnersPageData | null> {
  const query = `*[_type == "partnersPage"][0] {
    heroPartners {
      heading,
      description,
      backgroundImage,
      ctaText,
      ctaLink
    },
    globalNetwork {
      heading,
      description,
      backgroundImage,
      ctaText,
      ctaLink
    },
    benefitsSection {
      heading,
      description,
      benefits[] {
        title,
        description,
        icon
      }
    },
    partnerHighlight {
      heading,
      description,
      partners[] {
        name,
        logo,
        description
      }
    },
    highestBrandSearch {
      heading,
      description
    },
    selectedFavs {
      heading,
      description,
      itineraries[] {
        id,
        location,
        nights,
        name,
        description,
        price,
        image
      },
      ctaText,
      ctaLink
    },
    contactUs {
      heading,
      description,
      contactInfo {
        phone,
        email,
        address
      }
    }
  }`

  try {
    const data = await client.fetch(query)
    return data || null
  } catch (error) {
    console.error('Error fetching partners page data:', error)
    return null
  }
}

// Helper function to get image URL
export function getImageUrl(image: any): string | undefined {
  if (!image) return undefined
  return urlFor(image).url()
} 