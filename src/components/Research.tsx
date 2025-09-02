import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import FadeIn from './animations/FadeIn';

interface ResearchProps {
  className?: string;
}

const Research: React.FC<ResearchProps> = ({ className }) => {
  return (
    <section id="research" className={cn('py-20 px-6 bg-white', className)}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center font-playfair text-[#1B1F3B] mb-8">Featured Research</h2>
        </FadeIn>
        
        {/* Hero Research Card */}
        <FadeIn delay={200}>
          <div className="mb-16">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-sm">
                      <img
                        src="/thesis_images/lofo_by_family_corrected copy.png"
                        alt="Research preview showing LOFO analysis"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F3B]/20 to-transparent" />
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      Master's Thesis
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-playfair text-[#1B1F3B] mb-3">
                      Causal Inference from Multi-Source Weak Signals
                    </h3>
                    <p className="text-gray-600 mb-4 text-lg">
                      Off-market real estate prediction using advanced ML pipeline. 
                      Achieved 95.6% PR-AUC with 41,419 parcel-months and 12 signal families.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                      <span className="px-3 py-1 bg-[#F8F6F2] border border-terracotta text-xs rounded-full text-terracotta font-semibold">
                        XGBoost
                      </span>
                      <span className="px-3 py-1 bg-[#F8F6F2] border border-terracotta text-xs rounded-full text-terracotta font-semibold">
                        Causal Inference
                      </span>
                      <span className="px-3 py-1 bg-[#F8F6F2] border border-terracotta text-xs rounded-full text-terracotta font-semibold">
                        Real Estate
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <a
                        href="/asset_thesis/Causal_Inference_from_Multi_Source_Weak_Signals_in_the_Prediction_of_Off_Market_Real_Estate_Transactions copy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-terracotta text-white rounded-none text-lg font-semibold hover:bg-navy transition-colors text-center"
                      >
                        Download Paper
                      </a>
                      <a
                        href="/asset_thesis/Thesis_Defense_Slides copy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-[#1B1F3B] text-white rounded-none text-lg font-semibold hover:bg-navy transition-colors text-center"
                      >
                        Defense Slides
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </FadeIn>

        {/* Key Results Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FadeIn delay={400}>
            <Card className="border-0 shadow-sm h-full hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center group">
                <h3 className="text-xl font-bold font-playfair text-[#1B1F3B] mb-3 group-hover:text-terracotta transition-colors">Data Scale</h3>
                <p className="text-gray-600">
                  <strong className="text-[#1B1F3B]">41,419</strong> parcel–months<br />
                  <strong className="text-[#1B1F3B]">12</strong> signal families<br />
                  <strong className="text-[#1B1F3B]">1.24M</strong> raw records
                </p>
              </CardContent>
            </Card>
          </FadeIn>
          
          <FadeIn delay={500}>
            <Card className="border-0 shadow-sm h-full hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center group">
                <h3 className="text-xl font-bold font-playfair text-[#1B1F3B] mb-3 group-hover:text-terracotta transition-colors">Performance</h3>
                <p className="text-gray-600">
                  <strong className="text-[#1B1F3B]">PR-AUC:</strong> 0.956<br />
                  <strong className="text-[#1B1F3B]">ROC-AUC:</strong> 0.981<br />
                  <strong className="text-[#1B1F3B]">Prec@100:</strong> 1.00
                </p>
              </CardContent>
            </Card>
          </FadeIn>
          
          <FadeIn delay={600}>
            <Card className="border-0 shadow-sm h-full hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center group">
                <h3 className="text-xl font-bold font-playfair text-[#1B1F3B] mb-3 group-hover:text-terracotta transition-colors">Methodology</h3>
                <p className="text-gray-600">
                  Month-blocked CV<br />
                  Tripwires & integrity<br />
                  Isotonic calibration
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Research Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <FadeIn delay={700}>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow group">
              <CardContent className="p-6">
                <img
                  src="/thesis_images/lofo_by_family_corrected copy.png"
                  alt="LOFO impact analysis showing PR-AUC delta with 95% month-block confidence intervals"
                  className="w-full h-auto rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold font-playfair text-[#1B1F3B] mb-2 group-hover:text-terracotta transition-colors">LOFO Impact Analysis</h3>
                <p className="text-gray-600">
                  Leave-One-Family-Out (LOFO) impact showing PR-AUC Δ with 95% month-block confidence intervals. 
                  Reveals which signal families are most critical for prediction performance.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
          
          <FadeIn delay={800}>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow group">
              <CardContent className="p-6">
                <img
                  src="/thesis_images/shap_family_bar_corrected copy.png"
                  alt="SHAP importance analysis by signal family showing total feature importance"
                  className="w-full h-auto rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold font-playfair text-[#1B1F3B] mb-2 group-hover:text-terracotta transition-colors">SHAP Feature Importance</h3>
                <p className="text-gray-600">
                  Total SHAP importance by family with direction consistent with domain priors. 
                  Shows which features contribute most to model decisions.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Key Findings & Next Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn delay={900}>
            <div>
              <h3 className="text-2xl font-bold font-playfair text-[#1B1F3B] mb-6">Key Findings</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F6F2] rounded-lg border-l-4 border-[#1B1F3B]">
                  <strong className="text-[#1B1F3B]">Broker activity:</strong> Indispensable for prediction
                </div>
                <div className="p-4 bg-[#F8F6F2] rounded-lg border-l-4 border-terracotta">
                  <strong className="text-terracotta">DVF/tenure:</strong> Lifts Top-K performance
                </div>
                <div className="p-4 bg-[#F8F6F2] rounded-lg border-l-4 border-[#1B1F3B]">
                  <strong className="text-[#1B1F3B]">Permits:</strong> Orthogonal (targeting different properties)
                </div>
                <div className="p-4 bg-[#F8F6F2] rounded-lg border-l-4 border-terracotta">
                  <strong className="text-terracotta">3D distress:</strong> Better handled via expert triage
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={1000}>
            <div>
              <h3 className="text-2xl font-bold font-playfair text-[#1B1F3B] mb-6">Future Directions</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F6F2] rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#1B1F3B] rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold font-playfair text-[#1B1F3B]">Spatial GNN</h4>
                      <p className="text-sm text-gray-600">GraphSAGE/GAT for neighborhood relationships</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-[#F8F6F2] rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold font-playfair text-[#1B1F3B]">California Replication</h4>
                      <p className="text-sm text-gray-600">Validate findings on US real estate market</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-[#F8F6F2] rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold font-playfair text-[#1B1F3B]">Deployment</h4>
                      <p className="text-sm text-gray-600">Production pipeline for real-world application</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Research;
