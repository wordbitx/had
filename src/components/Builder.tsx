'use client';

import { useEffect, useState } from 'react';
import { PICKUP_LOCATIONS } from '@/lib/site';
import { copyText, waLink } from '@/lib/whatsapp';

// Build Your Own — the real menu, exactly as it works at the stall.
// 1 coating + 1 filling + as many condiments as you like, then order
// it online (step 4): name + phone + pickup location + optional note,
// a summary, and send it through WhatsApp. No prices anywhere — the
// point is to show the business as already online.
const COATINGS = ['Potato Corn Dog', 'Classic Corn Dog', 'Ramen Noodle', 'Crispy Rice'];
const FILLINGS = [
  'Chicken Sausage',
  'Beef Sausage',
  'Full Mozzarella',
  'Half Mozzarella, Half Sausage',
  'Vegan Sausage',
];
const SAUCES = [
  { name: 'Spicy Mayonnaise', note: 'Our special sauce' },
  { name: 'Tomato Ketchup', note: 'Sweet and tangy — the classic' },
  { name: 'Real Mayonnaise', note: 'Smooth, rich and creamy' },
  { name: 'Yellow Mustard', note: 'For that traditional taste' },
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

  // Order step (step 4) — opens from the summary card's "Order this".
  const [ordering, setOrdering] = useState(false);
  const [phase, setPhase] = useState<'details' | 'review'>('details');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState<string>(PICKUP_LOCATIONS[0]);
  const [note, setNote] = useState('');
  const [copied, setCopied] = useState(false);

  // Scroll to the order panel when it opens (it mounts on demand, so it
  // deliberately has NO .reveal class — SiteEffects only observes
  // elements present at route change, and a reveal would trap it hidden).
  useEffect(() => {
    if (ordering) {
      document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [ordering]);

  const toggleSauce = (name: string) =>
    setSauces((prev) => (prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]));

  const reset = () => {
    setCoating(DEFAULTS.coating);
    setFilling(DEFAULTS.filling);
    setSauces(DEFAULTS.sauces);
    setOrdering(false);
    setPhase('details');
    setName('');
    setPhone('');
    setLocation(PICKUP_LOCATIONS[0]);
    setNote('');
    setCopied(false);
    document.getElementById('build-anchor')?.scrollIntoView({ behavior: 'smooth' });
  };

  const orderMessage = () => {
    const lines = [
      'Hello Halal Corn Dog — new online order:',
      `Corn Dog: ${coating}`,
      `Filling: ${filling}`,
      `Condiments: ${sauces.length ? sauces.join(', ') : 'None'}`,
      `Pickup: ${location}`,
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
    ];
    if (note.trim()) lines.push(`Note: ${note.trim()}`);
    return lines.join('\n');
  };

  const sendLink = phase === 'review' ? waLink(orderMessage()) : null;

  const onCopy = async () => {
    if (await copyText(orderMessage())) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="section band-paper" id="build-anchor" style={{ paddingTop: '8px' }}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Build Your Own</span>
          <h2>Three Steps. Your Rules.</h2>
          <p>
            Tap your way through the real menu and watch your corn dog come together — then order it online,
            exactly like that.
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
                    <span className="sauce-note">{s.note}</span>
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
            <button type="button" className="btn btn-yellow order-cta" onClick={() => setOrdering(true)}>
              Order this
            </button>
            <button type="button" className="reset" onClick={reset}>
              Start again
            </button>
          </aside>
        </div>

        {ordering && (
          <div className="order-panel" id="order">
            <div className="step-head">
              <span className="step-num">4</span>
              <h3>
                Order Online<small>Your order goes through the website — pick it up at the stall</small>
              </h3>
            </div>
            {phase === 'details' ? (
              <form
                className="order-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setPhase('review');
                }}
              >
                <div className="order-grid">
                  <div className="field">
                    <label htmlFor="order-name">Your name</label>
                    <input
                      id="order-name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="order-phone">Your phone</label>
                    <input
                      id="order-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your phone number"
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <div className="field">
                  <span className="field-label" id="pickup-label">
                    Pickup location
                  </span>
                  <div className="opts" role="group" aria-labelledby="pickup-label">
                    {PICKUP_LOCATIONS.map((l) => (
                      <button
                        key={l}
                        type="button"
                        className="opt"
                        aria-pressed={location === l}
                        onClick={() => setLocation(l)}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="order-note">Anything else? (optional)</label>
                  <textarea
                    id="order-note"
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Extra sauce, no sugar, a question…"
                  />
                </div>
                <button type="submit" className="btn btn-yellow">
                  Review my order
                </button>
              </form>
            ) : (
              <div className="order-recap">
                <h4>Your order</h4>
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
                  <div>
                    <dt>Pickup</dt>
                    <dd>{location}</dd>
                  </div>
                  <div>
                    <dt>Name</dt>
                    <dd>{name}</dd>
                  </div>
                  <div>
                    <dt>Phone</dt>
                    <dd>{phone}</dd>
                  </div>
                  {note.trim() ? (
                    <div>
                      <dt>Note</dt>
                      <dd>{note}</dd>
                    </div>
                  ) : null}
                </dl>
                {sendLink ? (
                  <a className="btn btn-yellow" href={sendLink} target="_blank" rel="noreferrer">
                    Send order on WhatsApp
                  </a>
                ) : (
                  <p className="copy-note">
                    Our WhatsApp order line is being connected — copy your order below and paste it into
                    WhatsApp to the stall.
                  </p>
                )}
                <button type="button" className="btn btn-ghost" onClick={onCopy}>
                  {copied ? 'Copied!' : 'Copy order details'}
                </button>
                <button type="button" className="reset" onClick={() => setPhase('details')}>
                  Edit details
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
