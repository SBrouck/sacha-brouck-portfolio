import React, { useState } from 'react';
import ArticleSection from '@/components/layout/ArticleSection';
import { Github, Linkedin, Mail, PhoneCall, BookOpen, type LucideIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactChannel {
  icon: LucideIcon;
  label: string;
  href: string;
  value: string;
  external?: boolean;
}

const contactChannels: ContactChannel[] = [
  {
    icon: PhoneCall,
    label: 'Phone',
    href: 'tel:+12066832509',
    value: '+1 (206) 683 2509',
  },
  {
    icon: Mail,
    label: 'Email (UW)',
    href: 'mailto:sbrouck@uw.edu',
    value: 'sbrouck@uw.edu',
  },
  {
    icon: Mail,
    label: 'Email (Personal)',
    href: 'mailto:sachabrou@gmail.com',
    value: 'sachabrou@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/SBrouck',
    value: 'github.com/SBrouck',
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sacha-brouck',
    value: 'linkedin.com/in/sacha-brouck',
    external: true,
  },
  {
    icon: BookOpen,
    label: 'Substack',
    href: 'https://substack.com/@sachabrouck',
    value: 'substack.com/@sachabrouck',
    external: true,
  },
];

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/manjgqvy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: 'Message sent',
          description: "Thanks for reaching out. I'll get back to you shortly.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch {
      toast({
        title: 'Something went wrong',
        description: "Your message couldn't be sent. Please try again later.",
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ArticleSection number="4" title="Contact">
      <p className="article-lead">
        Always open to a coffee chat, whether for collaborations, research conversations, or
        opportunities.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form-grid">
          <div>
            <label htmlFor="name" className="contact-field-label">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contact-input"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="contact-field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="contact-input"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="contact-field-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="contact-input contact-textarea"
            required
          />
        </div>

        <button type="submit" className="article-button" disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Send message'}
        </button>
      </form>

      <div className="contact-channels">
        <p className="keywords-label">Elsewhere</p>
        <ul className="contact-channel-list">
          {contactChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  className="contact-channel-link"
                  {...(channel.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <Icon size={14} className="shrink-0 text-neutral-500" />
                  <span className="contact-channel-label">{channel.label}</span>
                  <span className="contact-channel-value">{channel.value}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </ArticleSection>
  );
};

export default Contact;
