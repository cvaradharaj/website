import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Control Standards | Industrial Automation Engineers — Bengaluru',
  description:
    '25+ years of global industrial automation engineering excellence. Siemens & Beckhoff PLC programming, drive systems, motion control, and control panel manufacturing.',
  keywords: [
    'Siemens PLC Programmer India',
    'Beckhoff PLC System Integrator',
    'Industrial Automation Company Bangalore',
    'PLC Control Panels',
    'Motion Control',
  ],
  openGraph: {
    title: 'Control Standards — Industrial Automation Engineering',
    description: '25+ years of global automation engineering from Bengaluru.',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
