import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { IMG } from '@/lib/images';
import Carousel from '@/components/Carousel';
import Reveal from '@/components/Reveal';

// Interactive Leaflet map — client-only (Leaflet touches window/document,
// so it can never be server-rendered in this static export). The loading
// placeholder keeps the frame's height on first paint; the noscript link
// is the no-JS fallback.
const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="interactive-map interactive-map--loading">
      <noscript>
        <a href="https://www.openstreetmap.org/#map=13/51.5650/0.0300" target="_blank" rel="noreferrer">
          View the map on OpenStreetMap
        </a>
      </noscript>
    </div>
  ),
});

export const metadata: Metadata = { title: 'Halal Corn Dog — Best Street Food' };

export default function HomePage() {
  return (
    <div className="page">


      
      <section className="hero" aria-label="Three golden corn dogs with a long mozzarella cheese pull, on a green and yellow background"><div className="hero-media"><Image src={IMG.foodHero} alt="Three golden corn dogs with a long mozzarella cheese pull, on a green and yellow background" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: '50% 55%' }} /></div>
        <div className="hero-inner">
          <p className="hero-topline">It's <b>Corn Dog</b> Day</p>
          <div className="hero-logo">
            <Image src={IMG.logo} width={1584} height={1616} alt="Halal Corn Dog logo — circular green and yellow badge with a chef's hat and a cheese-pull corn dog" priority />
          </div>
          <p className="hero-script">Halal Corn Dog</p>
          <p className="hero-sub">Crispy · Cheesy · 100% Halal</p>
          <div className="hero-spacer"></div>
          <span className="hero-pill">Fresh · Crispy · 100% Halal</span>
        </div>
      </section>

      
      <section className="hero-band">
        <Reveal>
        <div className="wrap">
          <span className="kicker"><i></i>100% Halal · Street Food</span>
          <h1>Taste the Best Halal Street Food</h1>
          <p className="lede">Golden Korean-style corn dogs, fried fresh at the stall and finished your way — crunchy coatings, a proper mozzarella pull, and sauces squeezed on to order.</p>
          <div className="hero-ctas">
            <Link className="btn btn-blue" href="/menu">Build Your Corn Dog</Link>
            <Link className="btn btn-ghost" href="/menu">See the Menu</Link>
          </div>
          <div className="hero-points">
            <span><svg viewBox="0 0 24 24" fill="none" stroke="#004925" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>100% halal, always</span>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="#004925" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>Fried fresh to order</span>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="#004925" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>Vegan option too</span>
          </div>
        </div>
        </Reveal>
      </section>

      
      <Reveal>
      <div className="flatlay">
        <Image src={IMG.flatlay} width={2352} height={1008} alt="Overhead flat-lay of corn dogs, fries and small bowls of dipping sauces laid out on a light cloth" />
      </div>
      </Reveal>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>100% Halal <b>★</b></span><span>It's Corn Dog Day <b>★</b></span><span>The Cheese Pull <b>★</b></span><span>Fried Fresh To Order <b>★</b></span><span>Best Street Food <b>★</b></span><span>Build Your Own <b>★</b></span>
        
          <span>100% Halal <b>★</b></span><span>It's Corn Dog Day <b>★</b></span><span>The Cheese Pull <b>★</b></span><span>Fried Fresh To Order <b>★</b></span><span>Best Street Food <b>★</b></span><span>Build Your Own <b>★</b></span>
        </div>
      </div>

      
      <section className="section strip-band">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow">The Menu</span>
            <h2>Choose Your Corn Dog</h2>
            <p>Four coatings, straight off the menu board. Pick yours, then build it your way on the menu page.</p>
          </div>
          <div className="strip">
            <figure className="strip-card reveal">
              <div className="ph crop-tl" role="img" aria-label="Potato corn dog covered in crispy diced potato"></div>
              <figcaption>Potato<small>Extra Crunchy</small></figcaption>
            </figure>
            <figure className="strip-card reveal">
              <div className="ph crop-tr" role="img" aria-label="Classic golden corn dog with melted cheese pulling from the end"></div>
              <figcaption>Classic<small>The Original</small></figcaption>
            </figure>
            <figure className="strip-card reveal">
              <div className="ph crop-bl" role="img" aria-label="Ramen noodle corn dog with a cheese pull, served over crushed noodles"></div>
              <figcaption>Ramen Noodle<small>Street Favourite</small></figcaption>
            </figure>
            <figure className="strip-card reveal">
              <div className="ph crop-br" role="img" aria-label="Crispy rice corn dog coated in puffed rice with a cheese pull"></div>
              <figcaption>Crispy Rice<small>Light &amp; Crispy</small></figcaption>
            </figure>
          </div>
          <Reveal>
          <div className="strip-cta">
            <Link className="btn btn-green" href="/menu">View Menu</Link>
          </div>
          </Reveal>
        </div>
      </section>

      
      <section className="section" style={{ paddingTop: '56px' }}>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">From the Stall</span>
            <h2>Made Fresh, Finished by Hand</h2>
            <p>Every corn dog is fried to order and sauced in front of you — the crunch, the pull, the zigzag. Scroll through the line-up.</p>
          </div>
          <Carousel>
