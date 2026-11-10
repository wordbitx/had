'use client';

import { useState } from 'react';

// Build Your Own — the real menu, exactly as it works at the stall.
// 1 coating + 1 filling + as many condiments as you like.
const COATINGS = ['Potato Corn Dog', 'Classic Corn Dog', 'Ramen Noodle', 'Crispy Rice'];
const FILLINGS = [
  'Chicken Sausage',
  'Beef Sausage',
  'Full Mozzarella',
  'Half Mozzarella, Half Sausage',
  'Vegan Sausage',
];
const SAUCES = [
  { name: 'Tomato Ketchup', note: 'Heinz' },
  { name: 'Real Mayonnaise', note: 'Heinz' },
  { name: 'Yellow Mustard', note: 'Heinz' },
  { name: 'Spicy Mayonnaise', note: "Hellmann's" },
  { name: 'Sweet Sugar', note: 'The classic dusting' },
  { name: 'Sriracha Hot Chilli', note: 'Brings the heat' },
];
const DEFAULTS = {
  coating: 'Potato Corn Dog',
  filling: 'Full Mozzarella',
  sauces: ['Tomato Ketchup', 'Real Mayonnaise'],
};

function describe(filling: string, sauces: string[]) {
  const fillingText = filling.toLowerCase();
  let sauceText: string;
  if (sauces.length === 0) {
    sauceText = 'served naked — pure crunch, no sauce. Bold move.';
  } else if (sauces.length === 1) {
    sauceText = 'finished with ' + sauces[0].toLowerCase() + '.';
  } else if (sauces.length === 2) {
    sauceText = 'finished with ' + sauces[0].toLowerCase() + ' and ' + sauces[1].toLowerCase() + '.';
  } else {
    const list = sauces.map((s) => s.toLowerCase());
    sauceText =
      'loaded with ' + list.slice(0, -1).join(', ') + ' and ' + list[list.length - 1] + '. Fully loaded.';
  }
  const line = 'Inside: ' + fillingText + ' — ' + sauceText;
  return line.charAt(0).toUpperCase() + line.slice(1);
}

export default function Builder() {
  const [coating, setCoating] = useState(DEFAULTS.coating);
  const [filling, setFilling] = useState(DEFAULTS.filling);
  const [sauces, setSauces] = useState<string[]>(DEFAULTS.sauces);

  const toggleSauce = (name: string) =>
    setSauces((prev) => (prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]));

  const reset = () => {
    setCoating(DEFAULTS.coating);
    setFilling(DEFAULTS.filling);
    setSauces(DEFAULTS.sauces);
  };

  return (
    <section className="section band-paper" id="build-anchor" style={{ paddingTop: '8px' }}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Build Your Own</span>
          <h2>Three Steps. Your Rules.</h2>
          <p>
            Tap your way through the real menu and watch your corn dog come together — then order it exactly
            like that at the stall.
          </p>
        </div>
        <div className="builder">
          <div>
            <div className="step-block reveal">
              <div className="step-head">
                <span className="step-num">1</span>
                <h3>
                  Choose Your Corn Dog<small>Pick one coating</small>
                </h3>
              </div>
              <div className="opts" role="group" aria-label="Choose your corn dog">
                {COATINGS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className="opt"
                    aria-pressed={coating === c}
                    onClick={() => setCoating(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div className="step-block reveal">
              <div className="step-head">
                <span className="step-num">2</span>
                <h3>
                  Choose Your Filling<small>Pick one — all 100% halal</small>
                </h3>
              </div>
              <div className="opts" role="group" aria-label="Choose your filling">
                {FILLINGS.map((f) => (
                  <button
                    key={f}
                    type="button"
                    className="opt"
                    aria-pressed={filling === f}
                    onClick={() => setFilling(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div className="step-block reveal">
              <div className="step-head">
                <span className="step-num">3</span>
                <h3>
                  Choose Your Condiments<small>As many as you like — go on</small>
                </h3>
              </div>
              <div className="opts" role="group" aria-label="Choose your condiments">
                {SAUCES.map((s) => (
                  <button
                    key={s.name}
                    type="button"
                    className="opt"
                    aria-pressed={sauces.includes(s.name)}
                    onClick={() => toggleSauce(s.name)}
                  >
                    {s.name}
                    <span className="brand-note">{s.note}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <aside className="summary reveal" aria-live="polite">
            <span className="stamp">Fresh off the fryer</span>
            <h3>{coating}</h3>
            <p style={{ margin: 0, color: '#dcf2e4' }}>{describe(filling, sauces)}</p>
            <dl>
              <div>
                <dt>Corn Dog</dt>
                <dd>{coating}</dd>
              </div>
              <div>
                <dt>Filling</dt>
                <dd>{filling}</dd>
              </div>
              <div>
                <dt>Condiments</dt>
                <dd>{sauces.length ? sauces.join(' · ') : 'None — going naked'}</dd>
              </div>
            </dl>
            <button type="button" className="reset" onClick={reset}>
              Start again
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
