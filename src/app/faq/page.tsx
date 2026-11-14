import type { Metadata } from 'next';
import Link from 'next/link';
import ComingSoon from '@/components/ComingSoon';
import { COMING_SOON } from '@/lib/site';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = { title: 'FAQ — Halal Corn Dog' };

export default function FaqPage() {
  const locked = COMING_SOON['faq'];
  return (
    <div className={locked ? 'page is-locked' : 'page'}>
      {locked && <ComingSoon title="FAQ" />}

      
      


      <section className="page-band">
        <Reveal>
        <div className="wrap">
          <p className="topline">Good To Know</p>
          <h1>Before You Bite</h1>
          <p>The questions everyone asks at the stall — answered before you even reach the front of the queue.</p>
        </div>
        </Reveal>
      </section>

      <section className="section band-paper" style={{ paddingTop: '64px' }}>
        <div className="wrap">
          <div className="faq">
            <details className="reveal">
              <summary>Is everything really halal?</summary>
              <p>Yes — 100%. Every filling on our menu, from the chicken and beef sausages to the mozzarella, is halal. It's the whole point of Halal Corn Dog, and it's why our name says it out loud.</p>
            </details>
            <details className="reveal">
              <summary>Is there a vegan option?</summary>
              <p>There is — choose the Vegan Sausage filling with any coating. Finish it with Sweet Sugar or Sriracha Hot Chilli and you've got the full street-food experience, plant-based.</p>
            </details>
            <details className="reveal">
              <summary>How does ordering work?</summary>
              <p>Three steps, just like the builder on our menu page: pick your corn dog, pick your filling, pick your condiments. We fry it fresh and sauce it in front of you — it takes a few minutes and it's worth every one.</p>
            </details>
            <details className="reveal">
              <summary>Which one should I try first?</summary>
              <p>The full experience: a Potato Corn Dog with Full Mozzarella, tomato ketchup and real mayonnaise. Maximum crunch, maximum cheese pull. Then come back and build your own.</p>
            </details>
            <details className="reveal">
              <summary>I have an allergy — what should I do?</summary>
              <p>Please tell us before you order. Our corn dogs involve gluten, egg, milk and soya, and sauces vary — the team at the stall will happily walk you through what's in everything.</p>
            </details>
          </div>
          <div className="strip-cta">
            <Link className="btn btn-blue" href="/menu">Build Your Corn Dog</Link>
          </div>
        </div>
      </section>
    
    </div>
  );
}