<figure className="shot cheese" role="img" aria-label="Close-up of a crispy corn dog with mozzarella stretching out in a long cheese pull">
                <figcaption>The cheese pull</figcaption>
              </figure>
<figure className="shot trays" role="img" aria-label="Three golden corn dogs in kraft trays with bowls of mustard, herb mayonnaise and ketchup">
                <figcaption>Trays &amp; sauces</figcaption>
              </figure>
<figure className="shot duo" role="img" aria-label="Potato corn dog and crispy rice corn dog on white trays against green and yellow">
                <figcaption>Potato × crispy rice</figcaption>
              </figure>
<figure className="shot mozza" role="img" aria-label="Mozzarella corn dog pulled apart with a long cheese stretch">
                <figcaption>Mozzarella pull</figcaption>
              </figure>
<figure className="shot sauces" role="img" aria-label="Four corn dogs on a plate with ketchup, mustard and mayonnaise drizzles">
                <figcaption>Sauce drizzle</figcaption>
              </figure>
<figure className="shot trayfries" role="img" aria-label="Corn dogs with toppings and fries in a wooden tray">
                <figcaption>Tray &amp; fries</figcaption>
              </figure>
<figure className="shot grid crop-tl" role="img" aria-label="Potato corn dog covered in crispy diced potato">
                <figcaption>The potato crunch</figcaption>
              </figure>
<figure className="shot flat" style={{ backgroundPosition: '18% 50%' }} role="img" aria-label="Corn dogs from the flat-lay spread">
                <figcaption>Pick your fighter</figcaption>
              </figure>
<figure className="shot grid crop-br" role="img" aria-label="Crispy rice corn dog with a cheese pull">
                <figcaption>Crispy rice pull</figcaption>
              </figure>
<figure className="shot flat" style={{ backgroundPosition: '82% 50%' }} role="img" aria-label="Dipping sauces from the flat-lay spread">
                <figcaption>Sauce, your way</figcaption>
              </figure>
<figure className="shot grid crop-bl" role="img" aria-label="Ramen noodle corn dog with a cheese pull">
                <figcaption>The ramen crunch</figcaption>
              </figure>
</Carousel>
          <Reveal>
          <div className="strip-cta">
            <Link className="btn btn-blue" href="/stall">See the Gallery</Link>
          </div>
          </Reveal>
        </div>
      </section>

      
      <section className="section band-blue" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="wrap">
          <div className="story-grid" style={{ marginBottom: '0' }}>
            <div className="story-photo reveal">
              <Image src={IMG.foodHero} width={2736} height={912} alt="Three corn dogs — potato, classic and crispy rice — pulled apart with long strands of melted mozzarella, on green and yellow" />
            </div>
            <div className="story-copy reveal">
              <span className="eyebrow on-blue">Our Story</span>
              <h2>The Stall Everyone Queues For</h2>
              <p>Halal Corn Dog started with one simple idea: the Korean corn dog everyone was watching online — the crunch, the cheese pull, the sauce zigzag — made properly halal, and made fresh in front of you.</p>
              <p>So that's what we do, every market day. Batter on, coating on, straight into the fryer, and finished with your sauces while it's still steaming.</p>
              <Link className="btn btn-yellow" href="/our-story" style={{ marginTop: '10px' }}>Read Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      
      <section aria-label="Halal Corn Dog near me">
        <div className="map-head">
          <div className="wrap reveal">
            <h2>Halal Corn Dog Near Me</h2>
            <p>Where can I buy halal corn dogs?</p>
          </div>
        </div>
        <Reveal dir="left">
        <div className="map-frame">
          <InteractiveMap />
        </div>
        </Reveal>
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

      
      <section className="final">
        <div className="wrap reveal">
          <h2>It's Corn Dog Day.<br/>Every Day.</h2>
          <p>Build yours in three steps, then come and get the real thing — hot, crispy and 100% halal.</p>
          <Link className="btn btn-blue" href="/menu">Build Your Corn Dog</Link>
        </div>
      </section>
    
    </div>
  );
}
