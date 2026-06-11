import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTA() {
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
    <section id="contact" ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="orb" style={{top: 0, left: '10%', width: '540px', height: '540px', background: 'radial-gradient(circle, rgba(139,92,246,0.5), transparent 60%)'}}></div>
        <div className="orb" style={{bottom: 0, right: '10%', width: '540px', height: '540px', background: 'radial-gradient(circle, rgba(34,211,238,0.4), transparent 60%)'}}></div>
        <div className="absolute inset-0 bg-grid mask-radial opacity-50"></div>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center">
        <div className="reveal chip mb-7 mx-auto"><span className="chip-dot"></span> Let's build</div>
        <h2 className="reveal reveal-delay-1 display text-5xl sm:text-6xl lg:text-8xl font-semibold tracking-[-0.04em] leading-[0.98]">
          Build the <span className="serif-italic glow-accent">future</span><br/>with Innonsh Technologies.
        </h2>
        <p className="reveal reveal-delay-2 mt-7 text-[17px] lg:text-[19px] text-white/65 max-w-2xl mx-auto leading-relaxed">
          Tell us about your business. We'll come back within 24 hours with a clear path forward no decks, no fluff.
        </p>
        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:info@innonsh.com" className="btn-primary magnetic !py-4 !px-7 text-base">
            Start a project
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="#" className="btn-ghost !py-4 !px-7 text-base">Book a 30-min intro call</a>
        </div>

        <div className="reveal reveal-delay-4 mt-14 flex items-center justify-center gap-8 text-[13px] text-white/45">
          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>Accepting new projects · 2026</div>
          <div className="hidden sm:block">·</div>
          <div className="hidden sm:block">Avg. response: 4 hours</div>
        </div>
      </div>
    </section>
  );
}
