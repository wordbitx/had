'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Reveal-on-scroll (the .reveal / .in animation from the original site).
// Re-runs on every route change so newly mounted sections animate in.
export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
    const els = Array.from(document.querySelectorAll('.reveal'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
