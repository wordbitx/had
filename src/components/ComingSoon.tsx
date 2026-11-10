import Image from 'next/image';
import Link from 'next/link';
import { IMG } from '@/lib/images';

// Premium Coming Soon view for locked pages (see COMING_SOON in src/lib/site.ts).
// The page's real content stays in the page component, hidden by CSS.
export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="coming-soon-view">
      <section className="cs-hero">
        <div className="wrap">
          <div className="cs-logo">
            <Image src={IMG.logo} alt="Halal Corn Dog logo" width={1584} height={1616} />
          </div>
          <span className="cs-kicker">Halal Corn Dog</span>
          <h1>{title}</h1>
          <p className="cs-display">Coming Soon</p>
          <p className="cs-line">This page is on its way — we are putting the finishing touches on it.</p>
          <Link className="btn btn-orange" href="/menu">
            See the Menu
          </Link>
        </div>
      </section>
    </div>
  );
}
