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
        }
      }
    },
    elevePerks {
      heading,
      description,
      perks[] {
        icon,
        title,
        content
      },
      ctaText,
      ctaLink,
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
      blogPosts[] {
        title,
        excerpt,
        slug,
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
    wallpaper {
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
      description
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
      description,
      values[] {
        icon,
        title,
        content
      }
    },
    luxufeStory {
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
    recognizedForExcellence {
      title,
      description,
      awards[] {
        name,
        year,
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
      contactInfo {
        phone,
        email,
        address
      }
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
      description,
      items[] {
        icon,
        title,
        content
      }
    },
    luxufeStory {
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
    travelAccordion {
      title,
      description,
      items[] {
        title,
        content
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
    contactUs {
      title,
      description,
      contactInfo {
        phone,
        email,
        address
      }
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
    }
  }
`

export const experienceMorePageQuery = groq`
  *[_type == "experienceMorePage"][0] {
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
      title,
      description
    },
    latestGreatestFilter {
      title,
      description
    }
  }
`

export const blogPageQuery = groq`
  *[_type == "blogPage"][0] {
    title,
    hero {
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
    }
  }
`

export const tailorMadeTravelPageQuery = groq`
  *[_type == "tailorMadeTravelPage"][0] {
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
    whatTailorMadeMeans {
      title,
      description,
      items[] {
        icon,
        title,
        content
      }
    },
    tailorMadeItineraries {
      title,
      description,
      itineraries[] {
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
    exploreTogetherHero {
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
    assistWithMore {
      title,
      description,
      items[] {
        icon,
        title,
        content
      }
    },
    tailorMadeProcess {
      title,
      description,
      steps[] {
        number,
        title,
        content
      }
    }
  }
`

export const contactUsPageQuery = groq`
  *[_type == "contactUsPage"][0] {
    title,
    contactHero {
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
      buttonText,
      description
    },
    carousel {
      title,
      description,
      items[] {
        title,
        content,
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
    },
    travelInsuranceInfo {
      title,
      description,
      items[] {
        title,
        content
      }
    }
  }
`

export const linkInBioPageQuery = groq`
  *[_type == "linkInBioPage"][0] {
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
      title
    }
  }
`

export const waysToTravelPageQuery = groq`
  *[_type == "waysToTravelPage"][0] {
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
      title
    },
    intro {
      description
    },
    reflectsYou {
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
    grid {
      title,
      description,
      items[] {
        icon,
        title,
        content,
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
    },
    tailorMade {
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
    videoSection {
      title,
      description,
      videoUrl
    },
    findJourney {
      title,
      description,
      buttonText,
      buttonLink
    }
  }
`

export const notFoundPageQuery = groq`
  *[_type == "notFoundPage"][0] {
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
    }
  }
`

export const privacyPolicyPageQuery = groq`
  *[_type == "privacyPolicyPage"][0] {
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
      title
    },
    content {
      sections[] {
        heading,
        headingLevel,
        content
      }
    }
  }
`

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
    },
    paymentsAccordion {
      heading,
      description,
      buttonText,
      buttonLink,
      items[] {
        title,
        content
      }
    }
  }
`

export const membersLoginPageQuery = groq`
  *[_type == "membersLoginPage"][0] {
    title,
    hero {
      leftImage {
        asset->{
          url,
          metadata { dimensions }
        },
        alt
      },
      scriptText,
      heading,
      description,
      emailPlaceholder,
      passwordPlaceholder,
      buttonText,
      belowText,
      contactLinkText,
      contactLinkHref
    }
  }
`

export const searchPageQuery = groq`
  *[_type == "searchPage"][0] {
    title,
    hero {
      backgroundImage {
        asset->{
          url,
          metadata { dimensions }
        },
        alt
      },
      title,
      description,
      searchPlaceholder
    }
  }
`

export const tripWizardPageQuery = groq`
  *[_type == "tripWizardPage"][0] {
    title,
    stepper {
      question,
      options[] {
        label,
        iconUrl
      },
      progress
    }
  }
`

export const hotelsPageQuery = groq`
  *[_type == "hotelsPage"][0] {
    title,
    hero {
      tagline,
      mainHeading,
      subHeading,
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
    brands {
      title,
      subtitle,
      description,
      brandLogos[] {
        name,
        logo {
          asset->{
            url,
            metadata {
              dimensions
            }
          },
          alt
        }
      },
      destinations[] {
        name,
        location,
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
  }
` 