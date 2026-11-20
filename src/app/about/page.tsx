import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { COMPANIES_HOUSE_URL, FSA_RATING_URL } from '@/lib/site';

export const metadata: Metadata = { title: 'About Us — Halal Corn Dog' };

// Business facts, all verified from public records (20 Nov 2026):
// Companies House (HALAL CORN DOG LTD, Co. No. 16572901, incorporated
// 10 July 2025, registered office Ilford) and the Food Standards Agency
// (Rating 5, inspected 6 July 2026). Trading areas are client-given.
// NO personal name appears on this page — the client asked for that.
const FACTS = [
  {
    term: 'Registered company',
    value: 'HALAL CORN DOG LTD',
  },
  {
    term: 'Company number',
    value: '16572901',
  },
  {
    term: 'Incorporated',
    value: '10 July 2025',
  },
  {
    term: 'Food hygiene rating',
    value: '5 — Very Good',
  },
  {
    term: 'Where we trade',
    value: 'Ilford · Walthamstow · Barking Market',
  },
  {
    term: 'Registered office',
    value: '47 Sunnyside Road, Ilford, IG1 1HU',
  },
] as const;

export default function AboutPage() {
  return (
    <div className="page">
      <section className="page-band">
        <Reveal>
        <div className="wrap">
          <p className="topline">About Us</p>
          <h1>A real London street-food business</h1>
          <p>Halal Corn Dog is a registered UK company trading at London&apos;s markets — golden Korean-style corn dogs, 100% halal, fried fresh at the stall and finished your way.</p>
        </div>
        </Reveal>
      </section>

      <section className="section" style={{ paddingTop: '64px' }}>
        <div className="wrap">
          <Reveal>
          <div className="about-card">
            <p className="about-line">
              Everything about our business is verifiable — our company
              record, our food hygiene rating and our markets are all public.
            </p>
            <p className="about-sub">
              We trade at High Road Ilford, High Road Walthamstow and Barking
              Market, and at food festivals across the UK — including the
              World Halal Food Festival 2026 at London Stadium. Our corn dogs
              are made to order: crunchy coatings, a proper mozzarella pull,
              and sauces squeezed on to order.
            </p>

            <dl className="about-facts">
              {FACTS.map((f) => (
                <div key={f.term}>
                  <dt>{f.term}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="about-links">
              <a className="btn btn-blue" href={COMPANIES_HOUSE_URL} target="_blank" rel="noreferrer">
                Company Record on GOV.UK
              </a>
              <a className="btn btn-yellow" href={FSA_RATING_URL} target="_blank" rel="noreferrer">
                Food Hygiene Rating
              </a>
            </div>
            <p className="about-note">
              The buttons open our official records on GOV.UK (Companies
              House) and ratings.food.gov.uk (Food Standards Agency).
            </p>
          </div>
          </Reveal>

          <div className="strip-cta">
            <Link className="btn btn-blue" href="/find-us">Find Us in London</Link>
            <Link className="btn btn-yellow" href="/menu">See the Menu</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
