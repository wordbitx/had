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
          <p>We&apos;re a street-food stall, so home is wherever the crowd is. Here&apos;s where you&apos;ll find us serving across London.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '64px' }}>
        <div className="wrap">
          <div className="find-grid">
            <article className="find-card reveal">
              <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="#ffd303" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l1.7-5h14.6L21 9"/><path d="M4 9v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9"/><path d="M9 21v-6h6v6"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/></svg></div>
              <h3>High Road, Ilford</h3>
              <p>High Road, Ilford, London, United Kingdom.</p>
            </article>
            <article className="find-card reveal">
              <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="#ffd303" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V4"/><path d="M4 5c4-2 8 2 16 0v9c-8 2-12-2-16 0"/></svg></div>
              <h3>High Road, Walthamstow</h3>
              <p>High Road, Walthamstow, London.</p>
            </article>
            <article className="find-card reveal">
              <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="#ffd303" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3"/><path d="M18.4 5.6l-2.1 2.1"/><path d="M21 12h-3"/><path d="M18.4 18.4l-2.1-2.1"/><path d="M12 21v-3"/><path d="M5.6 18.4l2.1-2.1"/><path d="M3 12h3"/><circle cx="12" cy="12" r="3.2"/></svg></div>
              <h3>Barking Market</h3>
              <p>Barking Market, East London.</p>
            </article>
            <article className="find-card reveal">
              <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="#ffd303" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></div>
              <span className="soon-badge">Coming Soon</span>
              <h3>Romford</h3>
              <p>Coming soon — watch for the green and yellow.</p>
            </article>
          </div>

          <div className="festival-hero reveal">
            <span className="eyebrow on-blue">Festivals · Events · Expos · Melas</span>
            <h2>Find Us Across the North</h2>
            <p>Find us at festivals, events, expos and melas across the North. We&apos;re regular official mobile vendors — festivals keep calling us back, and our special mobile team is ready for every event.</p>
            <p className="festival-note">More festival dates and updates coming soon.</p>
          </div>

          <div className="find-note reveal">
            <strong>Follow the queue</strong>
            <p>Wherever the green and yellow is pitched up, that&apos;s where the corn dogs are frying. If there&apos;s a queue, you&apos;re in the right place.</p>
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
          <Image src={IMG.mapLondon} width={1049} height={515} alt="Real map of East London with pins marking Walthamstow, Ilford and Barking" />
          <span className="map-pin" style={{ left: '56.4%', top: '17.5%' }}><span className="dot" /><span className="lbl">Walthamstow</span></span>
          <span className="map-pin flip" style={{ left: '81.9%', top: '46.6%' }}><span className="dot" /><span className="lbl">Ilford</span></span>
          <span className="map-pin flip" style={{ left: '83.6%', top: '64.6%' }}><span className="dot" /><span className="lbl">Barking</span></span>
        </div>
        <div className="map-credit">
          <span>Pins mark the areas, not exact stall spots.</span>{' '}
          <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">© OpenStreetMap contributors</a>
        </div>
        <div className="deliver-band">
          <div className="wrap reveal">
            <h2>Fresh From the Stall</h2>
            <p>Markets, festivals and events — wherever the crowd is hungry, the green and yellow is serving. Build yours first, then come and get it hot.</p>
            <Link className="btn btn-yellow" href="/menu">Build Your Corn Dog</Link>
          </div>
        </div>
      </section>
    
    </div>
  );
}
