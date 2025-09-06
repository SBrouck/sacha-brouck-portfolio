import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-navy">
              Automation & AI Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founder of MOSAIC, a student-led agency specializing in enterprise AI solutions and intelligent automation. 
              We build secure, local AI systems and deploy intelligent agents to transform business operations.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* MOSAIC Agency Card */}
          <FadeIn delay={200}>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy to-terracotta rounded-xl flex items-center justify-center">
                    <img 
                      src="/Projects images/AUTOMATION/mosaiclogo_transparent.png" 
                      alt="MOSAIC Logo" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair text-navy group-hover:text-terracotta transition-colors">
                      MOSAIC Agency
                    </h3>
                    <p className="text-sm text-gray-500">Student-Led AI Solutions</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded MOSAIC to bridge the gap between cutting-edge AI technology and enterprise needs. 
                  We specialize in building secure, local AI systems and intelligent automation workflows 
                  that keep data private while maximizing operational efficiency.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium">Data Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium">Performance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium">Local AI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-orange-600" />
                    <span className="text-sm font-medium">Automation</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <a 
                    href="https://www.use-mosaic.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg hover:bg-navy/90 transition-colors group/link"
                  >
                    <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform" />
                    <span>Visit MOSAIC Website</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Local AI Solutions Card */}
          <FadeIn delay={300}>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair text-navy group-hover:text-terracotta transition-colors">
                      Local AI Solutions
                    </h3>
                    <p className="text-sm text-gray-500">OLLAMA-Powered Intelligence</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Deploy secure, local AI systems using OLLAMA for enterprise environments. 
                  Our solutions provide intelligent assistance while keeping sensitive data 
                  completely private and secure within your infrastructure.
                </p>

                <div className="bg-gray-100 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
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

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>100% Local Processing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Zap className="w-4 h-4 text-blue-600" />
                    <span>Enterprise-Grade Performance</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Automation Solutions Grid */}
        <FadeIn delay={400}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-playfair mb-4 text-navy">
              Intelligent Automation Solutions
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We build custom automation workflows and AI agents that integrate seamlessly 
              with your existing business processes.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn delay={500}>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-medium mb-3 text-navy">Zapier Integration</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Connect your business tools with intelligent automation workflows 
                  that trigger actions based on data patterns and business rules.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={600}>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-medium mb-3 text-navy">N8N Workflows</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Build complex automation pipelines with N8N that handle data processing, 
                  API integrations, and intelligent decision-making processes.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={700}>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-medium mb-3 text-navy">Secure Deployment</h4>
                <p className="text-sm text-gray-600 mb-4">
                  All solutions are deployed with enterprise-grade security, 
                  ensuring your data remains private and your systems stay protected.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Automation;
