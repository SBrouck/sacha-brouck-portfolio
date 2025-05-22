
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

  const images = [
    {
      src: "/lovable-uploads/47f9a1d0-4458-400a-8fc0-79adf093cf18.png",
      caption: "Kurauto founding team",
    },
    {
      src: "/lovable-uploads/dabbf929-5dd0-4794-a011-fe43bf4b3418.png",
      caption: "Product showcase",
    },
    {
      src: "/lovable-uploads/af28398b-9e23-4e2b-9de1-bda457e09fd8.png",
      caption: "Partnership meeting",
    }
  ];

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
                <Carousel className="w-full max-w-full">
                  <CarouselContent>
                    {images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
                            <img 
                              src={image.src}
                              alt={image.caption}
                              className="w-full aspect-[4/3] object-cover"
                            />
                            {image.caption && (
                              <div className="p-3 text-center text-sm text-gray-600">
                                {image.caption}
                              </div>
                            )}
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <CarouselPrevious className="relative inset-auto h-8 w-8 rounded-full" />
                    <CarouselNext className="relative inset-auto h-8 w-8 rounded-full" />
                  </div>
                </Carousel>
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
