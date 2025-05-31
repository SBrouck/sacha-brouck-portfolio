
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className={cn('py-12 md:py-16 bg-white border-t border-gray-100', className)}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <button
              onClick={() => scrollToSection('home')} 
              className="text-xl font-playfair font-medium tracking-tight text-gray-900"
            >
              Sacha Brouck
            </button>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <button
              onClick={() => scrollToSection('home')} 
              className="text-sm hover:text-terracotta transition-colors text-gray-600"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projects')} 
              className="text-sm hover:text-terracotta transition-colors text-gray-600"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')} 
              className="text-sm hover:text-terracotta transition-colors text-gray-600"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')} 
              className="text-sm hover:text-terracotta transition-colors text-gray-600"
            >
              Contact
            </button>
          </div>
          
          <div className="text-center w-full md:w-auto mt-6 md:mt-0">
            <p className="font-serif text-sm text-gray-500">
              © {new Date().getFullYear()} Sacha Brouck · Made with Parisian Inspiration
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
