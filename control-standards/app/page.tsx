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
import Testimonials from '@/components/Testimonials';
import DataProtection from '@/components/DataProtection';
import DeploymentSection from '@/components/DeploymentSection';
import SalesResourceCenter from '@/components/SalesResourceCenter';
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
      <AIPoweredSection />
      <IndustriesMarquee />
      <CaseStudies />
      <Testimonials />
      <DataProtection />
      <DeploymentSection />
      <SalesResourceCenter />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
