'use client';

import { useLenis } from '@/hooks/use-lenis';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TechnologyMarquee from '@/components/TechnologyMarquee';
import ServicesSection from '@/components/ServicesSection';
import IndustriesMarquee from '@/components/IndustriesMarquee';
import Statistics from '@/components/Statistics';
import CaseStudies from '@/components/CaseStudies';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  useLenis();

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <HeroSection />
      <TechnologyMarquee />
      <ServicesSection />
      <Statistics />
      <IndustriesMarquee />
      <CaseStudies />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
