import { client } from '@/sanity/lib/client'
import { landingPageQuery, aboutPageQuery, beforeYouTravelPageQuery, elevePageQuery } from '@/sanity/lib/queries'

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

export interface AboutPageData {
  title: string
  hero: {
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
    subtitle: string
    title: string
    description: string
  }
  artOfEffortlessTravel: {
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
    title: string
    subtitle: string
    paragraph1: string
    paragraph2: string
    badgeImage?: {
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
  wallpaper: {
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
  luxuryStay: {
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
  }
  guidingValues: {
    title: string
    subtitle: string
    values: Array<{
      title: string
      highlightedWord: string
      description: string
    }>
  }
  luxufeStory: {
    title: string
    description: string
    buttonText: string
    buttonLink?: string
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
  recognizedForExcellence: {
    title: string
    logos: Array<{
      image: {
        url: string
        metadata: {
          dimensions: {
            width: number
            height: number
          }
        }
        altText?: string
      }
    }>
  }
  speakingJourneys: {
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
    title: string
    description: string
    testimonials: Array<{
      quote: string
      supporting: string
      name: string
      avatar?: {
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
  }
  contactUs: {
    title: string
    description: string
    email: string
    appointmentText: string
    appointmentLink?: string
    faqText: string
    faqLink?: string
    buttonText: string
    buttonLink?: string
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

export interface BeforeYouTravelPageData {
  title: string
  hero: {
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
    subtitle: string
    title: string
    description: string
  }
  essentialTravelInfo: {
    title: string
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
    subtitle: string
    paragraph1: string
    paragraph2: string
  }
  travelAccordion: {
    items: Array<{
      title: string
      content: string
    }>
  }
  exploreMore: {
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
    title: string
    subtitle: string
    cards: Array<{
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
      title: string
      description: string
      cta: string
      href?: string
    }>
  }
  contactUs: {
    title: string
    description: string
    email: string
    appointmentText: string
    appointmentLink?: string
    faqText: string
    faqLink?: string
    buttonText: string
    buttonLink?: string
  }
}

export async function getAboutPageData(): Promise<AboutPageData | null> {
  try {
    const data = await client.fetch(aboutPageQuery)
    return data
  } catch (error) {
    console.error('Error fetching about page data:', error)
    return null
  }
}

export interface ElevePageData {
  title: string
  hero: {
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
    subtitle: string
    title: string
    buttonText: string
  }
  eleveIntro: {
    brandName: string
    description: string
  }
  whyJoinEleve: {
    title: string
    brandName: string
    items: Array<{
      icon: string
      title: string
      content: string
    }>
    buttonText: string
  }
  discoverLuxuryEleve: {
    title: string
    description: string
    buttonText: string
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
  speakingJourneys: {
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
    title: string
    description: string
    testimonials: Array<{
      quote: string
      supporting: string
      name: string
      avatar?: {
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
  }
  elevateTravel: {
    subtitle: string
    title: string
    paragraph1: string
    paragraph2: string
    buttonText: string
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
  exploreMore: {
    title: string
    subtitle: string
    cards: Array<{
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
      title: string
      description: string
      cta: string
      href?: string
    }>
  }
  becomeMemberModal: {
    title: string
    description: string
    perksTitle: string
    perks: string[]
    footerText?: string
    formTitle: string
    radioOptions: string[]
    submitButtonText: string
  }
}

export async function getBeforeYouTravelPageData(): Promise<BeforeYouTravelPageData | null> {
  try {
    const data = await client.fetch(beforeYouTravelPageQuery)
    return data
  } catch (error) {
    console.error('Error fetching before you travel page data:', error)
    return null
  }
}

export async function getElevePageData(): Promise<ElevePageData | null> {
  try {
    const data = await client.fetch(elevePageQuery)
    return data
  } catch (error) {
    console.error('Error fetching eleve page data:', error)
    return null
  }
} 