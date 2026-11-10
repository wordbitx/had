import Image from 'next/image';
import Link from 'next/link';
import { IMG } from '@/lib/images';

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <span className="logo-badge">
              <Image src={IMG.logo} alt="Halal Corn Dog logo" width={1584} height={1616} />
            </span>
            <div>
              <div className="wordmark">Halal Corn Dog</div>
              <div className="tag">BEST STREET FOOD</div>
            </div>
          </div>
          <div>
            <div className="foot-title">Explore</div>
            <nav aria-label="Footer">
              <Link href="/">Home</Link>
              <Link href="/menu">The Menu</Link>
              <Link href="/stall">From the Stall</Link>
              <Link href="/our-story">Our Story</Link>
              <Link href="/find-us">Find Us</Link>
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
        </div>
        <div className="foot-bottom">
          <span>© Halal Corn Dog — Best Street Food.</span>
          <span>Crispy. Cheesy. 100% Halal.</span>
        </div>
      </div>
    </footer>
  );
}
