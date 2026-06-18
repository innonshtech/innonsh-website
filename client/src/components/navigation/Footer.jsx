import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef(null);
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const reveals = sectionRef.current.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
      let delay = 0;
      if (el.classList.contains('reveal-delay-1')) delay = 0.08;
      
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
            start: "top 95%",
          }
        }
      );
    });
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if(email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 2000);
    }
  };

  return (
    <footer ref={sectionRef} className="mt-24 pt-24 bg-[#050507] text-white relative z-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          <div className="lg:col-span-5">
            <a href="#" className="flex items-center gap-2.5 group inline-flex mb-6">
              <span className="relative grid place-items-center w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 overflow-hidden">
                <svg viewBox="0 0 54 56" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.26605 30.1274H2.63312V47.8338H5.26605V30.1274Z" fill="url(#navLogoG2)"/>
                  <path d="M28.1256 3.71565L25.6227 2.89551L4.02179 47.2392L6.52472 48.0594L28.1256 3.71565Z" fill="url(#navLogoG2)"/>
                  <path d="M25.2759 6.21706L27.7399 5.28564L51.2904 48.6177L48.8264 49.5492L25.2759 6.21706Z" fill="url(#navLogoG2)"/>
                  <path opacity="0.34" d="M5.67027 3.96411L4.21283 6.16504L47.6695 30.9612L49.127 28.7603L5.67027 3.96411Z" fill="url(#navLogoG2)"/>
                  <path opacity="0.35" d="M50.3723 28.5415L51.4457 30.9548L6.05543 51.0047L5.00226 48.7583L50.3723 28.5415Z" fill="url(#navLogoG2)"/>
                  <path d="M26.3296 7.9282C28.5108 7.9282 30.279 6.15341 30.279 3.9641C30.279 1.77479 28.5108 0 26.3296 0C24.1484 0 22.3802 1.77479 22.3802 3.9641C22.3802 6.15341 24.1484 7.9282 26.3296 7.9282Z" fill="#EE4E94"/>
                  <path d="M3.9494 34.0913C6.13059 34.0913 7.89879 32.3165 7.89879 30.1272C7.89879 27.9379 6.13059 26.1631 3.9494 26.1631C1.7682 26.1631 0 27.9379 0 30.1272C0 32.3165 1.7682 34.0913 3.9494 34.0913Z" fill="#D642BC"/>
                  <path d="M3.9494 54.4404C6.13059 54.4404 7.89879 52.6656 7.89879 50.4763C7.89879 48.287 6.13059 46.5122 3.9494 46.5122C1.7682 46.5122 0 48.287 0 50.4763C0 52.6656 1.7682 54.4404 3.9494 54.4404Z" fill="#924CE8"/>
                  <path d="M50.026 34.0913C52.2072 34.0913 53.9754 32.3165 53.9754 30.1272C53.9754 27.9379 52.2072 26.1631 50.026 26.1631C47.8448 26.1631 46.0766 27.9379 46.0766 30.1272C46.0766 32.3165 47.8448 34.0913 50.026 34.0913Z" fill="#D642BC"/>
                  <path d="M3.9494 7.9282C6.13059 7.9282 7.89879 6.15341 7.89879 3.9641C7.89879 1.77479 6.13059 0 3.9494 0C1.7682 0 0 1.77479 0 3.9641C0 6.15341 1.7682 7.9282 3.9494 7.9282Z" fill="#EE4E94"/>
                  <path d="M50.026 54.4404C52.2072 54.4404 53.9754 52.6656 53.9754 50.4763C53.9754 48.287 52.2072 46.5122 50.026 46.5122C47.8448 46.5122 46.0766 48.287 46.0766 50.4763C46.0766 52.6656 47.8448 54.4404 50.026 54.4404Z" fill="#924CE8"/>
                  <defs><linearGradient id="navLogoG2" x1="0" y1="0" x2="54" y2="56" gradientUnits="userSpaceOnUse"><stop stopColor="#EE4E94"/><stop offset="1" stopColor="#924CE8"/></linearGradient></defs>
                </svg>
              </span>
              <span className="font-semibold text-[17px] tracking-tight">Innonsh<span className="text-white/40">.</span></span>
            </a>
            <p className="mt-5 text-white/55 max-w-sm leading-relaxed">
              Building digital products that power modern businesses from ERPs to AI-first platforms.
            </p>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="mt-7 flex items-center gap-2 max-w-md">
              <div className="flex-1 flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/40 mr-2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com" 
                  className="bg-transparent outline-none flex-1 text-sm placeholder:text-white/30 text-white" 
                />
              </div>
              <button 
                type="submit" 
                className="bg-white text-black font-semibold rounded-full py-3 px-5 text-sm hover:bg-white/90 transition"
              >
                {subscribed ? 'Subscribed ✓' : 'Subscribe'}
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Services</h4>
              <ul className="space-y-2.5 text-[14.5px]">
                <li><a href="#services" className="text-white/60 hover:text-white transition">Software</a></li>
                <li><a href="#services" className="text-white/60 hover:text-white transition">Web</a></li>
                <li><a href="#services" className="text-white/60 hover:text-white transition">Mobile</a></li>
                <li><a href="#services" className="text-white/60 hover:text-white transition">UI / UX</a></li>
                <li><a href="#services" className="text-white/60 hover:text-white transition">AI Solutions</a></li>
                <li><a href="#services" className="text-white/60 hover:text-white transition">Cloud</a></li>
                <li><a href="#services" className="text-white/60 hover:text-white transition">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">ERP Suite</h4>
              <ul className="space-y-2.5 text-[14.5px]">
                <li><a href="https://infra.innonsh.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition">Innonsh Infra</a></li>
                <li><a href="https://clinicpro.innonsh.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition">Innonsh Clinicpro</a></li>
                <li><a href="https://workgrid.innonsh.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition">Innonsh WorkGrid</a></li>
                <li><a href="https://tinysteps.innonsh.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition">Innonsh TinySteps</a></li>
                <li><a href="https://leadgen.innonsh.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition">Innonsh LeadGen</a></li>
                <li><a href="https://sprintos.innonsh.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition">Innonsh SprintOS</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Products</h4>
              <ul className="space-y-2.5 text-[14.5px]">
                <li><a href="https://aaharly.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition">Aaharly</a></li>
                <li><a href="#products" className="text-white/60 hover:text-white transition">Abhinnati</a></li>
              </ul>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4 mt-7">Company</h4>
              <ul className="space-y-2.5 text-[14.5px]">
                <li><a href="#" className="text-white/60 hover:text-white transition">About</a></li>
                <li><Link to="/careers" className="text-white/60 hover:text-white transition">Careers</Link></li>
                <li><Link to="/blog/hidden-cost-of-excel-when-spreadsheets-hold-your-business-back" className="text-white/60 hover:text-white transition">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Contact</h4>
              <ul className="space-y-2.5 text-[14.5px]">
                <li><a href="mailto:info@innonsh.com" className="text-white/60 hover:text-white transition">info@innonsh.com</a></li>
                <li><span className="text-white/60">Pune, Maharashtra</span></li>
                <li><a href="tel:+917620301874" className="text-white/60 hover:text-white transition">+91 76203 01874</a></li>
              </ul>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4 mt-7">Social</h4>
              <div className="flex gap-2">
                <a 
                  href="https://www.linkedin.com/company/innonsh-technologies/posts/?feedView=all" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-lg grid place-items-center bg-white/5 hover:bg-white/10 transition border border-white/10" 
                  aria-label="LinkedIn"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
                </a>
                <a 
                  href="https://www.instagram.com/innonsh.tech/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-lg grid place-items-center bg-white/5 hover:bg-white/10 transition border border-white/10" 
                  aria-label="Instagram"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
                </a>
                <a 
                  href="https://www.youtube.com/@Innonsh" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-lg grid place-items-center bg-white/5 hover:bg-white/10 transition border border-white/10" 
                  aria-label="YouTube"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full h-px bg-white/10 my-4"></div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 pb-8 text-[13px] text-white/40">
          <div>© 2026 Innonsh Technologies Private Limited. All Rights Reserved</div>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition">Terms</Link>
          </div>
        </div>
      </div>
      
      {/* Giant brand wordmark */}
      <div className="relative mt-8 overflow-hidden select-none pointer-events-none">
        <div className="text-center text-[18vw] lg:text-[14vw] font-semibold leading-none tracking-[-0.05em]"
             style={{
               background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 70%)',
               WebkitBackgroundClip: 'text',
               backgroundClip: 'text',
               color: 'transparent'
             }}>
          INNONSH
        </div>
      </div>
    </footer>
  );
}
