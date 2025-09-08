import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FadeIn from './animations/FadeIn';
import { ExternalLink, Brain, Bot, Zap, Cpu, Shield } from 'lucide-react';

interface AutomationProps {
  className?: string;
}

const Automation: React.FC<AutomationProps> = ({ className }) => {
  return (
    <section id="automation" className={cn('py-20 md:py-32 bg-gray-50', className)}>
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-navy">
              AI Automation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founder of MOSAIC, a student-led agency specializing in enterprise AI solutions and intelligent automation. 
              We build secure, local AI systems using OLLAMA and deploy intelligent agents via Zapier/N8N to transform business operations.
            </p>
          </div>
        </FadeIn>

        {/* MOSAIC Link Section */}
        <FadeIn delay={200}>
          <div className="text-center mb-16">
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              MOSAIC is a student-led agency bridging cutting-edge AI technology with enterprise needs. 
              We specialize in secure, local AI systems and intelligent automation workflows.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://www.use-mosaic.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3 rounded-lg hover:bg-navy/90 transition-colors group/link"
              >
                <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                <span>Visit MOSAIC Website</span>
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Local AI Solutions Card */}
          <FadeIn delay={200}>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-navy/10 rounded-lg text-navy">
                    <Brain size={24} />
                  </div>
                  <h3 className="text-xl font-medium font-playfair text-navy group-hover:text-terracotta transition-colors">
                    Local AI Solutions (OLLAMA)
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  We develop and deploy custom, local AI models using OLLAMA, ensuring 100% data privacy and enterprise-grade performance. 
                  These solutions integrate seamlessly into your existing infrastructure, providing intelligent assistance without compromising security.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 mt-auto">
                  <p className="mb-2">User: What is the company template for bank memorandum?</p>
                  <p className="text-navy">AI: You can find the right template in the <span className="font-semibold">Finance Templates folder → Banking_Documents.docx</span></p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Intelligent Agents (Zapier & N8N Automation) */}
          <FadeIn delay={250}>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-terracotta/10 rounded-lg text-terracotta">
                    <Bot size={24} />
                  </div>
                  <h3 className="text-xl font-medium font-playfair text-navy group-hover:text-terracotta transition-colors">
                    Intelligent Agents (Zapier & N8N Automation)
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  We design and implement advanced automation workflows using platforms like Zapier and N8N. 
                  These intelligent agents connect your business tools, automate repetitive tasks, and trigger actions based on data patterns, boosting efficiency and reducing manual effort.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm mt-auto">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-br from-navy to-terracotta text-white shadow-sm">
                    <Zap size={16} /> <span>Zapier Integration</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-br from-navy to-terracotta text-white shadow-sm">
                    <Cpu size={16} /> <span>N8N Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-br from-navy to-terracotta text-white shadow-sm">
                    <Shield size={16} /> <span>Secure Deployment</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-br from-navy to-terracotta text-white shadow-sm">
                    <Bot size={16} /> <span>Smart Triggers</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Automation;
