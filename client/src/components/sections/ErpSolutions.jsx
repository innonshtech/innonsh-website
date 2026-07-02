import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { client } from '../../sanity/client';
import LucideIcon from '../common/IconMap';

gsap.registerPlugin(ScrollTrigger);

const staticErpData = [
  {
    title: "Innonsh Infra",
    description: "Site management, BoQ, vendor billing, machinery tracking, labour attendance and project P&L for builders running multiple projects at once.",
    url: "https://infra.innonsh.com/",
    glow: "rgba(245,158,11,0.45)",
    icon: "Building2",
    isFlagship: true,
    type: "infra",
    delay: "",
    slug: "innonsh-infra"
  },
  {
    title: "Innonsh ClinicPro",
    description: "Patient records, queue management, billing, e-prescriptions, and analytics for modern clinics and polyclinics.",
    url: "https://clinicpro.innonsh.com/",
    glow: "rgba(34,211,238,0.5)",
    icon: "Plus",
    isFlagship: false,
    type: "clinicpro",
    delay: "reveal-delay-1",
    slug: "innonsh-clinicpro"
  },
  {
    title: "Innonsh WorkGrid",
    description: "Attendance, payroll, leave, performance, and onboarding — your entire people-ops stack in one elegant workspace.",
    url: "https://workgrid.innonsh.com",
    glow: "rgba(167,139,250,0.5)",
    icon: "Settings",
    isFlagship: false,
    type: "workgrid",
    delay: "",
    slug: "innonsh-workgrid"
  },
  {
    title: "Innonsh TinySteps",
    description: "Admissions, fees, attendance, daily reports, and parent communication designed for early-years institutions.",
    url: "https://tinysteps.innonsh.com/",
    glow: "rgba(244,114,182,0.5)",
    icon: "Calendar",
    isFlagship: false,
    type: "tinysteps",
    delay: "reveal-delay-1",
    slug: "innonsh-tinysteps"
  },
  {
    title: "Salon Management ERP",
    description: "Bookings, staff calendar, inventory, membership and loyalty turning chaotic salons into smooth-running studios.",
    url: "#",
    glow: "rgba(251,113,133,0.5)",
    icon: "Calendar",
    isFlagship: false,
    type: "salon",
    delay: "reveal-delay-2",
    slug: "salon-management-erp"
  },
  {
    title: "Innonsh Sprint OS",
    description: "Backlogs, boards, sprints, standups and burndowns — turning scattered tasks into shipped, on-time releases.",
    url: "https://sprintos.innonsh.com/",
    glow: "rgba(56,189,248,0.5)",
    icon: "Settings",
    isFlagship: false,
    type: "sprintos",
    delay: "reveal-delay-1",
    slug: "innonsh-sprint-os"
  },
  {
    title: "Innonsh LeadGen",
    description: "Leads, pipeline, deals, follow-ups and reporting — turning conversations into closed revenue, one stage at a time.",
    url: "https://leadgen.innonsh.com/",
    glow: "rgba(52,211,153,0.5)",
    icon: "Users", // changed from custom svg to standard lucide-name
    isFlagship: false,
    type: "leadgen",
    delay: "reveal-delay-2",
    slug: "innonsh-leadgen"
  }
];

