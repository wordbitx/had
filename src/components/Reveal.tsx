'use client';

import type { CSSProperties, ReactNode } from 'react';

// Reveal-on-scroll wrapper — the visible-by-default half of the pattern.
// Content is fully visible unless JavaScript has armed it: the inline
// script in layout.tsx adds the `js-reveal` class to <html> before first
// paint, and SiteEffects' IntersectionObserver adds `.in` as each element
// scrolls into view. If JS never runs, nothing is ever hidden.
export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;
  return (
    <div className={`reveal${className ? ` ${className}` : ''}`} style={style}>
      {children}
    </div>
  );
}
