import { defineType, defineField } from 'sanity';

export const searchPageType = defineType({
  name: 'searchPage',
  title: 'Search Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
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
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
          ],
        }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'searchPlaceholder', title: 'Search Placeholder', type: 'string' }),
      ],
    }),
  ],
  preview: {
    select: { title: 'title', heroTitle: 'hero.title' },
    prepare({ title, heroTitle }) {
      return {
        title: title || 'Search Page',
        subtitle: heroTitle ? `Hero: ${heroTitle}` : 'No hero title set',
      };
    },
  },
}); 