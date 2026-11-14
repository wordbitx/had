import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { IMG } from '@/lib/images';
import Carousel from '@/components/Carousel';
import ComingSoon from '@/components/ComingSoon';
import { COMING_SOON } from '@/lib/site';

export const metadata: Metadata = { title: 'From the Stall — Halal Corn Dog' };

export default function StallPage() {
  const locked = COMING_SOON['stall'];
  return (
    <div className={locked ? 'page is-locked' : 'page'}>
      {locked && <ComingSoon title="From the Stall" />}

      
      


      <section className="page-band">
        <div className="wrap">
          <p className="topline">Fresh Off The Fryer</p>
          <h1>From the Stall</h1>
          <p>The crunch, the pull, the zigzag — every corn dog is fried to order and finished by hand, right in front of you.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '64px' }}>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">The Line-Up</span>
            <h2>Scroll the Stall</h2>
            <p>Swipe through what's frying — the newest cheese pull first.</p>
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
<figure className="shot grid crop-tr" role="img" aria-label="Classic golden corn dog with melted cheese pulling from the end">
                <figcaption>The original</figcaption>
              </figure>
</Carousel>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '8px' }}>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Up Close</span>
            <h2>The Gallery</h2>
            <p>A look at what&apos;s frying — the crunch, the pull, the sauces.</p>
          </div>
          <div className="gallery-grid">
            <figure className="gallery-item reveal">
              <Image src={IMG.cheesePull} width={1920} height={1060} alt="Close-up of a crispy corn dog held over paper, mozzarella stretching down in a long cheese pull" />
              <figcaption>The Cheese Pull<small>Full mozzarella, pulled while it's still steaming.</small></figcaption>
            </figure>
            <figure className="gallery-item reveal">
              <Image src={IMG.foodHero} width={2736} height={912} alt="Three corn dogs — potato, classic and crispy rice — pulled apart with long strands of melted mozzarella" />
              <figcaption>Three Ways to Crunch<small>Potato, classic and crispy rice, side by side.</small></figcaption>
            </figure>
            <figure className="gallery-item reveal">
              <Image src={IMG.fourVarieties} width={1600} height={1600} alt="Four Halal Corn Dog varieties in a grid — potato, classic, ramen noodle and crispy rice" />
              <figcaption>The Full Line-Up<small>All four coatings, ready to be built your way.</small></figcaption>
            </figure>
            <figure className="gallery-item reveal">
              <Image src={IMG.traysVarieties} width={1920} height={1280} alt="Three corn dogs in kraft trays — potato, ramen noodle and crispy rice — on a wooden table with bowls of mustard, herb mayonnaise and ketchup, against a green wall and yellow tiles" />
              <figcaption>Trays &amp; Sauces<small>Potato, ramen noodle and crispy rice, served in the tray with the sauces ready.</small></figcaption>
            </figure>
            <figure className="gallery-item reveal">
              <Image src={IMG.duo} width={1920} height={1280} alt="Potato corn dog and crispy rice corn dog on white trays against a green and yellow background" />
              <figcaption>Potato × Crispy Rice<small>The two crunch champions, side by side.</small></figcaption>
            </figure>
            <figure className="gallery-item reveal">
              <Image src={IMG.flatlay} width={2352} height={1008} alt="Overhead flat-lay of corn dogs, fries and small bowls of dipping sauces laid out on a light cloth" />
              <figcaption>The Full Spread<small>Corn dogs, fries and every sauce on the board.</small></figcaption>
            </figure>
            <figure className="gallery-item reveal">
              <Image src={IMG.menuMozzarella} width={1920} height={1280} alt="Mozzarella corn dog pulled apart with a long cheese stretch, on green and yellow" />
              <figcaption>Mozzarella Pull<small>Pulled apart in one long stretch, while it's still hot.</small></figcaption>
            </figure>
            <figure className="gallery-item reveal">
              <Image src={IMG.menuSauces} width={1920} height={1280} alt="Four corn dogs on a plate with ketchup, mustard and mayonnaise drizzles, on green and yellow" />
              <figcaption>Sauce Drizzle<small>Four classics, finished with the full zigzag.</small></figcaption>
            </figure>
            <figure className="gallery-item reveal">
              <Image src={IMG.menuTrayFries} width={1920} height={1280} alt="Corn dogs with toppings and fries in a wooden tray, on green and yellow" />
              <figcaption>Tray &amp; Fries<small>Corn dogs and fries, straight from the tray.</small></figcaption>
            </figure>
          </div>
          <div className="strip-cta">
            <Link className="btn btn-yellow" href="/menu">Build Yours on the Menu</Link>
          </div>
        </div>
      </section>
    
    </div>
  );
}
