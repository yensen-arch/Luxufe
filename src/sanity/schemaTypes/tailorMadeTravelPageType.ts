import { defineType, defineField } from 'sanity';

export const tailorMadeTravelPageType = defineType({
  name: 'tailorMadeTravelPage',
  title: 'Tailor Made Travel Page',
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
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'whatTailorMadeMeans',
      title: 'What Tailor Made Means Section',
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
          name: 'image',
          title: 'Section Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'tailorMadeItineraries',
      title: 'Tailor Made Itineraries Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subheading',
          title: 'Section Subheading',
          type: 'string',
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
    defineField({
      name: 'exploreTogetherHero',
      title: 'Explore Together Hero Section',
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
          name: 'title',
          title: 'Section Title',
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
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'assistWithMore',
      title: 'Assist With More Section',
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
          name: 'items',
          title: 'Assist Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Item Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Item Description',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'image',
                  title: 'Item Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: 'tailorMadeProcess',
      title: 'Tailor Made Process Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
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
          name: 'steps',
          title: 'Process Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Step Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Step Description',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'image',
                  title: 'Step Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
          name: 'appointmentButtonText',
          title: 'Appointment Button Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'wizardButtonText',
          title: 'Wizard Button Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      heroTitle: 'hero.title',
    },
    prepare({ title, heroTitle }) {
      return {
        title: title || 'Tailor Made Travel Page',
        subtitle: heroTitle ? `Hero: ${heroTitle}` : 'No hero title set',
      };
    },
  },
}); 