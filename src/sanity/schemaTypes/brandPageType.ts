import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'brandPage',
  title: 'Brand Page',
  type: 'document',
  fields: [
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
      options: {
        list: [
          { title: 'Aman', value: 'Aman' },
          { title: 'Anantara', value: 'Anantara' },
          { title: 'Auberge Resorts', value: 'Auberge Resorts' },
          { title: 'Banyan Tree Hotels', value: 'Banyan Tree Hotels' },
          { title: '&Beyond', value: '&Beyond' },
          { title: 'COMO Hotel and Resorts', value: 'COMO Hotel and Resorts' },
          { title: 'Fairmont Hotels', value: 'Fairmont Hotels' },
          { title: 'Four Seasons', value: 'Four Seasons' },
          { title: 'Kempinski Hotels', value: 'Kempinski Hotels' },
          { title: 'Marriott', value: 'Marriott' },
          { title: 'Mandarin Oriental', value: 'Mandarin Oriental' },
          { title: 'Oberoi Hotels', value: 'Oberoi Hotels' },
          { title: 'Raffles Hotels & Resorts', value: 'Raffles Hotels & Resorts' },
          { title: 'Relais and Chateau', value: 'Relais and Chateau' },
          { title: 'Ritz Carlton', value: 'Ritz Carlton' },
          { title: 'Rosewood', value: 'Rosewood' },
          { title: 'Shangri La Hotels', value: 'Shangri La Hotels' },
          { title: 'Singita Hotels', value: 'Singita Hotels' },
          { title: 'Six Senses Hotels', value: 'Six Senses Hotels' },
          { title: 'Sofitel', value: 'Sofitel' },
          { title: 'Soneva', value: 'Soneva' },
          { title: 'Saint Regis Hotels', value: 'Saint Regis Hotels' },
          { title: 'Taj Hotels', value: 'Taj Hotels' },
          { title: 'Waldorf Astoria', value: 'Waldorf Astoria' }
        ]
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'tagline',
          title: 'Tagline',
          type: 'string'
        }),
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
      name: 'philosophy',
      title: 'Brand Philosophy',
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
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true
          }
        })
      ]
    }),
    defineField({
      name: 'whyWeTravel',
      title: 'Why We Travel',
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
          name: 'reasons',
          title: 'Reasons',
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
      name: 'benefits',
      title: 'Brand Benefits',
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
      name: 'main',
      title: 'Main Content',
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
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [
            {
              type: 'block'
            },
            {
              type: 'image',
              options: {
                hotspot: true
              }
            }
          ]
        })
      ]
    }),
    defineField({
      name: 'itineraries',
      title: 'Itineraries Section',
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
    })
  ],
  preview: {
    select: {
      title: 'brand',
      media: 'hero.backgroundImage'
    }
  }
}) 