import { defineType, defineField } from 'sanity';

export const privacyPolicyPageType = defineType({
  name: 'privacyPolicyPage',
  title: 'Privacy Policy Page',
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
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content Section',
      type: 'object',
      fields: [
        defineField({
          name: 'sections',
          title: 'Content Sections',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'heading',
                  title: 'Heading',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'headingLevel',
                  title: 'Heading Level',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Heading 2', value: 'h2' },
                      { title: 'Heading 3', value: 'h3' },
                      { title: 'Heading 4', value: 'h4' },
                    ],
                  },
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'content',
                  title: 'Content',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.required().min(1),
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
        title: title || 'Privacy Policy Page',
        subtitle: heroTitle ? `Hero: ${heroTitle}` : 'No hero title set',
      };
    },
  },
}); 