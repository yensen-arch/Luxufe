export const storiesAndInsightsPageType = {
  name: 'storiesAndInsightsPage',
  title: 'Stories & Insights Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Title for the stories and insights page',
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
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          description: 'The italic subtitle (e.g., "Stories & insights")',
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
      name: 'travelChoice',
      title: 'Travel Choice Section',
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
        {
          name: 'socialLinks',
          title: 'Social Media Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'platform',
                  title: 'Platform',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Instagram', value: 'instagram' },
                      { title: 'Facebook', value: 'facebook' },
                      { title: 'TripAdvisor', value: 'tripadvisor' },
                      { title: 'Google', value: 'google' },
                    ],
                  },
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                },
                {
                  name: 'enabled',
                  title: 'Enabled',
                  type: 'boolean',
                  initialValue: true,
                },
              ],
            },
          ],
          validation: (Rule: any) => Rule.required().min(1),
        },
        {
          name: 'image',
          title: 'Right Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'effortlessLuxury',
      title: 'Effortless Luxury Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'paragraph1',
          title: 'First Paragraph',
          type: 'text',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'paragraph2',
          title: 'Second Paragraph',
          type: 'text',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'image',
          title: 'Left Image',
          type: 'image',
          options: {
            hotspot: true,
          },
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