import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Button } from './ui/button';
import { Github, Linkedin } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn('relative min-h-screen flex items-center overflow-hidden py-24', className)}>
      <div className="absolute inset-0 -z-10">
        <img 
          src="/images/a0278ce1-b82d-4ed6-a186-14a9503ef65c.png"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/25"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 py-20 md:py-32 relative z-10 max-w-5xl">
        <div className="max-w-3xl">
          <FadeIn delay={200}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
              <Avatar className="w-[180px] h-[180px] border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105">
                <AvatarImage src="/images/10b7fba5-ef78-49a2-a1f3-cdcd1c33ebe7.png" alt="Sacha Brouck" className="object-cover" />
                <AvatarFallback>SB</AvatarFallback>
              </Avatar>
              
              <div className="bg-white/90 rounded-xl p-6 md:p-8 shadow-md flex-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-[#1B1F3B] leading-tight mb-6">
                  Sacha Brouck <span className="block text-2xl md:text-3xl mt-2 text-[#1B1F3B] font-semibold">Data & Analytics Professional</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-[#3E4A59] font-normal leading-relaxed mb-6">
                  Turning data into predictions, automation and business clarity
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-xl shadow-md -z-10"></div>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl p-6">
                I'm a French data analyst and MSBA candidate at the University of Washington – Foster School of Business. 
                I design and deploy end-to-end data systems that forecast, automate, and drive strategic decisions. 
                With strong foundations in Python, SQL and BI tools, I translate raw data into real business value — at scale, with clarity.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-terracotta hover:bg-navy transition-colors flex items-center gap-2 px-6 py-6 rounded-none"
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
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
