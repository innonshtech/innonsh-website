import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { servicesDetailed } from '../data/servicesDetailed';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesDetailed[id];

  useEffect(() => {
    // Hero entrance animation
    gsap.fromTo('.service-reveal', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
    );
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen pt-40 flex flex-col items-center justify-center text-white">
        <h1 className="display text-4xl font-semibold mb-4">Service Not Found</h1>
        <Link to="/" className="btn-primary">Return Home</Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="relative overflow-hidden bg-[#050507] text-white pt-32 pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-fine mask-radial opacity-40"></div>
      <div className="orb" style={{ top: '-10%', right: '-10%', width: '600px', height: '600px', background: `radial-gradient(circle, ${service.glow}, transparent 60%)` }}></div>
      <div className="orb" style={{ bottom: '-20%', left: '-10%', width: '500px', height: '500px', background: `radial-gradient(circle, rgba(139,92,246,0.15), transparent 60%)` }}></div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <Link to="/" className="service-reveal inline-flex items-center text-[13px] text-white/50 hover:text-white transition-colors mb-12">
          <svg className="mr-2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to all services
        </Link>

        {/* Hero Section */}
        <div className="service-reveal flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl grid place-items-center bg-white/5 border border-white/10" style={{ boxShadow: `0 0 30px ${service.glow}` }}>
            <Icon size={26} color="white" />
          </div>
          <div className="chip"><span className="chip-dot" style={{ backgroundColor: service.glow, boxShadow: `0 0 12px ${service.glow}` }}></span> Service Detail</div>
        </div>

        <h1 className="service-reveal display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] leading-[1.05] mb-6">
          {service.title}
        </h1>
        
        <p className="service-reveal text-xl sm:text-2xl text-white/70 font-light mb-16 leading-relaxed max-w-2xl">
          {service.tagline}
        </p>

        {/* Overview Box */}
        <div className="service-reveal gradient-border p-8 sm:p-10 mb-16" style={{ '--glow': service.glow }}>
          <h2 className="display text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-[16.5px] text-white/60 leading-relaxed">
            {service.overview}
          </p>
        </div>

        {/* Details List */}
        <div className="service-reveal mb-20">
          <h2 className="display text-2xl font-semibold mb-8">What We Deliver</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {service.details.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                <div className="mt-0.5 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={service.glow.replace('0.35', '1').replace('0.4', '1').replace('0.45', '1')} strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <span className="text-[15px] text-white/80 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="service-reveal text-center pt-10 border-t border-white/10">
          <h3 className="display text-3xl font-semibold mb-6">Ready to start your project?</h3>
          <Link to="/" className="btn-primary" onClick={() => {
            setTimeout(() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}>
            Get in touch <svg className="ml-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </Link>
        </div>

      </div>
    </div>
  );
}
