export default {
  name: 'service',
  title: 'Service',
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
      name: 'orderAsc',
      title: 'Display Order',
      type: 'number',
      description: 'Used to sort the services list (e.g. 1, 2, 3)',
    },
    {
      name: 'desc',
      title: 'Short Description',
      type: 'text',
      description: 'Short snippet shown on the service cards in the grid.',
    },
    {
      name: 'hook',
      title: 'Detailed Hook',
      type: 'text',
      description: 'Detailed tagline shown in the header of the detail modal.',
    },
    {
      name: 'accent',
      title: 'Accent Color',
      type: 'string',
      description: 'Hex color value for borders and highlights (e.g. #a78bfa).',
    },
    {
      name: 'accentGlow',
      title: 'Accent Glow Color',
      type: 'string',
      description: 'RGBA/Glow color value for container hover glow (e.g. rgba(167,139,250,0.20)).',
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'The Lucide icon name (PascalCase, e.g. Code2, Monitor, Cpu).',
    },
    {
      name: 'bg',
      title: 'Background Style Class',
      type: 'string',
      description: 'Tailwind background/border classes for the icon container (e.g. bg-violet-500/10 border-violet-400/20).',
    },
    {
      name: 'iconColor',
      title: 'Icon Tint Color',
      type: 'string',
      description: 'Hex color value to paint the icon (e.g. #c4b5fd).',
    },
    {
      name: 'deliverables',
      title: 'Deliverables / What you get',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'tools',
      title: 'Tools We Use',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'bestFor',
      title: 'Best For',
      type: 'text',
      description: 'Short statement describing who this service is best for.',
    },
    {
      name: 'delay',
      title: 'Animation Delay Class',
      type: 'string',
      description: 'GSAP stagger utility delay (e.g. reveal-delay-1, reveal-delay-2).',
    }
  ],
};
