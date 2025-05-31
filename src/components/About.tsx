import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import aboutImage from '@/assets/images/47f9a1d0-4458-400a-8fc0-79adf093cf18.png';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section className={cn('py-24 bg-white', className)}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-terracotta/10 rounded-lg transform rotate-3"></div>
                <img 
                  src={aboutImage}
                  alt="About Sacha Brouck"
                  className="relative rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1B1F3B] mb-6">
                  About Me
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    I'm a data analyst and MSBA candidate at the University of Washington – Foster School of Business. 
                    My passion lies in transforming complex data into actionable insights that drive business decisions.
                  </p>
                  
                  <p>
                    With a strong foundation in Python, SQL, and BI tools, I specialize in designing and deploying 
                    end-to-end data systems that forecast trends, automate processes, and provide strategic clarity.
                  </p>
                  
                  <p>
                    My approach combines technical expertise with business acumen, ensuring that data solutions 
                    not only work technically but also deliver real business value at scale.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
