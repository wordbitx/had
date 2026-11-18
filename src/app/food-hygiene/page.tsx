import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import FhrsBadge from '@/components/FhrsBadge';
import { FSA_RATING_URL } from '@/lib/site';

export const metadata: Metadata = { title: 'Food Hygiene Rating — Halal Corn Dog' };

// The three inspection standards, exactly as the Food Standards Agency
// lists them for this business (verified 18 Nov 2026 on
// ratings.food.gov.uk/business/1966853/halal-corn-dog) — all "Good".
const STANDARDS = [
  {
    name: 'Hygienic food handling',
    note: 'Preparation, cooking, re-heating, cooling and storage.',
  },
  {
    name: 'Cleanliness and condition of facilities and building',
    note: 'Layout, ventilation, hand washing and pest control.',
  },
  {
    name: 'Management of food safety',
    note: 'Systems and checks that the food sold is safe to eat.',
  },
] as const;

export default function FoodHygienePage() {
  return (
    <div className="page">
      <section className="page-band">
        <Reveal>
        <div className="wrap">
          <p className="topline">Food Hygiene Rating</p>
          <h1>Rated 5 — Very Good</h1>
          <p>Our official Food Hygiene Rating from the Food Standards Agency — see it for yourself.</p>
        </div>
        </Reveal>
      </section>

      <section className="section" style={{ paddingTop: '64px' }}>
        <div className="wrap">
          <Reveal>
          <div className="hygiene-card">
            <FhrsBadge size="large" />
            <p className="hygiene-line">
              We are highly professional and organised — and our 5 food hygiene
              rating is the proof.
            </p>
            <p className="hygiene-sub">
              The Food Standards Agency inspected our stall and rated every
              area &ldquo;Good&rdquo;.
            </p>

            <ul className="hygiene-standards">
              {STANDARDS.map((s) => (
                <li key={s.name}>
                  <div>
                    <strong>{s.name}</strong>
                    <span>{s.note}</span>
                  </div>
                  <span className="hygiene-good">Good</span>
                </li>
              ))}
            </ul>

            <dl className="hygiene-facts">
              <div>
                <dt>Business type</dt>
                <dd>Mobile caterer</dd>
              </div>
              <div>
                <dt>Local authority</dt>
                <dd>Redbridge</dd>
              </div>
              <div>
                <dt>Date of inspection</dt>
                <dd>6 July 2026</dd>
              </div>
            </dl>

            <a className="btn btn-blue" href={FSA_RATING_URL} target="_blank" rel="noreferrer">
              See our official rating
            </a>
            <p className="hygiene-note">
              The badge and the button open our rating on ratings.food.gov.uk.
            </p>
          </div>
          </Reveal>

          <div className="strip-cta">
            <Link className="btn btn-blue" href="/find-us">Find Us in London</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
