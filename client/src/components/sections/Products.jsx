import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const reveals = sectionRef.current.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
      let delay = 0;
      if (el.classList.contains('reveal-delay-1')) delay = 0.08;
      if (el.classList.contains('reveal-delay-2')) delay = 0.16;
      
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

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="products" ref={sectionRef} className="relative py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid mask-radial opacity-50"></div>
      <div className="orb" style={{top: '30%', left: '40%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(16,185,129,0.22), transparent 60%)'}}></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <div className="reveal chip mb-6"><span className="chip-dot" style={{background: '#10b981', boxShadow: '0 0 12px #10b981'}}></span> Our Products</div>
            <h2 className="reveal reveal-delay-1 display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.02]">
              Products we <span className="serif-italic text-emerald-300/90">build</span> &amp; ship.
            </h2>
          </div>
          <p className="reveal reveal-delay-2 text-[16.5px] text-white/60 max-w-md leading-relaxed">
            Beyond client work, we operate two consumer-facing products serving thousands of users every week.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Aaharly */}
          <a href="#" onMouseMove={handleMouseMove} className="reveal gradient-border group relative overflow-hidden" style={{'--glow': 'rgba(16,185,129,0.5)'}}>
            <div className="absolute inset-0 opacity-50" style={{background: 'radial-gradient(900px 400px at 20% 0%, rgba(16,185,129,0.25), transparent 60%)'}}></div>
            <div className="relative p-10 flex flex-col h-full min-h-[520px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl grid place-items-center" style={{background: 'linear-gradient(135deg,#10b981,#065f46)', boxShadow: '0 8px 32px -8px rgba(16,185,129,0.5)'}}>
                    <span className="display font-bold text-white text-lg">A</span>
                  </div>
                  <div>
                    <div className="display text-xl font-semibold">Aaharly</div>
                    <div className="text-[11px] uppercase tracking-wider text-emerald-300/80">aaharly.com</div>
                  </div>
                </div>
                <svg className="w-5 h-5 text-white/40 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 17L17 7M9 7h8v8"/></svg>
              </div>

              <h3 className="display text-3xl lg:text-4xl font-semibold mt-10 leading-[1.05]">
                Personalized nutrition.<br/>Delivered with intent.
              </h3>
              <p className="mt-4 text-[15px] text-white/65 leading-relaxed max-w-md">
                A health-tech platform with adaptive meal plans, macro tracking and a fitness-focused food delivery network.
              </p>

              {/* mock product card */}
              <div className="mt-auto pt-8">
                <div className="rounded-2xl p-5 glass-strong">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[11px] uppercase tracking-wider text-white/50">Today's plan</div>
                    <div className="text-[11px] px-2 py-0.5 rounded-full" style={{background: '#10b98115', color: '#6ee7b7', border: '1px solid #10b98130'}}>On track</div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <div className="text-[10px] text-white/50">Protein</div>
                      <div className="display font-semibold text-white">142<span className="text-xs text-white/50">g</span></div>
                      <div className="mt-1.5 h-1 rounded-full bg-white/10 overflow-hidden"><div className="h-full bg-emerald-400" style={{width: '78%'}}></div></div>
                    </div>
                    <div>
                      <div className="text-[10px] text-white/50">Carbs</div>
                      <div className="display font-semibold text-white">218<span className="text-xs text-white/50">g</span></div>
                      <div className="mt-1.5 h-1 rounded-full bg-white/10 overflow-hidden"><div className="h-full bg-amber-400" style={{width: '64%'}}></div></div>
                    </div>
                    <div>
                      <div className="text-[10px] text-white/50">Fats</div>
                      <div className="display font-semibold text-white">58<span className="text-xs text-white/50">g</span></div>
                      <div className="mt-1.5 h-1 rounded-full bg-white/10 overflow-hidden"><div className="h-full bg-rose-400" style={{width: '52%'}}></div></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center text-[14.5px] text-emerald-300 font-medium">
                  Visit Aaharly
                  <svg className="ml-2 transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </a>

          {/* Abhinnati */}
          <a href="#" onMouseMove={handleMouseMove} className="reveal reveal-delay-1 gradient-border group relative overflow-hidden" style={{'--glow': 'rgba(245,158,11,0.5)'}}>
            <div className="absolute inset-0 opacity-60" style={{background: 'radial-gradient(900px 400px at 80% 0%, rgba(245,158,11,0.22), transparent 60%), radial-gradient(700px 300px at 20% 90%, rgba(251,113,133,0.18), transparent 60%)'}}></div>
            <div className="relative p-10 flex flex-col h-full min-h-[520px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl grid place-items-center" style={{background: 'linear-gradient(135deg,#f59e0b,#b45309)', boxShadow: '0 8px 32px -8px rgba(245,158,11,0.5)'}}>
                    <span className="display font-bold text-white text-lg">अ</span>
                  </div>
                  <div>
                    <div className="display text-xl font-semibold">Abhinnati</div>
                    <div className="text-[11px] uppercase tracking-wider text-amber-300/80">abhinnati.com</div>
                  </div>
                </div>
                <svg className="w-5 h-5 text-white/40 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 17L17 7M9 7h8v8"/></svg>
              </div>

              <h3 className="display text-3xl lg:text-4xl font-semibold mt-10 leading-[1.05]">
                <span className="serif-italic">मराठी</span>-first<br/>local services marketplace.
              </h3>
              <p className="mt-4 text-[15px] text-white/65 leading-relaxed max-w-md">
                Connecting Marathi businesses and customers with a culturally-rooted, hyper-local discovery experience.
              </p>

              {/* mock service tiles */}
              <div className="mt-auto pt-8">
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="rounded-xl p-3 glass-strong">
                    <div className="w-8 h-8 rounded-lg grid place-items-center mb-2" style={{background: '#f59e0b25'}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fcd34d" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                    </div>
                    <div className="text-[11px] font-medium">Home Services</div>
                    <div className="text-[10px] text-white/40 mt-0.5">2.4k listings</div>
                  </div>
                  <div className="rounded-xl p-3 glass-strong">
                    <div className="w-8 h-8 rounded-lg grid place-items-center mb-2" style={{background: '#fb718525'}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fda4af" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div className="text-[11px] font-medium">Tiffin Centers</div>
                    <div className="text-[10px] text-white/40 mt-0.5">810 nearby</div>
                  </div>
                  <div className="rounded-xl p-3 glass-strong">
                    <div className="w-8 h-8 rounded-lg grid place-items-center mb-2" style={{background: '#22d3ee25'}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#67e8f9" strokeWidth="2"><path d="M3 21h18M5 21V8l7-5 7 5v13"/></svg>
                    </div>
                    <div className="text-[11px] font-medium">Local Shops</div>
                    <div className="text-[10px] text-white/40 mt-0.5">5.6k stores</div>
                  </div>
                </div>

                <div className="mt-6 flex items-center text-[14.5px] text-amber-300 font-medium">
                  Visit Abhinnati
                  <svg className="ml-2 transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
