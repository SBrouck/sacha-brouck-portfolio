import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/animations/FadeIn';
import { cn } from '@/lib/utils';
import { Bot, Zap, Shield, ExternalLink, Brain, Cpu } from 'lucide-react';

interface AutomationProps {
  className?: string;
}

const Automation: React.FC<AutomationProps> = ({ className }) => {
  return (
    <section id="automation" className={cn('py-20 md:py-32 bg-gray-50', className)}>
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn delay={100}>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-playfair mb-3 text-navy">
              AI Automation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founder of MOSAIC, a student-led agency specializing in enterprise AI solutions and intelligent automation. 
              We build secure, local AI systems using OLLAMA and deploy intelligent agents via Zapier/N8N to transform business operations.
            </p>
          </div>
        </FadeIn>

        {/* MOSAIC Logo Section */}
        <FadeIn delay={200}>
          <div className="text-center mb-8">
            <div className="flex justify-center mb-3">
              <div className="bg-black rounded-2xl p-1 shadow-2xl">
                <img 
                  src="/Projects images/AUTOMATION/mosaiclogo_transparent copy.png" 
                  alt="MOSAIC Logo" 
                  className="w-60 h-60 md:w-76 md:h-76 object-contain"
                />
              </div>
            </div>            <h3 className="text-2xl md:text-3xl font-playfair text-navy mb-2">
              MOSAIC Agency
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-3">
              Student-led agency bridging cutting-edge AI technology with enterprise needs. 
              We specialize in secure, local AI systems and intelligent automation workflows.
            </p>
            <a 
              href="https://www.use-mosaic.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0 bg-navy text-white px-8 py-3 rounded-lg hover:bg-navy/90 transition-colors group/link"
            >
              <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
              <span>Visit MOSAIC Website</span>
            </a>
          </div>
        </FadeIn>

        {/* Two Main Solutions */}
        <div className="grid lg:grid-cols-2 gap-02">
          {/* Local AI Solutions */}
          <FadeIn delay={300}>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-8">
                <div className="flex items-center gap-0 mb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy to-terracotta rounded-xl flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair text-navy group-hover:text-terracotta transition-colors">
                      Local AI Solutions
                    </h3>
                    <p className="text-sm text-gray-500">OLLAMA-Powered Intelligence</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-3 leading-relaxed">
                  Deploy secure, local AI systems using OLLAMA for enterprise environments. 
                  Keep sensitive data completely private within your infrastructure.
                </p>

                <div className="bg-gray-100 rounded-lg p-0 mb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-navy rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>User:</strong> "What is the company template for bank memorandum?"
                      </p>
                      <p className="text-sm text-gray-800">
                        <strong>AI Assistant:</strong> "You can find the right template in the 
                        <span className="text-navy font-medium"> Finance Templates </span>folder → 
                        <span className="text-navy font-medium"> Banking_Documents.docx </span>"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-0 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-navy" />
                  <span>100% Local Processing</span>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Intelligent Agents */}
          <FadeIn delay={400}>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-8">
                <div className="flex items-center gap-0 mb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy to-terracotta rounded-xl flex items-center justify-center">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair text-navy group-hover:text-terracotta transition-colors">
                      Intelligent Agents
                    </h3>
                    <p className="text-sm text-gray-500">Zapier & N8N Automation</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-3 leading-relaxed">
                  Build intelligent automation workflows that connect your business tools 
                  and trigger actions based on data patterns and business rules.
                </p>

                <div className="grid grid-cols-2 gap-0 mb-3">
                  <div className="flex items-center gap-0">
                    <Zap className="w-5 h-5 text-navy" />
                    <span className="text-sm font-medium">Zapier Integration</span>
                  </div>
                  <div className="flex items-center gap-0">
                    <Cpu className="w-5 h-5 text-terracotta" />
                    <span className="text-sm font-medium">N8N Workflows</span>
                  </div>
                  <div className="flex items-center gap-0">
                    <Shield className="w-5 h-5 text-navy" />
                    <span className="text-sm font-medium">Secure Deployment</span>
                  </div>
                  <div className="flex items-center gap-0">
                    <Brain className="w-5 h-5 text-terracotta" />
                    <span className="text-sm font-medium">Smart Triggers</span>
                  </div>
                </div>

                <div className="flex items-center gap-0 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-terracotta" />
                  <span>Enterprise-Grade Performance</span>
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
