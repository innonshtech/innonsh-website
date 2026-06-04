import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CursorBlob() {
  const blobRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Detect Safari or macOS
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isMac = navigator.userAgent.toUpperCase().indexOf('MAC') >= 0;
    
    if (isSafari || isMac) {
      setShouldRender(false);
      return;
    }

    // Use GSAP quickTo for highly optimized rendering without thrashing
    const xTo = gsap.quickTo(blobRef.current, "x", { duration: 0.8, ease: "power2.out" });
    const yTo = gsap.quickTo(blobRef.current, "y", { duration: 0.8, ease: "power2.out" });
    
    // Track mouse movement using RAF
    let rafId = null;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let hasMoved = false;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!hasMoved) {
        hasMoved = true;
        gsap.to(blobRef.current, { opacity: 1, duration: 0.3 });
      }
    };

    const render = () => {
      xTo(targetX);
      yTo(targetY);
      rafId = requestAnimationFrame(render);
    };
    
    render();

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (!shouldRender) return null;

  return <div ref={blobRef} className="cursor-blob" id="cursorBlob" style={{ willChange: 'transform' }}></div>;
}
