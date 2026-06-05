import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import CursorBlob from './components/animations/CursorBlob';
import Navbar from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';

// Component to handle scroll restoration on route changes
function ScrollToTop({ lenisRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
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
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
