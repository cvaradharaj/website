import type { Metadata } from 'next';
import CareersClient from '@/components/CareersClient';

export const metadata: Metadata = {
  title: 'Careers | Control Standards — Field Service Engineer Openings',
  description:
    'Control Standards is hiring 2 Mechanical and 2 Electrical & Electronics Field Service Engineers in Bengaluru/Hosur, India. Freshers encouraged to apply — structured training, extensive travel, and fast-track growth.',
};

export default function CareersPage() {
  return <CareersClient />;
}
