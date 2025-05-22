
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real app, you would send this data to a server
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

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
              >
                Send Message
              </Button>
            </form>
          </FadeIn>
          
          <FadeIn delay={150}>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-terracotta transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-terracotta transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              
              <a 
                href="mailto:contact@example.com" 
                className="flex items-center gap-2 text-gray-700 hover:text-terracotta transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contact@example.com</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
