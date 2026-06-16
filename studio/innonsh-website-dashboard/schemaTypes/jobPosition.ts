export default {
  name: 'jobPosition',
  title: 'Job Position',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'department',
      title: 'Department',
      type: 'string',
      description: 'e.g. Engineering, Design, Marketing, Operations',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. Pune, India / Hybrid, Remote',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'Full-time' },
          { title: 'Part-time', value: 'Part-time' },
          { title: 'Contract', value: 'Contract' },
          { title: 'Internship', value: 'Internship' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Role Overview',
      type: 'text',
      description: 'A summary or detailed overview of the role.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Click "Add item" to insert bullet points for key skills and experience.',
    },
    {
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Click "Add item" to insert bullet points for main tasks and expectations.',
    },
    {
      name: 'isOpen',
      title: 'Is Hiring Open',
      type: 'boolean',
      description: 'Toggle on to make this job active and visible on the careers page.',
      initialValue: true,
    }
  ],
};