export default function ErpSolutions() {
  const sectionRef = useRef(null);
  const [erpSolutions, setErpSolutions] = useState(staticErpData);

  useEffect(() => {
    if (import.meta.env.VITE_SANITY_PROJECT_ID) {
      client.fetch(`*[_type == "erpSolution"] | order(order asc)`)
        .then((data) => {
          if (data && data.length > 0) {
            const formatted = data.map(item => ({
              ...item,
              slug: item.slug?.current || item.slug || ''
            }));
            setErpSolutions(formatted);
          }
        })
        .catch((err) => {
          console.warn("Failed to fetch ERP Solutions from Sanity, using static fallback:", err);
        });
    }

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

  const getColSpanClass = (type) => {
    switch (type) {
      case 'infra': return 'lg:col-span-7';
      case 'clinicpro': return 'lg:col-span-5';
      case 'workgrid':
      case 'tinysteps':
      case 'salon': return 'lg:col-span-4';
      case 'sprintos':
      case 'leadgen': return 'lg:col-span-6';
      default: return 'lg:col-span-4';
    }
  };

  const getAccentColors = (type) => {
    switch (type) {
      case 'infra': return { primary: '#f59e0b', secondary: '#fbbf24', text: 'text-amber-300/90' };
      case 'clinicpro': return { primary: '#22d3ee', secondary: '#67e8f9', text: 'text-cyan-300/90' };
      case 'workgrid': return { primary: '#a78bfa', secondary: '#c4b5fd', text: 'text-violet-300/90' };
      case 'tinysteps': return { primary: '#f472b6', secondary: '#f9a8d4', text: 'text-pink-300/90' };
      case 'salon': return { primary: '#fb7185', secondary: '#fda4af', text: 'text-rose-300/90' };
      case 'sprintos': return { primary: '#38bdf8', secondary: '#7dd3fc', text: 'text-sky-300/90' };
      case 'leadgen': return { primary: '#34d399', secondary: '#6ee7b7', text: 'text-emerald-300/90' };
      default: return { primary: '#a78bfa', secondary: '#c4b5fd', text: 'text-violet-300/90' };
    }
  };

  const renderPreview = (type) => {
    switch (type) {
      case 'infra':
        return (
          <div className="preview mt-8">
            <div className="preview-bar"><span></span><span></span><span></span><div className="ml-auto text-[10px] text-white/40">infra.innonsh.com</div></div>
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
        );
      case 'clinicpro':
        return (
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
        );
      case 'workgrid':
        return (
          <div className="preview mt-6">
            <div className="preview-bar"><span></span><span></span><span></span><div className="ml-auto text-[10px] text-white/40">workgrid.innonsh.com</div></div>
            <div className="p-3">
              <div className="flex items-center justify-between text-[11px] mb-2"><span className="text-white/40">Headcount</span><span className="text-violet-300">3,420</span></div>
              <svg viewBox="0 0 200 60" className="w-full h-12 sparkline">
                <path d="M0,40 C30,20 50,45 80,30 S140,12 200,18" stroke="#c4b5fd" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M0,40 C30,20 50,45 80,30 S140,12 200,18 L200,60 L0,60 Z" fill="url(#hrmG)" opacity="0.25"/>
                <defs><linearGradient id="hrmG" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#a78bfa"/><stop offset="1" stopColor="#a78bfa00"/></linearGradient></defs>
              </svg>
            </div>
          </div>
        );
      case 'tinysteps':
        return (
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
        );
      case 'salon':
        return (
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
        );
      case 'sprintos':
        return (
          <div className="preview mt-6 rounded-xl p-4 bg-white/[0.03] border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[12px] text-white/50">Sprint 14 burndown</span>
              <span className="text-[12px] text-white/70">Day 6 / 10</span>
            </div>
            <svg viewBox="0 0 280 56" width="100%" height="48" fill="none">
              <path d="M4 8 C 60 14, 110 30, 150 34 S 230 48, 276 50" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
        );
      case 'leadgen':
        return (
          <div className="preview mt-6 p-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-lg p-2.5" style={{background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)'}}>
                <div className="text-[10px] text-white/50">Leads</div><div className="display font-semibold text-emerald-200">1,284</div>
              </div>
              <div className="rounded-lg p-2.5 bg-white/[0.03] border border-white/10">
                <div className="text-[10px] text-white/50">Won</div><div className="display font-semibold">38%</div>
              </div>
              <div className="rounded-lg p-2.5 bg-white/[0.03] border border-white/10">
                <div className="text-[10px] text-white/50">Revenue</div><div className="display font-semibold">₹62L</div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
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
              Seven industries.<br/> One <span className="serif-italic glow-accent">operating system</span>.
            </h2>
          </div>
          <p className="reveal text-[16.5px] text-white/60 max-w-md leading-relaxed">
            Each ERP is purpose-built for its industry yet shares a unified design, data, and security backbone. Tap a card to explore the live product.
          </p>
        </div>

        {/* ERP cards */}
        <div className="grid lg:grid-cols-12 gap-5">
          {erpSolutions.map((erp, index) => {
            const colors = getAccentColors(erp.type);
            const colSpan = getColSpanClass(erp.type);
            
            return (
              <a 
                key={index}
                href={erp.url} 
                target={erp.url !== '#' ? '_blank' : undefined} 
                rel={erp.url !== '#' ? 'noopener noreferrer' : undefined} 
                onMouseMove={handleMouseMove} 
                className={`reveal ${erp.delay || ''} ${colSpan} gradient-border group p-8 lg:p-10 flex flex-col justify-between min-h-[360px]`} 
                style={{'--glow': erp.glow || 'rgba(167,139,250,0.5)'}}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl grid place-items-center" style={{background: `linear-gradient(135deg, ${colors.primary}40, ${colors.primary}10)`, border: `1px solid ${colors.primary}40`}}>
                        <LucideIcon name={erp.icon} color={colors.secondary} size={20} />
                      </div>
                      {erp.isFlagship && (
                        <span className="chip" style={{background: `${colors.primary}15`, borderColor: `${colors.primary}40`, color: colors.secondary}}>Flagship</span>
                      )}
                    </div>
                    {erp.url !== '#' && (
                      <svg className="w-5 h-5 text-white/40 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 17L17 7M9 7h8v8"/></svg>
                    )}
                  </div>
                  <h3 className="display text-3xl font-semibold mb-3">{erp.title}</h3>
                  <p className="text-[15px] text-white/60 leading-relaxed max-w-md">
                    {erp.description}
                  </p>
                </div>

                {renderPreview(erp.type)}

                <div className={`mt-6 flex items-center text-[14px] ${colors.text} font-medium`}>
                  Explore product
                  <svg className="ml-2 transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

