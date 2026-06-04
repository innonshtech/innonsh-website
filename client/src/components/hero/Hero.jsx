import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    // GSAP reveal animations with hardware acceleration hints
    const reveals = heroRef.current.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
      // Hint to the browser that these properties will change
      gsap.set(el, { willChange: "transform, opacity" });
      
      gsap.fromTo(el, 
        { opacity: 0, y: 28 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.9, 
          delay: index * 0.08, 
          ease: "power2.out",
          force3D: true, // Force GPU compositing
          onComplete: () => {
            // Free up GPU memory once animation is complete
            gsap.set(el, { willChange: "auto" });
          }
        }
      );
    });
  }, []);

  return (
    <section ref={heroRef} className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
      {/* background layers */}
      <div className="absolute inset-0 bg-grid mask-radial"></div>
      <div className="orb" style={{top: '-120px', left: '-80px', width: '520px', height: '520px', background: 'radial-gradient(circle, rgba(139,92,246,0.55), transparent 60%)'}}></div>
      <div className="orb" style={{top: '60px', right: '-100px', width: '480px', height: '480px', background: 'radial-gradient(circle, rgba(34,211,238,0.45), transparent 60%)'}}></div>
      <div className="orb" style={{bottom: '-160px', left: '30%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(245,158,11,0.28), transparent 60%)'}}></div>
      <div className="noise"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="reveal chip mb-7">
              <span className="chip-dot"></span> New · ERP Suite + AI Products are live
            </div>

            <h1 className="reveal display text-[44px] sm:text-[58px] lg:text-[78px] leading-[0.98] font-semibold tracking-[-0.04em]">
              Building digital products that <span className="serif-italic glow-accent">power</span> modern businesses.
            </h1>

            <p className="reveal mt-7 text-[17px] lg:text-[19px] leading-relaxed text-white/65 max-w-2xl">
              We design intelligent enterprise software, scalable platforms, and next-generation digital experiences from custom ERPs to AI-first products that ship in weeks, not quarters.
            </p>

            <div className="reveal mt-9 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary magnetic">
                Start a project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <a href="#erp" className="btn-ghost">
                <span className="grid place-items-center w-5 h-5 rounded-full bg-white/10">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                </span>
                See ERP suite
              </a>
            </div>

            {/* mini stats inline */}
            <div className="reveal mt-12 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="display text-3xl font-semibold text-white">120+</div>
                <div className="text-xs text-white/50 mt-1.5 tracking-wide">Projects shipped</div>
              </div>
              <div>
                <div className="display text-3xl font-semibold text-white">40+</div>
                <div className="text-xs text-white/50 mt-1.5 tracking-wide">Enterprise clients</div>
              </div>
              <div>
                <div className="display text-3xl font-semibold text-white">7</div>
                <div className="text-xs text-white/50 mt-1.5 tracking-wide">Years building</div>
              </div>
            </div>
          </div>

          {/* hero visual */}
          <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
            {/* center stage */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative w-[360px] h-[360px]">
                <div className="absolute inset-0 conic-ring spin-slow rounded-full"></div>
                <div className="absolute inset-3 rounded-full bg-ink-950 border border-white/10 backdrop-blur-xl"></div>
                <div className="absolute inset-10 rounded-full glass-strong grid place-items-center">
                  <div className="text-center">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">Our Platform</div>
                    <div className="display text-2xl font-semibold mt-1.5">Innonsh OS</div>
                    <div className="mt-3 flex items-center justify-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-[11px] text-white/50">7 products · 1 system</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* floating cards */}
            <div className="float-card animate-float" style={{top: '6%', left: '-4%', animationDelay: '-1s'}}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg grid place-items-center" style={{background: 'linear-gradient(135deg,#f59e0b33,#f59e0b11)', border: '1px solid #f59e0b40'}}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fbbf24" strokeWidth="2"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21V12h6v9"/></svg>
                </div>
                <div>
                  <div className="text-[13px] font-medium">Construction ERP</div>
                  <div className="text-[11px] text-white/50">Sites, simplified</div>
                </div>
              </div>
            </div>

            <div className="float-card animate-float" style={{top: '30%', right: '-8%', animationDelay: '-2.5s'}}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg grid place-items-center" style={{background: 'linear-gradient(135deg,#22d3ee33,#22d3ee11)', border: '1px solid #22d3ee40'}}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#67e8f9" strokeWidth="2"><path d="M12 6v6l4 2M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/></svg>
                </div>
                <div>
                  <div className="text-[13px] font-medium">Doctor ERP</div>
                  <div className="text-[11px] text-white/50">Clinics, organised</div>
                </div>
              </div>
            </div>

            <div className="float-card animate-float" style={{bottom: '18%', left: '-6%', animationDelay: '-3s'}}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg grid place-items-center" style={{background: 'linear-gradient(135deg,#10b98133,#10b98111)', border: '1px solid #10b98140'}}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#34d399" strokeWidth="2"><path d="M3 12c4-8 14-8 18 0M3 12c4 8 14 8 18 0"/></svg>
                </div>
                <div>
                  <div className="text-[13px] font-medium">Aaharly</div>
                  <div className="text-[11px] text-white/50">Nutrition, personalised</div>
                </div>
              </div>
            </div>

            <div className="float-card animate-float" style={{bottom: '4%', right: '4%', animationDelay: '-4s'}}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg grid place-items-center" style={{background: 'linear-gradient(135deg,#8b5cf633,#8b5cf611)', border: '1px solid #8b5cf640'}}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#c4b5fd" strokeWidth="2"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/></svg>
                </div>
                <div>
                  <div className="text-[13px] font-medium">Innonsh WorkGrid</div>
                  <div className="text-[11px] text-white/50">People, simplified</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom row: scroll cue */}
        <div className="reveal mt-20 flex items-center justify-between border-t border-white/5 pt-6">
          <div className="text-[12px] tracking-[0.2em] text-white/40 uppercase">Scroll to explore</div>
          <div className="text-[12px] tracking-[0.2em] text-white/40 uppercase">Pune · India Building since 2018</div>
        </div>
      </div>
    </section>
  );
}
