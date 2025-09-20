import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Button } from './ui/button';
import { Github, Linkedin, Info, BookOpen } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import heroBg from '/images/517709ldsdl-964x777.jpg';
import avatarImage from '@/assets/images/10b7fba5-ef78-49a2-a1f3-cdcd1c33ebe7.png';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const [showStory, setShowStory] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Always visible for testing
  const description = "I'm a Business Analytics graduate student at UW Foster, building end-to-end analytics with Python and SQL: data collection and cleaning, modeling, and delivery through dashboards, reports, and automation.";
  
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        // Simplified: show when Hero section is anywhere in view
        setIsVisible(rect.bottom > 0 && rect.top < window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className={cn('relative min-h-screen flex items-center overflow-hidden py-24', className)}>
      <div className="absolute inset-0 -z-10">
        <img 
          src={heroBg}
          alt="Monet's Argenteuil painting - Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Enhanced overlay for better painting display */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
      </div>
      
      {/* Info Button - simplified visibility */}
      {isVisible && (
        <button
          onClick={() => setShowStory(!showStory)}
          className="fixed top-24 right-6 z-50 p-3 bg-white/90 hover:bg-white shadow-lg rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
          aria-label="Story about the background"
        >
          <Info className="w-5 h-5 text-gray-700" />
        </button>
      )}
      
      {/* Story Modal */}
      {showStory && isVisible && (
        <div className="fixed top-40 right-6 z-50 max-w-xs bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-4 border border-white/30">
          <p className="text-sm text-gray-700 leading-relaxed">
            This painting by <strong>Claude Monet</strong> shows <strong>Argenteuil</strong>, a town in the Paris suburbs where my father lived. 
            Even though it has changed a lot over the years, this town remains special to me and represents my connection to France.
          </p>
          <button
            onClick={() => setShowStory(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-lg font-bold leading-none"
          >
            ×
          </button>
        </div>
      )}
      
      <div className="container mx-auto px-6 md:px-12 py-20 md:py-32 relative z-10 max-w-5xl">
        <div className="max-w-3xl">
          <FadeIn delay={200}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-6">
              <Avatar className="w-[180px] h-[180px] border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105">
                <AvatarImage src={avatarImage} alt="Sacha Brouck" className="object-cover" />
                <AvatarFallback>SB</AvatarFallback>
              </Avatar>
              
              <div className="bg-white/90 rounded-xl p-6 md:p-8 shadow-md flex-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-[#1B1F3B] leading-tight mb-4">
                  Sacha Brouck <span className="block text-2xl md:text-3xl mt-2 text-[#1B1F3B] font-semibold">Data Science & Causal Analytics</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-[#3E4A59] font-normal leading-relaxed mb-0">
                  Turning data into predictions, automation and business clarity
                </p>
              </div>
            </div>
            
            <div className="relative bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                {description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-slate-700 hover:bg-slate-800 transition-colors flex items-center gap-2 px-6 py-6 rounded-none"
                asChild
              >
                <a href="https://www.linkedin.com/in/sacha-brouck/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-2 px-6 py-6 rounded-none"
                asChild
              >
                <a href="https://github.com/SBrouck" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-2 px-6 py-6 rounded-none" 
                asChild 
              > 
                <a href="https://substack.com/@sachabrouck" target="_blank" rel="noopener noreferrer"> 
                  <BookOpen className="w-5 h-5" /> 
                  <span>Substack</span> 
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
