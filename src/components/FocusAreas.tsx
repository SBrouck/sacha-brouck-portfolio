import React from 'react';
import FadeIn from '@/components/animations/FadeIn';
import { BrainCircuit, FlaskConical, LineChart } from 'lucide-react';

const areas = [
  {
    icon: FlaskConical,
    title: 'Causal ML Research',
    description:
      'Weak-signal inference, identification, and calibration for off-market forecasting under noisy, partially observed urban data.',
  },
  {
    icon: BrainCircuit,
    title: 'Intelligent Decision Systems',
    description:
      'Systems that learn and evaluate decisions under delayed feedback, cost-latency trade-offs, and partial observability.',
  },
  {
    icon: LineChart,
    title: 'Applied Data Science',
    description:
      'Recommender systems, pricing analytics, and production pipelines built to translate models into measurable business impact.',
  },
];

const FocusAreas: React.FC = () => {
  return (
    <section className="relative -mt-10 md:-mt-14 pb-4">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-5 md:grid-cols-3">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <FadeIn key={area.title} delay={120 + index * 80}>
                <article className="h-full rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_18px_50px_-30px_rgba(27,31,59,0.45)] backdrop-blur-sm">
                  <div className="mb-4 inline-flex rounded-xl bg-navy/8 p-3 text-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-playfair text-xl text-ink">{area.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{area.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
