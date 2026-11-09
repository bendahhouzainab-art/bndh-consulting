export const BOOKING_EMAIL = 'bendahhou.zainab@gmail.com';

export interface BookingRequest {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  level: string;
  mentoring: string;
}

export function buildBookingBody(req: BookingRequest): string {
  return [
    'Hello BNDH Consulting,',
    '',
    "I'd like to book a consultation. Here are my details:",
    '',
    `Full name: ${req.fullName}`,
    `Email: ${req.email}`,
    `Phone number: ${req.phone}`,
    `Country: ${req.country}`,
    `State: ${req.state.trim() || 'Not provided'}`,
    `Going to: ${req.level}`,
    `Need mentoring: ${req.mentoring}`,
    '',
    'Thank you!',
  ].join('\n');
}

export function buildBookingMailto(req: BookingRequest): string {
  const subject = `Consultation request — ${req.fullName}`;
  return `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    buildBookingBody(req),
  )}`;
}
