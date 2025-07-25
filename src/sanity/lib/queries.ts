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
      subtitle,
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
    tailorMadeItineraries {
      heading,
      subheading,
      buttonText
    },
    exploreTogetherHero {
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
      buttonText
    },
    assistWithMore {
      title,
      subtitle,
      description,
      items[] {
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
      }
    },
    tailorMadeProcess {
      title,
      description,
      steps[] {
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
      appointmentButtonText,
      wizardButtonText
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
      description,
      contactInfo {
        callUs {
          title,
          phoneNumbers
        },
        emailUs {
          title,
          email
        },
        bookACall {
          title,
          description,
          linkText,
          linkUrl
        }
      }
    },
    carousel {
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
    travelInsuranceInfo {
      title,
      subtitle,
      description,
      additionalInfo,
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
      subtitle,
      description1,
      description2,
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
    grid {
      subtitle,
      title,
      description
    },
    tailorMade {
      title,
      subtitle,
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
    videoSection {
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
    findJourney {
      title,
      description,
      buttonText
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
      description,
      buttons {
        homeButton {
          text,
          link
        },
        waysToTravelButton {
          text,
          link
        },
        contactButton {
          text,
          link
        }
      }
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