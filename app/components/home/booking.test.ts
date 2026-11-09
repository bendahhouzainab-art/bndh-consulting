import { describe, expect, it } from 'vitest';
import { BOOKING_EMAIL, buildBookingBody, buildBookingMailto, type BookingRequest } from './booking';

const REQ: BookingRequest = {
  fullName: 'Amina & Co',
  email: 'amina@example.com',
  phone: '+212 600 000 000',
  location: 'Casablanca, Morocco',
  level: 'College',
  mentoring: 'Yes',
};

describe('buildBookingBody', () => {
  // Every field the visitor fills in must appear in the email template.
  it('lists every booking field', () => {
    const body = buildBookingBody(REQ);
    expect(body).toContain('Full name: Amina & Co');
    expect(body).toContain('Email: amina@example.com');
    expect(body).toContain('Phone number: +212 600 000 000');
    expect(body).toContain('State or country I live in: Casablanca, Morocco');
    expect(body).toContain('Going to: College');
    expect(body).toContain('Need mentoring: Yes');
  });
});

describe('buildBookingMailto', () => {
  // The link goes to the booking inbox with subject and body URL-encoded.
  it('addresses the booking inbox with an encoded subject and body', () => {
    const url = buildBookingMailto(REQ);
    expect(url.startsWith(`mailto:${BOOKING_EMAIL}?`)).toBe(true);
    const params = new URLSearchParams(url.split('?')[1]);
    expect(params.get('subject')).toBe('Consultation request — Amina & Co');
    expect(params.get('body')).toBe(buildBookingBody(REQ));
  });
});
