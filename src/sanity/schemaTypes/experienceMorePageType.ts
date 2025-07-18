export const experienceMorePageType = {
  name: 'experienceMorePage',
  title: 'Experience More Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Title for the experience more page',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'title',
          title: 'Main Title',
          type: 'string',
          description: 'The main hero title',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'latestGreatestFilter',
      title: 'Latest Greatest Filter Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}; 