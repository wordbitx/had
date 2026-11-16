import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import FestivalForm from '@/components/FestivalForm';

export const metadata: Metadata = { title: 'Festivals — Halal Corn Dog' };

// The areas the client named herself (15 Nov): London, around London,
// Luton, Bradford, Birmingham, Manchester, Middlesbrough, Newcastle.
const AREAS = [
  'London',
  'Around London',
  'Luton',
  'Bradford',
  'Birmingham',
  'Manchester',
  'Middlesbrough',
  'Newcastle',
] as const;

export default function FestivalsPage() {
  return (
    <div className="page">
      <section className="page-band">
        <Reveal>
        <div className="wrap">
          <p className="topline">Festivals · Events · Expos · Melas</p>
          <h1>Find Us at Festivals Across England!</h1>
          <p>We&apos;re regular official mobile vendors — festivals keep calling us back, and our special mobile team is ready for every event.</p>
        </div>
        </Reveal>
      </section>

      <section className="section" style={{ paddingTop: '64px' }}>
        <div className="wrap">
          <div className="festival-hero reveal">
            <span className="eyebrow on-blue">Festivals · Events · Expos · Melas</span>
            <p>You can find us at some of the biggest festivals, melas and events across England! We love bringing our delicious food and unique flavours to communities across the country.</p>
            <p>From London and surrounding areas to Luton, Birmingham, Manchester, Bradford, Middlesbrough and Newcastle, we travel far and wide to be part of exciting festivals and celebrations.</p>
            <p>Keep an eye on our upcoming events and festival dates to find out where our stall will be next. We look forward to seeing you there!</p>
            <div className="area-chips" aria-label="Where we serve">
              {AREAS.map((a) => (
                <span key={a}>{a}</span>
              ))}
            </div>
            <a className="btn btn-yellow" href="#festival-enquiry" style={{ marginTop: '20px' }}>
              Book us for your festival / event
            </a>
          </div>

          <FestivalForm />

          <div className="strip-cta">
            <Link className="btn btn-blue" href="/find-us">Find Us in London</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
