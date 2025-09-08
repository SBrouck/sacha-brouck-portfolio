import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface PassionsProps {
  className?: string;
}

const Passions: React.FC<PassionsProps> = ({ className }) => {
  return (
    <section id="passions" className={cn('py-20 md:py-32 bg-gray-50', className)}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-playfair mb-8 text-center">Passions & Engagement</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Football Section */}
            <FadeIn delay={100}>
              <Card className="border-0 shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">⚽</span>
                    <h3 className="text-2xl font-playfair font-semibold">Football (or soccer 😉)</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    I've played football since I could walk. I've coached kids, played tournaments, and shared a lot of laughs (and bruises) along the way. It keeps me grounded and connected — it's my way of recharging.
                  </p>
                  
                  <Carousel className="w-full">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="p-1">
                          <div className="overflow-hidden rounded-lg">
                            <img 
                              src="/images/po1.JPG"
                              alt="Football moment 1"
                              className="w-full h-64 object-cover"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="p-1">
                          <div className="overflow-hidden rounded-lg">
                            <img 
                              src="/images/po2.JPG"
                              alt="Football moment 2"
                              className="w-full h-64 object-cover"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="p-1">
                          <div className="overflow-hidden rounded-lg">
                            <img 
                              src="/images/foot1.jpg"
                              alt="Football moment 3"
                              className="w-full h-64 object-cover object-top"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <CarouselPrevious className="relative inset-auto h-8 w-8 rounded-full" />
                      <CarouselNext className="relative inset-auto h-8 w-8 rounded-full" />
                    </div>
                  </Carousel>
                </CardContent>
              </Card>
            </FadeIn>
            
            {/* Association Section */}
            <FadeIn delay={200}>
              <Card className="border-0 shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">🌍</span>
                    <h3 className="text-2xl font-playfair font-semibold">Les Étoiles d'Élonga</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Les Étoiles d'Élonga supports young Congolese entrepreneurs in developing their international business projects. We provide mentorship and resources to help them scale innovative ideas into successful ventures on the global stage.
                  </p>
                  
                  <Carousel className="w-full">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="p-1">
                          <div className="overflow-hidden rounded-lg">
                            <img 
                              src="/images/elongasalon.jpg"
                              alt="Les Étoiles d'Élonga Salon"
                              className="w-full h-64 object-cover"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="p-1">
                          <div className="overflow-hidden rounded-lg">
                            <img 
                              src="/images/elongalogo.jpeg"
                              alt="Les Étoiles d'Élonga Logo"
                              className="w-full h-64 object-contain"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <CarouselPrevious className="relative inset-auto h-8 w-8 rounded-full" />
                      <CarouselNext className="relative inset-auto h-8 w-8 rounded-full" />
                    </div>
                  </Carousel>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Passions; 