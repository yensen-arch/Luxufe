export const elevePageType = {
  name: 'elevePage',
  title: 'Elevé Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Title for the eleve page',
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
          description: 'The italic subtitle (e.g., "Elevé by Luxufe")',
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
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'eleveIntro',
      title: 'Elevé Intro Section',
      type: 'object',
      fields: [
        {
          name: 'brandName',
          title: 'Brand Name',
          type: 'string',
          description: 'The "Elevé" brand name',
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
      name: 'whyJoinEleve',
      title: 'Why Join Elevé Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'brandName',
          title: 'Brand Name in Title',
          type: 'string',
          description: 'The "Elevé" brand name in the title',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'items',
          title: 'Accordion Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'Icon name (e.g., "PlaneTakeoff", "Star", "Bell", "Mail", "Trophy", "Gift")',
                  validation: (Rule: any) => Rule.required(),
                },
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
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'discoverLuxuryEleve',
      title: 'Discover Luxury Elevé Section',
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
      name: 'elevateTravel',
      title: 'Elevate Travel Section',
      type: 'object',
      fields: [
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'title',
          title: 'Section Title',
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
      name: 'exploreMore',
      title: 'Explore More Section',
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
      name: 'becomeMemberModal',
      title: 'Become Member Modal',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Modal Title',
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
          name: 'perksTitle',
          title: 'Perks Section Title',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'perks',
          title: 'Member Perks',
          type: 'array',
          of: [
            {
              type: 'string',
            },
          ],
          validation: (Rule: any) => Rule.required().min(1),
        },
        {
          name: 'footerText',
          title: 'Footer Text',
          type: 'text',
        },
        {
          name: 'formTitle',
          title: 'Form Title',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'radioOptions',
          title: 'Radio Options',
          type: 'array',
          of: [
            {
              type: 'string',
            },
          ],
          validation: (Rule: any) => Rule.required().min(1),
        },
        {
          name: 'submitButtonText',
          title: 'Submit Button Text',
          type: 'string',
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