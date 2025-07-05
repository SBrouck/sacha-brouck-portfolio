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

  const videoSrc = "/images/Kurauto 30.MP4";

  return (
    <section id="kurauto" className={cn('py-20 md:py-32 bg-white', className)}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-playfair mb-8 text-center">The Kurauto Journey</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn delay={100}>
              <div className="relative w-full mb-8">
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
                  <video 
                    src={videoSrc}
                    className="w-full h-auto max-h-[600px] object-cover"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                </div>
              </div>
            </FadeIn>
            
            <div className="space-y-6">
              <FadeIn delay={150}>
                <p className="text-lg text-gray-700">
                  Kurauto was born from the idea of merging sustainability with mobile convenience. 
                  As founder, I built the company from zero — from product design to fundraising and scaling operations.
                </p>
              </FadeIn>
              
              <FadeIn delay={200}>
                <ul className="space-y-3 mt-6">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-terracotta mr-3">—</span>
                      <span className="text-gray-600">{achievement}</span>
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
