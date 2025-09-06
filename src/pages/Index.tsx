import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Automation from '@/components/Automation';
import Research from '@/components/Research';
import Experience from '@/components/Experience';
import KurautoJourney from '@/components/KurautoJourney';
import Passions from '@/components/Passions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for header height
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          // Cleanup
        });
      });
    };
  }, []);
  
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Research />
      <Projects />
      <Automation />
      <Experience />
      <KurautoJourney />
      <Passions />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
