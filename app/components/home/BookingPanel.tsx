'use client';

import { useState, type FormEvent } from 'react';
import Icon from './Icon';
import { BOOKING_EMAIL, buildBookingMailto, type BookingRequest } from './booking';

const EMPTY: BookingRequest = {
  fullName: '',
  email: '',
  phone: '',
  country: '',
  state: '',
  level: '',
  mentoring: '',
};

export default function BookingPanel({ points }: { points: string[] }) {
  const [form, setForm] = useState<BookingRequest>(EMPTY);
  const [sent, setSent] = useState(false);

  const set = (field: keyof BookingRequest) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = buildBookingMailto(form);
    setSent(true);
  };

  return (
    <aside className="booking" id="book" aria-label="Book a consultation">
      <div className="panel">
        <h2>Book a consultation</h2>
        <p className="sub">Meet one-on-one with a sports-abroad expert, virtually or in person.</p>
        <ul>
          {points.map((item) => (
            <li key={item}>
              <Icon name="check" />
              {item}
            </li>
          ))}
        </ul>

        <form className="book-form" onSubmit={onSubmit}>
          <label>
            <span>Full name</span>
            <input
              required
              name="fullName"
              autoComplete="name"
              value={form.fullName}
              onChange={(e) => set('fullName')(e.target.value)}
            />
          </label>
          <label>
            <span>Email</span>
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => set('email')(e.target.value)}
            />
          </label>
          <label>
            <span>Phone number</span>
            <input
              required
              type="tel"
              name="phone"
              autoComplete="tel"
              value={form.phone}
              onChange={(e) => set('phone')(e.target.value)}
            />
          </label>
          <label>
            <span>Country</span>
            <input
              required
              name="country"
              autoComplete="country-name"
              value={form.country}
              onChange={(e) => set('country')(e.target.value)}
            />
          </label>
          <label>
            <span>
              State <em className="optional">(optional)</em>
            </span>
            <input
              name="state"
              autoComplete="address-level1"
              value={form.state}
              onChange={(e) => set('state')(e.target.value)}
            />
          </label>

          <fieldset>
            <legend>Going to</legend>
            <div className="choices">
              {['High school', 'College'].map((option) => (
                <label key={option} className="choice">
                  <input
                    required
                    type="radio"
                    name="level"
                    value={option}
                    checked={form.level === option}
                    onChange={() => set('level')(option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>Need mentoring?</legend>
            <div className="choices">
              {['Yes', 'No'].map((option) => (
                <label key={option} className="choice">
                  <input
                    required
                    type="radio"
                    name="mentoring"
                    value={option}
                    checked={form.mentoring === option}
                    onChange={() => set('mentoring')(option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <button type="submit" className="btn btn-ball">
            Book a consultation
          </button>
        </form>

        <p className="help" aria-live="polite">
          {sent ? (
            <>
              Your email app should open with your details filled in — just press send. If it
              didn&apos;t, email us at <a href={`mailto:${BOOKING_EMAIL}`}>{BOOKING_EMAIL}</a>.
            </>
          ) : (
            <>Clicking the button opens your email app with your details ready to send.</>
          )}
        </p>
      </div>
    </aside>
  );
}
