import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import CursorBlob from './components/animations/CursorBlob';
import Navbar from './components/navigation/Navbar';
import Hero from './components/hero/Hero';
import TrustMarquee from './components/sections/TrustMarquee';
import Services from './components/sections/Services';
import ErpSolutions from './components/sections/ErpSolutions';
import Products from './components/sections/Products';
import WhyUs from './components/sections/WhyUs';
import Process from './components/sections/Process';
import TechStack from './components/sections/TechStack';
import Testimonials from './components/sections/Testimonials';
import ContactCTA from './components/sections/ContactCTA';
import LeadCapture from './components/LeadCapture';
import Footer from './components/navigation/Footer';

function App() {
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
    };
  }, []);

  return (
    <>
      <CursorBlob />
      <Navbar />
      <main>
        <Hero />
        <TrustMarquee />
        <Services />
        <ErpSolutions />
        <Products />
        <WhyUs />
        <Process />
        <TechStack />
        <Testimonials />
        <ContactCTA />
        <LeadCapture />
      </main>
      <Footer />
    </>
  );
}

export default App;
