import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BNDH Consulting',
  description:
    'Guidance for international athletes, parents and coaches on US college scholarships and tennis academies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
