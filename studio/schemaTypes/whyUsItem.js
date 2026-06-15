export default {
  name: 'whyUsItem',
  title: 'Why Us Item',
  type: 'document',
  fields: [
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'e.g. Innovation, AI-first, Scalability, Security, Velocity, Design',
      validation: Rule => Rule.required(),
    },
    {
      name: 'badgeColor',
      title: 'Badge Dot Color',
      type: 'string',
      description: 'Hex color for the badge indicator dot (e.g. #22d3ee).',
    },
    {
      name: 'title',
      title: 'Title / Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description Text',
      type: 'text',
    },
    {
      name: 'colSpan',
      title: 'Column Span (Bento Layout)',
      type: 'number',
      description: 'Grid column width: choose 2 (standard) or 4 (wide cards).',
      options: {
        list: [2, 4],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'cardType',
      title: 'Card Decoration Type',
      type: 'string',
      description: 'Determines what custom bento grid background animations/visuals to display.',
      options: {
        list: [
          { title: 'Innovation (Orbiting Rings)', value: 'innovation' },
          { title: 'AI First (Target Pulse)', value: 'ai-first' },
          { title: 'Scalability (Bar Charts)', value: 'scalability' },
          { title: 'Security (Audit Badges)', value: 'security' },
          { title: 'Velocity (Multiplier Stat)', value: 'velocity' },
          { title: 'Design (Dots Grid Grid)', value: 'design' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'statValue',
      title: 'Velocity Stat Value',
      type: 'string',
      description: 'Value shown on Velocity bento card (e.g. 3.2× faster).',
    },
    {
      name: 'securityBadges',
      title: 'Security Badges List',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Badges shown on Security bento card (e.g. SOC 2, GDPR, HIPAA-ready).',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required(),
    }
  ],
};
