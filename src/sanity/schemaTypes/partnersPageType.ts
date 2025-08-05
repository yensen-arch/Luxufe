import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'partnersPage',
  title: 'Partners Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroPartners',
      title: 'Hero Partners Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text'
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true
          }
        }),
        defineField({
          name: 'ctaText',
          title: 'CTA Text',
          type: 'string'
        }),
        defineField({
          name: 'ctaLink',
          title: 'CTA Link',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'globalNetwork',
      title: 'Global Network Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text'
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true
          }
        }),
        defineField({
          name: 'ctaText',
          title: 'CTA Text',
          type: 'string'
        }),
        defineField({
          name: 'ctaLink',
          title: 'CTA Link',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'benefitsSection',
      title: 'Benefits Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text'
        }),
        defineField({
          name: 'benefits',
          title: 'Benefits',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string'
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text'
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'string'
                })
              ]
            }
          ]
        })
      ]
    }),
    defineField({
      name: 'partnerHighlight',
      title: 'Partner Highlight Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text'
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
                  type: 'string'
                }),
                defineField({
                  name: 'logo',
                  title: 'Logo',
                  type: 'image',
                  options: {
                    hotspot: true
                  }
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text'
                })
              ]
            }
          ]
        })
      ]
    }),
    defineField({
      name: 'highestBrandSearch',
      title: 'Highest Brand Search Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text'
        })
      ]
    }),
    defineField({
      name: 'selectedFavs',
      title: 'Selected Favorites Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text'
        }),
        defineField({
          name: 'itineraries',
          title: 'Itineraries',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'id',
                  title: 'ID',
                  type: 'string'
                }),
                defineField({
                  name: 'location',
                  title: 'Location',
                  type: 'string'
                }),
                defineField({
                  name: 'nights',
                  title: 'Nights',
                  type: 'number'
                }),
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string'
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text'
                }),
                defineField({
                  name: 'price',
                  title: 'Price',
                  type: 'number'
                }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true
                  }
                })
              ]
            }
          ]
        }),
        defineField({
          name: 'ctaText',
          title: 'CTA Text',
          type: 'string'
        }),
        defineField({
          name: 'ctaLink',
          title: 'CTA Link',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'contactUs',
      title: 'Contact Us Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text'
        }),
        defineField({
          name: 'contactInfo',
          title: 'Contact Information',
          type: 'object',
          fields: [
            defineField({
              name: 'phone',
              title: 'Phone',
              type: 'string'
            }),
            defineField({
              name: 'email',
              title: 'Email',
              type: 'string'
            }),
            defineField({
              name: 'address',
              title: 'Address',
              type: 'text'
            })
          ]
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'heroPartners.heading',
      media: 'heroPartners.backgroundImage'
    }
  }
}) 