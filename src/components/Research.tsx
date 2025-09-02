import React, { useState } from "react";
import { cn } from "@/lib/utils";
import FadeIn from "./animations/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Download, Presentation, TrendingUp, Target, Zap, ChevronDown, ChevronUp } from "lucide-react";

const Research = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="research" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-center">Research</h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-lg text-center mb-8 text-gray-600">
              My master's thesis on causal inference and machine learning for real estate prediction.
            </p>
          </FadeIn>
        </div>
        
        {/* Hero Research Card with GNN Preview */}
        <div className="mb-12">
          <FadeIn delay={150}>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-sm">
                      <img
                        src="/images/GNNillustration.png"
                        alt="Research preview showing GNN architecture"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-3 py-1.5 rounded-full text-sm font-semibold mb-3">
                      <Download className="w-4 h-4" />
                      Master's Thesis
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 font-playfair">
                      Causal Inference from Multi-Source Weak Signals
                    </h3>
                    <p className="text-gray-600 mb-3 text-base">
                      Off-market real estate prediction using advanced ML pipeline. 
                      Achieved 95.6% PR-AUC with 41,419 parcel-months and 12 signal families.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center lg:justify-start">
                      <span className="px-2 py-1 bg-gray-100 border border-terracotta text-xs rounded-full text-terracotta font-semibold">
                        XGBoost
                      </span>
                      <span className="px-2 py-1 bg-gray-100 border border-navy text-xs rounded-full text-navy font-semibold">
                        Causal Inference
                      </span>
                      <span className="px-2 py-1 bg-gray-100 border border-terracotta text-xs rounded-full text-terracotta font-semibold">
                        Real Estate
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                      <Button 
                        size="sm"
                        className="bg-terracotta hover:bg-navy transition-colors flex items-center gap-2"
                        asChild
                      >
                        <a
                          href="https://drive.google.com/file/d/1Fdzexf5-ZKV7-fLiF8hAh8XPWQzZSwc8/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download className="w-4 h-4" />
                          Download Paper
                        </a>
                      </Button>
                      <Button 
                        size="sm"
                        variant="outline"
                        className="border-navy text-navy hover:bg-navy hover:text-white transition-colors flex items-center gap-2"
                        asChild
                      >
                        <a
                          href="https://drive.google.com/file/d/1hXQwaVCWd_2LrCrLkiGyVJLHOeVa-xHz/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Presentation className="w-4 h-4" />
                          Defense Slides
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Show More Button */}
        <div className="text-center mb-8">
          <FadeIn delay={200}>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowDetails(!showDetails)}
              className="border-navy text-navy hover:bg-navy hover:text-white transition-colors flex items-center gap-2"
            >
              {showDetails ? (
                <>
                  <ChevronUp className="w-5 h-5" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5" />
                  Show More Details
                </>
              )}
            </Button>
          </FadeIn>
        </div>

        {/* Collapsible Detailed Sections */}
        {showDetails && (
          <>
            {/* Key Results Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <FadeIn delay={250}>
                <Card className="border-0 shadow-sm h-full hover:shadow-md transition-shadow group hover:border-terracotta border border-transparent">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6 text-navy" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-navy transition-colors font-playfair">Data Scale</h3>
                    <p className="text-sm text-gray-600">
                      <strong className="text-navy">41,419</strong> parcel–months<br />
                      <strong className="text-navy">12</strong> signal families<br />
                      <strong className="text-navy">1.24M</strong> raw records
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
              
              <FadeIn delay={300}>
                <Card className="border-0 shadow-sm h-full hover:shadow-md transition-shadow group hover:border-terracotta border border-transparent">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Target className="w-6 h-6 text-terracotta" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-navy transition-colors font-playfair">Performance</h3>
                    <p className="text-sm text-gray-600">
                      <strong className="text-navy">PR-AUC:</strong> 0.956<br />
                      <strong className="text-navy">ROC-AUC:</strong> 0.981<br />
                      <strong className="text-navy">Prec@100:</strong> 1.00
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
              
              <FadeIn delay={350}>
                <Card className="border-0 shadow-sm h-full hover:shadow-md transition-shadow group hover:border-terracotta border border-transparent">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-navy" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-navy transition-colors font-playfair">Methodology</h3>
                    <p className="text-sm text-gray-600">
                      Month-blocked CV<br />
                      Tripwires & integrity<br />
                      Isotonic calibration
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            {/* Research Insights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <FadeIn delay={400}>
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow group hover:border-terracotta border border-transparent">
                  <CardContent className="p-4">
                    <img
                      src="/images/lofo_by_family_corrected.png"
                      alt="LOFO impact analysis showing PR-AUC delta with 95% month-block confidence intervals"
                      className="w-full h-auto rounded-lg mb-3"
                    />
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-navy transition-colors font-playfair">LOFO Impact Analysis</h3>
                    <p className="text-sm text-gray-600">
                      Leave-One-Family-Out (LOFO) impact showing PR-AUC Δ with 95% month-block confidence intervals. 
                      Reveals which signal families are most critical for prediction performance.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
              
              <FadeIn delay={450}>
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow group hover:border-terracotta border border-transparent">
                  <CardContent className="p-4">
                    <img
                      src="/images/shap_family_bar_corrected.png"
                      alt="SHAP importance analysis by signal family showing total feature importance"
                      className="w-full h-auto rounded-lg mb-3"
                    />
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-navy transition-colors font-playfair">SHAP Feature Importance</h3>
                    <p className="text-sm text-gray-600">
                      Total SHAP importance by family with direction consistent with domain priors. 
                      Shows which features contribute most to model decisions.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            {/* Key Findings & Next Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FadeIn delay={500}>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Key Findings</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-navy">
                      <strong className="text-navy">Broker activity:</strong> Indispensable for prediction
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-terracotta">
                      <strong className="text-terracotta">DVF/tenure:</strong> Lifts Top-K performance
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-navy">
                      <strong className="text-navy">Permits:</strong> Orthogonal (targeting different properties)
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-terracotta">
                      <strong className="text-terracotta">3D distress:</strong> Better handled via expert triage
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={550}>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Future Directions</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-navy" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Spatial GNN</h4>
                          <p className="text-sm text-gray-600">GraphSAGE/GAT for neighborhood relationships</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-terracotta/10 rounded-lg flex items-center justify-center">
                          <Target className="w-4 h-4 text-terracotta" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">California Replication</h4>
                          <p className="text-sm text-gray-600">Validate findings on US real estate market</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center">
                          <Zap className="w-4 h-4 text-navy" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Deployment</h4>
                          <p className="text-sm text-gray-600">Production pipeline for real-world application</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Research;
