import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function TinyStepsLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const blobsRef = useRef([]);

  useEffect(() => {
    // ============ Dynamic title ============
    const originalTitle = document.title;
    document.title = "Innonsh TinySteps | School Management System";

    // ============ Sticky Nav ============
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ============ Scroll Reveal ============
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 50);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.tinysteps-landing-scope .reveal').forEach(el => revealObserver.observe(el));

    // ============ Counter animation ============
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target || '0', 10);
          const suffix = el.dataset.suffix || '';
          const prefix = el.dataset.prefix || '';
          const duration = 1600;
          const startTime = performance.now();

          function step(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.floor(eased * target);
            el.textContent = prefix + value + suffix;
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              el.textContent = prefix + target + suffix;
            }
          }
          requestAnimationFrame(step);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.4 });

    document.querySelectorAll('.tinysteps-landing-scope [data-target]').forEach(el => counterObserver.observe(el));

    // ============ Parallax on blobs ============
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      blobsRef.current.forEach((blob, i) => {
        if (blob) {
          const factor = (i + 1) * 0.4;
          blob.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        }
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      revealObserver.disconnect();
      counterObserver.disconnect();
      document.title = originalTitle;
    };
  }, []);

  const handleAnchorClick = (e, targetId) => {
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="tinysteps-landing-scope">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,300..800,30..100&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        .tinysteps-landing-scope {
          --bg: #FBF6EC;
          --bg-tint: #F4ECDC;
          --surface: #FFFFFF;
          --ink: #1F1B16;
          --ink-soft: #5C534B;
          --ink-muted: #8B847C;
          --line: #E8DFCD;

          --coral: #E8704B;
          --coral-deep: #C9532E;
          --coral-soft: #F8C8B5;
          --sage: #7FA481;
          --sage-soft: #C8DAC9;
          --butter: #F5D78E;
          --butter-soft: #FAEBC4;
          --sky: #B8D4E8;
          --sky-soft: #DCEAF3;
          --plum: #9C6B8E;

          --shadow-sm: 0 1px 2px rgba(31, 27, 22, 0.04), 0 2px 6px rgba(31, 27, 22, 0.04);
          --shadow-md: 0 4px 12px rgba(31, 27, 22, 0.06), 0 8px 24px rgba(31, 27, 22, 0.06);
          --shadow-lg: 0 12px 32px rgba(31, 27, 22, 0.08), 0 24px 64px rgba(31, 27, 22, 0.08);
          --radius-sm: 12px;
          --radius: 20px;
          --radius-lg: 32px;
          --radius-xl: 44px;

          --font-display: 'Fraunces', 'Times New Roman', serif;
          --font-body: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;

          background: var(--bg);
          color: var(--ink);
          font-family: var(--font-body);
          line-height: 1.6;
          overflow-x: hidden;
          min-height: 100vh;
          text-align: left;
        }

        .tinysteps-landing-scope * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .tinysteps-landing-scope a {
          color: inherit;
          text-decoration: none;
        }

        .tinysteps-landing-scope button {
          font-family: inherit;
          cursor: pointer;
          border: none;
          background: none;
        }

        .tinysteps-landing-scope .eyebrow {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--coral-deep);
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .tinysteps-landing-scope .eyebrow::before {
          content: '';
          width: 28px;
          height: 1px;
          background: var(--coral-deep);
        }

        .tinysteps-landing-scope h1, 
        .tinysteps-landing-scope h2, 
        .tinysteps-landing-scope h3, 
        .tinysteps-landing-scope h4 {
          font-family: var(--font-display);
          font-weight: 500;
          color: var(--ink);
          letter-spacing: -0.02em;
          line-height: 1.08;
        }
        .tinysteps-landing-scope h1 { font-size: clamp(2.2rem, 4.8vw, 3.9rem); font-variation-settings: "SOFT" 50, "opsz" 144; }
        .tinysteps-landing-scope h2 { font-size: clamp(1.7rem, 3.4vw, 2.7rem); font-variation-settings: "SOFT" 40, "opsz" 100; }
        .tinysteps-landing-scope h3 { font-size: clamp(1.2rem, 1.6vw, 1.45rem); font-weight: 500; }
        .tinysteps-landing-scope .serif-italic { font-style: italic; font-variation-settings: "SOFT" 100, "opsz" 144; color: var(--coral-deep); }

        .tinysteps-landing-scope .container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 28px;
        }

        .tinysteps-landing-scope section {
          padding: 88px 0;
          position: relative;
        }
        @media (max-width: 768px) {
          .tinysteps-landing-scope section { padding: 60px 0; }
        }

        /* Nav */
        .tinysteps-landing-scope .nav {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 18px 0;
          background: rgba(251, 246, 236, 0.72);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid transparent;
          transition: all 0.35s ease;
        }
        .tinysteps-landing-scope .nav.scrolled {
          border-bottom-color: var(--line);
          padding: 12px 0;
        }
        .tinysteps-landing-scope .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .tinysteps-landing-scope .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-size: 1.45rem;
          font-weight: 500;
          letter-spacing: -0.02em;
        }
        .tinysteps-landing-scope .nav-links {
          display: flex;
          align-items: center;
          gap: 36px;
          font-size: 0.94rem;
          font-weight: 500;
        }
        .tinysteps-landing-scope .nav-links a {
          position: relative;
          color: var(--ink-soft);
          transition: color 0.2s ease;
        }
        .tinysteps-landing-scope .nav-links a:hover { color: var(--ink); }
        .tinysteps-landing-scope .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -6px; left: 0;
          width: 0; height: 2px;
          background: var(--coral);
          transition: width 0.3s ease;
        }
        .tinysteps-landing-scope .nav-links a:hover::after { width: 100%; }
        .tinysteps-landing-scope .nav-cta-wrap { display: flex; align-items: center; gap: 12px; }
        
        @media (max-width: 900px) {
          .tinysteps-landing-scope .nav-links { display: none; }
        }

        /* Buttons */
        .tinysteps-landing-scope .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 22px;
          font-size: 0.92rem;
          font-weight: 600;
          border-radius: 999px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          white-space: nowrap;
          cursor: pointer;
        }
        .tinysteps-landing-scope .btn-primary {
          background: var(--ink);
          color: var(--bg);
        }
        .tinysteps-landing-scope .btn-primary:hover {
          background: var(--coral-deep);
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(201, 83, 46, 0.32);
        }
        .tinysteps-landing-scope .btn-secondary {
          background: transparent;
          color: var(--ink);
          border: 1.5px solid var(--ink);
        }
        .tinysteps-landing-scope .btn-secondary:hover {
          background: var(--ink);
          color: var(--bg);
          transform: translateY(-2px);
        }
        .tinysteps-landing-scope .btn-light {
          background: var(--surface);
          color: var(--ink);
          box-shadow: var(--shadow-sm);
        }
        .tinysteps-landing-scope .btn-light:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .tinysteps-landing-scope .btn-arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .tinysteps-landing-scope .btn:hover .btn-arrow { transform: translateX(4px); }

        /* Hero */
        .tinysteps-landing-scope .hero {
          padding-top: 130px;
          padding-bottom: 60px;
          position: relative;
          overflow: hidden;
        }
        .tinysteps-landing-scope .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }
        .tinysteps-landing-scope .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.55;
          will-change: transform;
        }
        .tinysteps-landing-scope .blob-1 { width: 480px; height: 480px; background: var(--coral-soft); top: -120px; right: -100px; animation: float 18s ease-in-out infinite; }
        .tinysteps-landing-scope .blob-2 { width: 380px; height: 380px; background: var(--sage-soft); bottom: -80px; left: -80px; animation: float 22s ease-in-out infinite reverse; }
        .tinysteps-landing-scope .blob-3 { width: 320px; height: 320px; background: var(--butter-soft); top: 30%; left: 40%; animation: float 25s ease-in-out infinite; opacity: 0.45; }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.98); }
        }

        .tinysteps-landing-scope .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 980px) {
          .tinysteps-landing-scope .hero-grid { grid-template-columns: 1fr; gap: 36px; }
        }

        .tinysteps-landing-scope .hero h1 {
          margin: 14px 0 18px;
        }
        .tinysteps-landing-scope .hero-sub {
          font-size: 1.05rem;
          color: var(--ink-soft);
          max-width: 520px;
          margin-bottom: 28px;
        }
        .tinysteps-landing-scope .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }
        .tinysteps-landing-scope .hero-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
          align-items: center;
          font-size: 0.88rem;
          color: var(--ink-muted);
        }
        .tinysteps-landing-scope .hero-trust-item { display: flex; align-items: center; gap: 8px; }
        .tinysteps-landing-scope .hero-trust-item svg { color: var(--sage); }

        /* Mockup visuals */
        .tinysteps-landing-scope .hero-visual {
          position: relative;
          animation: rise 1.2s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes rise {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .tinysteps-landing-scope .dashboard-card {
          background: var(--surface);
          border-radius: var(--radius-lg);
          padding: 24px;
          box-shadow: var(--shadow-lg);
          position: relative;
          transform: perspective(1200px) rotateY(-4deg) rotateX(2deg);
          transition: transform 0.6s ease;
        }
        .tinysteps-landing-scope .dashboard-card:hover { transform: perspective(1200px) rotateY(-2deg) rotateX(1deg); }
        .tinysteps-landing-scope .dash-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--line);
          margin-bottom: 18px;
        }
        .tinysteps-landing-scope .dash-title { font-family: var(--font-display); font-size: 1.1rem; }
        .tinysteps-landing-scope .dash-dots { display: flex; gap: 6px; }
        .tinysteps-landing-scope .dash-dots span { width: 10px; height: 10px; border-radius: 50%; }
        .tinysteps-landing-scope .dash-dots span:nth-child(1) { background: #F8C8B5; }
        .tinysteps-landing-scope .dash-dots span:nth-child(2) { background: #F5D78E; }
        .tinysteps-landing-scope .dash-dots span:nth-child(3) { background: #C8DAC9; }
        
        .tinysteps-landing-scope .dash-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 18px;
        }
        .tinysteps-landing-scope .dash-stat {
          background: var(--bg-tint);
          border-radius: var(--radius-sm);
          padding: 14px 12px;
        }
        .tinysteps-landing-scope .dash-stat-label { font-size: 0.7rem; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }
        .tinysteps-landing-scope .dash-stat-value { font-family: var(--font-display); font-size: 1.4rem; font-weight: 500; margin-top: 4px; }
        
        .tinysteps-landing-scope .dash-chart {
          height: 110px;
          background: linear-gradient(180deg, var(--coral-soft) 0%, transparent 100%);
          border-radius: var(--radius-sm);
          position: relative;
          overflow: hidden;
          padding: 10px;
        }
        .tinysteps-landing-scope .dash-chart svg { width: 100%; height: 100%; }
        
        .tinysteps-landing-scope .dash-list { margin-top: 16px; }
        .tinysteps-landing-scope .dash-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          border-top: 1px solid var(--line);
          font-size: 0.85rem;
        }
        .tinysteps-landing-scope .dash-row:first-child { border-top: none; }
        .tinysteps-landing-scope .dash-avatar {
          width: 32px; height: 32px;
          border-radius: 50%;
          display: grid; place-items: center;
          font-size: 0.75rem;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }
        .tinysteps-landing-scope .dash-row-info { flex: 1; }
        .tinysteps-landing-scope .dash-row-name { font-weight: 600; }
        .tinysteps-landing-scope .dash-row-meta { font-size: 0.75rem; color: var(--ink-muted); }
        .tinysteps-landing-scope .dash-row-badge {
          font-size: 0.7rem;
          padding: 4px 10px;
          border-radius: 999px;
          font-weight: 600;
        }
        .tinysteps-landing-scope .badge-present { background: var(--sage-soft); color: #496D4C; }
        .tinysteps-landing-scope .badge-late { background: var(--butter-soft); color: #8B6A1F; }

        .tinysteps-landing-scope .float-card {
          position: absolute;
          background: var(--surface);
          border-radius: var(--radius);
          padding: 14px 18px;
          box-shadow: var(--shadow-md);
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.85rem;
          animation: floatY 4s ease-in-out infinite;
        }
        .tinysteps-landing-scope .float-card-1 { top: -20px; left: -28px; }
        .tinysteps-landing-scope .float-card-2 { bottom: 30px; right: -32px; }
        .tinysteps-landing-scope .float-icon {
          width: 36px; height: 36px;
          border-radius: 12px;
          display: grid; place-items: center;
          color: white;
          flex-shrink: 0;
        }

        /* Strip Marquee */
        .tinysteps-landing-scope .strip {
          padding: 28px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: var(--bg-tint);
          overflow: hidden;
        }
        .tinysteps-landing-scope .strip-track {
          display: flex;
          gap: 48px;
          align-items: center;
          white-space: nowrap;
          animation: scroll 32s linear infinite;
          font-family: var(--font-display);
          font-size: 1.2rem;
          color: var(--ink-soft);
        }
        .tinysteps-landing-scope .strip-track span { display: inline-flex; align-items: center; gap: 48px; }
        .tinysteps-landing-scope .strip-track .dot {
          display: inline-block;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--coral);
        }

        /* Problems */
        .tinysteps-landing-scope .section-head {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 52px;
        }
        .tinysteps-landing-scope .problem-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }
        .tinysteps-landing-scope .problem-card {
          background: var(--surface);
          border-radius: var(--radius);
          padding: 28px;
          border: 1px solid var(--line);
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          overflow: hidden;
        }
        .tinysteps-landing-scope .problem-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          border-color: transparent;
        }
        .tinysteps-landing-scope .problem-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 4px;
          background: var(--coral);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .tinysteps-landing-scope .problem-card:hover::before { transform: scaleX(1); }
        .tinysteps-landing-scope .problem-icon {
          width: 50px; height: 50px;
          border-radius: 14px;
          display: grid; place-items: center;
          margin-bottom: 18px;
          font-size: 1.4rem;
        }
        .tinysteps-landing-scope .pi-1 { background: var(--coral-soft); color: var(--coral-deep); }
        .tinysteps-landing-scope .pi-2 { background: var(--sage-soft); color: #496D4C; }
        .tinysteps-landing-scope .pi-3 { background: var(--sky-soft); color: #4A6F89; }
        .tinysteps-landing-scope .pi-4 { background: var(--butter-soft); color: #8B6A1F; }
        .tinysteps-landing-scope .pi-5 { background: #EDD9E7; color: #6E4A65; }
        .tinysteps-landing-scope .pi-6 { background: var(--coral-soft); color: var(--coral-deep); }
        .tinysteps-landing-scope .problem-card h3 { margin-bottom: 8px; }
        .tinysteps-landing-scope .problem-card p { color: var(--ink-soft); font-size: 0.92rem; }
        .tinysteps-landing-scope .problem-card .arrow {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px dashed var(--line);
          font-size: 0.88rem;
          color: var(--coral-deep);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Modules */
        .tinysteps-landing-scope .modules-section {
          background: linear-gradient(180deg, var(--bg) 0%, var(--bg-tint) 100%);
        }
        .tinysteps-landing-scope .modules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 18px;
        }
        .tinysteps-landing-scope .module-card {
          background: var(--surface);
          border-radius: var(--radius);
          padding: 24px;
          border: 1px solid transparent;
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .tinysteps-landing-scope .module-card:hover {
          transform: translateY(-4px);
          border-color: var(--line);
          box-shadow: var(--shadow-md);
        }
        .tinysteps-landing-scope .module-card::after {
          content: '';
          position: absolute;
          bottom: -60px; right: -60px;
          width: 120px; height: 120px;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .tinysteps-landing-scope .module-card:hover::after { opacity: 0.15; }
        .tinysteps-landing-scope .module-card[data-color="coral"]::after { background: var(--coral); }
        .tinysteps-landing-scope .module-card[data-color="sage"]::after { background: var(--sage); }
        .tinysteps-landing-scope .module-card[data-color="sky"]::after { background: var(--sky); }
        .tinysteps-landing-scope .module-card[data-color="butter"]::after { background: var(--butter); }
        .tinysteps-landing-scope .module-card[data-color="plum"]::after { background: var(--plum); }

        .tinysteps-landing-scope .mod-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          display: grid; place-items: center;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }
        .tinysteps-landing-scope .mod-icon svg { width: 24px; height: 24px; stroke-width: 1.8; }
        .tinysteps-landing-scope .module-card[data-color="coral"] .mod-icon { background: var(--coral-soft); color: var(--coral-deep); }
        .tinysteps-landing-scope .module-card[data-color="sage"] .mod-icon { background: var(--sage-soft); color: #3F5E42; }
        .tinysteps-landing-scope .module-card[data-color="sky"] .mod-icon { background: var(--sky-soft); color: #3F6586; }
        .tinysteps-landing-scope .module-card[data-color="butter"] .mod-icon { background: var(--butter-soft); color: #7D5E15; }
        .tinysteps-landing-scope .module-card[data-color="plum"] .mod-icon { background: #EDD9E7; color: #6E4A65; }
        
        .tinysteps-landing-scope .module-card h3 { font-size: 1.1rem; margin-bottom: 6px; position: relative; z-index: 1; }
        .tinysteps-landing-scope .module-card p { color: var(--ink-soft); font-size: 0.88rem; position: relative; z-index: 1; }
        .tinysteps-landing-scope .module-tag { margin-top: 14px; display: inline-flex; font-size: 0.75rem; font-weight: 600; color: var(--coral-deep); position: relative; z-index: 1; }

        /* Parent app mockup section */
        .tinysteps-landing-scope .parent-section { position: relative; overflow: hidden; }
        .tinysteps-landing-scope .parent-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 64px; align-items: center; }
        @media (max-width: 980px) {
          .tinysteps-landing-scope .parent-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        .tinysteps-landing-scope .parent-visual { position: relative; display: flex; justify-content: center; }
        .tinysteps-landing-scope .phone {
          width: 280px;
          height: 560px;
          background: linear-gradient(160deg, #2D2A26 0%, #1F1B16 100%);
          border-radius: 44px;
          padding: 12px;
          box-shadow: 0 30px 60px rgba(31, 27, 22, 0.25), 0 12px 30px rgba(31, 27, 22, 0.15);
          position: relative;
        }
        .tinysteps-landing-scope .phone-notch {
          position: absolute;
          top: 22px; left: 50%;
          transform: translateX(-50%);
          width: 100px; height: 24px;
          background: #0F0D0A;
          border-radius: 999px;
          z-index: 3;
        }
        .tinysteps-landing-scope .phone-screen {
          width: 100%;
          height: 100%;
          background: var(--bg);
          border-radius: 32px;
          overflow: hidden;
          padding: 50px 18px 24px;
          position: relative;
        }
        .tinysteps-landing-scope .notif {
          background: var(--surface);
          border-radius: 16px;
          padding: 14px;
          margin-bottom: 12px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
          box-shadow: 0 2px 8px rgba(31, 27, 22, 0.05);
          opacity: 0;
          transform: translateX(20px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .tinysteps-landing-scope .notif.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .tinysteps-landing-scope .notif-icon {
          width: 36px; height: 36px;
          border-radius: 10px;
          display: grid; place-items: center;
          font-size: 1rem;
          flex-shrink: 0;
        }
        .tinysteps-landing-scope .notif-body { flex: 1; min-width: 0; }
        .tinysteps-landing-scope .notif-title { font-size: 0.78rem; font-weight: 700; }
        .tinysteps-landing-scope .notif-text { font-size: 0.7rem; color: var(--ink-soft); margin-top: 2px; }
        .tinysteps-landing-scope .notif-time { font-size: 0.65rem; color: var(--ink-muted); margin-top: 4px; }
        .tinysteps-landing-scope .parent-decoration { position: absolute; font-size: 2rem; animation: floatY 5s ease-in-out infinite; }
        .tinysteps-landing-scope .parent-decoration.d1 { top: 10%; left: 10%; animation-delay: 0s; }
        .tinysteps-landing-scope .parent-decoration.d2 { top: 70%; right: 10%; animation-delay: 1.5s; }
        .tinysteps-landing-scope .parent-decoration.d3 { top: 30%; right: 5%; animation-delay: 3s; }
        .tinysteps-landing-scope .parent-content h2 { margin-bottom: 18px; }
        .tinysteps-landing-scope .parent-content > p { color: var(--ink-soft); font-size: 1rem; margin-bottom: 28px; }
        
        .tinysteps-landing-scope .parent-benefits { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        @media (max-width: 540px) {
          .tinysteps-landing-scope .parent-benefits { grid-template-columns: 1fr; }
        }
        .tinysteps-landing-scope .parent-benefit { display: flex; gap: 14px; align-items: flex-start; }
        .tinysteps-landing-scope .pb-icon {
          width: 40px; height: 40px;
          border-radius: 12px;
          background: var(--sage-soft);
          color: #496D4C;
          display: grid; place-items: center;
          flex-shrink: 0;
        }
        .tinysteps-landing-scope .pb-text strong { display: block; font-size: 0.95rem; margin-bottom: 2px; }
        .tinysteps-landing-scope .pb-text span { font-size: 0.85rem; color: var(--ink-soft); }

        /* Roles */
        .tinysteps-landing-scope .roles-section { background: var(--bg-tint); }
        .tinysteps-landing-scope .roles-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        @media (max-width: 980px) {
          .tinysteps-landing-scope .roles-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .tinysteps-landing-scope .roles-grid { grid-template-columns: 1fr; }
        }
        .tinysteps-landing-scope .role-card {
          background: var(--surface);
          border-radius: var(--radius);
          padding: 28px 24px;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: transform 0.4s ease;
        }
        .tinysteps-landing-scope .role-card:hover { transform: translateY(-6px); }
        .tinysteps-landing-scope .role-card h3 { font-size: 1.2rem; margin: 16px 0 10px; }
        .tinysteps-landing-scope .role-card ul { list-style: none; }
        .tinysteps-landing-scope .role-card li {
          padding: 8px 0;
          font-size: 0.88rem;
          color: var(--ink-soft);
          display: flex;
          align-items: flex-start;
          gap: 8px;
          border-bottom: 1px dashed var(--line);
        }
        .tinysteps-landing-scope .role-card li:last-child { border-bottom: none; }
        .tinysteps-landing-scope .role-card li svg { flex-shrink: 0; margin-top: 4px; color: var(--sage); }
        .tinysteps-landing-scope .role-illust {
          width: 56px; height: 56px;
          border-radius: 16px;
          display: grid; place-items: center;
          font-size: 1.75rem;
        }

        /* Devices */
        .tinysteps-landing-scope .devices-section { text-align: center; overflow: hidden; }
        .tinysteps-landing-scope .devices-stage { position: relative; height: 400px; margin: 40px auto 0; max-width: 860px; }
        @media (max-width: 768px) { .tinysteps-landing-scope .devices-stage { height: 300px; } }
        
        .tinysteps-landing-scope .device { position: absolute; background: linear-gradient(160deg, #2D2A26 0%, #1F1B16 100%); padding: 8px; box-shadow: var(--shadow-lg); }
        .tinysteps-landing-scope .device-laptop {
          width: 60%;
          max-width: 540px;
          height: auto;
          aspect-ratio: 16 / 10;
          border-radius: 18px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .tinysteps-landing-scope .device-laptop .device-screen {
          border-radius: 12px;
          background: linear-gradient(135deg, var(--coral-soft) 0%, var(--butter-soft) 100%);
          height: 100%;
          display: grid;
          place-items: center;
          padding: 20px;
          font-family: var(--font-display);
          font-size: 1.2rem;
          color: var(--ink);
        }
        .tinysteps-landing-scope .device-tablet {
          width: 200px;
          height: 270px;
          border-radius: 22px;
          right: 8%;
          top: 14%;
          transform: rotate(8deg);
        }
        .tinysteps-landing-scope .device-tablet .device-screen {
          border-radius: 16px;
          background: linear-gradient(135deg, var(--sage-soft) 0%, var(--sky-soft) 100%);
          height: 100%;
          display: grid;
          place-items: center;
          padding: 16px;
          font-family: var(--font-display);
          color: var(--ink);
        }
        .tinysteps-landing-scope .device-phone {
          width: 130px;
          height: 250px;
          border-radius: 24px;
          left: 6%;
          bottom: 6%;
          transform: rotate(-6deg);
        }
        .tinysteps-landing-scope .device-phone .device-screen {
          border-radius: 18px;
          background: linear-gradient(135deg, var(--sky-soft) 0%, #EDD9E7 100%);
          height: 100%;
          display: grid;
          place-items: center;
          padding: 14px;
          font-family: var(--font-display);
          color: var(--ink);
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .tinysteps-landing-scope .device-laptop { width: 80%; }
          .tinysteps-landing-scope .device-tablet { width: 140px; height: 190px; right: 2%; }
          .tinysteps-landing-scope .device-phone { width: 96px; height: 180px; left: 2%; }
        }

        /* Stats */
        .tinysteps-landing-scope .stats-section { background: var(--ink); color: var(--bg); }
        .tinysteps-landing-scope .stats-section .eyebrow { color: var(--butter); }
        .tinysteps-landing-scope .stats-section .eyebrow::before { background: var(--butter); }
        .tinysteps-landing-scope .stats-section h2 { color: var(--bg); }
        .tinysteps-landing-scope .stats-section .section-head p { color: rgba(251, 246, 236, 0.7); }
        .tinysteps-landing-scope .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-top: 24px; }
        .tinysteps-landing-scope .stat-card {
          background: rgba(251, 246, 236, 0.04);
          border: 1px solid rgba(251, 246, 236, 0.1);
          border-radius: var(--radius);
          padding: 30px 24px;
          text-align: left;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .tinysteps-landing-scope .stat-card:hover {
          background: rgba(251, 246, 236, 0.08);
          transform: translateY(-4px);
        }
        .tinysteps-landing-scope .stat-card-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          background: rgba(232, 112, 75, 0.15);
          color: var(--coral);
          display: grid; place-items: center;
          margin-bottom: 18px;
        }
        .tinysteps-landing-scope .stat-number {
          font-family: var(--font-display);
          font-size: 2.9rem;
          font-weight: 500;
          line-height: 1;
          background: linear-gradient(135deg, var(--coral-soft) 0%, var(--butter) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .tinysteps-landing-scope .stat-label { font-size: 0.95rem; margin-top: 10px; font-weight: 500; }
        .tinysteps-landing-scope .stat-sub { font-size: 0.82rem; color: rgba(251, 246, 236, 0.6); margin-top: 4px; }

        /* CTA */
        .tinysteps-landing-scope .cta-section { padding: 88px 0; }
        .tinysteps-landing-scope .cta-banner {
          background: linear-gradient(135deg, var(--coral) 0%, var(--coral-deep) 100%);
          border-radius: var(--radius-xl);
          padding: 64px 52px;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(232, 112, 75, 0.3);
        }
        .tinysteps-landing-scope .cta-banner::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(255, 215, 142, 0.3), transparent 70%);
          border-radius: 50%;
        }
        .tinysteps-landing-scope .cta-banner::after {
          content: '';
          position: absolute;
          bottom: -120px; left: -80px;
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(184, 212, 232, 0.2), transparent 70%);
          border-radius: 50%;
        }
        .tinysteps-landing-scope .cta-banner h2 { color: white; font-size: clamp(1.7rem, 3.4vw, 2.6rem); margin-bottom: 16px; position: relative; z-index: 1; }
        .tinysteps-landing-scope .cta-banner h2 .serif-italic { color: var(--butter); }
        .tinysteps-landing-scope .cta-banner p { color: rgba(255, 255, 255, 0.9); font-size: 1rem; max-width: 560px; margin: 0 auto 28px; position: relative; z-index: 1; }
        .tinysteps-landing-scope .cta-actions { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; position: relative; z-index: 1; }
        .tinysteps-landing-scope .cta-banner .btn-light:hover { background: var(--ink); color: var(--bg); }
        .tinysteps-landing-scope .cta-banner .btn-outline { background: transparent; border: 1.5px solid rgba(255, 255, 255, 0.5); color: white; }
        .tinysteps-landing-scope .cta-banner .btn-outline:hover { background: rgba(255, 255, 255, 0.1); border-color: white; }
        @media (max-width: 768px) { .tinysteps-landing-scope .cta-banner { padding: 50px 28px; } }

        /* Footer */
        .tinysteps-landing-scope footer { background: var(--bg-tint); padding: 56px 0 24px; border-top: 1px solid var(--line); }
        .tinysteps-landing-scope .footer-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 36px; }
        @media (max-width: 900px) { .tinysteps-landing-scope .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; } }
        @media (max-width: 540px) { .tinysteps-landing-scope .footer-grid { grid-template-columns: 1fr; } }
        .tinysteps-landing-scope .footer-brand-text { font-size: 0.95rem; color: var(--ink-soft); margin: 16px 0 22px; max-width: 340px; }
        .tinysteps-landing-scope .social-links { display: flex; gap: 10px; }
        .tinysteps-landing-scope .social-links a { width: 38px; height: 38px; border-radius: 50%; background: var(--surface); display: grid; place-items: center; transition: all 0.3s ease; color: var(--ink-soft); }
        .tinysteps-landing-scope .social-links a:hover { background: var(--coral); color: white; transform: translateY(-3px); }
        .tinysteps-landing-scope .footer-col h4 { font-family: var(--font-body); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ink); margin-bottom: 18px; }
        .tinysteps-landing-scope .footer-col ul { list-style: none; }
        .tinysteps-landing-scope .footer-col li { padding: 6px 0; font-size: 0.92rem; }
        .tinysteps-landing-scope .footer-col a { color: var(--ink-soft); transition: color 0.2s ease; display: inline-flex; align-items: center; gap: 8px; }
        .tinysteps-landing-scope .footer-col a:hover { color: var(--coral-deep); }
        .tinysteps-landing-scope .footer-contact-item { display: flex; gap: 12px; padding: 8px 0; font-size: 0.9rem; color: var(--ink-soft); align-items: flex-start; }
        .tinysteps-landing-scope .footer-contact-item svg { flex-shrink: 0; margin-top: 3px; color: var(--coral); }
        .tinysteps-landing-scope .footer-bottom { padding-top: 28px; border-top: 1px solid var(--line); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 14px; font-size: 0.85rem; color: var(--ink-muted); }

        /* Reveal */
        .tinysteps-landing-scope .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1); }
        .tinysteps-landing-scope .reveal.visible { opacity: 1; transform: translateY(0); }

        /* Mobile menu */
        .tinysteps-landing-scope .menu-toggle { display: none; width: 42px; height: 42px; border-radius: 12px; background: var(--surface); border: 1px solid var(--line); align-items: center; justify-content: center; }
        @media (max-width: 900px) {
          .tinysteps-landing-scope .menu-toggle { display: flex; }
          .tinysteps-landing-scope .nav-cta-wrap .btn-primary { display: none; }
          .tinysteps-landing-scope .nav-cta-wrap .btn-secondary { display: none; }
        }

        .tinysteps-landing-scope .mobile-menu-overlay {
          position: fixed; top: 76px; left: 0; right: 0;
          background: var(--bg);
          border-bottom: 1px solid var(--line);
          padding: 24px;
          z-index: 99;
          display: flex;
          flex-direction: column;
          gap: 18px;
          box-shadow: var(--shadow-md);
        }
      ` }} />

      {/* ============ NAV ============ */}
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`} id="nav">
        <div className="container nav-inner">
          <Link to="/" className="logo" aria-label="Innonsh TinySteps home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Innonsh TinySteps
          </Link>
          <div className="nav-links">
            <a href="#features" onClick={(e) => handleAnchorClick(e, '#features')}>Features</a>
            <a href="#modules" onClick={(e) => handleAnchorClick(e, '#modules')}>Modules</a>
            <a href="#parents" onClick={(e) => handleAnchorClick(e, '#parents')}>For Parents</a>
            <a href="#impact" onClick={(e) => handleAnchorClick(e, '#impact')}>Impact</a>
            <a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')}>Contact</a>
          </div>
          <div className="nav-cta-wrap">
            <Link to="/tinysteps/login" className="btn btn-secondary" style={{ marginRight: '8px' }}>Sign Up</Link>
            <a href="#cta" className="btn btn-primary" onClick={(e) => handleAnchorClick(e, '#cta')}>Book a Demo <span className="btn-arrow">→</span></a>
            <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7"/>
                    <line x1="4" y1="12" x2="20" y2="12"/>
                    <line x1="4" y1="17" x2="20" y2="17"/>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <a href="#features" onClick={(e) => handleAnchorClick(e, '#features')}>Features</a>
          <a href="#modules" onClick={(e) => handleAnchorClick(e, '#modules')}>Modules</a>
          <a href="#parents" onClick={(e) => handleAnchorClick(e, '#parents')}>For Parents</a>
          <a href="#impact" onClick={(e) => handleAnchorClick(e, '#impact')}>Impact</a>
          <a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')}>Contact</a>
          <Link to="/tinysteps/login" className="btn btn-primary" style={{ justifyContent: 'center' }} onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
          <a href="#cta" className="btn btn-secondary" style={{ justifyContent: 'center' }} onClick={(e) => handleAnchorClick(e, '#cta')}>Book a Demo</a>
        </div>
      )}

      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-bg">
          <div ref={el => blobsRef.current[0] = el} className="blob blob-1"></div>
          <div ref={el => blobsRef.current[1] = el} className="blob blob-2"></div>
          <div ref={el => blobsRef.current[2] = el} className="blob blob-3"></div>
        </div>
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="eyebrow">Made for preschools</span>
            <h1>Everything your preschool needs, <span className="serif-italic">in one warm little place.</span></h1>
            <p className="hero-sub">Simple, friendly school management for students, teachers, parents, attendance, fees, and daily school life designed so you can spend less time on paperwork and more time with the children.</p>
            <div className="hero-actions">
              <Link to="/tinysteps/login" className="btn btn-primary">Sign Up <span className="btn-arrow">→</span></Link>
              <a href="#cta" className="btn btn-secondary" onClick={(e) => handleAnchorClick(e, '#cta')}>Book a Demo</a>
              <a href="#contact" className="btn btn-light" onClick={(e) => handleAnchorClick(e, '#contact')}>Contact Us</a>
            </div>
            <div className="hero-trust">
              <span className="hero-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                No technical knowledge needed
              </span>
              <span className="hero-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Setup help included
              </span>
              <span className="hero-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Works on any device
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="float-card float-card-1">
              <div className="float-icon" style={{ background: 'var(--sage)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <div style={{ fontWeight: 700 }}>Aanya is in class</div>
                <div style={{ color: 'var(--ink-muted)', fontSize: '0.75rem' }}>Attendance marked · 9:02 AM</div>
              </div>
            </div>

            <div className="dashboard-card">
              <div className="dash-header">
                <div className="dash-title">Today at School</div>
                <div className="dash-dots"><span></span><span></span><span></span></div>
              </div>
              <div className="dash-stats">
                <div className="dash-stat">
                  <div className="dash-stat-label">Present</div>
                  <div className="dash-stat-value">128</div>
                </div>
                <div className="dash-stat">
                  <div className="dash-stat-label">On Leave</div>
                  <div className="dash-stat-value">4</div>
                </div>
                <div className="dash-stat">
                  <div className="dash-stat-label">Fees Paid</div>
                  <div className="dash-stat-value">92%</div>
                </div>
              </div>
              <div className="dash-chart">
                <svg viewBox="0 0 300 90" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#E8704B" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#E8704B" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,70 Q40,40 80,50 T160,30 T240,40 T300,20 L300,90 L0,90 Z" fill="url(#chartGrad)"/>
                  <path d="M0,70 Q40,40 80,50 T160,30 T240,40 T300,20" stroke="#E8704B" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="dash-list">
                <div className="dash-row">
                  <div className="dash-avatar" style={{ background: 'var(--coral)' }}>AS</div>
                  <div className="dash-row-info">
                    <div className="dash-row-name">Aarav Sharma</div>
                    <div className="dash-row-meta">Sunflower · Class A</div>
                  </div>
                  <span className="dash-row-badge badge-present">Present</span>
                </div>
                <div className="dash-row">
                  <div className="dash-avatar" style={{ background: 'var(--sage)' }}>MP</div>
                  <div className="dash-row-info">
                    <div className="dash-row-name">Meera Patel</div>
                    <div className="dash-row-meta">Sunflower · Class A</div>
                  </div>
                  <span className="dash-row-badge badge-late">Late</span>
                </div>
                <div className="dash-row">
                  <div className="dash-avatar" style={{ background: 'var(--plum)' }}>RK</div>
                  <div className="dash-row-info">
                    <div className="dash-row-name">Ria Kapoor</div>
                    <div className="dash-row-meta">Daisy · Class B</div>
                  </div>
                  <span className="dash-row-badge badge-present">Present</span>
                </div>
              </div>
            </div>

            <div className="float-card float-card-2">
              <div className="float-icon" style={{ background: 'var(--coral)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <div>
                <div style={{ fontWeight: 700 }}>Message sent</div>
                <div style={{ color: 'var(--ink-muted)', fontSize: '0.75rem' }}>42 parents notified</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ MARQUEE STRIP ============ */}
      <div className="strip">
        <div className="strip-track">
          <span>Save Time <span className="dot"></span> Happy Parents <span className="dot"></span> Easy Attendance <span class="dot"></span> Simple Fees <span class="dot"></span> Organized Records <span class="dot"></span> Smooth Operations <span class="dot"></span></span>
          <span>Save Time <span className="dot"></span> Happy Parents <span className="dot"></span> Easy Attendance <span class="dot"></span> Simple Fees <span class="dot"></span> Organized Records <span class="dot"></span> Smooth Operations <span class="dot"></span></span>
        </div>
      </div>

      {/* ============ PROBLEMS / FEATURES ============ */}
      <section id="features">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Why schools love it</span>
            <h2>The little headaches you'll <span className="serif-italic">never deal with again.</span></h2>
            <p>Running a preschool means juggling a thousand small things every day. TinySteps takes care of the paperwork so you can focus on what really matters—the children.</p>
          </div>

          <div className="problem-grid">
            <div className="problem-card reveal">
              <div className="problem-icon pi-1">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <h3>Mountains of paperwork</h3>
              <p>Stop chasing files, ledgers, and registers. Everything is neatly stored and just one click away.</p>
              <div className="arrow">Goodbye, file cabinets →</div>
            </div>

            <div className="problem-card reveal">
              <div className="problem-icon pi-2">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="9 16 11 18 15 14"/></svg>
              </div>
              <h3>Slow attendance taking</h3>
              <p>Mark attendance for the whole class in under a minute and share it with parents instantly.</p>
              <div className="arrow">Save 30 mins every morning →</div>
            </div>

            <div className="problem-card reveal">
              <div className="problem-icon pi-3">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </div>
              <h3>Parents calling all day</h3>
              <p>Parents see attendance, fees, photos, and notices in their app—no more endless phone calls.</p>
              <div className="arrow">Happier parents, calmer office →</div>
            </div>

            <div className="problem-card reveal">
              <div className="problem-icon pi-4">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3>Confusing fee tracking</h3>
              <p>See who paid, who pending, who's due all in one clear screen. Send reminders with one tap.</p>
              <div className="arrow">No more missed payments →</div>
            </div>

            <div className="problem-card reveal">
              <div className="problem-icon pi-5">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3>Scattered student info</h3>
              <p>Every child's profile, parent info, medical notes, and history beautifully organized in one place.</p>
              <div className="arrow">Find anything in seconds →</div>
            </div>

            <div className="problem-card reveal">
              <div className="problem-icon pi-6">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3>Manual timetables & exams</h3>
              <p>Build class schedules, plan exams, and share results without the spreadsheet headaches.</p>
              <div className="arrow">Plan your week in minutes →</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MODULES ============ */}
      <section id="modules" className="modules-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">16 thoughtful modules</span>
            <h2>One simple system. <span className="serif-italic">Every part of school life.</span></h2>
            <p>From your first day of admission to the last day of the year—every step of your school's journey is covered.</p>
          </div>

          <div className="modules-grid">
            <div className="module-card reveal" data-color="coral">
              <div className="mod-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
              </div>
              <h3>Admin Dashboard</h3>
              <p>See everything happening in your school at a glance—attendance, fees, students, and more, all on one friendly screen.</p>
              <span className="module-tag">Your daily command center</span>
            </div>

            <div className="module-card reveal" data-color="sage">
              <div className="mod-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3>Student Management</h3>
              <p>Every child's full story in one place—parents, medical notes, documents, photos, and progress.</p>
              <span className="module-tag">Everything about every child</span>
            </div>

            <div className="module-card reveal" data-color="sky">
              <div className="mod-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Teacher Management</h3>
              <p>Manage your teaching team easily—profiles, qualifications, classes assigned, and more.</p>
              <span className="module-tag">Your team, organized</span>
            </div>

            <div className="module-card reveal" data-color="butter">
              <div className="mod-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/></svg>
              </div>
              <h3>Class & Sections</h3>
              <p>Organize classes, sections, rooms, and who's in each one—clean and simple to set up.</p>
              <span className="module-tag">Right child, right place</span>
            </div>

            <div className="module-card reveal" data-color="plum">
              <div className="mod-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="9 16 11 18 15 14"/></svg>
              </div>
              <h3>Attendance</h3>
              <p>Mark daily attendance in seconds. Parents see updates instantly. Reports made automatically.</p>
              <span className="module-tag">One tap, done</span>
            </div>

            <div className="module-card reveal" data-color="coral">
              <div className="mod-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3>Timetable</h3>
              <p>Build beautiful weekly schedules—drag, drop, and never have two classes in the same room again.</p>
              <span className="module-tag">No more clashes</span>
            </div>

            <div className="module-card reveal" data-color="sage">
              <div className="mod-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L15.09 8.26 22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <h3>Exams & Results</h3>
              <p>Plan exams, set grading, enter marks, and share friendly report cards with parents beautifully.</p>
              <span className="module-tag">Stress-free assessments</span>
            </div>

            <div className="module-card reveal" data-color="coral">
              <div className="mod-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3>Fees</h3>
              <p>Collect fees in cash, online, or by cheque. Track who paid, send reminders, print receipts—done.</p>
              <span className="module-tag">Money matters, sorted</span>
            </div>

            <div className="module-card reveal" data-color="sky">
              <div className="mod-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>
              </div>
              <h3>Admissions</h3>
              <p>From inquiry to enrollment—track new admissions, verify documents, and welcome new families easily.</p>
              <span className="module-tag">Smooth enrollments</span>
            </div>

            <div className="module-card reveal" data-color="plum">
              <div className="mod-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              </div>
              <h3>Settings</h3>
              <p>Set up your school's profile, decide who can do what, and customize the system the way you like.</p>
              <span className="module-tag">Your school, your rules</span>
            </div>

            <div className="module-card reveal" data-color="butter">
              <div className="mod-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V5H2v12h3"/><polyline points="14 5 21 5 21 17 17 17"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
              </div>
              <h3>Transport</h3>
              <p>Manage school buses, drivers, and routes. Know which child is on which bus, always.</p>
              <span className="module-tag">Safe rides, every day</span>
            </div>

            <div className="module-card reveal" data-color="coral">
              <div className="mod-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              </div>
              <h3>Notifications</h3>
              <p>Send announcements, reminders, or personal notes to one parent or everyone in seconds.</p>
              <span className="module-tag">Always in the loop</span>
            </div>

            <div className="module-card reveal" data-color="sage">
              <div className="mod-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <h3>Events & Calendar</h3>
              <p>Holidays, parent meetings, sports day, picnics—every special day on one shared calendar.</p>
              <span className="module-tag">Never miss a moment</span>
            </div>

            <div className="module-card reveal" data-color="sky">
              <div className="mod-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
              </div>
              <h3>Photo & Media</h3>
              <p>Share happy classroom moments and event photos with parents—they'll love every memory.</p>
              <span className="module-tag">Memories that matter</span>
            </div>

            <div className="module-card reveal" data-color="plum">
              <div className="mod-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h3>Parent Portal</h3>
              <p>A loving little app for parents—attendance, fees, photos, progress, and notices, all in their pocket.</p>
              <span className="module-tag">Parents' favorite feature</span>
            </div>

            <div className="module-card reveal" data-color="butter">
              <div className="mod-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <h3>Teacher & Student Portal</h3>
              <p>A simple dashboard where teachers manage their classes and students see their schedule and tasks.</p>
              <span className="module-tag">Everyone has their own space</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOR PARENTS ============ */}
      <section id="parents" className="parent-section">
        <div className="container parent-grid">
          <div className="parent-visual reveal">
            <span className="parent-decoration d1">⭐</span>
            <span className="parent-decoration d2">❤️</span>
            <span className="parent-decoration d3">✨</span>
            <div className="phone">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: '16px', paddingLeft: '4px' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>Today</div>
                  <div style={{ fontWeight: 500, marginTop: '2px' }}>Hello, Priya 👋</div>
                </div>

                <div className="notif visible">
                  <div className="notif-icon" style={{ background: 'var(--sage-soft)', color: '#496D4C' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div className="notif-body">
                    <div className="notif-title">Aarav is at school!</div>
                    <div className="notif-text">Attendance marked at 9:02 AM</div>
                    <div className="notif-time">Just now</div>
                  </div>
                </div>

                <div className="notif visible">
                  <div className="notif-icon" style={{ background: 'var(--butter-soft)', color: '#8B6A1F' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8 2 6 5 6 8c0 4 3 5 3 9 0 2 1 3 3 3s3-1 3-3c0-4 3-5 3-9 0-3-2-6-6-6z"/></svg>
                  </div>
                  <div className="notif-body">
                    <div className="notif-title">Lunch today: Veg pulao 🍚</div>
                    <div className="notif-text">With cucumber salad & fruit</div>
                    <div className="notif-time">12 min ago</div>
                  </div>
                </div>

                <div className="notif visible">
                  <div className="notif-icon" style={{ background: 'var(--coral-soft)', color: 'var(--coral-deep)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                  </div>
                  <div className="notif-body">
                    <div className="notif-title">Sports Day on Friday!</div>
                    <div className="notif-text">Please send sneakers ✨</div>
                    <div className="notif-time">2 hours ago</div>
                  </div>
                </div>

                <div className="notif visible">
                  <div className="notif-icon" style={{ background: 'var(--sky-soft)', color: '#3F6586' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  </div>
                  <div className="notif-body">
                    <div className="notif-title">New photos uploaded 📸</div>
                    <div className="notif-text">5 from today's art class</div>
                    <div className="notif-time">Yesterday</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="parent-content reveal">
            <span className="eyebrow">Built for parents too</span>
            <h2>The kind of school updates <span className="serif-italic">parents fall in love with.</span></h2>
            <p>Parents feel calmer when they know their little one is happy and safe. TinySteps gently keeps them in the loop so they always feel close, even when they're at work.</p>

            <div className="parent-benefits">
              <div className="parent-benefit">
                <div className="pb-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/></svg>
                </div>
                <div className="pb-text">
                  <strong>Live notifications</strong>
                  <span>The moment something happens, parents know.</span>
                </div>
              </div>

              <div className="parent-benefit">
                <div className="pb-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div className="pb-text">
                  <strong>Attendance updates</strong>
                  <span>"Your child is safely in class." Every morning.</span>
                </div>
              </div>

              <div className="parent-benefit">
                <div className="pb-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div className="pb-text">
                  <strong>Friendly fee reminders</strong>
                  <span>Pay online or get a gentle reminder—no awkward calls.</span>
                </div>
              </div>

              <div className="parent-benefit">
                <div className="pb-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                </div>
                <div className="pb-text">
                  <strong>Event updates</strong>
                  <span>Holidays, meetings, picnics—all in one calendar.</span>
                </div>
              </div>

              <div className="parent-benefit">
                <div className="pb-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div className="pb-text">
                  <strong>Progress tracking</strong>
                  <span>Watch your child grow with simple report cards.</span>
                </div>
              </div>

              <div className="parent-benefit">
                <div className="pb-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                </div>
                <div className="pb-text">
                  <strong>Photos from the day</strong>
                  <span>Sweet little moments shared straight from the classroom.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ROLES ============ */}
      <section className="roles-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Made for everyone</span>
            <h2>One system that <span className="serif-italic">makes everyone's day easier.</span></h2>
            <p>From the principal to the parent, TinySteps gives each person exactly what they need and nothing they don't.</p>
          </div>

          <div className="roles-grid">
            <div className="role-card reveal">
              <div className="role-illust" style={{ background: 'var(--coral-soft)' }}>👑</div>
              <h3>For Principals</h3>
              <ul>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>One screen for the whole school</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Quick reports any time</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>See school status</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Make better decisions</li>
              </ul>
            </div>

            <div className="role-card reveal">
              <div className="role-illust" style={{ background: 'var(--sage-soft)' }}>📋</div>
              <h3>For Admin Staff</h3>
              <ul>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>No more paperwork piles</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Collect fees easily</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Find records in seconds</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Send updates in one click</li>
              </ul>
            </div>

            <div className="role-card reveal">
              <div className="role-illust" style={{ background: 'var(--sky-soft)' }}>🍎</div>
              <h3>For Teachers</h3>
              <ul>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Mark attendance in seconds</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Share photos & updates</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Track child progress</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>More time with children</li>
              </ul>
            </div>

            <div className="role-card reveal">
              <div className="role-illust" style={{ background: 'var(--butter-soft)' }}>👨‍👩‍👧</div>
              <h3>For Parents</h3>
              <ul>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Always know what's happening</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Pay fees online easily</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>See daily photos & updates</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Stay close to your little one</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DEVICES ============ */}
      <section className="devices-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Anywhere, anytime</span>
            <h2>Works beautifully on <span className="serif-italic">every device you own.</span></h2>
            <p>Open it on your office desktop, your tablet during the day, or your phone on the go. It just works—no installation, no fuss.</p>
          </div>

          <div className="devices-stage reveal">
            <div className="device device-laptop">
              <div className="device-screen">
                <div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.7, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Principal's view</div>
                  <div style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}>Today, 132 children are at school 🌼</div>
                </div>
              </div>
            </div>
            <div className="device device-tablet">
              <div className="device-screen">
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.65rem', opacity: 0.7, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>Teacher's view</div>
                  <div style={{ fontSize: '1rem' }}>Attendance ✓</div>
                </div>
              </div>
            </div>
            <div className="device device-phone">
              <div className="device-screen">
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.6rem', opacity: 0.7, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>Parent's view</div>
                  <div style={{ fontSize: '0.85rem' }}>Aarav<br/>is happy ❤️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ IMPACT / STATS ============ */}
      <section id="impact" className="stats-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Real impact</span>
            <h2>Less paperwork. <span className="serif-italic">More smiles.</span></h2>
            <p>Schools using TinySteps tell us they save hours every week and parents say the difference is night and day.</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card reveal">
              <div className="stat-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div className="stat-number" data-target="12" data-suffix="hrs">0</div>
              <div className="stat-label">Saved every week</div>
              <div className="stat-sub">Less time on admin, more time with children.</div>
            </div>

            <div className="stat-card reveal">
              <div className="stat-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </div>
              <div className="stat-number" data-target="98" data-suffix="%">0</div>
              <div className="stat-label">Happier parents</div>
              <div className="stat-sub">Parents feel informed and trusted.</div>
            </div>

            <div className="stat-card reveal">
              <div className="stat-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div className="stat-number" data-target="3" data-suffix="x">0</div>
              <div className="stat-label">Faster fee collection</div>
              <div className="stat-sub">Fewer pending payments, clearer records.</div>
            </div>

            <div className="stat-card reveal">
              <div className="stat-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="stat-number" data-target="100" data-suffix="%">0</div>
              <div className="stat-label">Organized records</div>
              <div className="stat-sub">Every detail, neatly in its place.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section id="cta" className="cta-section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2>Ready to simplify your <span className="serif-italic">school management?</span></h2>
            <p>Sign up now to explore the live portal, or book a free demo with our team. We'll show you exactly how TinySteps can make your school run smoother—no commitment, no pressure.</p>
            <div className="cta-actions">
              <Link to="/tinysteps/login" className="btn btn-light">Get Started / Sign Up <span className="btn-arrow">→</span></Link>
              <a href="#contact" className="btn btn-outline" onClick={(e) => handleAnchorClick(e, '#contact')}>Book a Demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer id="contact">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Innonsh TinySteps
              </Link>
              <p className="footer-brand-text">Easy school management made simple. Built with care for preschools so every day feels lighter and a little brighter.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12z"/></svg>
                </a>
                <a 
                  href="https://www.instagram.com/innonsh.tech/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/innonsh-technologies/posts/?feedView=all" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.7a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM20 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.5V19z"/></svg>
                </a>
                <a href="#" aria-label="YouTube">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.5 15.5v-7l6.4 3.5-6.4 3.5z"/></svg>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="#features" onClick={(e) => handleAnchorClick(e, '#features')}>Features</a></li>
                <li><a href="#modules" onClick={(e) => handleAnchorClick(e, '#modules')}>All Modules</a></li>
                <li><a href="#parents" onClick={(e) => handleAnchorClick(e, '#parents')}>Parent App</a></li>
                <li><Link to="/tinysteps/login">Sign Up</Link></li>
                <li><a href="#cta" onClick={(e) => handleAnchorClick(e, '#cta')}>Book a Demo</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Customer Stories</a></li>
                <li><a href="#">Pricing</a></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Use</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Get in Touch</h4>
              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>7620301874</span>
              </div>
              <div className="footer-contact-item">
                <span>Innonsh Technology</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© 2026 Innonsh TinySteps. Made with ❤️ for preschools from Innonsh Technologies Pvt. Ltd.</div>
            <div>All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
