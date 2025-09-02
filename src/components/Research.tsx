import React from "react";

const Research = () => {
  return (
    <section id="research" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#1F1F1F] mb-8">Featured Research</h2>
        
        {/* Hero Research Card */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#006241] to-[#C5A572] rounded-2xl p-1 shadow-2xl">
            <div className="bg-white rounded-xl p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/thesis_images/lofo_by_family_corrected copy.png"
                      alt="Research preview showing LOFO analysis"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#006241]/20 to-transparent" />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 text-[#C5A572] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <span>🎓</span> Master's Thesis
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-3">
                    Causal Inference from Multi-Source Weak Signals
                  </h3>
                  <p className="text-gray-600 mb-4 text-lg">
                    Off-market real estate prediction using advanced ML pipeline. 
                    Achieved 95.6% PR-AUC with 41,419 parcel-months and 12 signal families.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                    <span className="px-3 py-1 bg-[#F8F6F2] border border-[#C5A572] text-xs rounded-full text-[#C5A572] font-semibold">
                      XGBoost
                    </span>
                    <span className="px-3 py-1 bg-[#F8F6F2] border border-[#C5A572] text-xs rounded-full text-[#C5A572] font-semibold">
                      Causal Inference
                    </span>
                    <span className="px-3 py-1 bg-[#F8F6F2] border border-[#C5A572] text-xs rounded-full text-[#C5A572] font-semibold">
                      Real Estate
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a
                      href="/asset_thesis/Causal_Inference_from_Multi_Source_Weak_Signals_in_the_Prediction_of_Off_Market_Real_Estate_Transactions copy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[#C5A572] text-white rounded-full text-lg font-semibold hover:bg-[#B08D5F] transition-all duration-300 text-center"
                    >
                      📄 Download Paper
                    </a>
                    <a
                      href="/asset_thesis/Thesis_Defense_Slides copy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[#006241] text-white rounded-full text-lg font-semibold hover:bg-[#004D33] transition-all duration-300 text-center"
                    >
                      📊 Defense Slides
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Results Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 text-center group hover:border-[#C5A572] border border-transparent">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-[#1F1F1F] mb-3 group-hover:text-[#006241] transition-colors">Data Scale</h3>
            <p className="text-gray-600">
              <strong className="text-[#006241]">41,419</strong> parcel–months<br />
              <strong className="text-[#006241]">12</strong> signal families<br />
              <strong className="text-[#006241]">1.24M</strong> raw records
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 text-center group hover:border-[#C5A572] border border-transparent">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-[#1F1F1F] mb-3 group-hover:text-[#006241] transition-colors">Performance</h3>
            <p className="text-gray-600">
              <strong className="text-[#006241]">PR-AUC:</strong> 0.956<br />
              <strong className="text-[#006241]">ROC-AUC:</strong> 0.981<br />
              <strong className="text-[#006241]">Prec@100:</strong> 1.00
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 text-center group hover:border-[#C5A572] border border-transparent">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold text-[#1F1F1F] mb-3 group-hover:text-[#006241] transition-colors">Methodology</h3>
            <p className="text-gray-600">
              Month-blocked CV<br />
              Tripwires & integrity<br />
              Isotonic calibration
            </p>
          </div>
        </div>

        {/* Research Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group hover:border-[#C5A572] border border-transparent">
            <img
              src="/thesis_images/lofo_by_family_corrected copy.png"
              alt="LOFO impact analysis showing PR-AUC delta with 95% month-block confidence intervals"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-[#1F1F1F] mb-2 group-hover:text-[#006241] transition-colors">LOFO Impact Analysis</h3>
            <p className="text-gray-600">
              Leave-One-Family-Out (LOFO) impact showing PR-AUC Δ with 95% month-block confidence intervals. 
              Reveals which signal families are most critical for prediction performance.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group hover:border-[#C5A572] border border-transparent">
            <img
              src="/thesis_images/shap_family_bar_corrected copy.png"
              alt="SHAP importance analysis by signal family showing total feature importance"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-[#1F1F1F] mb-2 group-hover:text-[#006241] transition-colors">SHAP Feature Importance</h3>
            <p className="text-gray-600">
              Total SHAP importance by family with direction consistent with domain priors. 
              Shows which features contribute most to model decisions.
            </p>
          </div>
        </div>

        {/* Key Findings & Next Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#1F1F1F] mb-6">Key Findings</h3>
            <div className="space-y-4">
              <div className="p-4 bg-[#F8F6F2] rounded-lg border-l-4 border-[#006241]">
                <strong className="text-[#006241]">Broker activity:</strong> Indispensable for prediction
              </div>
              <div className="p-4 bg-[#F8F6F2] rounded-lg border-l-4 border-[#C5A572]">
                <strong className="text-[#C5A572]">DVF/tenure:</strong> Lifts Top-K performance
              </div>
              <div className="p-4 bg-[#F8F6F2] rounded-lg border-l-4 border-[#006241]">
                <strong className="text-[#006241]">Permits:</strong> Orthogonal (targeting different properties)
              </div>
              <div className="p-4 bg-[#F8F6F2] rounded-lg border-l-4 border-[#C5A572]">
                <strong className="text-[#C5A572]">3D distress:</strong> Better handled via expert triage
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#1F1F1F] mb-6">Future Directions</h3>
            <div className="space-y-4">
              <div className="p-4 bg-[#F8F6F2] rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🧠</span>
                  <div>
                    <h4 className="font-semibold text-[#1F1F1F]">Spatial GNN</h4>
                    <p className="text-sm text-gray-600">GraphSAGE/GAT for neighborhood relationships</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-[#F8F6F2] rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌎</span>
                  <div>
                    <h4 className="font-semibold text-[#1F1F1F]">California Replication</h4>
                    <p className="text-sm text-gray-600">Validate findings on US real estate market</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-[#F8F6F2] rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <h4 className="font-semibold text-[#1F1F1F]">Deployment</h4>
                    <p className="text-sm text-gray-600">Production pipeline for real-world application</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
