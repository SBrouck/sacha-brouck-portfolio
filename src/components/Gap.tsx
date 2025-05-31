import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Button } from './ui/button';
import gapImage from '@/assets/images/dabbf929-5dd0-4794-a011-fe43bf4b3418.png';

interface GapProps {
  className?: string;
}

const Gap: React.FC<GapProps> = ({ className }) => {
  const [message, setMessage] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  React.useEffect(() => {
    const messages = [
      "Turning data into predictions",
      "Automating business processes",
      "Driving strategic decisions"
    ];
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      setMessage(messages[currentIndex]);
      currentIndex = (currentIndex + 1) % messages.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the email subscription
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className={cn('relative py-24 overflow-hidden', className)}>
      <div className="absolute inset-0 -z-10">
        <img 
          src={gapImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
              Let's Connect
            </h2>
            
            <p className="text-xl text-white/90 mb-8">
              {message}
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-terracotta hover:bg-navy transition-colors px-6 py-3 rounded-lg"
                >
                  Subscribe
                </Button>
              </div>
            </form>

            {isSubscribed && (
              <p className="mt-4 text-green-400">
                Thank you for subscribing!
              </p>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Gap;
