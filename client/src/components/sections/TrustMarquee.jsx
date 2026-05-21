import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TrustMarquee() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const reveals = sectionRef.current.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 28 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.9, 
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
    <section ref={sectionRef} className="relative py-12 lg:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="reveal text-center text-[12px] tracking-[0.25em] text-white/40 uppercase">Trusted by teams shipping serious software</p>

        {/* Marquee */}
        <div className="reveal mt-8 relative overflow-hidden" style={{maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)'}}>
          <div className="marquee-track animate-marquee gap-14 items-center">
            {/* duplicated set for seamless loop */}
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-14 items-center shrink-0">
                <span className="text-2xl font-semibold text-white/40 hover:text-white/80 transition">⌘ Northwind</span>
                <span className="text-2xl serif-italic text-white/40 hover:text-white/80 transition">Halcyon Labs</span>
                <span className="text-2xl display font-semibold text-white/40 hover:text-white/80 transition">VECTORIA</span>
                <span className="text-2xl font-bold text-white/40 hover:text-white/80 transition">◇ Stratos</span>
                <span className="text-2xl serif-italic text-white/40 hover:text-white/80 transition">Meridian &amp; Co</span>
                <span className="text-2xl display font-semibold tracking-tighter text-white/40 hover:text-white/80 transition">paragon.io</span>
                <span className="text-2xl font-medium text-white/40 hover:text-white/80 transition">▲ Arclight</span>
                <span className="text-2xl font-bold text-white/40 hover:text-white/80 transition">FERNWAY</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="reveal mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          <div className="bg-ink-950 p-8">
            <div className="display text-4xl lg:text-5xl font-semibold">120+</div>
            <div className="text-sm text-white/55 mt-2">Projects delivered worldwide</div>
          </div>
          <div className="bg-ink-950 p-8">
            <div className="display text-4xl lg:text-5xl font-semibold">40+</div>
            <div className="text-sm text-white/55 mt-2">Enterprise clients onboarded</div>
          </div>
          <div className="bg-ink-950 p-8">
            <div className="display text-4xl lg:text-5xl font-semibold">98%</div>
            <div className="text-sm text-white/55 mt-2">Client retention rate</div>
          </div>
          <div className="bg-ink-950 p-8">
            <div className="display text-4xl lg:text-5xl font-semibold">7yr</div>
            <div className="text-sm text-white/55 mt-2">Engineering experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
