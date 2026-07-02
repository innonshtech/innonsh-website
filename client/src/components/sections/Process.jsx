import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const reveals = sectionRef.current.querySelectorAll('.reveal');
    const isMobile = window.innerWidth < 1024;
    reveals.forEach((el, index) => {
      let delay = 0;
      if (el.classList.contains('reveal-delay-1')) delay = 0.08;
      if (el.classList.contains('reveal-delay-2')) delay = 0.16;
      if (isMobile) {
        gsap.set(el, { opacity: 1, y: 0 });
      } else {
        gsap.fromTo(el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: delay * 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
            }
          }
        );
      }
    });
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  const stages = [
    {
      step: "01", name: "Discovery", color: "violet", colorHex: "#a78bfa", glow: "rgba(139,92,246,0.35)",
      desc: "Workshops, stakeholder interviews and a deep audit of your existing systems and metrics.",
      deliverables: ["Stakeholder map", "Current-state architecture", "Opportunity backlog"]
    },
    {
      step: "02", name: "Strategy", color: "cyan", colorHex: "#22d3ee", glow: "rgba(34,211,238,0.35)", align: "right",
      desc: "A roadmap with phases, OKRs, and a clear go-to-market thesis anchored in business outcomes.",
      deliverables: ["12-month roadmap", "KPI dashboard spec", "Tech & team blueprint"]
    },
    {
      step: "03", name: "Design", color: "pink", colorHex: "#f472b6", glow: "rgba(244,114,182,0.35)",
      desc: "Information architecture, interaction prototypes, brand systems and pixel-tight UI.",
      deliverables: ["Design system in Figma", "High-fidelity prototype", "Motion specifications"]
    },
    {
      step: "04", name: "Development", color: "amber", colorHex: "#f59e0b", glow: "rgba(245,158,11,0.35)", align: "right",
      desc: "Two-week sprints. Code reviews. Weekly demos. Production-ready from day one.",
      deliverables: ["Sprint demos", "CI/CD pipeline", "Living documentation"]
    },
    {
      step: "05", name: "Testing", color: "emerald", colorHex: "#10b981", glow: "rgba(16,185,129,0.35)",
      desc: "Automated test suites, security audits, load tests and structured user testing.",
      deliverables: ["85%+ test coverage", "Security audit report", "Performance budget"]
    },
    {
      step: "06", name: "Launch", color: "rose", colorHex: "#fb7185", glow: "rgba(251,113,133,0.35)", align: "right",
      desc: "Phased rollout, observability hooks, war-room support and a polished launch narrative.",
      deliverables: ["Zero-downtime release", "Onboarding playbooks", "Launch comms kit"]
    },
    {
      step: "07", name: "Support & Growth", color: "white", colorHex: "#fff", glow: "rgba(255,255,255,0.25)",
      desc: "SLAs, quarterly reviews, growth experiments and continuous iteration with your team.",
      deliverables: ["24/7 monitoring", "Quarterly business reviews", "Roadmap evolution"]
    }
  ];

  return (
    <section id="process" ref={sectionRef} className="relative py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fine mask-fade-bottom opacity-50"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="reveal chip mb-6 mx-auto"><span className="chip-dot"></span> Our Process</div>
          <h2 className="reveal reveal-delay-1 display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.02] max-w-3xl mx-auto">
            From <span className="serif-italic">first call</span> to live product.
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-white/60 max-w-xl mx-auto">Seven deliberate stages. Tight feedback loops. No surprises.</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* progress line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden lg:block">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-white/15 to-transparent"></div>
          </div>

          <div className="space-y-12 lg:space-y-20">
            {stages.map((stage, idx) => (
              <div key={idx} className="reveal grid lg:grid-cols-2 gap-8 items-center">
                {stage.align === "right" ? (
                  <>
                    <div className="lg:order-2 lg:pl-12">
                      <div className={`text-[12px] tracking-[0.25em] text-${stage.color}-300/80 uppercase mb-3`}>Stage {stage.step}</div>
                      <h3 className="display text-3xl font-semibold mb-3">{stage.name}</h3>
                      <p className="text-white/60 leading-relaxed">{stage.desc}</p>
                    </div>
                    <div className="lg:order-1 relative">
                      <div className={`hidden lg:block absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full shadow-[0_0_24px_${stage.colorHex}]`} style={{background: stage.colorHex}}></div>
                      <div onMouseMove={handleMouseMove} className="gradient-border p-6 lg:mr-12" style={{'--glow': stage.glow}}>
                        <div className="text-[11px] uppercase tracking-wider text-white/40 mb-2">Deliverables</div>
                        <ul className="text-[14.5px] text-white/75 space-y-1.5">
                          {stage.deliverables.map((item, i) => (
                            <li key={i}>· {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="lg:text-right lg:pr-12">
                      <div className={`text-[12px] tracking-[0.25em] text-${stage.color}-300/80 uppercase mb-3`}>Stage {stage.step}</div>
                      <h3 className="display text-3xl font-semibold mb-3">{stage.name}</h3>
                      <p className="text-white/60 leading-relaxed">{stage.desc}</p>
                    </div>
                    <div className="relative">
                      <div className={`hidden lg:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full shadow-[0_0_24px_${stage.colorHex}]`} style={{background: stage.colorHex}}></div>
                      <div onMouseMove={handleMouseMove} className="gradient-border p-6 lg:ml-12" style={{'--glow': stage.glow}}>
                        <div className="text-[11px] uppercase tracking-wider text-white/40 mb-2">Deliverables</div>
                        <ul className="text-[14.5px] text-white/75 space-y-1.5">
                          {stage.deliverables.map((item, i) => (
                            <li key={i}>· {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
