'use client';

import { useRef, type ReactNode } from 'react';

export default function Carousel({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const step = () => {
    const tile = ref.current?.querySelector('.shot');
    return tile ? tile.getBoundingClientRect().width + 18 : 300;
  };

  return (
    <div className="carousel-wrap reveal">
      <button
        type="button"
        className="car-btn prev"
        aria-label="Scroll photos back"
        onClick={() => ref.current?.scrollBy({ left: -step(), behavior: 'smooth' })}
      >
        &#8592;
      </button>
      <div className="carousel" ref={ref}>
        {children}
      </div>
      <button
        type="button"
        className="car-btn next"
        aria-label="Scroll photos forward"
        onClick={() => ref.current?.scrollBy({ left: step(), behavior: 'smooth' })}
      >
        &#8594;
      </button>
    </div>
  );
}
