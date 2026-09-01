import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleSection from '@/components/layout/ArticleSection';

const researchLines = [
  {
    id: 'research',
    number: '2',
    title: 'Causal ML & Weak-Signal Research',
    description:
      'Identification-first causal modeling, calibration, and off-market forecasting under noisy, partially observed urban signals.',
    href: '/research',
  },
  {
    id: 'inference-systems',
    number: '3.1',
    title: 'Inference Engine Engineering',
    badge: 'Current focus',
    description:
      'From-scratch serving for open-weight models: CUDA kernels, memory orchestration, parallelism, and scheduler design.',
    href: '/work?dossier=inference-systems',
  },
  {
    id: 'decision-systems',
    number: '3.2',
    title: 'Intelligent Decision Systems',
    description:
      'Decision policies under delayed feedback, partial observability, and explicit cost–latency trade-offs.',
    href: '/work?dossier=decision-systems',
  },
  {
    id: 'mathematical-modeling',
    number: '3.3',
    title: 'Mathematical Modeling & Predictive ML',
    description:
      'Formal specification, forecasting, and deep learning policies with measurable backtest discipline.',
    href: '/work?dossier=mathematical-modeling',
  },
  {
    id: 'applied-data-science',
    number: '3.4',
    title: 'Applied Quantitative Data Science',
    description:
      'Recommender systems, pricing analytics, and probabilistic pipelines with quantified lift over baselines.',
    href: '/work?dossier=applied-data-science',
  },
];

const SectionIndex: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ArticleSection number="1" title="Research Lines & Navigation" className="border-t-0">
      <p className="article-lead">
        Each section lives on its own page. Select a line below to open the corresponding research
        page or artifact dossier without loading the full portfolio at once.
      </p>

      <ol className="line-index">
        {researchLines.map((line) => (
          <li key={line.id} className="line-index-item">
            <button
              type="button"
              className="line-index-button"
              onClick={() => navigate(line.href)}
            >
              <span className="line-index-number">{line.number}</span>
              <span className="line-index-content">
                <span className="line-index-title">
                  {line.title}
                  {line.badge && <span className="dossier-badge ml-2">{line.badge}</span>}
                </span>
                <span className="line-index-description">{line.description}</span>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </ArticleSection>
  );
};

export default SectionIndex;
