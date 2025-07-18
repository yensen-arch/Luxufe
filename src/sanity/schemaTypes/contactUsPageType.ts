import { defineType, defineField } from 'sanity';

export const contactUsPageType = defineType({
  name: 'contactUsPage',
  title: 'Contact Us Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactHero',
      title: 'Contact Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'title',
          title: 'Main Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'contactInfo',
          title: 'Contact Information',
          type: 'object',
          fields: [
            defineField({
              name: 'callUs',
              title: 'Call Us Section',
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'phoneNumbers',
                  title: 'Phone Numbers',
                  type: 'array',
                  of: [{ type: 'string' }],
                  validation: (Rule) => Rule.required().min(1),
                }),
              ],
            }),
            defineField({
              name: 'emailUs',
              title: 'Email Us Section',
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'email',
                  title: 'Email Address',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
            defineField({
              name: 'bookACall',
              title: 'Book a Call Section',
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'linkText',
                  title: 'Link Text',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'linkUrl',
                  title: 'Link URL',
                  type: 'url',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'carousel',
      title: 'Carousel Section',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Carousel Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'travelInsuranceInfo',
      title: 'Travel Insurance Info Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'additionalInfo',
          title: 'Additional Information',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'image',
          title: 'Section Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      heroTitle: 'contactHero.title',
    },
    prepare({ title, heroTitle }) {
      return {
        title: title || 'Contact Us Page',
        subtitle: heroTitle ? `Hero: ${heroTitle}` : 'No hero title set',
      };
    },
  },
}); 