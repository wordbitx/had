'use client';

import type { CSSProperties, ReactNode } from 'react';

// Reveal-on-scroll wrapper — the visible-by-default half of the pattern.
// Content is fully visible unless JavaScript has armed it: the inline
// script in layout.tsx adds the `js-reveal` class to <html> before first
// paint, and SiteEffects' IntersectionObserver adds `.in` as each element
// scrolls into view. If JS never runs, nothing is ever hidden.
//
// `dir` picks the entry direction (Quran-style left/right slides):
// 'up' (default, a gentle rise), 'left' (slides in from the left),
// 'right' (slides in from the right). The direction is only a transform
// variable — the `.in` rule always wins and lands the element at rest.
export default function Reveal({
  children,
  delay = 0,
  dir = 'up',
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  dir?: 'up' | 'left' | 'right';
  className?: string;
}) {
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;
  const dirClass = dir === 'left' ? ' reveal-left' : dir === 'right' ? ' reveal-right' : '';
  return (
    <div className={`reveal${dirClass}${className ? ` ${className}` : ''}`} style={style}>
      {children}
    </div>
  );
}
