
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import FadeIn from './animations/FadeIn';
import { Github, ExternalLink, Play, Linkedin, Brain, BarChart3, Zap } from 'lucide-react';

interface ProjectsProps {
  className?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string;
  githubUrl?: string;
  externalUrl?: string;
  demoUrl?: string;
  linkedinUrl?: string;
  isWip?: boolean;
  isInternal?: boolean;
  delay?: number;
  image?: string;
  category: 'ml' | 'analytics' | 'automation';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  stack, 
  githubUrl, 
  externalUrl, 
  demoUrl,
  linkedinUrl,
  isWip = false,
  isInternal = false,
  delay = 0,
  image,
  category
}) => {
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'ml': return <Brain className="w-5 h-5" />;
      case 'analytics': return <BarChart3 className="w-5 h-5" />;
      case 'automation': return <Zap className="w-5 h-5" />;
      default: return <Brain className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'ml': return 'text-navy';
      case 'analytics': return 'text-terracotta';
      case 'automation': return 'text-green-600';
      default: return 'text-navy';
    }
  };

  return (
    <FadeIn delay={delay}>
      <Card className="border-0 shadow-sm h-full hover:shadow-md transition-shadow group">
        <CardContent className="p-6">
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-3">
            <div className={`p-2 bg-gray-100 rounded-lg ${getCategoryColor(category)}`}>
              {getCategoryIcon(category)}
            </div>
            <span className="text-sm font-medium text-gray-600 capitalize">{category}</span>
          </div>
          
          <h3 className="text-xl font-medium mb-3 font-playfair group-hover:text-navy transition-colors">{title}</h3>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
          
          {/* Stack Technologies */}
          <div className="mb-4">
            <p className="text-xs font-medium text-gray-500 mb-2">TECHNOLOGIES</p>
            <p className="text-sm text-terracotta font-medium">{stack}</p>
          </div>
          
          {/* Project Image - Déplacée après le texte */}
          {image && (
            <div className="mb-4 relative">
              <img
                src={image}
                alt={`${title} project illustration`}
                className="w-full h-64 object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          
          {/* Action Links */}
          <div className="flex flex-col gap-2">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-[#1B1F3B] hover:text-navy hover:underline transition-all gap-2 group/link"
              >
                <Github size={16} className="group-hover/link:scale-110 transition-transform" />
                <span>View on GitHub</span>
              </a>
            )}
            
            {externalUrl && (
              <a 
                href={externalUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-[#1B1F3B] hover:text-navy hover:underline transition-all gap-2 group/link"
              >
                <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform" />
                <span>View on Tableau</span>
              </a>
            )}
            
            {linkedinUrl && (
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-[#1B1F3B] hover:text-navy hover:underline transition-all gap-2 group/link"
              >
                <Linkedin size={16} className="group-hover/link:scale-110 transition-transform" />
                <span>View on LinkedIn</span>
              </a>
            )}
            
            {demoUrl && (
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-terracotta hover:text-navy hover:underline transition-all gap-2 group/link"
              >
                <Play size={16} className="group-hover/link:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </a>
            )}
            
            {isWip && (
              <span className="inline-flex items-center text-sm text-gray-500 gap-1.5">
                <span>→ In progress</span>
              </span>
            )}
            
            {isInternal && (
              <span className="inline-flex items-center text-sm text-gray-500 gap-1.5">
                <span>→ Internal project</span>
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
};

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const mlProjects = [
    {
      title: "Chicago Construction Time Series Modeling",
      description: "Strategic analysis of Chicago's construction permit trends to assess office market dynamics and new development opportunities. As a real estate investment analyst evaluating office market entry strategies, I developed forecasting models to identify optimal timing based on construction permit signals. The pipeline predicts monthly new construction permits using Random Forest, XGBoost, and Prophet models, providing early indicators of market supply changes for informed investment decisions.",
      stack: "Python, pandas, scikit-learn, XGBoost, Prophet, time-series modeling, feature engineering",
      githubUrl: "https://github.com/SBrouck/chicago-construction-ts-modeling",
      image: "/Projects images/ChicagoML.png", // Chicago Construction ML project
      category: 'ml' as const
    },
    {
      title: "Seattle Housing Price Prediction",
      description: "During my master's program in Seattle, I developed regression models to identify the best housing opportunities for my accommodation choice. Built models to estimate housing prices using property and postal code features, including geospatial visualization with Folium.",
      stack: "Python, pandas, scikit-learn, XGBoost, Folium, data modeling",
      githubUrl: "https://github.com/SBrouck/ml-seattle-real-estate-modeling",
      image: "/Projects images/SeattleML.png", // Image Seattle ML project
      category: 'ml' as const
    },
    {
      title: "Airbnb NLP Analysis for Los Angeles",
      description: "Strategic NLP analysis of 1.5M+ Airbnb reviews to identify investment opportunities in Los Angeles. Extracts customer service patterns, competitive advantages, and market insights for real estate investors.",
      stack: "Python, spaCy, NLTK, Scikit-learn, Pandas, NLP, Business Intelligence",
      githubUrl: "https://github.com/SBrouck/airbnb-nlp-analysis",
      image: "/Projects images/nlpairbnb.png",
      category: 'ml' as const
    }
  ];

  const analyticsProjects = [
    {
      title: "Real Estate Dashboard – Leasing & KPIs",
      description: "Streamlit application to simulate real estate investments, track leasing performance, and visualize financial KPIs.",
      stack: "Streamlit, pandas, NumPy, dashboard design, stakeholder reporting",
      githubUrl: "https://github.com/SBrouck/real-estate-dashboard",
      demoUrl: "https://www.youtube.com/watch?v=eujHW_2d-Zg",
      category: 'analytics' as const
    },
    {
      title: "USA Data Center Dashboard",
      description: "Interactive Tableau dashboard analyzing pricing, power, and availability trends across 18 U.S. markets using CBRE data.",
      stack: "Python, Tableau, dashboard design, data visualization",
      githubUrl: "https://github.com/SBrouck/usa-data-center-dashboard",
      category: 'analytics' as const
    },
    {
      title: "Île-de-France Policy Analytics",
      description: "Survey analysis for a public policy evaluation project. Explored satisfaction levels across education and mobility domains.",
      stack: "Python, pandas, seaborn, stakeholder reporting",
      linkedinUrl: "https://www.linkedin.com/in/sacha-brouck/details/projects/",
      category: 'analytics' as const
    },
    {
      title: "Product Analytics Simulator",
      description: "Simulated e-commerce customer funnel for behavioral analytics and segmentation.",
      stack: "Python, NumPy, data modeling",
      githubUrl: "https://github.com/SBrouck/product-analytics-simulator",
      category: 'analytics' as const
    },
    {
      title: "Airbnb Seattle SQL Analysis",
      description: "Exploratory analysis of Airbnb listings using SQL. Built queries to investigate pricing trends and occupancy metrics.",
      stack: "PostgreSQL, SQL, BigQuery, data analysis",
      githubUrl: "https://github.com/SBrouck/airbnb-seattle-sql-analytics",
      category: 'analytics' as const
    }
  ];

  const automationProjects = [
    {
      title: "Airbnb & Booking.com Revenue Scraper",
      description: "Automated pipeline to extract, structure, and report rental income data from Airbnb and Booking dashboards into Excel.",
      stack: "Python, Selenium, Openpyxl, web scraping, automation workflows",
      githubUrl: "https://github.com/SBrouck/data-automation-booking-airbnb",
      category: 'automation' as const
    },
    {
      title: "Master's Thesis – ML Workflow for Real Estate Sourcing",
      description: "Designing a machine learning pipeline to identify off-market real estate investment opportunities using weak signals from public data.",
      stack: "Python, NLP, scikit-learn, PostgreSQL, data modeling",
      linkedinUrl: "https://www.linkedin.com/in/sacha-brouck/details/projects/",
      isWip: true,
      category: 'automation' as const
    },
    {
      title: "GRE Question Answering Model Training Pipeline",
      description: "Automated web scraping pipeline to collect GRE practice questions and answers from multiple sources, enabling the training of a specialized question-answering model for GRE test preparation.",
      stack: "Python, Selenium, BeautifulSoup, Transformers, PyTorch, web scraping, NLP, model training",
      githubUrl: "https://github.com/SBrouck/gre-qa-model-training",
      category: 'automation' as const
    }
  ];

  return (
    <section id="projects" className={cn('py-20 md:py-32 bg-white', className)}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-playfair mb-8 text-center">Projects</h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl text-center mb-12 text-gray-600">
              Selected projects in machine learning, analytics, and automation — built to deliver real-world impact.
            </p>
          </FadeIn>
        </div>
        
        {/* Machine Learning & Predictive Modeling */}
        <div className="mb-16">
          <FadeIn delay={150}>
            <h3 className="text-2xl font-playfair mb-8 border-b border-gray-100 pb-3">
              Machine Learning & Predictive Modeling
            </h3>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-6">
            {mlProjects.map((project, index) => (
              <ProjectCard 
                key={project.title}
                {...project}
                delay={200 + index * 50}
              />
            ))}
          </div>
        </div>

        {/* Analytics Dashboards & Business Intelligence */}
        <div className="mb-16">
          <FadeIn delay={150}>
            <h3 className="text-2xl font-playfair mb-8 border-b border-gray-100 pb-3">
              Analytics Dashboards & Business Intelligence
            </h3>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-6">
            {analyticsProjects.map((project, index) => (
              <ProjectCard 
                key={project.title}
                {...project}
                delay={200 + index * 50}
              />
            ))}
          </div>
        </div>

        {/* Data Automation & Engineering */}
        <div className="mb-16 last:mb-0">
          <FadeIn delay={150}>
            <h3 className="text-2xl font-playfair mb-8 border-b border-gray-100 pb-3">
              Data Automation & Engineering
            </h3>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-6">
            {automationProjects.map((project, index) => (
              <ProjectCard 
                key={project.title}
                {...project}
                delay={200 + index * 50}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
