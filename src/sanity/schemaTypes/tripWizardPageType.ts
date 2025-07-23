import { defineType, defineField } from 'sanity';

export const tripWizardPageType = defineType({
  name: 'tripWizardPage',
  title: 'Trip Wizard Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'stepper',
      title: 'Stepper',
      type: 'object',
      fields: [
        defineField({ name: 'question', title: 'Question', type: 'string' }),
        defineField({
          name: 'options',
          title: 'Options',
          type: 'array',
          of: [
            defineField({
              name: 'option',
              title: 'Option',
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Label', type: 'string' }),
                defineField({ name: 'iconUrl', title: 'Icon URL', type: 'string' }),
              ],
            }),
          ],
        }),
        defineField({ name: 'progress', title: 'Progress', type: 'number' }),
      ],
    }),
  ],
  preview: {
    select: { title: 'title', question: 'stepper.question' },
    prepare({ title, question }) {
      return {
        title: title || 'Trip Wizard Page',
        subtitle: question ? `Stepper: ${question}` : 'No stepper question set',
      };
    },
  },
}); 