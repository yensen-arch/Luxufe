import { defineType, defineField } from 'sanity';

export const hotelsPageType = defineType({
  name: 'hotelsPage',
  title: 'Hotels Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
          description: 'The italic tagline (e.g., "Exceptional Stays. Handpicked for You")',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'mainHeading',
          title: 'Main Heading',
          type: 'string',
          description: 'The main hero heading (e.g., "Discover the world\'s finest hotels,")',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subHeading',
          title: 'Sub Heading',
          type: 'string',
          description: 'The sub heading (e.g., "selected for elegance, service, and soul")',
          validation: (Rule) => Rule.required(),
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
          ],
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'brands',
      title: 'Brands Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'The main title (e.g., "Where You Stay, Matters")',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          description: 'The subtitle (e.g., "More than accommodation, these are destinations in their own right")',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'The description paragraph',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'brandLogos',
          title: 'Brand Logos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Brand Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'logo',
                  title: 'Logo Image',
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
                  ],
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
          name: 'destinations',
          title: 'Destination Images',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Destination Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'location',
                  title: 'Location',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'image',
                  title: 'Destination Image',
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
                  ],
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      heroTagline: 'hero.tagline',
    },
    prepare({ title, heroTagline }) {
      return {
        title: title || 'Hotels Page',
        subtitle: heroTagline ? `Hero: ${heroTagline}` : 'No hero tagline set',
      };
    },
  },
}); 