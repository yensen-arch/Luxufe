import { defineField, defineType } from 'sanity'
import { MapIcon } from 'lucide-react'

export const landItinerariesPageType = defineType({
  name: 'landItinerariesPage',
  title: 'Land Itineraries Page',
  type: 'document',
  icon: MapIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Title for the land itineraries page (for internal use)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Main Heading',
          type: 'string',
          description: 'The main hero heading',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'The description text below the heading',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            })
          ],
          validation: (Rule) => Rule.required(),
        }),
      ]
    }),
    defineField({
      name: 'main',
      title: 'Main Content',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          description: 'Heading for the main content section',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Description for the main content section',
          validation: (Rule) => Rule.required(),
        }),
      ]
    }),
    defineField({
      name: 'filterOptions',
      title: 'Filter Options',
      type: 'object',
      fields: [
        defineField({
          name: 'journeyTypes',
          title: 'Journey Types',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Available journey types for filtering (e.g., Cultural, Adventure, Luxury)',
          options: {
            list: [
              { title: 'Cultural', value: 'Cultural' },
              { title: 'Adventure', value: 'Adventure' },
              { title: 'Luxury', value: 'Luxury' },
              { title: 'Wildlife', value: 'Wildlife' },
              { title: 'Wellness', value: 'Wellness' },
              { title: 'Culinary', value: 'Culinary' },
              { title: 'Photography', value: 'Photography' },
              { title: 'Family', value: 'Family' },
            ]
          }
        }),
        defineField({
          name: 'durationRanges',
          title: 'Duration Ranges',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Available duration ranges for filtering',
          options: {
            list: [
              { title: '3-5 Days', value: '3-5 Days' },
              { title: '6-8 Days', value: '6-8 Days' },
              { title: '9-12 Days', value: '9-12 Days' },
              { title: '13-16 Days', value: '13-16 Days' },
              { title: '17+ Days', value: '17+ Days' },
            ]
          }
        }),
        defineField({
          name: 'regions',
          title: 'Regions',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Available regions for filtering',
          options: {
            list: [
              { title: 'Africa', value: 'Africa' },
              { title: 'Asia', value: 'Asia' },
              { title: 'Europe', value: 'Europe' },
              { title: 'North America', value: 'North America' },
              { title: 'South America', value: 'South America' },
              { title: 'Oceania', value: 'Oceania' },
              { title: 'Middle East', value: 'Middle East' },
            ]
          }
        }),
      ]
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'hero.backgroundImage'
    }
  }
})
