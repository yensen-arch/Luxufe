import { defineType, defineField } from 'sanity';

export const membersLoginPageType = defineType({
  name: 'membersLoginPage',
  title: 'Members Login Page',
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
          name: 'leftImage',
          title: 'Left Image',
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
        defineField({ name: 'scriptText', title: 'Script Text', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'emailPlaceholder', title: 'Email Placeholder', type: 'string' }),
        defineField({ name: 'passwordPlaceholder', title: 'Password Placeholder', type: 'string' }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
        defineField({ name: 'belowText', title: 'Below Text', type: 'string' }),
        defineField({ name: 'contactLinkText', title: 'Contact Link Text', type: 'string' }),
        defineField({ name: 'contactLinkHref', title: 'Contact Link Href', type: 'string' }),
      ],
    }),
  ],
  preview: {
    select: { title: 'title', heroHeading: 'hero.heading' },
    prepare({ title, heroHeading }) {
      return {
        title: title || 'Members Login Page',
        subtitle: heroHeading ? `Hero: ${heroHeading}` : 'No hero heading set',
      };
    },
  },
}); 