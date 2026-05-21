import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Plus, Calendar, Settings } from 'lucide-react'; // Placeholder icons for ERPs

gsap.registerPlugin(ScrollTrigger);

export default function ErpSolutions() {
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
    <section id="erp" ref={sectionRef} className="relative py-14 lg:py-20 overflow-hidden">
      <div className="orb" style={{top: '10%', right: '-180px', width: '540px', height: '540px', background: 'radial-gradient(circle, rgba(34,211,238,0.28), transparent 60%)'}}></div>
      <div className="orb" style={{bottom: 0, left: '-200px', width: '520px', height: '520px', background: 'radial-gradient(circle, rgba(244,114,182,0.22), transparent 60%)'}}></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <div className="reveal chip mb-6"><span className="chip-dot" style={{background: '#22d3ee', boxShadow: '0 0 12px #22d3ee'}}></span> ERP Suite</div>
            <h2 className="reveal display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.02]">
              Five industries.<br/> One <span className="serif-italic glow-accent">operating system</span>.
            </h2>
          </div>
          <p className="reveal text-[16.5px] text-white/60 max-w-md leading-relaxed">
            Each ERP is purpose-built for its industry yet shares a unified design, data, and security backbone. Tap a card to explore the live product.
          </p>
        </div>

        {/* ERP cards */}
        <div className="grid lg:grid-cols-12 gap-5">
          
          {/* Construction ERP */}
          <a href="#" onMouseMove={handleMouseMove} className="reveal lg:col-span-7 gradient-border group p-8 lg:p-10 flex flex-col justify-between min-h-[400px]" style={{'--glow': 'rgba(245,158,11,0.45)'}}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl grid place-items-center" style={{background: 'linear-gradient(135deg,#f59e0b40,#f59e0b10)', border: '1px solid #f59e0b40'}}>
                    <Building2 size={20} color="#fbbf24" />
                  </div>
                  <span className="chip" style={{background: 'rgba(245,158,11,0.08)', borderColor: 'rgba(245,158,11,0.25)', color: '#fcd34d'}}>Flagship</span>
                </div>
                <svg className="w-5 h-5 text-white/40 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 17L17 7M9 7h8v8"/></svg>
              </div>
              <h3 className="display text-3xl font-semibold mb-3">Construction ERP</h3>
              <p className="text-[15px] text-white/60 leading-relaxed max-w-md">
                Site management, BoQ, vendor billing, machinery tracking, labour attendance and project P&amp;L for builders running multiple projects at once.
              </p>
            </div>

            {/* Mini preview */}
            <div className="preview mt-8">
              <div className="preview-bar"><span></span><span></span><span></span><div className="ml-auto text-[10px] text-white/40">construction.innonsh.app</div></div>
              <div className="p-5 grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <div className="text-[10px] uppercase tracking-wider text-white/40 mb-2">Active sites</div>
                  <div className="flex items-end gap-1.5 h-20">
                    <div className="bar w-full" style={{height: '35%', '--c': '#f59e0b'}}></div>
                    <div className="bar w-full" style={{height: '62%', '--c': '#f59e0b'}}></div>
                    <div className="bar w-full" style={{height: '48%', '--c': '#f59e0b'}}></div>
                    <div className="bar w-full" style={{height: '78%', '--c': '#f59e0b'}}></div>
                    <div className="bar w-full" style={{height: '90%', '--c': '#f59e0b'}}></div>
                    <div className="bar w-full" style={{height: '55%', '--c': '#f59e0b'}}></div>
                    <div className="bar w-full" style={{height: '72%', '--c': '#f59e0b'}}></div>
                    <div className="bar w-full" style={{height: '88%', '--c': '#f59e0b'}}></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="rounded-lg p-3" style={{background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.18)'}}>
                    <div className="text-[10px] text-white/50">Sites</div>
                    <div className="display text-lg font-semibold text-amber-300">42</div>
                  </div>
                  <div className="rounded-lg p-3 bg-white/[0.03] border border-white/10">
                    <div className="text-[10px] text-white/50">On-track</div>
                    <div className="display text-lg font-semibold">86%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center text-[14px] text-amber-300/90 font-medium">
              Explore product
              <svg className="ml-2 transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </div>
          </a>

          {/* Doctor ERP */}
          <a href="#" onMouseMove={handleMouseMove} className="reveal reveal-delay-1 lg:col-span-5 gradient-border group p-8 flex flex-col justify-between min-h-[400px]" style={{'--glow': 'rgba(34,211,238,0.5)'}}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl grid place-items-center" style={{background: 'linear-gradient(135deg,#22d3ee40,#22d3ee10)', border: '1px solid #22d3ee40'}}>
                  <Plus size={20} color="#67e8f9" />
                </div>
                <svg className="w-5 h-5 text-white/40 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 17L17 7M9 7h8v8"/></svg>
              </div>
              <h3 className="display text-3xl font-semibold mb-3">Doctor ERP</h3>
              <p className="text-[15px] text-white/60 leading-relaxed max-w-md">
                Patient records, queue management, billing, e-prescriptions, and analytics for modern clinics and polyclinics.
              </p>
            </div>
            
            <div className="preview mt-8">
              <div className="p-3 bg-white/[0.02]">
                <div className="flex items-center justify-between mb-3 text-[11px] text-white/50"><span>Live Queue</span><span className="text-cyan-400">3 waiting</span></div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 rounded bg-white/[0.04] border border-white/10">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 grid place-items-center text-[10px] text-cyan-300">01</div>
                    <div className="flex-1"><div className="text-[12px] font-medium">A. Sharma</div><div className="text-[10px] text-white/40">Consultation · 10:45</div></div>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded bg-white/[0.02] border border-white/5">
                    <div className="w-6 h-6 rounded-full bg-white/5 grid place-items-center text-[10px] text-white/40">02</div>
                    <div className="flex-1"><div className="text-[12px] font-medium">S. Khan</div><div className="text-[10px] text-white/40">Lab review · 11:00</div></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center text-[14px] text-cyan-300/90 font-medium">
              Explore product
              <svg className="ml-2 transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </div>
          </a>

          {/* Add the other 3 ERPs similarly: HRM, PrePrimary, Salon */}
          <a href="#" onMouseMove={handleMouseMove} className="reveal lg:col-span-4 gradient-border group p-8 flex flex-col justify-between min-h-[360px]" style={{'--glow': 'rgba(167,139,250,0.5)'}}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl grid place-items-center" style={{background: 'linear-gradient(135deg,#a78bfa40,#a78bfa10)', border: '1px solid #a78bfa40'}}>
                  <Settings size={20} color="#c4b5fd" />
                </div>
                <svg className="w-5 h-5 text-white/40 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 17L17 7M9 7h8v8"/></svg>
              </div>
              <h3 className="display text-2xl font-semibold mb-3">HRM ERP</h3>
              <p className="text-[14.5px] text-white/60 leading-relaxed">
                Attendance, payroll, leave, performance, and onboarding your entire people-ops stack in one elegant workspace.
              </p>
            </div>
            <div className="preview mt-6">
              <div className="p-3">
                <div className="flex items-center justify-between text-[11px] mb-2"><span className="text-white/40">Headcount</span><span className="text-violet-300">3,420</span></div>
                <svg viewBox="0 0 200 60" className="w-full h-12 sparkline">
                  <path d="M0,40 C30,20 50,45 80,30 S140,12 200,18" stroke="#c4b5fd" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M0,40 C30,20 50,45 80,30 S140,12 200,18 L200,60 L0,60 Z" fill="url(#hrmG)" opacity="0.25"/>
                  <defs><linearGradient id="hrmG" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#a78bfa"/><stop offset="1" stopColor="#a78bfa00"/></linearGradient></defs>
                </svg>
              </div>
            </div>
            <div className="mt-5 flex items-center text-[14px] text-violet-300/90 font-medium">
              Explore product
              <svg className="ml-2 transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </div>
          </a>

          {/* PrePrimary ERP */}
          <a href="#" onMouseMove={handleMouseMove} className="reveal reveal-delay-1 lg:col-span-4 gradient-border group p-8 flex flex-col justify-between min-h-[360px]" style={{'--glow': 'rgba(244,114,182,0.5)'}}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl grid place-items-center" style={{background: 'linear-gradient(135deg,#f472b640,#f472b610)', border: '1px solid #f472b640'}}>
                  <Calendar size={20} color="#f9a8d4" />
                </div>
                <svg className="w-5 h-5 text-white/40 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 17L17 7M9 7h8v8"/></svg>
              </div>
              <h3 className="display text-2xl font-semibold mb-3">PrePrimary School ERP</h3>
              <p className="text-[14.5px] text-white/60 leading-relaxed">
                Admissions, fees, attendance, daily reports, and parent communication designed for early-years institutions.
              </p>
            </div>
            <div className="preview mt-6 p-3">
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg p-2.5" style={{background: 'rgba(244,114,182,0.08)', border: '1px solid rgba(244,114,182,0.2)'}}>
                  <div className="text-[10px] text-white/50">Students</div><div className="display font-semibold text-pink-200">412</div>
                </div>
                <div className="rounded-lg p-2.5 bg-white/[0.03] border border-white/10">
                  <div className="text-[10px] text-white/50">Present</div><div className="display font-semibold">96%</div>
                </div>
                <div className="rounded-lg p-2.5 bg-white/[0.03] border border-white/10">
                  <div className="text-[10px] text-white/50">Fees</div><div className="display font-semibold">₹38L</div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center text-[14px] text-pink-300/90 font-medium">
              Explore product
              <svg className="ml-2 transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </div>
          </a>

          {/* Salon ERP */}
          <a href="#" onMouseMove={handleMouseMove} className="reveal reveal-delay-2 lg:col-span-4 gradient-border group p-8 flex flex-col justify-between min-h-[360px]" style={{'--glow': 'rgba(251,113,133,0.5)'}}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl grid place-items-center" style={{background: 'linear-gradient(135deg,#fb718540,#fb718510)', border: '1px solid #fb718540'}}>
                  <Calendar size={20} color="#fda4af" />
                </div>
                <svg className="w-5 h-5 text-white/40 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 17L17 7M9 7h8v8"/></svg>
              </div>
              <h3 className="display text-2xl font-semibold mb-3">Salon Management ERP</h3>
              <p className="text-[14.5px] text-white/60 leading-relaxed">
                Bookings, staff calendar, inventory, membership and loyalty turning chaotic salons into smooth-running studios.
              </p>
            </div>
            <div className="preview mt-6 p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></div>
                <div className="text-[11px] text-white/50">Live · 4 chairs occupied</div>
              </div>
              <div className="grid grid-cols-4 gap-1.5 mt-2">
                <div className="h-10 rounded" style={{background: 'linear-gradient(180deg,#fb718560,#fb718520)'}}></div>
                <div className="h-10 rounded" style={{background: 'linear-gradient(180deg,#fb718560,#fb718520)'}}></div>
                <div className="h-10 rounded bg-white/[0.04] border border-white/10"></div>
                <div className="h-10 rounded" style={{background: 'linear-gradient(180deg,#fb718560,#fb718520)'}}></div>
                <div className="h-10 rounded bg-white/[0.04] border border-white/10"></div>
                <div className="h-10 rounded" style={{background: 'linear-gradient(180deg,#fb718560,#fb718520)'}}></div>
                <div className="h-10 rounded bg-white/[0.04] border border-white/10"></div>
                <div className="h-10 rounded bg-white/[0.04] border border-white/10"></div>
              </div>
            </div>
            <div className="mt-5 flex items-center text-[14px] text-rose-300/90 font-medium">
              Explore product
              <svg className="ml-2 transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
