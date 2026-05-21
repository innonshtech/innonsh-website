import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CursorBlob() {
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (blobRef.current) {
        gsap.to(blobRef.current, {
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={blobRef} className="cursor-blob" id="cursorBlob"></div>;
}
