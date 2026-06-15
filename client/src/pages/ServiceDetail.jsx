import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { servicesDetailed } from '../data/servicesDetailed';
import { client } from '../sanity/client';
import LucideIcon from '../components/common/IconMap';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [service, setService] = useState(() => servicesDetailed[id]);
  const [loading, setLoading] = useState(true);
  const animatedRef = useRef(null);

  useEffect(() => {
    if (!id) return;
    
    // Set static data first as immediate fallback
    const staticData = servicesDetailed[id];
    setService(staticData);
    
    if (import.meta.env.VITE_SANITY_PROJECT_ID) {
      setLoading(true);
      client.fetch(`*[_type == "service" && (slug.current == $id || slug == $id)][0]`, { id })
        .then((data) => {
          if (data) {
            setService({
              ...data,
              slug: data.slug?.current || data.slug || ''
            });
          }
          setLoading(false);
        })
        .catch((err) => {
          console.warn("Failed to fetch service detail from Sanity, using static fallback:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [id]);

  const handleClose = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const backdrop = document.querySelector('.modal-backdrop');
    const panel = document.querySelector('.modal-panel-card');
    
    if (panel) {
      panel.style.transition = 'opacity 0.35s cubic-bezier(.2,.7,.2,1), transform 0.35s cubic-bezier(.2,.7,.2,1)';
      panel.style.opacity = '0';
      panel.style.transform = 'translateY(20px) scale(0.97)';
    }
    
    if (backdrop) {
      backdrop.style.transition = 'opacity 0.35s ease';
      backdrop.style.opacity = '0';
    }
    
    setTimeout(() => {
      navigate('/');
    }, 350);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      handleClose(e);
    }
  };

  useEffect(() => {
    if (!service) return;
    if (animatedRef.current === id) return;
    animatedRef.current = id;

    // Add overflow hidden to body to prevent background scrolling
    document.body.classList.add('modal-open');

    // Stop smooth scroll (Lenis) if available
    if (window.lenis) {
      try {
        window.lenis.stop();
      } catch (e) {
        console.warn('Failed to stop Lenis:', e);
      }
    }

    // Backdrop fade-in animation
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      // Force reflow
      backdrop.offsetHeight;
      backdrop.style.opacity = '1';
    }

    // Entrance animation matching the exact v4 transition physics
    const el = document.querySelector('.modal-panel-card');
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px) scale(0.97)';
      el.style.transition = 'opacity 0.45s cubic-bezier(.2,.7,.2,1), transform 0.45s cubic-bezier(.2,.7,.2,1)';
      
      // Force reflow
      el.offsetHeight;
      
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      }, 50);
    }

    // Close on Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose(e);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
      if (window.lenis) {
        try {
          window.lenis.start();
        } catch (e) {
          console.warn('Failed to start Lenis:', e);
        }
      }
    };
  }, [id, service]);

  if (!service) {
    return null;
  }

  return (
    <div 
      className="modal-backdrop"
      onClick={handleBackdropClick}
      style={{
        opacity: 0,
        transition: 'opacity 0.35s ease',
        '--accent': service.accent,
        '--accent-glow': service.accentGlow
      }}
    >
      {/* Modal-like card panel */}
      <div className="modal-panel-card" style={{ opacity: 0 }}>
        <button onClick={handleClose} className="modal-close" aria-label="Close">&times;</button>
        <div className="modal-content">
          <div className="flex items-start gap-4">
            <div className={`shrink-0 w-11 h-11 rounded-xl grid place-items-center border ${service.bg}`}>
              {typeof service.icon === 'string' ? (
                <LucideIcon name={service.icon} color={service.iconColor} size={20} />
              ) : (
                (() => {
                  const IconComponent = service.icon;
                  return IconComponent ? <IconComponent size={20} color={service.iconColor} /> : null;
                })()
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="display text-2xl lg:text-[28px] font-semibold tracking-[-0.02em] text-white">
                {service.title}
              </h3>
              <p className="text-[15px] text-white/65 mt-2.5 leading-relaxed">
                {service.hook}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7 mt-8 pt-7 border-t border-white/[0.06]">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-4">What you get</div>
              <ul className="space-y-2.5 text-[14.5px] text-white/85">
                {service.deliverables.map((d, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: service.accent }}></span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-4">We use</div>
              <div className="flex flex-wrap gap-1.5">
                {service.tools.map((t, index) => (
                  <span key={index} className="text-[12px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/75">
                    {t}
                  </span>
                ))}
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-3 mt-7">Best for</div>
              <p className="text-[14.5px] text-white/85 leading-relaxed">
                {service.bestFor}
              </p>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button 
              className="btn-primary !py-3 !px-5 text-[13.5px]"
              onClick={(e) => {
                handleClose(e);
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    if (window.lenis) {
                      window.lenis.scrollTo(contactSection, { offset: -60 });
                    } else {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }, 420);
              }}
            >
              Start a project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
            <button onClick={handleClose} className="btn-ghost !py-3 !px-5 text-[13.5px]">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
