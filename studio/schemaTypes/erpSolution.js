export default {
  name: 'erpSolution',
  title: 'ERP Solution',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Main descriptive text of the ERP system.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'url',
      title: 'Product URL',
      type: 'url',
      description: 'External link to the live ERP product (e.g. https://infra.innonsh.com/).',
    },
    {
      name: 'glow',
      title: 'Accent Hover Glow',
      type: 'string',
      description: 'RGBA/Glow color value for container hover glow (e.g. rgba(245,158,11,0.45)).',
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g. Building2, Plus, Settings, Calendar).',
    },
    {
      name: 'isFlagship',
      title: 'Is Flagship ERP',
      type: 'boolean',
      description: 'Toggle on to display a special "Flagship" badge.',
    },
    {
      name: 'type',
      title: 'ERP Layout Type Preset',
      type: 'string',
      description: 'Select which interactive dashboard preview widget to render in this card.',
      options: {
        list: [
          { title: 'Innonsh Infra (Construction Sites Bar Graph)', value: 'infra' },
          { title: 'Innonsh ClinicPro (Live Queue List)', value: 'clinicpro' },
          { title: 'Innonsh WorkGrid (HRM Headcount Chart)', value: 'workgrid' },
          { title: 'Innonsh TinySteps (Pre-Primary Stats Widgets)', value: 'tinysteps' },
          { title: 'Salon Management (Chair Occupancy Schedule)', value: 'salon' },
          { title: 'Innonsh Sprint OS (Sprint Burndown Line Chart)', value: 'sprintos' },
          { title: 'Innonsh LeadGen (CRM Leads & Won Pipeline Stats)', value: 'leadgen' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required(),
    }
  ],
};
