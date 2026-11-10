import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { IMG } from '@/lib/images';
import ComingSoon from '@/components/ComingSoon';
import { COMING_SOON } from '@/lib/site';

export const metadata: Metadata = { title: 'Find Us — Halal Corn Dog' };

export default function FindUsPage() {
  const locked = COMING_SOON['find-us'];
  return (
    <div className={locked ? 'page is-locked' : 'page'}>
      {locked && <ComingSoon title="Find Us" />}

      
      


      <section className="page-band">
        <div className="wrap">
          <p className="topline">Follow The Queue</p>
          <h1>Find Us</h1>
          <p>We're a street-food stall, so home is wherever the crowd is. Here's where you'll find us serving across Brazil.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '64px' }}>
        <div className="wrap">
          <div className="find-grid">
            <article className="find-card reveal">
              <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="#ffd303" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l1.7-5h14.6L21 9"/><path d="M4 9v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9"/><path d="M9 21v-6h6v6"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/></svg></div>
              <h3>Street Markets</h3>
              <p>Our regular home turf. Markets are where the corn dogs fly out fastest — come hungry and expect a happy queue.</p>
            </article>
            <article className="find-card reveal">
              <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="#ffd303" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V4"/><path d="M4 5c4-2 8 2 16 0v9c-8 2-12-2-16 0"/></svg></div>
              <h3>Festivals &amp; Events</h3>
              <p>From food festivals to community events, the stall pops up wherever people gather to eat well and have a good time.</p>
            </article>
            <article className="find-card reveal">
              <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="#ffd303" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3"/><path d="M18.4 5.6l-2.1 2.1"/><path d="M21 12h-3"/><path d="M18.4 18.4l-2.1-2.1"/><path d="M12 21v-3"/><path d="M5.6 18.4l2.1-2.1"/><path d="M3 12h3"/><circle cx="12" cy="12" r="3.2"/></svg></div>
              <h3>New Spots Coming Soon</h3>
              <p>We're growing. New pitches and regular spots are on the way — watch this space, and watch for the green and yellow.</p>
            </article>
          </div>
          <div className="find-note reveal">
            <strong>Follow the queue</strong>
            <p>Wherever the green and yellow is pitched up, that's where the corn dogs are frying. If there's a queue, you're in the right place.</p>
          </div>
        </div>
      </section>

      
      <section id="near-me">
        <div className="map-head">
          <div className="wrap reveal">
            <h2>Halal Corn Dog Near Me</h2>
            <p>Where can I buy halal corn dogs?</p>
          </div>
        </div>
        <div className="map-frame">
          <Image src={IMG.mapBrazil} width={2400} height={1040} alt="Map of Brazil and the surrounding region of South America, shown in a yellow-tinted style with no pins or marked locations" />
        </div>
        <div className="map-credit">
          <a href="https://www.facebook.com/maps/attribution_terms" target="_blank" rel="noopener">© OpenStreetMap contributors, Map Data Legal Notices</a>
        </div>
        <div className="deliver-band">
          <div className="wrap reveal">
            <h2>Fresh From the Stall</h2>
            <p>Markets, festivals and events — wherever the crowd is hungry, the green and yellow is serving. Build yours first, then come and get it hot.</p>
            <Link className="btn btn-orange" href="/menu">Build Your Corn Dog</Link>
          </div>
        </div>
      </section>
    
    </div>
  );
}
