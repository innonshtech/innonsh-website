export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-500" id="nav">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div 
          className="mt-5 flex items-center justify-between rounded-2xl glass px-4 lg:px-6 py-3"
          style={{
            background: "rgba(10, 10, 15, 0.45)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            isolation: "isolate"
          }}
        >
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="relative grid place-items-center w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 overflow-hidden">
              <svg viewBox="0 0 54 56" className="w-[22px] h-[22px]" fill="none" xmlns="http://www.w3.org/2000/svg" style={{filter: 'drop-shadow(0 0 6px rgba(238,78,148,0.45))'}}>
                <path d="M5.26605 30.1274H2.63312V47.8338H5.26605V30.1274Z" fill="url(#navLogoG)"/>
                <path d="M28.1256 3.71565L25.6227 2.89551L4.02179 47.2392L6.52472 48.0594L28.1256 3.71565Z" fill="url(#navLogoG)"/>
                <path d="M25.2759 6.21706L27.7399 5.28564L51.2904 48.6177L48.8264 49.5492L25.2759 6.21706Z" fill="url(#navLogoG)"/>
                <path opacity="0.34" d="M5.67027 3.96411L4.21283 6.16504L47.6695 30.9612L49.127 28.7603L5.67027 3.96411Z" fill="url(#navLogoG)"/>
                <path opacity="0.35" d="M50.3723 28.5415L51.4457 30.9548L6.05543 51.0047L5.00226 48.7583L50.3723 28.5415Z" fill="url(#navLogoG)"/>
                <path d="M26.3296 7.9282C28.5108 7.9282 30.279 6.15341 30.279 3.9641C30.279 1.77479 28.5108 0 26.3296 0C24.1484 0 22.3802 1.77479 22.3802 3.9641C22.3802 6.15341 24.1484 7.9282 26.3296 7.9282Z" fill="#EE4E94"/>
                <path d="M3.9494 34.0913C6.13059 34.0913 7.89879 32.3165 7.89879 30.1272C7.89879 27.9379 6.13059 26.1631 3.9494 26.1631C1.7682 26.1631 0 27.9379 0 30.1272C0 32.3165 1.7682 34.0913 3.9494 34.0913Z" fill="#D642BC"/>
                <path d="M3.9494 54.4404C6.13059 54.4404 7.89879 52.6656 7.89879 50.4763C7.89879 48.287 6.13059 46.5122 3.9494 46.5122C1.7682 46.5122 0 48.287 0 50.4763C0 52.6656 1.7682 54.4404 3.9494 54.4404Z" fill="#924CE8"/>
                <path d="M50.026 34.0913C52.2072 34.0913 53.9754 32.3165 53.9754 30.1272C53.9754 27.9379 52.2072 26.1631 50.026 26.1631C47.8448 26.1631 46.0766 27.9379 46.0766 30.1272C46.0766 32.3165 47.8448 34.0913 50.026 34.0913Z" fill="#D642BC"/>
                <path d="M3.9494 7.9282C6.13059 7.9282 7.89879 6.15341 7.89879 3.9641C7.89879 1.77479 6.13059 0 3.9494 0C1.7682 0 0 1.77479 0 3.9641C0 6.15341 1.7682 7.9282 3.9494 7.9282Z" fill="#EE4E94"/>
                <path d="M50.026 54.4404C52.2072 54.4404 53.9754 52.6656 53.9754 50.4763C53.9754 48.287 52.2072 46.5122 50.026 46.5122C47.8448 46.5122 46.0766 48.287 46.0766 50.4763C46.0766 52.6656 47.8448 54.4404 50.026 54.4404Z" fill="#924CE8"/>
                <defs><linearGradient id="navLogoG" x1="0" y1="0" x2="54" y2="56" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#EE4E94"/><stop offset="1" stopColor="#924CE8"/>
                </linearGradient></defs>
              </svg>
            </span>
            <span className="display font-semibold text-[17px] tracking-tight">Innonsh<span className="text-white/40">.</span></span>
          </a>

          <nav className="hidden lg:flex items-center gap-1 text-[14px] text-white/70">
            <a href="#services" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition">Services</a>
            <a href="#erp" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition">ERP Solutions</a>
            <a href="#products" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition">Products</a>
            <a href="#process" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition">Process</a>
            <a href="#why" className="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/5 transition">Why Us</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden md:inline-flex btn-ghost !py-2.5 !px-4 text-[13.5px]">Book a call</a>
            <a href="#contact" className="btn-primary magnetic !py-2.5 !px-4 text-[13.5px]">
              Start a project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
