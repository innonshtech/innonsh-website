import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef(null);

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

  return (
    <footer ref={sectionRef} className="relative border-t border-white/5 pt-14 pb-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2 reveal">
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
              <span className="display font-semibold text-[17px] tracking-tight">Innonsh<span className="text-white/40">.</span></span>
            </a>
            <p className="text-[14.5px] text-white/50 max-w-sm leading-relaxed mb-6">
              Engineering the systems that power modern enterprise. Based in Pune, building for the world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 grid place-items-center text-white/50 hover:text-white hover:bg-white/10 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 grid place-items-center text-white/50 hover:text-white hover:bg-white/10 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 grid place-items-center text-white/50 hover:text-white hover:bg-white/10 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>
          
          <div className="reveal reveal-delay-1">
            <h4 className="text-[13px] font-semibold text-white mb-5 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3.5 text-[14.5px]">
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#process" className="footer-link">Process</a></li>
              <li><a href="#" className="footer-link">Careers <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300">Hiring</span></a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div className="reveal reveal-delay-1">
            <h4 className="text-[13px] font-semibold text-white mb-5 uppercase tracking-wider">Products</h4>
            <ul className="space-y-3.5 text-[14.5px]">
              <li><a href="#erp" className="footer-link">Innonsh OS</a></li>
              <li><a href="#erp" className="footer-link">Construction ERP</a></li>
              <li><a href="#erp" className="footer-link">Doctor ERP</a></li>
              <li><a href="https://workgrid.innonsh.com" target="_blank" rel="noopener noreferrer" className="footer-link">Innonsh WorkGrid</a></li>
              <li><a href="https://aaharly.com" target="_blank" rel="noopener noreferrer" className="footer-link">Aaharly</a></li>
              <li><a href="#products" className="footer-link">Abhinnati</a></li>
              <li><a href="https://sprintos.innonsh.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Sprint OS</a></li>
              <li><a href="https://leadgen.innonsh.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Innonsh LeadGen</a></li>
            </ul>
          </div>
          
          <div className="reveal reveal-delay-1">
            <h4 className="text-[13px] font-semibold text-white mb-5 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3.5 text-[14.5px]">
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
              <li><a href="#" className="footer-link">Cookie Policy</a></li>
              <li><a href="#" className="footer-link">Security Info</a></li>
            </ul>
          </div>
        </div>
        
        <div className="reveal flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-[13px] text-white/40">
          <div>&copy; 2026 Innonsh Technologies. All rights reserved.</div>
          <div className="mt-4 md:mt-0 flex items-center gap-6">
            <span>Pune, Maharashtra, India</span>
            <span>Made with precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
