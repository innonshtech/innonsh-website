import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const reveals = sectionRef.current.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
      let delay = 0;
      if (el.classList.contains('reveal-delay-1')) delay = 0.08;
      if (el.classList.contains('reveal-delay-2')) delay = 0.16;
      if (el.classList.contains('reveal-delay-3')) delay = 0.24;
      if (el.classList.contains('reveal-delay-4')) delay = 0.32;
      
      gsap.fromTo(el, 
        { opacity: 0, y: 12 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.4, 
          delay: delay * 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 lg:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="reveal chip mb-6"><span className="chip-dot"></span> Technology</div>
            <h2 className="reveal reveal-delay-1 display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.02]">
              A stack chosen for <span className="serif-italic">longevity</span>.
            </h2>
          </div>
          <p className="reveal reveal-delay-2 lg:col-span-5 text-white/60 leading-relaxed">
            We pick boring-on-purpose tools at the edges and bleeding-edge where it actually matters so your codebase ages well.
          </p>
        </div>

        <div className="reveal reveal-delay-3 relative overflow-hidden" style={{maskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)'}}>
          <div className="marquee-track animate-marquee gap-3 items-center py-2">
            {Array.from({length: 2}).map((_, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0">
                <div className="tech-cell"><svg viewBox="0 0 24 24" fill="none" stroke="#67e8f9" strokeWidth="1.8"><path d="M14.31 8 20.05 17.94"/><path d="M9.69 8h11.48"/><path d="M7.38 12 13.12 2.06"/><path d="M9.69 16 3.95 6.06"/><path d="M14.31 16H2.83"/><path d="M16.62 12 10.88 21.94"/><circle cx="12" cy="12" r="10"/></svg>React</div>
                <div className="tech-cell"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 7l10 10"/></svg>Next.js</div>
                <div className="tech-cell"><svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.8"><path d="M3 12c2-4 6-4 9 0 3 4 7 4 9 0M3 18c2-4 6-4 9 0 3 4 7 4 9 0"/></svg>Tailwind</div>
                <div className="tech-cell"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>Node.js</div>
                <div className="tech-cell"><svg viewBox="0 0 24 24" fill="none" stroke="#fcd34d" strokeWidth="1.8"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>Python</div>
                <div className="tech-cell"><svg viewBox="0 0 24 24" fill="none" stroke="#67e8f9" strokeWidth="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>PostgreSQL</div>
                <div className="tech-cell"><svg viewBox="0 0 24 24" fill="none" stroke="#6ee7b7" strokeWidth="1.8"><path d="M12 2v20M2 12h20"/></svg>MongoDB</div>
                <div className="tech-cell"><svg viewBox="0 0 24 24" fill="none" stroke="#fda4af" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="4"/><path d="M2 12h20M12 2v20"/></svg>AWS</div>
                <div className="tech-cell"><svg viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="1.8"><path d="M12 2a10 10 0 1 0 10 10"/><circle cx="12" cy="12" r="4"/></svg>GraphQL</div>
                <div className="tech-cell"><svg viewBox="0 0 24 24" fill="none" stroke="#fcd34d" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6v6H9z"/></svg>Docker</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal reveal-delay-4 mt-4 relative overflow-hidden" style={{maskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)'}}>
          <div className="marquee-track animate-marquee-reverse gap-3 items-center py-2">
            {Array.from({length: 2}).map((_, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0">
                <div className="tech-cell">⚡ Vercel</div>
                <div className="tech-cell">▲ Supabase</div>
                <div className="tech-cell">◇ Prisma</div>
                <div className="tech-cell">✦ Stripe</div>
                <div className="tech-cell">⌘ Redis</div>
                <div className="tech-cell">▣ Kubernetes</div>
                <div className="tech-cell">⚙ Terraform</div>
                <div className="tech-cell">★ OpenAI</div>
                <div className="tech-cell">✺ Anthropic</div>
                <div className="tech-cell">◈ Pinecone</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
