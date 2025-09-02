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
        <div className="mb-8">
          <FadeIn delay={150}>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-sm bg-gray-50 flex items-center justify-center">
                      <img
                        src="/images/GNNillustration.png"
                        alt="Research preview showing GNN architecture"
                        className="max-w-[95%] max-h-[95%] object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent pointer-events-none" />
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 font-playfair">
                      Causal Inference from Multi-Source Weak Signals
                    </h3>
                    <p className="text-gray-600 mb-4 text-base">
                      Off-market real estate prediction using advanced ML pipeline.
                      Achieved 95.6% PR-AUC with 41,419 parcel-months and 12 signal families.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-3 py-1 rounded-full text-sm font-medium border border-terracotta/20">
                        XGBoost
                      </span>
                      <span className="inline-flex items-center gap-2 bg-navy/10 text-navy px-3 py-1 rounded-full text-sm font-medium border border-navy/20">
                        Causal Inference
                      </span>
                      <span className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-3 py-1 rounded-full text-sm font-medium border border-terracotta/20">
                        Real Estate
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 mb-4">
                      <Button className="bg-terracotta hover:bg-terracotta/90 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download Paper
                      </Button>
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                        <Presentation className="w-4 h-4 mr-2" />
                        Defense Slides
                      </Button>
                    </div>
                    
                    {/* Show More Button - Intégré dans le bloc principal */}
                    <div className="flex justify-center lg:justify-start">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowDetails(!showDetails)}
                        className="text-gray-600 hover:text-navy hover:bg-navy/5 transition-colors flex items-center gap-2 px-4 py-2"
                      >
                        {showDetails ? (
                          <>
                            <ChevronUp className="w-4 h-4" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4" />
                            Show More Details
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Contenu détaillé intégré DANS le bloc principal */}
                {showDetails && (
                  <>
                    {/* Séparateur visuel */}
                    <div className="border-t border-gray-200 my-6"></div>
                    
                    {/* Key Results Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <FadeIn delay={250}>
                        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 bg-navy/10 rounded-lg">
                                <TrendingUp className="w-5 h-5 text-navy" />
                              </div>
                              <h4 className="font-semibold text-gray-900">Data Scale</h4>
                            </div>
                            <ul className="space-y-1 text-sm text-gray-600">
                              <li>• 41,419 parcel-months</li>
                              <li>• 12 signal families</li>
                              <li>• 1.24M raw records</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </FadeIn>

                      <FadeIn delay={300}>
                        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 bg-terracotta/10 rounded-lg">
                                <Target className="w-5 h-5 text-terracotta" />
                              </div>
                              <h4 className="font-semibold text-gray-900">Performance</h4>
                            </div>
                            <ul className="space-y-1 text-sm text-gray-600">
                              <li>• PR-AUC: 0.956</li>
                              <li>• ROC-AUC: 0.981</li>
                              <li>• Prec@100: 1.00</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </FadeIn>

                      <FadeIn delay={350}>
                        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 bg-navy/10 rounded-lg">
                                <Zap className="w-5 h-5 text-navy" />
                              </div>
                              <h4 className="font-semibold text-gray-900">Methodology</h4>
                            </div>
                            <ul className="space-y-1 text-sm text-gray-600">
                              <li>• Month-blocked CV</li>
                              <li>• Tripwires & integrity</li>
                              <li>• Isotonic calibration</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </FadeIn>
                    </div>

                    {/* Research Insights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <FadeIn delay={400}>
                        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-3">LOFO Family Analysis</h4>
                            <div className="relative w-full rounded-lg">
                              <img
                                src="/images/lofo_by_family_corrected.png"
                                alt="LOFO family analysis results"
                                className="w-full h-auto object-contain"
                              />
                            </div>
                            <p className="text-sm text-gray-600 mt-3">
                              Family-based feature importance analysis showing signal strength variations.
                            </p>
                          </CardContent>
                        </Card>
                      </FadeIn>

                      <FadeIn delay={450}>
                        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-3">SHAP Feature Analysis</h4>
                            <div className="relative w-full rounded-lg">
                              <img
                                src="/images/shap_family_bar_corrected.png"
                                alt="SHAP feature importance analysis"
                                className="w-full h-auto object-contain"
                              />
                            </div>
                            <p className="text-sm text-gray-600 mt-3">
                              SHAP values analysis revealing key predictive features and their contributions.
                            </p>
                          </CardContent>
                        </Card>
                      </FadeIn>
                    </div>

                    {/* Key Findings & Next Steps */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <FadeIn delay={500}>
                        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-3">Key Findings</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                              <li>• Multi-source weak signals significantly improve prediction accuracy</li>
                              <li>• Family-based feature engineering enhances model robustness</li>
                              <li>• Month-blocked cross-validation prevents data leakage</li>
                              <li>• Isotonic calibration improves probability estimates</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </FadeIn>

                      <FadeIn delay={550}>
                        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-3">Next Steps</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                              <li>• Extend to other real estate markets</li>
                              <li>• Implement real-time prediction pipeline</li>
                              <li>• Explore deep learning architectures</li>
                              <li>• Develop causal discovery methods</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </FadeIn>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Suppression de l'ancien contenu détaillé externe */}
        
        {/* Collapsible Detailed Sections - SUPPRIMÉ */}
      </div>
    </section>
  );
};

export default Research;
