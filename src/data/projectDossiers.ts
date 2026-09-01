export type ProjectCategory = 'ml' | 'analytics' | 'automation';

export interface ResearchContent {
  subtitle: string;
  paragraphs: string[];
  keywords: string[];
  links: { label: string; href: string }[];
  highlights: { label: string; value: string }[];
}

export interface Project {
  title: string;
  description: string;
  implementation: string;
  githubUrl?: string;
  externalUrl?: string;
  demoUrl?: string;
  articleUrl?: string;
  linkedinUrl?: string;
  isWip?: boolean;
  isInternal?: boolean;
  image?: string;
  category: ProjectCategory;
  videoUrl?: string;
  kaggleUrl?: string;
}

export interface ProjectDossier {
  id: string;
  title: string;
  description: string;
  badge?: string;
  research?: ResearchContent;
  projects: Project[];
}

const thesisResearch: ResearchContent = {
  subtitle: 'Causal Inference from Weak Urban Signals for Off-Market Forecasting',
  paragraphs: [
    'Web-native weak signals are organized into causally motivated families (Selling Pressure, Market Opportunity, and Context & Controls), then mapped to latent drivers through a structural-causal lens on a Paris parcel×month panel built from public registries and targeted scraping.',
    'The pipeline is validity-first: month-blocked cross-validation, leakage tripwires, orthogonality checks, LOFO ablations, and isotonic calibration. Calibrated probabilities feed a utility-aware Top-K policy for ranked actions under real operational constraints.',
  ],
  keywords: [
    'Causal Inference',
    'Weak Signals',
    'Partial Identification',
    'DML',
    'Calibration',
    'Urban Analytics',
  ],
  links: [
    {
      label: 'paper',
      href: 'https://drive.google.com/file/d/1VRNjUvu-SQfPkskecQK6sb_lblRRUsl-/view?usp=sharing',
    },
    {
      label: 'full thesis',
      href: 'https://drive.google.com/file/d/1Fdzexf5-ZKV7-fLiF8hAh8XPWQzZSwc8/view?usp=sharing',
    },
    {
      label: 'defense slides',
      href: 'https://drive.google.com/file/d/1hXQwaVCWd_2LrCrLkiGyVJLHOeVa-xHz/view?usp=share_link',
    },
  ],
  highlights: [
    { label: 'Scale', value: '41,419 parcel-months · 12 signal families · 1.24M raw records' },
    { label: 'Performance', value: 'PR-AUC 0.956 · ROC-AUC 0.981 · Prec@100 1.00' },
    { label: 'Method', value: 'Month-blocked CV · leakage tripwires · isotonic calibration' },
  ],
};

