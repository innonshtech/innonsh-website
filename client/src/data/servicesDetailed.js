import { Code2, Monitor, Smartphone, PenTool, Cpu, Cloud, Building2, Globe } from 'lucide-react';

export const servicesDetailed = {
  'software-development': {
    title: 'Software Development',
    accent: '#a78bfa',
    accentGlow: 'rgba(167,139,250,0.20)',
    hook: 'Custom software built around your workflow, not the other way around.',
    deliverables: ['SaaS platforms', 'Internal tools & admin panels', 'API & microservices', 'Legacy system modernization'],
    tools: ['TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker'],
    bestFor: 'Teams outgrowing spreadsheets, off-the-shelf SaaS, or aging legacy systems.',
    icon: Code2,
    bg: 'bg-violet-500/10 border-violet-400/20',
    iconColor: '#c4b5fd'
  },
  'web-development': {
    title: 'Web Development',
    accent: '#67e8f9',
    accentGlow: 'rgba(103,232,249,0.20)',
    hook: 'Marketing sites and web apps engineered for speed, craft, and conversion.',
    deliverables: ['Marketing websites', 'Dashboards & portals', 'Headless CMS integrations', 'SEO & Core Web Vitals'],
    tools: ['Next.js', 'React', 'Tailwind', 'Sanity', 'Vercel'],
    bestFor: 'Founders and brands who care how their product reads online.',
    icon: Monitor,
    bg: 'bg-cyan-400/10 border-cyan-400/20',
    iconColor: '#67e8f9'
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    accent: '#fcd34d',
    accentGlow: 'rgba(252,211,77,0.20)',
    hook: 'Native-feeling apps that earn a permanent home on the home screen.',
    deliverables: ['iOS & Android builds', 'Cross-platform apps', 'App Store deployment', 'Offline-first experiences'],
    tools: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    bestFor: 'Consumer products and field-team tools that have to work on the move.',
    icon: Smartphone,
    bg: 'bg-amber-400/10 border-amber-400/20',
    iconColor: '#fcd34d'
  },
  'ui-ux-design': {
    title: 'UI / UX Design',
    accent: '#f9a8d4',
    accentGlow: 'rgba(249,168,212,0.20)',
    hook: 'Interfaces that feel obvious to users and unmistakable to your brand.',
    deliverables: ['Research & user interviews', 'IA & hi-fi prototypes', 'Design system in Figma', 'Motion specs & dev handoff'],
    tools: ['Figma', 'FigJam', 'Framer', 'Maze'],
    bestFor: 'Teams launching a new product or rethinking a confusing existing one.',
    icon: PenTool,
    bg: 'bg-pink-400/10 border-pink-400/20',
    iconColor: '#f9a8d4'
  },
  'ai-solutions': {
    title: 'AI Solutions',
    accent: '#c4b5fd',
    accentGlow: 'rgba(196,181,253,0.22)',
    hook: 'Practical AI that ships in production, not just on a slide.',
    deliverables: ['LLM copilots & chat', 'RAG over private data', 'Document & PDF extraction', 'Workflow automation'],
    tools: ['OpenAI', 'Anthropic', 'LangChain', 'Pinecone', 'Python'],
    bestFor: 'Teams applying AI to a specific pain point, not chasing a buzzword.',
    icon: Cpu,
    bg: 'bg-violet-500/10 border-violet-400/20',
    iconColor: '#a78bfa'
  },
  'cloud-services': {
    title: 'Cloud Services',
    accent: '#6ee7b7',
    accentGlow: 'rgba(110,231,183,0.20)',
    hook: "A cloud setup you don't have to think about, until you want to scale it.",
    deliverables: ['AWS / GCP / Azure architecture', 'CI/CD pipelines', 'Containerization & Kubernetes', 'Monitoring & cost audits'],
    tools: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
    bestFor: 'Products that need to handle real traffic without late-night surprises.',
    icon: Cloud,
    bg: 'bg-emerald-400/10 border-emerald-400/20',
    iconColor: '#6ee7b7'
  },
  'enterprise-solutions': {
    title: 'Enterprise Solutions',
    accent: '#fda4af',
    accentGlow: 'rgba(253,164,175,0.20)',
    hook: 'Production-grade systems your security and ops teams will actually approve.',
    deliverables: ['SSO, RBAC & audit logs', 'Multi-tenant architecture', 'Compliance-ready foundations', 'Legacy migration'],
    tools: ['Okta', 'PostgreSQL', 'Kafka', 'Redis', 'Kubernetes'],
    bestFor: 'Mid-to-large businesses with security, scale, and reliability constraints.',
    icon: Building2,
    bg: 'bg-rose-400/10 border-rose-400/20',
    iconColor: '#fda4af'
  },
  'it-consulting': {
    title: 'IT Consulting',
    accent: '#67e8f9',
    accentGlow: 'rgba(103,232,249,0.20)',
    hook: 'A senior engineering brain on call, without the full-time hire.',
    deliverables: ['Tech audits & architecture reviews', 'Roadmaps & vendor selection', 'Hiring support for tech roles', 'Fractional CTO engagements'],
    tools: ['Stack-agnostic'],
    bestFor: 'Founders and non-technical CEOs making big tech decisions.',
    icon: Globe,
    bg: 'bg-cyan-400/10 border-cyan-400/20',
    iconColor: '#67e8f9'
  },
  'digital-transformation': {
    title: 'Digital Transformation',
    accent: '#fcd34d',
    accentGlow: 'rgba(252,211,77,0.20)',
    hook: 'Move from spreadsheets, paper, and habit to systems that compound.',
    deliverables: ['Process mapping & audits', 'ERP & CRM rollouts', 'Workflow automation', 'Data migration & team training'],
    tools: ['Our ERP suite', 'Zapier', 'n8n', 'Airtable', 'Custom builds'],
    bestFor: 'Traditional businesses ready to modernize without ripping everything out.',
    icon: Code2,
    bg: 'bg-amber-400/10 border-amber-400/20',
    iconColor: '#fcd34d'
  }
};
