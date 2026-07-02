import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { client } from '../../sanity/client';
import LucideIcon from '../common/IconMap';

gsap.registerPlugin(ScrollTrigger);

const staticServicesData = [
  {
    title: "Software Development",
    desc: "Custom platforms, internal tools, and SaaS products engineered for scale with modern stacks.",
    icon: "Code2",
    iconColor: "#c4b5fd",
    glow: "rgba(139,92,246,0.35)",
    bg: "bg-violet-500/10 border-violet-400/20",
    delay: "",
    slug: "software-development"
  },
  {
    title: "Web Development",
    desc: "Marketing sites, dashboards, and web apps with sub-second loads and cinematic motion.",
    icon: "Monitor",
    iconColor: "#67e8f9",
    glow: "rgba(34,211,238,0.35)",
    bg: "bg-cyan-400/10 border-cyan-400/20",
    delay: "reveal-delay-1",
    slug: "web-development"
  },
  {
    title: "Mobile App Development",
    desc: "Native iOS & Android, React Native, and Flutter apps built for delight and store-front quality.",
    icon: "Smartphone",
    iconColor: "#fcd34d",
    glow: "rgba(245,158,11,0.35)",
    bg: "bg-amber-400/10 border-amber-400/20",
    delay: "reveal-delay-2",
    slug: "mobile-app-development"
  },
  {
    title: "UI / UX Design",
    desc: "Research-led product design, design systems, and interface engineering with motion at the core.",
    icon: "PenTool",
    iconColor: "#f9a8d4",
    glow: "rgba(244,114,182,0.35)",
    bg: "bg-pink-400/10 border-pink-400/20",
    delay: "",
    slug: "ui-ux-design"
  },
  {
    title: "AI Solutions",
    desc: "LLM apps, RAG systems, intelligent automation and bespoke models embedded in your stack.",
    icon: "Cpu",
    iconColor: "#a78bfa",
    glow: "rgba(167,139,250,0.45)",
    bg: "bg-violet-500/10 border-violet-400/20",
    delay: "reveal-delay-1",
    slug: "ai-solutions"
  },
  {
    title: "Cloud Services",
    desc: "AWS, GCP, and Azure architecture, DevOps, observability and zero-downtime deployments.",
    icon: "Cloud",
    iconColor: "#6ee7b7",
    glow: "rgba(16,185,129,0.4)",
    bg: "bg-emerald-400/10 border-emerald-400/20",
    delay: "reveal-delay-2",
    slug: "cloud-services"
  },
  {
    title: "Enterprise Solutions",
    desc: "Operating-grade systems with SSO, audit, role-based access and 99.99% reliability targets.",
    icon: "Building2",
    iconColor: "#fda4af",
    glow: "rgba(251,113,133,0.35)",
    bg: "bg-rose-400/10 border-rose-400/20",
    delay: "",
    slug: "enterprise-solutions"
  },
  {
    title: "IT Consulting",
    desc: "Technology audits, roadmaps, modernization paths and CTO-level partnership for growth stage teams.",
    icon: "Globe",
    iconColor: "#67e8f9",
    glow: "rgba(34,211,238,0.4)",
    bg: "bg-cyan-400/10 border-cyan-400/20",
    delay: "reveal-delay-1",
    slug: "it-consulting"
  },
  {
    title: "Digital Transformation",
    desc: "End-to-end re-platforming: from paper-based workflows to API-first, AI-augmented operations.",
    icon: "Code2",
    iconColor: "#fcd34d",
    glow: "rgba(245,158,11,0.4)",
    bg: "bg-amber-400/10 border-amber-400/20",
    delay: "reveal-delay-2",
    slug: "digital-transformation"
  }
];

export default function Services() {
  const sectionRef = useRef(null);
  const [services, setServices] = useState(staticServicesData);

  useEffect(() => {
    // Dynamic fetch from Sanity
    if (import.meta.env.VITE_SANITY_PROJECT_ID) {
      client.fetch(`*[_type == "service"] | order(orderAsc)`)
        .then((data) => {
          if (data && data.length > 0) {
            const formatted = data.map(item => ({
              ...item,
              slug: item.slug?.current || item.slug || ''
            }));
            setServices(formatted);
          }
        })
        .catch((err) => {
          console.warn("Failed to fetch services from Sanity, using fallback static data:", err);
        });
    }

    const reveals = sectionRef.current.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
      // Calculate delay based on class for staggered reveal
      let delay = 0;
      if (el.classList.contains('reveal-delay-1')) delay = 0.08;
      if (el.classList.contains('reveal-delay-2')) delay = 0.16;

      gsap.set(el, { opacity: 1, y: 0 });
    });
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };


  return (
    <section id="services" ref={sectionRef} className="relative py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fine mask-radial opacity-60"></div>
      <div className="orb" style={{ top: '20%', left: '-200px', width: '520px', height: '520px', background: 'radial-gradient(circle, rgba(139,92,246,0.3), transparent 60%)' }}></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="reveal chip mb-6"><span className="chip-dot"></span> Services</div>
            <h2 className="reveal display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.02]">
              A full-stack studio for <span className="serif-italic text-white/85">ambitious</span> teams.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="reveal text-[16.5px] text-white/60 leading-relaxed">
              From research-led product design to AI-powered platforms and large-scale enterprise systems we ship work that compounds for years.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" id="servicesGrid">
          {services.map((s, idx) => (
            <Link to={`/services/${s.slug}`} key={idx} onMouseMove={handleMouseMove} className={`block reveal ${s.delay} gradient-border p-7 cursor-pointer hover:-translate-y-1 transition-transform`} style={{ '--glow': s.glow }}>
              <div className={`w-11 h-11 rounded-xl grid place-items-center border mb-6 ${s.bg}`}>
                <LucideIcon name={s.icon} color={s.iconColor} />
              </div>
              <h3 className="display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-[14.5px] text-white/55 leading-relaxed">{s.desc}</p>
              <div className="mt-6 flex items-center text-[13px] text-white/70 group">
                <span>Learn more</span>
                <svg className="ml-1.5 transition-transform group-hover:translate-x-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
