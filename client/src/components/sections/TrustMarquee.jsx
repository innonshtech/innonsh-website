import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TrustMarquee() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const reveals = sectionRef.current.querySelectorAll('.reveal');
    const isMobile = window.innerWidth < 1024;
    reveals.forEach((el, index) => {
      if (isMobile) {
        gsap.set(el, { opacity: 1, y: 0 });
      } else {
        let delay = 0;
        if (el.classList.contains('reveal-delay-1')) delay = 0.08;
        if (el.classList.contains('reveal-delay-2')) delay = 0.16;
        if (el.classList.contains('reveal-delay-3')) delay = 0.24;
        if (el.classList.contains('reveal-delay-4')) delay = 0.32;
        if (el.classList.contains('reveal-delay-5')) delay = 0.4;
        if (el.classList.contains('reveal-delay-6')) delay = 0.48;

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

  return (
    <section ref={sectionRef} className="relative py-12 lg:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Stats row */}
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
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
            <div className="display text-4xl lg:text-5xl font-semibold">2yr</div>
            <div className="text-sm text-white/55 mt-2">Engineering experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
