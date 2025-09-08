import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

interface KurautoJourneyProps {
  className?: string;
}

const KurautoJourney: React.FC<KurautoJourneyProps> = ({ className }) => {
  const achievements = [
    "Raised €37,500 at 15% dilution (AYOMI)",
    "Partnered with Parisian luxury hotels",
    "Scaled to €100K+ revenue in 12 months",
    "Exited at €300K valuation in 2024",
    "Represented the company at VivaTech & Go Entrepreneur"
  ];

  const videoSrc = "/images/Kurauto.MP4";

  return (
    <section id="kurauto" className={cn('py-20 md:py-32 bg-white', className)}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-center">The Kurauto Journey</h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Kurauto is a cleantech company revolutionizing the automotive detailing industry with zero-emission, 
                zero-water technologies. We bring professional car washing services directly to customers, 
                whether you need the service on public streets or in your private parking spot.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn delay={150}>
              <div className="flex justify-center">
                <div
                  style={{
                    width: "320px",
                    maxWidth: "100vw",
                    aspectRatio: "9/16",
                    background: "#000",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/8eFU9nIxVkU"
                    title="Kurauto"
                    width="100%"
                    height="100%"
                    style={{ border: "none", width: "100%", height: "100%" }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </FadeIn>
            
            <div className="space-y-6">
              <FadeIn delay={200}>
                <h3 className="text-xl font-semibold text-navy mb-4 font-playfair">
                  My Founder Journey
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Kurauto was born from the vision of merging sustainability with mobile convenience. 
                  As founder, I built the company from zero — from product design to fundraising and scaling operations.
                </p>
              </FadeIn>
              
              <FadeIn delay={250}>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-terracotta mr-3 mt-1">•</span>
                      <span className="text-gray-600 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KurautoJourney;
