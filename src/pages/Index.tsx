import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectionIndex from '@/components/SectionIndex';
import WorkSection from '@/components/WorkSection';
import Research from '@/components/Research';
import KurautoJourney from '@/components/KurautoJourney';
import Passions from '@/components/Passions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ArtBand from '@/components/layout/ArtBand';

const Index = () => {
  return (
    <div className="portfolio-document">
      <ArtBand variant="margin" position="right" />
      <Header />
      <main className="portfolio-main">
        <Hero />
        <SectionIndex />
        <ArtBand variant="slim" />
        <Research />
        <ArtBand variant="slim" />
        <WorkSection />
        <ArtBand variant="slim" />
        <KurautoJourney />
        <Passions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
