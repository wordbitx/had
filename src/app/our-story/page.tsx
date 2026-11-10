import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { IMG } from '@/lib/images';
import ComingSoon from '@/components/ComingSoon';
import { COMING_SOON } from '@/lib/site';

export const metadata: Metadata = { title: 'Our Story — Halal Corn Dog' };

export default function StoryPage() {
  const locked = COMING_SOON['story'];
  return (
    <div className={locked ? 'page is-locked' : 'page'}>
      {locked && <ComingSoon title="Our Story" />}

      
      


      <section className="page-band">
        <div className="wrap">
          <p className="topline">Why We Fry</p>
          <h1>Our Story</h1>
          <p>One simple idea, done properly: the Korean corn dog everyone loves — made 100% halal, and made fresh in front of you.</p>
        </div>
      </section>

      <section className="section band-blue">
        <div className="wrap">
          <div className="story-grid">
            <div className="story-photo reveal">
              <Image src={IMG.fourVarieties} width={1600} height={1600} alt="Four Halal Corn Dog varieties in a grid — potato, classic, ramen noodle and crispy rice" />
            </div>
            <div className="story-copy reveal">
              <span className="eyebrow on-blue">Our Story</span>
              <h2>The Stall Everyone Queues For</h2>
              <p>Halal Corn Dog started with one simple idea: the Korean corn dog everyone was watching online — the crunch, the cheese pull, the sauce zigzag — made properly halal, and made fresh in front of you.</p>
              <p>So that's what we do, every market day. Batter on, coating on, straight into the fryer, and finished with your sauces while it's still steaming. Look for the green and yellow — and follow the queue.</p>
            </div>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="#004925" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 2.1 3.1-.5 1.1 3 3 1.1-.5 3.1L23 13.2l-1.9 2.4.5 3.1-3 1.1-1.1 3-3.1-.5L12 24.4l-2.4-2.1-3.1.5-1.1-3-3-1.1.5-3.1L1 13.2l1.9-2.4L2.4 7.7l3-1.1 1.1-3 3.1.5z" transform="scale(0.92)"/><path d="M8.5 12.2l2.4 2.4 4.6-4.9"/></svg></div>
              <h3>100% Halal, Always</h3>
              <p>It's in our name and it's our promise. Every sausage and every filling on the menu is halal — no exceptions, no small print.</p>
            </div>
            <div className="pillar reveal">
              <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="#004925" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3 2.5.5 5 2.62 5 6a5 5 0 0 1-10 0c0-1.5.5-3 1.5-4 .5 1 1 2 2 3.5z"/></svg></div>
              <h3>Fried Fresh To Order</h3>
              <p>Nothing sits under a heat lamp. Your corn dog goes into the fryer when you order it and lands in your hand hot, crisp and steaming.</p>
            </div>
            <div className="pillar reveal">
              <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="#004925" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17c2-1 3-3 3-6V5l3 2c2 1.3 3 3.3 3 6"/><path d="M20 17c-2-1-3-3-3-6V5l-3 2"/><path d="M7 21c1.7-1.2 3.3-1.8 5-1.8s3.3.6 5 1.8"/></svg></div>
              <h3>The Cheese Pull</h3>
              <p>Go full mozzarella and pull it as far as it goes — that long, melty stretch is the photo everyone takes before the first bite.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="final">
        <div className="wrap reveal">
          <h2>Hungry Yet?</h2>
          <p>See the four coatings, pick your filling, load your sauces.</p>
          <Link className="btn btn-blue" href="/menu">See the Menu</Link>
        </div>
      </section>
    
    </div>
  );
}
