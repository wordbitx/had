import type { Metadata } from 'next';
import Image from 'next/image';
import { IMG } from '@/lib/images';
import Builder from '@/components/Builder';

export const metadata: Metadata = { title: 'The Menu — Halal Corn Dog' };

export default function MenuPage() {
  return (
    <div className="page">


      <section className="page-band">
        <div className="wrap">
          <p className="topline">It's Corn Dog Day</p>
          <h1>The Menu</h1>
          <p>Eight favourites on the menu — four coatings, five fillings, six ways to finish it. Everything below is exactly how it works at the stall — then build yours and watch it come together.</p>
        </div>
      </section>

      
      <section className="section" style={{ paddingTop: '64px' }}>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Step 1</span>
            <h2>Choose Your Corn Dog</h2>
            <p>Start with the coating. Every one is battered, rolled and fried fresh when you order.</p>
          </div>
          <div className="menu-grid">
            <article className="menu-box reveal">
              <div className="ph photo" style={{ backgroundImage: 'url(/images/potato.webp)' }} role="img" aria-label="Potato corn dog covered in crispy diced potato, served on a white tray"></div>
              <div className="body">
                <span className="tag">Extra Crunchy</span>
                <h3>Potato Corn Dog</h3>
                <p>Rolled in crispy diced potato before it hits the fryer — the loudest crunch on the menu, golden on every side.</p>
                <a className="go" href="#build-anchor">Build it yours ↓</a>
              </div>
            </article>
            <article className="menu-box reveal">
              <div className="ph photo" style={{ backgroundImage: 'url(/images/cheese-pull.webp)' }} role="img" aria-label="Classic golden corn dog with melted cheese pulling from the end"></div>
              <div className="body">
                <span className="tag">The Original</span>
                <h3>Classic Corn Dog</h3>
                <p>The one that started it all. Smooth golden batter, fried until it shines, ready for the full sauce treatment.</p>
                <a className="go" href="#build-anchor">Build it yours ↓</a>
              </div>
            </article>
            <article className="menu-box reveal">
              <div className="ph photo" style={{ backgroundImage: 'url(/images/menu-ramen.webp)' }} role="img" aria-label="Ramen noodle corn dog with a cheese pull, covered in crushed ramen noodles"></div>
              <div className="body">
                <span className="tag">Street Favourite</span>
                <h3>Ramen Noodle</h3>
                <p>Wrapped in crushed ramen noodles for a wild, craggy crunch — the street-style favourite with the famous cheese pull.</p>
                <a className="go" href="#build-anchor">Build it yours ↓</a>
              </div>
            </article>
            <article className="menu-box reveal">
              <div className="ph photo" style={{ backgroundImage: 'url(/images/crispy-rice.webp)' }} role="img" aria-label="Crispy rice corn dog coated in puffed rice, served on a white tray"></div>
              <div className="body">
                <span className="tag">Light &amp; Crispy</span>
                <h3>Crispy Rice</h3>
                <p>Coated in puffed rice that crackles as it fries. Light, crisp and golden — with the same melty middle inside.</p>
                <a className="go" href="#build-anchor">Build it yours ↓</a>
              </div>
            </article>
            <article className="menu-box reveal">
              <div className="ph photo" style={{ backgroundImage: 'url(/images/menu-mozzarella.webp)' }} role="img" aria-label="Mozzarella corn dog pulled apart with a long melted cheese stretch"></div>
              <div className="body">
                <span className="tag">Maximum Cheese Pull</span>
                <h3>Mozzarella Corn Dog</h3>
                <p>Full mozzarella inside, pulled apart slow — the famous cheese pull, golden on the outside.</p>
                <a className="go" href="#build-anchor">Build it yours ↓</a>
              </div>
            </article>
            <article className="menu-box reveal">
              <div className="ph photo" style={{ backgroundImage: 'url(/images/menu-sauces.webp)' }} role="img" aria-label="Four corn dogs on a plate drizzled with ketchup, mustard and mayonnaise"></div>
              <div className="body">
                <span className="tag">Fully Sauced</span>
                <h3>Loaded Corn Dog</h3>
                <p>Ketchup, mayonnaise and mustard drizzled over the top — the full sauce treatment, your way.</p>
                <a className="go" href="#build-anchor">Build it yours ↓</a>
              </div>
            </article>
            <article className="menu-box reveal">
              <div className="ph photo" style={{ backgroundImage: 'url(/images/menu-tray-fries.webp)' }} role="img" aria-label="Corn dogs with toppings and crispy fries served in a wooden tray"></div>
              <div className="body">
                <span className="tag">The Full Tray</span>
                <h3>Corn Dog &amp; Fries</h3>
                <p>Golden corn dogs with crispy fries on the side, served fresh from the stall.</p>
                <a className="go" href="#build-anchor">Build it yours ↓</a>
              </div>
            </article>
            <article className="menu-box reveal">
              <div className="ph photo" style={{ backgroundImage: 'url(/images/menu-pizza-style.webp)' }} role="img" aria-label="Corn dogs topped with melted mozzarella, tomato sauce and basil on a plate"></div>
              <div className="body">
                <span className="tag">Cheesy &amp; Rich</span>
                <h3>Pizza-Style Corn Dog</h3>
                <p>Melted mozzarella and tomato sauce over a golden corn dog — pizza flavours, street-food style.</p>
                <a className="go" href="#build-anchor">Build it yours ↓</a>
              </div>
            </article>
          </div>

          <figure className="menu-photo-band reveal" style={{ marginLeft: '0', marginRight: '0' }}>
            <Image src={IMG.trays} width={1920} height={1280} alt="Three golden corn dogs served in kraft trays on a wooden table, with bowls of mustard, herb mayonnaise and ketchup, against a green wall and yellow tiles" />
            <figcaption>Fresh from the stall</figcaption>
          </figure>

          <div className="menu-steps">
            <div className="menu-panel reveal">
              <div className="step-head">
                <span className="step-num">2</span>
                <h3>Choose Your Filling<small>Pick one — all 100% halal</small></h3>
              </div>
              <ul className="menu-list">
                <li>Chicken Sausage <span className="note">100% halal</span></li>
                <li>Beef Sausage <span className="note">100% halal</span></li>
                <li>Full Mozzarella <span className="note">Maximum cheese pull</span></li>
                <li>Half Mozzarella, Half Sausage <span className="note">Best of both</span></li>
                <li>Vegan Sausage <span className="note">Plant-based</span></li>
              </ul>
            </div>
            <div className="menu-panel reveal">
              <div className="step-head">
                <span className="step-num">3</span>
                <h3>Choose Your Condiments<small>As many as you like — go on</small></h3>
              </div>
              <ul className="menu-list">
                <li>Tomato Ketchup <span className="note">Heinz</span></li>
                <li>Real Mayonnaise <span className="note">Heinz</span></li>
                <li>Yellow Mustard <span className="note">Heinz</span></li>
                <li>Spicy Mayonnaise <span className="note">Hellmann's</span></li>
                <li>Sweet Sugar <span className="note">The classic dusting</span></li>
                <li>Sriracha Hot Chilli <span className="note">Brings the heat</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      <Builder />
    
    </div>
  );
}
