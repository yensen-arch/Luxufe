import { defineField, defineType } from 'sanity'
import { HomeIcon } from 'lucide-react'

export const landingPageType = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Title for the landing page (for internal use)',
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          description: 'The italic tagline above the main heading',
        }),
        defineField({
          name: 'mainHeading',
          title: 'Main Heading',
          type: 'string',
          description: 'The main hero heading',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'The description text below the heading',
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            })
          ]
        }),
      ]
    }),
    defineField({
      name: 'startJourney',
      title: 'Start Journey Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'journeys',
          title: 'Journey Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'category',
                  title: 'Category',
                  type: 'string',
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative text',
                    })
                  ]
                }),
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Link Text',
                      type: 'string',
                    }),
                    defineField({
                      name: 'href',
                      title: 'Link URL',
                      type: 'string',
                    }),
                  ]
                }),
              ]
            }
          ]
        }),
        defineField({
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
        }),
      ]
    }),
    defineField({
      name: 'discoverLuxury',
      title: 'Discover Luxury Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
        }),
        defineField({
          name: 'ctaLink',
          title: 'CTA Button Link',
          type: 'string',
        }),
        defineField({
          name: 'image',
          title: 'Section Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            })
          ]
        }),
      ]
    }),
    defineField({
      name: 'curatedForYou',
      title: 'Curated For You Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'List of features (Personalised Itineraries, Insider secrets, etc.)',
        }),
        defineField({
          name: 'itineraries',
          title: 'Featured Itineraries',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'id',
                  title: 'ID',
                  type: 'string',
                }),
                defineField({
                  name: 'location',
                  title: 'Location',
                  type: 'string',
                }),
                defineField({
                  name: 'nights',
                  title: 'Number of Nights',
                  type: 'number',
                }),
                defineField({
                  name: 'name',
                  title: 'Itinerary Name',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'price',
                  title: 'Price',
                  type: 'number',
                }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative text',
                    })
                  ]
                }),
              ]
            }
          ]
        }),
        defineField({
          name: 'ctaButtons',
          title: 'CTA Buttons',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'text',
                  title: 'Button Text',
                  type: 'string',
                }),
                defineField({
                  name: 'link',
                  title: 'Button Link',
                  type: 'string',
                }),
              ]
            }
          ]
        }),
      ]
    }),
    defineField({
      name: 'voyages',
      title: 'Voyages Section',
      type: 'object',
      fields: [
        defineField({
          name: 'voyages',
          title: 'Voyage Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'titlePart1',
                  title: 'Title Part 1',
                  type: 'string',
                }),
                defineField({
                  name: 'titlePart2',
                  title: 'Title Part 2',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative text',
                    })
                  ]
                }),
                defineField({
                  name: 'buttonText',
                  title: 'Button Text',
                  type: 'string',
                }),
              ]
            }
          ]
        }),
      ]
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
        }),
        defineField({
          name: 'testimonials',
          title: 'Testimonials',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'quote',
                  title: 'Quote',
                  type: 'text',
                }),
                defineField({
                  name: 'author',
                  title: 'Author Name',
                  type: 'string',
                }),
                defineField({
                  name: 'location',
                  title: 'Location',
                  type: 'string',
                }),
              ]
            }
          ]
        }),
      ]
    }),
    defineField({
      name: 'luxuryPartners',
      title: 'Luxury Partners Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'partners',
          title: 'Partners',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Partner Name',
                  type: 'string',
                }),
                defineField({
                  name: 'logo',
                  title: 'Partner Logo',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative text',
                    })
                  ]
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
              ]
            }
          ]
        }),
      ]
    }),
    defineField({
      name: 'elevePerks',
      title: 'Eleve Perks Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'perks',
          title: 'Perks',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Perk Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'image',
                  title: 'Perk Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative text',
                    })
                  ]
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                }),
              ]
            }
          ]
        }),
        defineField({
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
        }),
      ]
    }),
    defineField({
      name: 'exclusiveOffers',
      title: 'Exclusive Offers Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'offers',
          title: 'Offers',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Offer Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative text',
                    })
                  ]
                }),
                defineField({
                  name: 'ctaText',
                  title: 'CTA Text',
                  type: 'string',
                }),
                defineField({
                  name: 'ctaLink',
                  title: 'CTA Link',
                  type: 'string',
                }),
              ]
            }
          ]
        }),
      ]
    }),
    defineField({
      name: 'inspiration',
      title: 'Inspiration Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
        }),
        defineField({
          name: 'ctaLink',
          title: 'CTA Button Link',
          type: 'string',
        }),
        defineField({
          name: 'blogPosts',
          title: 'Featured Blog Posts',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'category',
                  title: 'Category',
                  type: 'string',
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative text',
                    })
                  ]
                }),
                defineField({
                  name: 'buttonText',
                  title: 'Button Text',
                  type: 'string',
                }),
                defineField({
                  name: 'buttonLink',
                  title: 'Button Link',
                  type: 'string',
                }),
              ]
            }
          ]
        }),
      ]
    }),
    defineField({
      name: 'newsletter',
      title: 'Newsletter Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'placeholder',
          title: 'Email Placeholder',
          type: 'string',
        }),
        defineField({
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            })
          ]
        }),
      ]
    }),
    defineField({
      name: 'contactUs',
      title: 'Contact Us Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'contactInfo',
          title: 'Contact Information',
          type: 'object',
          fields: [
            defineField({
              name: 'phone',
              title: 'Phone Number',
              type: 'string',
            }),
            defineField({
              name: 'email',
              title: 'Email Address',
              type: 'string',
            }),
            defineField({
              name: 'address',
              title: 'Address',
              type: 'text',
            }),
          ]
        }),
      ]
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return { ...selection, subtitle: 'Landing Page Content' }
    },
  },
}) 