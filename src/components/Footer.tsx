import Image from 'next/image';
import Link from 'next/link';
import { IMG } from '@/lib/images';
import Reveal from '@/components/Reveal';
import FhrsBadge from '@/components/FhrsBadge';
import { EMAIL_INFO, PHONE_DISPLAY, SITE_DOMAIN, SITE_URL, WHATSAPP_NUMBER } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <Reveal>
        <div className="foot-grid">
          <div className="foot-brand">
            <span className="logo-badge">
              <Image src={IMG.logo} alt="Halal Corn Dog logo" width={1584} height={1616} />
            </span>
            <div className="wordmark">Halal Corn Dog</div>
            <div className="tag">BEST STREET FOOD</div>
            <p className="foot-tagline">
              Golden Korean-style corn dogs,<br />
              fried fresh at the site and finished<br />
              your way. <span className="tagline-end">Crispy. Cheesy. 100% Halal.</span>
            </p>
            <FhrsBadge size="small" />
          </div>
          <div>
            <div className="foot-title">Explore</div>
            <nav aria-label="Footer">
              <Link href="/">Home</Link>
              <Link href="/menu">The Menu</Link>
              <Link href="/menu#build-anchor">Order Online</Link>
              <Link href="/stall">From the Stall</Link>
              <Link href="/our-story">Our Story</Link>
              <Link href="/festivals">Festivals</Link>
              <Link href="/find-us">Find Us</Link>
              <Link href="/food-hygiene">Food Hygiene</Link>
              <Link href="/faq">FAQ</Link>
            </nav>
          </div>
          <div>
            <div className="foot-title">On the Menu</div>
            <ul className="foot-menu">
              <li>Potato Corn Dog</li>
              <li>Classic Corn Dog</li>
              <li>Ramen Noodle</li>
              <li>Crispy Rice</li>
            </ul>
          </div>
          <div>
            <div className="foot-title">The Promise</div>
            <ul className="foot-menu">
              <li>100% halal fillings</li>
              <li>Fried fresh to order</li>
              <li>Vegan option available</li>
              <li>Sauced in front of you</li>
            </ul>
          </div>
          <div>
            <div className="foot-title">Get in Touch</div>
            <ul className="foot-menu foot-contact">
              <li>
                <a href={SITE_URL}>{SITE_DOMAIN}</a>
              </li>
              <li>
                <a href={`mailto:${EMAIL_INFO}`}>{EMAIL_INFO}</a>
              </li>
              <li>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">{PHONE_DISPLAY}</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Follow Us — its own block under the footer grid, separate
            from Get in Touch. Three small official-style icons; only
            the first links out. The other two are plain spans until
            the user gives their URLs — but they get the identical
            hover treatment so they feel clickable. No captions — the
            logos speak for themselves. */}
        <div className="foot-follow">
          <div className="foot-title">Follow Us</div>
          <div className="foot-social">
            <a className="foot-soc" href="https://www.tiktok.com/@halal.corndog" target="_blank" rel="noreferrer" aria-label="Halal Corn Dog on TikTok">
              <span className="foot-soc-ic">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.23-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </span>
            </a>
            <span className="foot-soc" aria-label="Link coming soon">
              <span className="foot-soc-ic">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </span>
            </span>
            <span className="foot-soc" aria-label="Link coming soon">
              <span className="foot-soc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>
              </span>
            </span>
          </div>
        </div>
        <div className="foot-bottom">
          <div className="foot-copy">
            <span>© Halal Corn Dog — Best Street Food.</span>
            <span>Crispy. Cheesy. 100% Halal.</span>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
        </Reveal>
      </div>
    </footer>
  );
}
