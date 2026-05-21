import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const reveals = sectionRef.current.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
      let delay = 0;
      if (el.classList.contains('reveal-delay-1')) delay = 0.08;
      if (el.classList.contains('reveal-delay-2')) delay = 0.16;
      if (el.classList.contains('reveal-delay-3')) delay = 0.24;
      
      gsap.fromTo(el, 
        { opacity: 0, y: 28 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.9, 
          delay: delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

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
          {/* Innovation - 4 wide */}
          <div className="reveal bento md:col-span-4 overflow-hidden relative" style={{minHeight: '280px'}}>
            <div className="absolute inset-0 opacity-50" style={{background: 'radial-gradient(600px 300px at 80% 100%, rgba(139,92,246,0.3), transparent 60%)'}}></div>
            <div className="relative">
              <div className="chip mb-4"><span className="chip-dot"></span> Innovation</div>
              <h3 className="display text-3xl font-semibold leading-tight max-w-md">We invent the future, then ship it Monday.</h3>
              <p className="text-[14.5px] text-white/55 mt-3 max-w-md leading-relaxed">An R&amp;D team that prototypes weekly across AI, edge, and emerging UX paradigms.</p>
            </div>
            {/* decoration: orbiting rings */}
            <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full border border-white/10"></div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full border border-violet-400/30 spin-slow"></div>
            <div className="absolute right-12 bottom-12 w-3 h-3 rounded-full bg-violet-400 shadow-[0_0_24px_#a78bfa]"></div>
          </div>

          {/* AI first - 2 wide */}
          <div className="reveal reveal-delay-1 bento md:col-span-2 overflow-hidden relative" style={{minHeight: '280px'}}>
            <div className="chip mb-4"><span className="chip-dot" style={{background: '#22d3ee', boxShadow: '0 0 12px #22d3ee'}}></span> AI-first</div>
            <h3 className="display text-2xl font-semibold leading-tight">Models embedded everywhere.</h3>
            <p className="text-[14px] text-white/55 mt-3 leading-relaxed">From copilots to forecasting, AI is a default ingredient.</p>
            <div className="absolute bottom-6 right-6">
              <svg width="56" height="56" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="20" stroke="#22d3ee40" strokeWidth="1"/>
                <circle cx="30" cy="30" r="14" stroke="#22d3ee60" strokeWidth="1"/>
                <circle cx="30" cy="30" r="8" stroke="#22d3ee" strokeWidth="1"/>
                <circle cx="30" cy="30" r="3" fill="#22d3ee"/>
              </svg>
            </div>
          </div>

          {/* Scalability - 2 wide */}
          <div className="reveal reveal-delay-2 bento md:col-span-2 relative overflow-hidden" style={{minHeight: '240px'}}>
            <div className="chip mb-4"><span className="chip-dot" style={{background: '#10b981', boxShadow: '0 0 12px #10b981'}}></span> Scalability</div>
            <h3 className="display text-2xl font-semibold leading-tight">From 0 to 10M users.</h3>
            <p className="text-[14px] text-white/55 mt-3 leading-relaxed">Architectures designed to handle real load, real budgets.</p>
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
          </div>

          {/* Security - 2 wide */}
          <div className="reveal reveal-delay-3 bento md:col-span-2 relative overflow-hidden" style={{minHeight: '240px'}}>
            <div className="chip mb-4"><span className="chip-dot" style={{background: '#fb7185', boxShadow: '0 0 12px #fb7185'}}></span> Security</div>
            <h3 className="display text-2xl font-semibold leading-tight">Enterprise-grade by default.</h3>
            <p className="text-[14px] text-white/55 mt-3 leading-relaxed">SSO, RBAC, audit trails, encryption at rest &amp; in flight.</p>
            <div className="mt-5 flex gap-2 flex-wrap">
              <span className="text-[11px] px-2 py-1 rounded-md bg-white/[0.04] border border-white/10 text-white/70">SOC 2</span>
              <span className="text-[11px] px-2 py-1 rounded-md bg-white/[0.04] border border-white/10 text-white/70">ISO 27001</span>
              <span className="text-[11px] px-2 py-1 rounded-md bg-white/[0.04] border border-white/10 text-white/70">GDPR</span>
              <span className="text-[11px] px-2 py-1 rounded-md bg-white/[0.04] border border-white/10 text-white/70">HIPAA-ready</span>
            </div>
          </div>

          {/* Velocity - 2 wide */}
          <div className="reveal bento md:col-span-2 relative overflow-hidden" style={{minHeight: '240px'}}>
            <div className="chip mb-4"><span className="chip-dot" style={{background: '#f59e0b', boxShadow: '0 0 12px #f59e0b'}}></span> Velocity</div>
            <h3 className="display text-2xl font-semibold leading-tight">Ship in weeks, not quarters.</h3>
            <p className="text-[14px] text-white/55 mt-3 leading-relaxed">Reusable platform primitives accelerate every project.</p>
            <div className="mt-5 display text-3xl font-semibold text-amber-300">3.2<span className="text-sm text-white/40 ml-1">× faster</span></div>
          </div>

          {/* Modern UX - 4 wide */}
          <div className="reveal reveal-delay-1 bento md:col-span-4 relative overflow-hidden" style={{minHeight: '240px'}}>
            <div className="absolute inset-0 opacity-50" style={{background: 'radial-gradient(600px 300px at 20% 0%, rgba(244,114,182,0.25), transparent 60%)'}}></div>
            <div className="relative">
              <div className="chip mb-4"><span className="chip-dot" style={{background: '#f472b6', boxShadow: '0 0 12px #f472b6'}}></span> Design</div>
              <h3 className="display text-3xl font-semibold leading-tight max-w-md">Design that earns its place on the homepage.</h3>
              <p className="text-[14.5px] text-white/55 mt-3 max-w-md leading-relaxed">Every interface is treated as a product surface motion, typography, accessibility, the works.</p>
            </div>
            {/* decorative dots grid */}
            <div className="absolute right-6 top-6 grid grid-cols-6 gap-1.5">
              {Array.from({length: 24}).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
