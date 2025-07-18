export const aboutPageType = {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Title for the about page',
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
          description: 'The italic subtitle (e.g., "About us")',
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
      name: 'artOfEffortlessTravel',
      title: 'Art of Effortless Travel Section',
      type: 'object',
      fields: [
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
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
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
          name: 'badgeImage',
          title: 'Badge/Watermark Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'wallpaper',
      title: 'Wallpaper Section',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Wallpaper Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'luxuryStay',
      title: 'Luxury Stay Section',
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
      name: 'guidingValues',
      title: 'Guiding Values Section',
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
          type: 'text',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'values',
          title: 'Values',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Value Title',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'highlightedWord',
                  title: 'Highlighted Word',
                  type: 'string',
                  description: 'The word that should be styled differently (italic)',
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
          validation: (Rule: any) => Rule.required().min(1),
        },
      ],
    },
    {
      name: 'luxufeStory',
      title: 'Luxufe Story Section',
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
      name: 'recognizedForExcellence',
      title: 'Recognized for Excellence Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'logos',
          title: 'Award/Recognition Logos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'image',
                  title: 'Logo Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'altText',
                  title: 'Alt Text',
                  type: 'string',
                },
              ],
            },
          ],
          validation: (Rule: any) => Rule.required().min(1),
        },
      ],
    },
    {
      name: 'speakingJourneys',
      title: 'Speaking Journeys Section',
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
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'testimonials',
          title: 'Testimonials',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'quote',
                  title: 'Quote',
                  type: 'text',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'supporting',
                  title: 'Supporting Text',
                  type: 'text',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'avatar',
                  title: 'Avatar Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
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