export const beforeYouTravelPageType = {
  name: 'beforeYouTravelPage',
  title: 'Before You Travel Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Title for the before you travel page',
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
          description: 'The italic subtitle (e.g., "Before you travel")',
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
          description: 'The description text below the title',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'essentialTravelInfo',
      title: 'Essential Travel Info Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
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
      ],
    },
    {
      name: 'travelAccordion',
      title: 'Travel Accordion Section',
      type: 'object',
      fields: [
        {
          name: 'items',
          title: 'Accordion Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Item Title',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'content',
                  title: 'Item Content',
                  type: 'text',
                  validation: (Rule: any) => Rule.required(),
                },
              ],
            },
          ],
          validation: (Rule: any) => Rule.required().min(1),
        },
      ],
    },
    {
      name: 'exploreMore',
      title: 'Explore More Section',
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
          title: 'Section Title',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'cards',
          title: 'Explore Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'image',
                  title: 'Card Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'title',
                  title: 'Card Title',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Card Description',
                  type: 'text',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'cta',
                  title: 'Call to Action Text',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'href',
                  title: 'Card Link',
                  type: 'url',
                },
              ],
            },
          ],
          validation: (Rule: any) => Rule.required().min(1),
        },
      ],
    },
    {
      name: 'contactUs',
      title: 'Contact Us Section',
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
          name: 'email',
          title: 'Email Address',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'appointmentText',
          title: 'Appointment Text',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'appointmentLink',
          title: 'Appointment Link',
          type: 'url',
        },
        {
          name: 'faqText',
          title: 'FAQ Text',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'faqLink',
          title: 'FAQ Link',
          type: 'url',
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'buttonLink',
          title: 'Button Link',
          type: 'url',
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