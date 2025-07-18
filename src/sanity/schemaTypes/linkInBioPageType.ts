import { defineType, defineField } from 'sanity';

export const linkInBioPageType = defineType({
  name: 'linkInBioPage',
  title: 'Link in Bio Page',
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
        title: title || 'Link in Bio Page',
        subtitle: heroTitle ? `Hero: ${heroTitle}` : 'No hero title set',
      };
    },
  },
}); 