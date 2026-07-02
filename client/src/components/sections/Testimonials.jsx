import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { client } from '../../sanity/client';

gsap.registerPlugin(ScrollTrigger);

const staticTestimonials = [
  {
    quote: "Innonsh re-platformed our entire field-ops in 11 weeks. The new ERP cut admin time by 40% and our project managers actually look forward to using software now.",
    author: "Rohan Deshmukh",
    role: "COO",
    company: "Veritas Construction",
    avatarGradient: "linear-gradient(135deg,#f59e0b,#b45309)",
    color: "#8b5cf6",
    delay: ""
  },
  {
    quote: "They built our patient portal end-to-end in under three months. Compliance, EMR integration, telehealth everything just works. Best engineering partner we've worked with.",
    author: "Dr. Priya Kulkarni",
    role: "Founder",
    company: "Aarogya Clinics",
    avatarGradient: "linear-gradient(135deg,#22d3ee,#0e7490)",
    color: "#22d3ee",
    delay: "reveal-delay-1"
  },
  {
    quote: "The level of design care is rare. Our investors specifically pointed out the product polish on the demo. Innonsh feels less like an agency and more like an extension of our core team.",
    author: "Ananya Sharma",
    role: "CEO",
    company: "Brightline Edu",
    avatarGradient: "linear-gradient(135deg,#f472b6,#9d174d)",
    color: "#f472b6",
    delay: "reveal-delay-2"
  }
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const [testimonials, setTestimonials] = useState(staticTestimonials);

  useEffect(() => {
    if (import.meta.env.VITE_SANITY_PROJECT_ID) {
      client.fetch(`*[_type == "testimonial"] | order(order asc)`)
        .then((data) => {
          if (data && data.length > 0) {
            setTestimonials(data);
          }
        })
        .catch((err) => {
          console.warn("Failed to fetch testimonials from Sanity, using static fallback:", err);
        });
    }

    const reveals = sectionRef.current.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
      let delay = 0;
      if (el.classList.contains('reveal-delay-1')) delay = 0.08;
      if (el.classList.contains('reveal-delay-2')) delay = 0.16;
      
      gsap.set(el, { opacity: 1, y: 0 });
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative py-14 lg:py-20 overflow-hidden">
      <div className="orb" style={{top: 0, left: '30%', width: '560px', height: '560px', background: 'radial-gradient(circle, rgba(139,92,246,0.2), transparent 60%)'}}></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="reveal chip mb-6 mx-auto"><span className="chip-dot"></span> Voices</div>
          <h2 className="reveal reveal-delay-1 display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.02] max-w-3xl mx-auto">
            Trusted by founders, <span className="serif-italic">loved by</span> teams.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <div key={index} className={`reveal ${t.delay || ''} glass rounded-2xl p-7 lg:p-8`}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill={t.color || '#8b5cf6'} opacity="0.4"><path d="M7 7a5 5 0 0 0 0 10v-3a2 2 0 1 1 0-4V7zm10 0a5 5 0 0 0 0 10v-3a2 2 0 1 1 0-4V7z"/></svg>
              <p className="mt-5 text-[16px] text-white/85 leading-relaxed">
                {t.quote}
              </p>
              <div className="mt-7 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full" style={{background: t.avatarGradient || 'linear-gradient(135deg,#f59e0b,#b45309)'}}></div>
                <div className="blur-[5px] select-none">
                  <div className="text-sm font-medium">{t.author}</div>
                  <div className="text-[12px] text-white/50">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

