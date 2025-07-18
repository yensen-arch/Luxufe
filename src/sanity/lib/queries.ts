import { groq } from 'next-sanity'

export const landingPageQuery = groq`
  *[_type == "landingPage"][0] {
    title,
    hero {
      tagline,
      mainHeading,
      description,
      backgroundImage {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      }
    },
    startJourney {
      heading,
      description,
      journeys[] {
        category,
        title,
        description,
        image {
          asset->{
            url,
            metadata {
              dimensions
            }
          },
          alt
        },
        link {
          text,
          href
        }
      },
      ctaText
    },
    discoverLuxury {
      heading,
      description,
      ctaText,
      ctaLink,
      image {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      }
    },
    curatedForYou {
      title,
      subtitle,
      description,
      features,
      itineraries[] {
        id,
        location,
        nights,
        name,
        description,
        price,
        image {
          asset->{
            url,
            metadata {
              dimensions
            }
          },
          alt
        }
      },
      ctaButtons[] {
        text,
        link
      }
    },
    voyages {
      voyages[] {
        titlePart1,
        titlePart2,
        description,
        image {
          asset->{
            url,
            metadata {
              dimensions
            }
          },
          alt
        },
        buttonText
      }
    },
    testimonials {
      heading,
      description,
      testimonials[] {
        quote,
        author,
        location
      }
    },
    luxuryPartners {
      heading,
      description,
      partners[] {
        name,
        logo {
          asset->{
            url,
            metadata {
              dimensions
            }
          },
          alt
        },
        description
      }
    },
    elevePerks {
      heading,
      description,
      perks[] {
        title,
        description,
        image {
          asset->{
            url,
            metadata {
              dimensions
            }
          },
          alt
        },
        icon
      },
      ctaText
    },
    exclusiveOffers {
      heading,
      description,
      offers[] {
        title,
        description,
        image {
          asset->{
            url,
            metadata {
              dimensions
            }
          },
          alt
        },
        ctaText,
        ctaLink
      }
    },
    inspiration {
      heading,
      description,
      ctaText,
      ctaLink,
      blogPosts[] {
        category,
        title,
        description,
        image {
          asset->{
            url,
            metadata {
              dimensions
            }
          },
          alt
        },
        buttonText,
        buttonLink
      }
    },
    newsletter {
      heading,
      description,
      placeholder,
      ctaText,
      backgroundImage {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      }
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
  }
`

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    title,
    hero {
      backgroundImage {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      subtitle,
      title,
      description
    },
    artOfEffortlessTravel {
      image {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      title,
      subtitle,
      paragraph1,
      paragraph2,
      badgeImage {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      }
    },
    wallpaper {
      image {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      }
    },
    luxuryStay {
      title,
      description,
      image {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      }
    },
    guidingValues {
      title,
      subtitle,
      values[] {
        title,
        highlightedWord,
        description
      }
    },
    luxufeStory {
      title,
      description,
      buttonText,
      buttonLink,
      image {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      }
    },
    recognizedForExcellence {
      title,
      logos[] {
        image {
          asset->{
            url,
            metadata {
              dimensions
            }
          },
          altText
        }
      }
    },
    speakingJourneys {
      backgroundImage {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      title,
      description,
      testimonials[] {
        quote,
        supporting,
        name,
        avatar {
          asset->{
            url,
            metadata {
              dimensions
            }
          },
          alt
        }
      }
    },
    contactUs {
      title,
      description,
      email,
      appointmentText,
      appointmentLink,
      faqText,
      faqLink,
      buttonText,
      buttonLink
    }
  }
`

export const beforeYouTravelPageQuery = groq`
  *[_type == "beforeYouTravelPage"][0] {
    title,
    hero {
      backgroundImage {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      subtitle,
      title,
      description
    },
    essentialTravelInfo {
      title,
      image {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      subtitle,
      paragraph1,
      paragraph2
    },
    travelAccordion {
      items[] {
        title,
        content
      }
    },
    exploreMore {
      backgroundImage {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      title,
      subtitle,
      cards[] {
        image {
          asset->{
            url,
            metadata {
              dimensions
            }
          },
          alt
        },
        title,
        description,
        cta,
        href
      }
    },
    contactUs {
      title,
      description,
      email,
      appointmentText,
      appointmentLink,
      faqText,
      faqLink,
      buttonText,
      buttonLink
    }
  }
`

export const elevePageQuery = groq`
  *[_type == "elevePage"][0] {
    title,
    hero {
      backgroundImage {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      subtitle,
      title,
      buttonText
    },
    eleveIntro {
      brandName,
      description
    },
    whyJoinEleve {
      title,
      brandName,
      items[] {
        icon,
        title,
        content
      },
      buttonText
    },
    discoverLuxuryEleve {
      title,
      description,
      buttonText,
      image {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      }
    },
    speakingJourneys {
      backgroundImage {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      title,
      description,
      testimonials[] {
        quote,
        supporting,
        name,
        avatar {
          asset->{
            url,
            metadata {
              dimensions
            }
          },
          alt
        }
      }
    },
    elevateTravel {
      subtitle,
      title,
      paragraph1,
      paragraph2,
      buttonText,
      image {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      }
    },
    exploreMore {
      title,
      subtitle,
      cards[] {
        image {
          asset->{
            url,
            metadata {
              dimensions
            }
          },
          alt
        },
        title,
        description,
        cta,
        href
      }
    },
    becomeMemberModal {
      title,
      description,
      perksTitle,
      perks,
      footerText,
      formTitle,
      radioOptions,
      submitButtonText
    }
  }
`

export const storiesAndInsightsPageQuery = groq`
  *[_type == "storiesAndInsightsPage"][0] {
    title,
    hero {
      backgroundImage {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      subtitle,
      title,
      description
    },
    travelChoice {
      title,
      description,
      socialLinks[] {
        platform,
        url,
        enabled
      },
      image {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      }
    },
    effortlessLuxury {
      title,
      subtitle,
      paragraph1,
      paragraph2,
      buttonText,
      image {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      }
    }
  }
` 