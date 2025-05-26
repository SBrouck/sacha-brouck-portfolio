import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Github, Linkedin } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          top: element.offsetTop - 80, // Account for header height
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md border-b border-gray-200/20 shadow-sm'
          : 'py-5 bg-transparent',
        className
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#" 
          onClick={() => scrollToSection('home')}
          className="text-xl font-playfair font-medium tracking-tight transition-opacity hover:opacity-80 text-gray-900"
        >
          Sacha Brouck
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks scrollToSection={scrollToSection} />
          <div className="flex space-x-4 items-center">
            <a 
              href="https://github.com/SBrouck" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-terracotta transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sacha-brouck/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-terracotta transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn(
            "block w-6 transition-all duration-300",
            isMobileMenuOpen ? "opacity-0" : "opacity-100"
          )}>
            <span className="block w-6 h-0.5 bg-gray-900 mb-1.5" />
            <span className="block w-6 h-0.5 bg-gray-900 mb-1.5" />
            <span className="block w-4 h-0.5 bg-gray-900" />
          </span>
        </button>
      </div>
      
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 transition-transform duration-500 ease-in-out transform md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button 
          className="absolute top-5 right-5 p-2"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="block w-6 h-0.5 bg-gray-900 transform rotate-45 translate-y-0.5" />
          <span className="block w-6 h-0.5 bg-gray-900 transform -rotate-45" />
        </button>
        
        <nav className="flex flex-col space-y-6 text-lg">
          <button 
            className="text-left text-gray-900 hover:text-terracotta transition-colors"
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button 
            className="text-left text-gray-900 hover:text-terracotta transition-colors"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button 
            className="text-left text-gray-900 hover:text-terracotta transition-colors"
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </button>
          <button 
            className="text-left text-gray-900 hover:text-terracotta transition-colors"
            onClick={() => scrollToSection('kurauto')}
          >
            Kurauto
          </button>
          <button 
            className="text-left text-gray-900 hover:text-terracotta transition-colors"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
          <div className="flex space-x-4 pt-4">
            <a 
              href="https://github.com/SBrouck" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-terracotta transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} /> <span className="ml-2">GitHub</span>
            </a>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/sacha-brouck/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-terracotta transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} /> <span className="ml-2">LinkedIn</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

interface NavLinksProps {
  scrollToSection: (id: string) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ scrollToSection }) => (
  <>
    <button 
      className="text-sm font-medium text-gray-900 hover:text-terracotta transition-colors"
      onClick={() => scrollToSection('home')}
    >
      Home
    </button>
    <button 
      className="text-sm font-medium text-gray-900 hover:text-terracotta transition-colors"
      onClick={() => scrollToSection('projects')}
    >
      Projects
    </button>
    <button 
      className="text-sm font-medium text-gray-900 hover:text-terracotta transition-colors"
      onClick={() => scrollToSection('experience')}
    >
      Experience
    </button>
    <button 
      className="text-sm font-medium text-gray-900 hover:text-terracotta transition-colors"
      onClick={() => scrollToSection('kurauto')}
    >
      Kurauto
    </button>
    <button 
      className="text-sm font-medium text-gray-900 hover:text-terracotta transition-colors"
      onClick={() => scrollToSection('contact')}
    >
      Contact
    </button>
  </>
);

export default Header;
