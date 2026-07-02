import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { client } from '../../sanity/client';

gsap.registerPlugin(ScrollTrigger);

const staticWhyUsData = [
  {
    badge: "Innovation",
    badgeColor: "#a78bfa",
    title: "We invent the future, then ship it Monday.",
    description: "An R&D team that prototypes weekly across AI, edge, and emerging UX paradigms.",
    colSpan: 4,
    cardType: "innovation",
    delay: ""
  },
  {
    badge: "AI-first",
    badgeColor: "#22d3ee",
    title: "Models embedded everywhere.",
    description: "From copilots to forecasting, AI is a default ingredient.",
    colSpan: 2,
    cardType: "ai-first",
    delay: "reveal-delay-1"
  },
  {
    badge: "Scalability",
    badgeColor: "#10b981",
    title: "From 0 to 10M users.",
    description: "Architectures designed to handle real load, real budgets.",
    colSpan: 2,
    cardType: "scalability",
    delay: "reveal-delay-2"
  },
  {
    badge: "Security",
    badgeColor: "#fb7185",
    title: "Enterprise-grade by default.",
    description: "SSO, RBAC, audit trails, encryption at rest & in flight.",
    colSpan: 2,
    cardType: "security",
    securityBadges: ["SOC 2", "ISO 27001", "GDPR", "HIPAA-ready"],
    delay: "reveal-delay-3"
  },
  {
    badge: "Velocity",
    badgeColor: "#f59e0b",
    title: "Ship in weeks, not quarters.",
    description: "Reusable platform primitives accelerate every project.",
    colSpan: 2,
    cardType: "velocity",
    statValue: "3.2×",
    delay: ""
  },
  {
    badge: "Design",
    badgeColor: "#f472b6",
    title: "Design that earns its place on the homepage.",
    description: "Every interface is treated as a product surface: motion, typography, accessibility, the works.",
    colSpan: 4,
    cardType: "design",
    delay: "reveal-delay-1"
  }
];

export default function WhyUs() {
  const sectionRef = useRef(null);
  const [whyUsItems, setWhyUsItems] = useState(staticWhyUsData);

  useEffect(() => {
    if (import.meta.env.VITE_SANITY_PROJECT_ID) {
      client.fetch(`*[_type == "whyUsItem"] | order(order asc)`)
        .then((data) => {
          if (data && data.length > 0) {
            setWhyUsItems(data);
          }
        })
        .catch((err) => {
          console.warn("Failed to fetch Why Us items from Sanity, using static fallback:", err);
        });
    }

    const reveals = sectionRef.current.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
      let delay = 0;
      if (el.classList.contains('reveal-delay-1')) delay = 0.08;
      if (el.classList.contains('reveal-delay-2')) delay = 0.16;
      if (el.classList.contains('reveal-delay-3')) delay = 0.24;
      
      gsap.set(el, { opacity: 1, y: 0 });
    });
  }, []);

  const renderDecoration = (item) => {
    switch (item.cardType) {
      case 'innovation':
        return (
          <>
            <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full border border-white/10"></div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full border border-violet-400/30 spin-slow"></div>
            <div className="absolute right-12 bottom-12 w-3 h-3 rounded-full bg-violet-400 shadow-[0_0_24px_#a78bfa]"></div>
          </>
        );
      case 'ai-first':
        return (
          <div className="absolute bottom-6 right-6">
            <svg width="56" height="56" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="20" stroke="#22d3ee40" strokeWidth="1"/>
              <circle cx="30" cy="30" r="14" stroke="#22d3ee60" strokeWidth="1"/>
              <circle cx="30" cy="30" r="8" stroke="#22d3ee" strokeWidth="1"/>
              <circle cx="30" cy="30" r="3" fill="#22d3ee"/>
            </svg>
          </div>
        );
      case 'scalability':
        return (
          <div className="mt-5 flex items-end gap-1 h-12">
            <div className="bar w-2 flex-1" style={{height: '30%', '--c': '#10b981'}}></div>
            <div className="bar w-2 flex-1" style={{height: '45%', '--c': '#10b981'}}></div>
            <div className="bar w-2 flex-1" style={{height: '62%', '--c': '#10b981'}}></div>
            <div className="bar w-2 flex-1" style={{height: '55%', '--c': '#10b981'}}></div>
            <div className="bar w-2 flex-1" style={{height: '78%', '--c': '#10b981'}}></div>
            <div className="bar w-2 flex-1" style={{height: '90%', '--c': '#10b981'}}></div>
            <div className="bar w-2 flex-1" style={{height: '72%', '--c': '#10b981'}}></div>
            <div className="bar w-2 flex-1" style={{height: '100%', '--c': '#10b981'}}></div>
          </div>
        );
      case 'security':
        return (
          <div className="mt-5 flex gap-2 flex-wrap">
            {(item.securityBadges || ["SOC 2", "ISO 27001", "GDPR", "HIPAA-ready"]).map((badgeText, idx) => (
              <span key={idx} className="text-[11px] px-2 py-1 rounded-md bg-white/[0.04] border border-white/10 text-white/70">
                {badgeText}
              </span>
            ))}
          </div>
        );
      case 'velocity':
        return (
          <div className="mt-5 display text-3xl font-semibold text-amber-300">
            {item.statValue || '3.2×'}
            <span className="text-sm text-white/40 ml-1">faster</span>
          </div>
        );
      case 'design':
        return (
          <div className="absolute right-6 top-6 grid grid-cols-6 gap-1.5">
            {Array.from({length: 24}).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="why" ref={sectionRef} className="relative py-14 lg:py-20 overflow-hidden">
      <div className="orb" style={{top: '20%', right: '-100px', width: '480px', height: '480px', background: 'radial-gradient(circle, rgba(139,92,246,0.25), transparent 60%)'}}></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="reveal chip mb-6 mx-auto"><span className="chip-dot"></span> Why Innonsh</div>
          <h2 className="reveal reveal-delay-1 display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.02] max-w-3xl mx-auto">
            Built like an enterprise.<br/> Moves like a <span className="serif-italic glow-accent">startup</span>.
          </h2>
        </div>

        {/* bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {whyUsItems.map((item, index) => {
            const isWide = item.colSpan === 4;
            const spanClass = isWide ? 'md:col-span-4' : 'md:col-span-2';
            const shadowStyle = item.cardType === 'innovation' 
              ? 'rgba(139,92,246,0.3)' 
              : item.cardType === 'design' 
              ? 'rgba(244,114,182,0.25)' 
              : null;
            
            return (
              <div key={index} className={`reveal ${item.delay || ''} bento ${spanClass} overflow-hidden relative`} style={{minHeight: isWide ? '280px' : '240px'}}>
                {shadowStyle && (
                  <div className="absolute inset-0 opacity-50" style={{background: `radial-gradient(600px 300px at ${item.cardType === 'innovation' ? '80% 100%' : '20% 0%'}, ${shadowStyle}, transparent 60%)`}}></div>
                )}
                
                <div className="relative">
                  <div className="chip mb-4">
                    <span 
                      className="chip-dot" 
                      style={{
                        background: item.badgeColor || '#a78bfa',
                        boxShadow: `0 0 12px ${item.badgeColor || '#a78bfa'}`
                      }}
                    ></span>
                    {item.badge}
                  </div>
                  <h3 className={`display ${isWide ? 'text-3xl max-w-md' : 'text-2xl'} font-semibold leading-tight`}>
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className={`text-[14px] text-white/55 mt-3 leading-relaxed ${isWide ? 'max-w-md' : ''}`}>
                      {item.description}
                    </p>
                  )}
                </div>
                
                {renderDecoration(item)}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

