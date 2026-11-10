'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IMG } from '@/lib/images';
import { NAV_LINKS } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site">
      <div className="wrap nav">
        <Link className="brand" href="/" aria-label="Halal Corn Dog — home">
          <span className="logo-badge">
            <Image
              src={IMG.logo}
              alt="Halal Corn Dog logo — HCD badge with a cheese-pull corn dog"
              width={1584}
              height={1616}
              priority
            />
          </span>
          <span>
            <span className="wordmark">Halal Corn Dog</span>
            <span className="tag">Best Street Food</span>
          </span>
        </Link>
        <button
          className="burger"
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mainNav"
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={open ? 'links open' : 'links'} id="mainNav" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              aria-current={pathname === l.href ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link className="nav-cta" href="/menu" onClick={() => setOpen(false)}>
            It&apos;s Corn Dog Day
          </Link>
        </nav>
      </div>
    </header>
  );
}
