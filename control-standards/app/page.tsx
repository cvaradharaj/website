'use client';

import { useLenis } from '@/hooks/use-lenis';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TechnologyMarquee from '@/components/TechnologyMarquee';
import ServicesSection from '@/components/ServicesSection';
import Statistics from '@/components/Statistics';
import AIPoweredSection from '@/components/AIPoweredSection';
import IndustriesMarquee from '@/components/IndustriesMarquee';
import CaseStudies from '@/components/CaseStudies';
import ContactSection from '@/components/ContactSection';
import DigitalSolutionsSection from '@/components/DigitalSolutionsSection';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatWhySection from '@/components/WhatWhySection';

export default function Home() {
  useLenis();

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <HeroSection />
      <WhatWhySection />
      <TechnologyMarquee />
      <ServicesSection />
      <Statistics />
      <AIPoweredSection />
      <IndustriesMarquee />
      <CaseStudies />
      <DigitalSolutionsSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