export const projectDossiers: ProjectDossier[] = [
  {
    id: 'causal-applied-ml',
    title: 'Causal Inference & Applied ML Research',
    description:
      "Identification-first causal modeling, applied forecasting, and quantitative ML with explicit evaluation discipline, anchored by my master's thesis on weak-signal urban markets.",
    research: thesisResearch,
    projects: [
      {
        title: 'Staggered DiD: Prediction ≠ Causation',
        description:
          'Simulates a staggered policy rollout, estimates modern difference-in-differences estimators, and compares against TWFE bias, as a companion to the article on designing identification in urban markets.',
        implementation: 'Python · statsmodels · pandas · numpy · matplotlib · JSON',
        githubUrl: 'https://github.com/SBrouck/staggered-did-demo',
        category: 'ml',
      },
      {
        title: 'Thesis Multi-Source Real Estate ETL',
        description:
          'Multi-source scraping and integration pipeline feeding the thesis panel: broker sites, municipal permits, legal registries, listings, and cadastral signals with entity resolution.',
        implementation: 'Python · requests · pandas · scikit-learn · parquet',
        githubUrl: 'https://github.com/SBrouck/Causal-Inference-Thesis-Off-Maket-RE',
        category: 'ml',
      },
      {
        title: 'Neural Portfolio Policy',
        description:
          'TCN policy network predicting weekly ETF weights from multi-horizon features. Excess Sharpe 0.519 with 77% lower turnover vs momentum on 2021–2025 test window.',
        implementation: 'PyTorch · pandas · yfinance · cvxpy · PyYAML',
        githubUrl: 'https://github.com/SBrouck/neural-portfolio-policy',
        image: '/Projects images/neuralportfolio.png',
        category: 'ml',
      },
      {
        title: 'Chicago Construction Permit Forecasting',
        description:
          "Monthly new-construction permit forecasting on Chicago Open Data (~30k permits, 2006–2025). Built for a real investment-analyst use case on early market signals.",
        implementation: 'pandas · scikit-learn · XGBoost · Prophet · matplotlib',
        githubUrl: 'https://github.com/SBrouck/chicago-construction-ts-modeling',
        image: '/Projects images/ChicagoML.png',
        category: 'ml',
      },
      {
        title: 'ETF Change-Point Detection with Bootstrap Calibration',
        description:
          'Distinguishes genuine regime shifts from noise in ETF returns by calibrating change-point detectors (CUSUM, PELT, BinSeg) with moving-block bootstrap under temporal dependence.',
        implementation: 'R · changepoint · zoo · ggplot2 · CSV',
        githubUrl: 'https://github.com/SBrouck/etf-changepoint-bootstrap',
        category: 'ml',
      },
    ],
  },
  {
    id: 'inference-engineering',
    title: 'Inference Engineering',
    badge: 'Current focus',
    description:
      'From-scratch serving for open-weight models: CUDA kernels, memory orchestration, scheduling, and parallelism, not a thin wrapper around existing runtimes.',
    projects: [
      {
        title: 'HARNESS',
        description:
          'Inference engine for open-weight models: CUDA kernels, KV-cache scheduling, memory orchestration, and tensor/pipeline parallelism, designed from LLM internals outward.',
        implementation: 'C++ · CUDA · CMake',
        isWip: true,
        category: 'automation',
      },
    ],
  },
  {
    id: 'agentic-engineering',
    title: 'Agentic Engineering',
    description:
      'Agent architectures, orchestration benchmarks, and decision systems evaluated under ambiguity, delayed feedback, inference cost, and escalation constraints.',
    projects: [
      {
        title: 'Inference-Aware Routing',
        description:
          'Benchmark framework comparing agent orchestration architectures (direct, supervisor, planner-executor, adaptive) under proxy inference cost, latency, and context-window constraints.',
        implementation: 'Python · JSON · pandas · Streamlit',
        githubUrl: 'https://github.com/SBrouck/inference-aware-routing',
        demoUrl:
          'https://sbrouck-inference-aware-routing-demo-streamlitapp-jl0q9t.streamlit.app',
        image: '/images/Inference_economics.png',
        category: 'automation',
      },
      {
        title: 'Decision Trace Engine',
        description:
          'Structured decision pipeline for startup operations: intake → domain routing → state builder → option scoring → escalation check. Typed contracts, not an open-ended agent loop.',
        implementation: 'Python · Pydantic v2 · OpenAI API · JSON · pytest',
        githubUrl: 'https://github.com/SBrouck/decision-trace-engine',
        image: '/images/InternalDecisionTool.png',
        category: 'analytics',
      },
      {
        title: 'Delayed Feedback Decision Engine',
        description:
          'Cohort-level simulator for repeated interventions where outcomes mature late and noisily. Formal delayed-reward decomposition with pending event queues and credit-assignment mismatch.',
        implementation: 'Python · pytest · JSON logs',
        githubUrl: 'https://github.com/SBrouck/delayed-reward-optimization',
        articleUrl:
          'https://drive.google.com/file/d/15CIyN64NJBjq9Ie_2DOY8looxF7ppsTL/view?usp=sharing',
        image: '/images/SimulatorUnvertainty.png',
        category: 'ml',
      },
    ],
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description:
      'Recommender systems, NLP at scale, pricing analytics, and portfolio methods with measurable lift over baselines.',
    projects: [
      {
        title: 'H&M Recommender System',
        description:
          'Personalized ranking model for the H&M Kaggle competition (UW Customer Analytics). MAP@12 of 0.031 vs ~0.002 baseline (>15× lift).',
        implementation: 'Python · pandas · scikit-learn · MAP@12',
        articleUrl: 'https://drive.google.com/file/d/1bX-fZE5Zhb_badbBVCF4XnYRVTWDqqNW/view?usp=sharing',
        kaggleUrl:
          'https://www.kaggle.com/competitions/h-and-m-personalized-fashion-recommendations/leaderboard',
        image: '/images/CA_H&Mreco.png',
        category: 'analytics',
      },
      {
        title: 'Campus Coffee Pricing & MAB Optimization',
        description:
          'UW campus coffee-shop dataset (10K visits, 5 promotion arms). Logistic demand model + bandit policy simulation on contribution profit (+11.6% vs uniform pricing).',
        implementation: 'pandas · numpy · scikit-learn · matplotlib · CSV',
        githubUrl: 'https://github.com/SBrouck/Pricing_Analytics_Final',
        articleUrl:
          'https://drive.google.com/file/d/1S36v0VVVw_u0JMICeLSFb1I6V8MDiJ_x/view?usp=sharing',
        image: '/images/MABprojectpricing.png',
        category: 'analytics',
      },
      {
        title: 'Airbnb Reviews NLP Analysis',
        description:
          'NLP pipeline on 1.5M+ California Airbnb reviews to extract host/service patterns and market signals for investment positioning.',
        implementation: 'spaCy · pandas · transformers · PyTorch · NLTK',
        githubUrl: 'https://github.com/SBrouck/airbnb-nlp-analysis',
        image: '/Projects images/nlpairbnb.png',
        category: 'ml',
      },
      {
        title: 'Robust Risk Parity under Covariance Uncertainty',
        description:
          'Risk parity allocation that stays stable when covariance estimates are noisy, using simulation-aware optimization over Ledoit-Wolf shrinkage with Monte Carlo perturbations.',
        implementation: 'R · tidyquant · Ledoit-Wolf · Monte Carlo simulation',
        githubUrl: 'https://github.com/SBrouck/rp-with-ledoit-wolf',
        category: 'analytics',
      },
    ],
  },
];
