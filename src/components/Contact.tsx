
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Github, Linkedin, Mail, PhoneCall, Database } from 'lucide-react';
import { Separator } from './ui/separator';
import { useToast } from '@/hooks/use-toast';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email via Formspree
      const response = await fetch('https://formspree.io/f/manjgqvy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        // Show success message
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out! I'll get back to you shortly.",
        });
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact channels data
  const contactChannels = [
    {
      icon: <PhoneCall />,
      label: "Téléphone",
      href: "tel:+12066832509",
      value: "+1 (206) 683 2509"
    },
    {
      icon: <Mail />,
      label: "Email (UW)",
      href: "mailto:sbrouck@uw.edu",
      value: "sbrouck@uw.edu"
    },
    {
      icon: <Mail />,
      label: "Email (Personal)",
      href: "mailto:sachabrou@gmail.com",
      value: "sachabrou@gmail.com"
    },
    {
      icon: <Github />,
      label: "GitHub",
      href: "https://github.com/SBrouck",
      value: "github.com/SBrouck"
    },
    {
      icon: <Linkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sacha-brouck",
      value: "linkedin.com/in/sacha-brouck"
    },
    {
      icon: <Database />,
      label: "DataCamp",
      href: "https://www.datacamp.com/portfolio/sachabrouck",
      value: "datacamp.com/portfolio/sachabrouck"
    }
  ];

  return (
    <section id="contact" className={cn('py-20 md:py-32 bg-gray-50', className)}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-playfair mb-8 text-center">Contact</h2>
          </FadeIn>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <FadeIn delay={100}>
            <form onSubmit={handleSubmit} className="space-y-6 mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white border-gray-200 rounded-none"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white border-gray-200 rounded-none"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white border-gray-200 rounded-none min-h-[150px]"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full md:w-auto bg-terracotta hover:bg-navy transition-colors rounded-none py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </FadeIn>
          
          <FadeIn delay={150}>
            <div className="border-t border-gray-200 pt-8 mt-8">
              <h3 className="text-lg font-medium text-gray-800 mb-6">Additional Contact Channels</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {contactChannels.map((channel, index) => (
                  <a 
                    key={index}
                    href={channel.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 transition-colors hover:bg-gray-100 rounded-md group"
                  >
                    <span className="text-gray-500 group-hover:text-terracotta transition-colors">
                      {channel.icon}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-gray-700">{channel.label}</p>
                      <p className="text-xs text-gray-500 group-hover:underline">{channel.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
