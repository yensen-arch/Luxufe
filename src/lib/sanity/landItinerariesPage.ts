import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

export interface LandItinerariesPageData {
  hero?: {
    heading?: string
    description?: string
    backgroundImage?: any
  }
  main?: {
    heading?: string
    description?: string
  }
  filterOptions?: {
    journeyTypes?: string[]
    durationRanges?: string[]
    regions?: string[]
  }
}

export async function getLandItinerariesPageData(): Promise<LandItinerariesPageData | null> {
  const query = `*[_type == "landItinerariesPage"][0] {
    hero {
      heading,
      description,
      backgroundImage
    },
    main {
      heading,
      description
    },
    filterOptions {
      journeyTypes,
      durationRanges,
      regions
    }
  }`

  try {
    const data = await client.fetch(query)
    return data || null
  } catch (error) {
    console.error('Error fetching land itineraries page data:', error)
    return null
  }
}

// Helper function to get image URL
export function getImageUrl(image: any): string {
  if (!image) return "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80"
  return urlFor(image).url()
}
