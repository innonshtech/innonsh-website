export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'e.g. CEO, Founder, COO',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      description: 'e.g. Veritas Construction',
    },
    {
      name: 'quote',
      title: 'Quote Text',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'avatarGradient',
      title: 'Avatar Gradient CSS',
      type: 'string',
      description: 'CSS background gradient rule for placeholder avatar (e.g. linear-gradient(135deg,#f59e0b,#b45309)).',
    },
    {
      name: 'color',
      title: 'Quote Icon Color',
      type: 'string',
      description: 'Hex color to paint the quotes SVG icon (e.g. #8b5cf6).',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
    {
      name: 'delay',
      title: 'Animation Delay Class',
      type: 'string',
      description: 'Stagger delay (e.g. reveal-delay-1, reveal-delay-2).',
    }
  ],
};
