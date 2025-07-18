import { client } from '@/sanity/lib/client'
import { landingPageQuery } from '@/sanity/lib/queries'

export interface LandingPageData {
  title: string
  hero: {
    tagline: string
    mainHeading: string
    description: string
    backgroundImage: {
      url: string
      metadata: {
        dimensions: {
          width: number
          height: number
        }
      }
      alt: string
    }
  }
  startJourney: {
    heading: string
    description: string
    journeys: Array<{
      category: string
      title: string
      description: string
      image: {
        url: string
        metadata: {
          dimensions: {
            width: number
            height: number
          }
        }
        alt: string
      }
      link: {
        text: string
        href: string
      }
    }>
    ctaText: string
  }
  discoverLuxury: {
    heading: string
    description: string
    ctaText: string
    ctaLink: string
    image: {
      url: string
      metadata: {
        dimensions: {
          width: number
          height: number
        }
      }
      alt: string
    }
  }
  curatedForYou: {
    title: string
    subtitle: string
    description: string
    features: string[]
    itineraries: Array<{
      id: string
      location: string
      nights: number
      name: string
      description: string
      price: number
      image: {
        url: string
        metadata: {
          dimensions: {
            width: number
            height: number
          }
        }
        alt: string
      }
    }>
    ctaButtons: Array<{
      text: string
      link: string
    }>
  }
  voyages: {
    voyages: Array<{
      titlePart1: string
      titlePart2: string
      description: string
      image: {
        url: string
        metadata: {
          dimensions: {
            width: number
            height: number
          }
        }
        alt: string
      }
      buttonText: string
    }>
  }
  testimonials: {
    heading: string
    description: string
    testimonials: Array<{
      quote: string
      author: string
      location: string
    }>
  }
  luxuryPartners: {
    heading: string
    description: string
    partners: Array<{
      name: string
      logo: {
        url: string
        metadata: {
          dimensions: {
            width: number
            height: number
          }
        }
        alt: string
      }
      description: string
    }>
  }
  elevePerks: {
    heading: string
    description: string
    perks: Array<{
      title: string
      description: string
      image: {
        url: string
        metadata: {
          dimensions: {
            width: number
            height: number
          }
        }
        alt: string
      }
      icon: string
    }>
    ctaText: string
  }
  exclusiveOffers: {
    heading: string
    description: string
    offers: Array<{
      title: string
      description: string
      image: {
        url: string
        metadata: {
          dimensions: {
            width: number
            height: number
          }
        }
        alt: string
      }
      ctaText: string
      ctaLink: string
    }>
  }
  inspiration: {
    heading: string
    description: string
    ctaText: string
    ctaLink: string
    blogPosts: Array<{
      category: string
      title: string
      description: string
      image: {
        url: string
        metadata: {
          dimensions: {
            width: number
            height: number
          }
        }
        alt: string
      }
      buttonText: string
      buttonLink: string
    }>
  }
  newsletter: {
    heading: string
    description: string
    placeholder: string
    ctaText: string
    backgroundImage: {
      url: string
      metadata: {
        dimensions: {
          width: number
          height: number
        }
      }
      alt: string
    }
  }
  contactUs: {
    heading: string
    description: string
    contactInfo: {
      phone: string
      email: string
      address: string
    }
  }
}

export async function getLandingPageData(): Promise<LandingPageData | null> {
  try {
    const data = await client.fetch(landingPageQuery)
    return data
  } catch (error) {
    console.error('Error fetching landing page data:', error)
    return null
  }
} 