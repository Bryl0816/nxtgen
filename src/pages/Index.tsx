import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import Services from '@/components/Services';
import SampleWorkSection from '@/components/TestimonialsSection';
import TechnologiesSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />
      <main>
        <HeroSection />

        <FeaturesSection />
        <div id="services">
          <Services />
        </div>
        <div id="portfolio">
          <SampleWorkSection />
        </div>
        <div id="team">
          <TechnologiesSection />
        </div>
        <div id="contact">
          <CtaSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
