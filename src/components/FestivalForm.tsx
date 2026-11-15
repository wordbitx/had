'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { copyText, waLink } from '@/lib/whatsapp';

// Festival / event enquiry — for organisers who want the green and
// yellow at their festival, event, expo or mela. Same WhatsApp send
// as the online order flow (one number in src/lib/site.ts, currently
// the test number). No prices anywhere.
export default function FestivalForm() {
  const [phase, setPhase] = useState<'form' | 'review'>('form');
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [visitors, setVisitors] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const enquiryMessage = () => {
    const lines = [
      'Hello Halal Corn Dog — festival / event enquiry:',
      `Event: ${eventName.trim()}`,
      `Date: ${date}`,
      `Location: ${location.trim()}`,
      `Contact: ${contactName.trim()}`,
      `Phone: ${phone.trim()}`,
    ];
    if (visitors.trim()) lines.push(`Expected visitors: ${visitors.trim()}`);
    if (email.trim()) lines.push(`Email: ${email.trim()}`);
    if (message.trim()) lines.push(`Message: ${message.trim()}`);
    return lines.join('\n');
  };

  const sendLink = phase === 'review' ? waLink(enquiryMessage()) : null;

  const onCopy = async () => {
    if (await copyText(enquiryMessage())) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="festival-form" id="festival-enquiry">
      <Reveal dir="left">
        <div className="section-head">
          <span className="eyebrow">Book Us</span>
          <h2>Festival Enquiries</h2>
          <p>
            Want the green and yellow at your festival, event, expo or mela? Tell us about it — we will get
            back to you.
          </p>
        </div>
        {phase === 'form' ? (
          <form
            className="order-form"
            onSubmit={(e) => {
              e.preventDefault();
              setPhase('review');
            }}
          >
            <div className="order-grid">
              <div className="field">
                <label htmlFor="fest-event">Event / festival name</label>
                <input
                  id="fest-event"
                  required
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  placeholder="e.g. Eid Mela"
                  autoComplete="off"
                />
              </div>
              <div className="field">
                <label htmlFor="fest-date">Event date</label>
                <input
                  id="fest-date"
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="order-grid">
              <div className="field">
                <label htmlFor="fest-location">Event location</label>
                <input
                  id="fest-location"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Where is the event?"
                  autoComplete="off"
                />
              </div>
              <div className="field">
                <label htmlFor="fest-visitors">Expected visitors (optional)</label>
                <input
                  id="fest-visitors"
                  value={visitors}
                  onChange={(e) => setVisitors(e.target.value)}
                  placeholder="Roughly how many people?"
                  inputMode="numeric"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="order-grid">
              <div className="field">
                <label htmlFor="fest-name">Your name</label>
                <input
                  id="fest-name"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div className="field">
                <label htmlFor="fest-phone">Your phone</label>
                <input
                  id="fest-phone"
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
              <label htmlFor="fest-email">Email (optional)</label>
              <input
                id="fest-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                autoComplete="email"
              />
            </div>
            <div className="field">
              <label htmlFor="fest-message">Anything else? (optional)</label>
              <textarea
                id="fest-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about the event — stalls, timings, anything we should know…"
              />
            </div>
            <button type="submit" className="btn btn-yellow">
              Review my enquiry
            </button>
          </form>
        ) : (
          <div className="order-recap">
            <h4>Your enquiry</h4>
            <dl>
              <div>
                <dt>Event</dt>
                <dd>{eventName}</dd>
              </div>
              <div>
                <dt>Date</dt>
                <dd>{date}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{location}</dd>
              </div>
              {visitors.trim() ? (
                <div>
                  <dt>Expected visitors</dt>
                  <dd>{visitors}</dd>
                </div>
              ) : null}
              <div>
                <dt>Contact</dt>
                <dd>{contactName}</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>{phone}</dd>
              </div>
              {email.trim() ? (
                <div>
                  <dt>Email</dt>
                  <dd>{email}</dd>
                </div>
              ) : null}
              {message.trim() ? (
                <div>
                  <dt>Message</dt>
                  <dd>{message}</dd>
                </div>
              ) : null}
            </dl>
            {sendLink ? (
              <a className="btn btn-yellow" href={sendLink} target="_blank" rel="noreferrer">
                Send enquiry on WhatsApp
              </a>
            ) : (
              <p className="copy-note">
                Our WhatsApp enquiry line is being connected — copy your enquiry below and paste it into
                WhatsApp to the stall.
              </p>
            )}
            <button type="button" className="btn btn-ghost" onClick={onCopy}>
              {copied ? 'Copied!' : 'Copy enquiry details'}
            </button>
            <button type="button" className="reset" onClick={() => setPhase('form')}>
              Edit details
            </button>
          </div>
        )}
      </Reveal>
    </div>
  );
}
