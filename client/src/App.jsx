import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import CursorBlob from './components/animations/CursorBlob';
import Navbar from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Privacy from './pages/Privacy';
import Careers from './pages/Careers';

// Component to handle scroll restoration on route changes
function ScrollToTop({ lenisRef }) {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    // If transitioning between / and /services/:id, do not scroll to top
    const isModalTransition = 
      (pathname === '/' || pathname.startsWith('/services/')) &&
      (prevPathnameRef.current === '/' || prevPathnameRef.current.startsWith('/services/'));

    if (!isModalTransition) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
    prevPathnameRef.current = pathname;
  }, [pathname, lenisRef]);

  return null;
}

function App() {
  // Store lenis instance to pass to ScrollToTop
  const lenisRef = useRef(null);

  useEffect(() => {
    // Detect mobile/touch devices for aggressive optimization
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: !isTouchDevice, // Disable virtual scroll on mobile to use native hardware scrolling
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    
    lenisRef.current = lenis;
    window.lenis = lenis;

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Initial load animation for noise
    setTimeout(() => {
      document.documentElement.style.setProperty('--scroll-hint', '1');
    }, 1500);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      window.lenis = null;
    };
  }, []);

  return (
    <Router>
      <ScrollToTop lenisRef={lenisRef} />
      <CursorBlob />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
