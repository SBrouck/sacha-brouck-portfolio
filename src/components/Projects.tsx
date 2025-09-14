
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import FadeIn from './animations/FadeIn';
import { Github, ExternalLink, Play, Linkedin, Brain, BarChart3, Zap, Database, Eye } from 'lucide-react';

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
  videoUrl?: string; // Added for Streamlit app
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
  category,
  videoUrl // Added for Streamlit app
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
              {title === "Real Estate Investment Dashboard" || title === "U.S. Data Center Market Dashboard" ? <Eye className="w-5 h-5" /> : title === "Airbnb Seattle SQL Market Analysis" ? <Database className="w-5 h-5" /> : <BarChart3 className="w-5 h-5" />}
            </div>
            <span className="text-sm font-medium text-gray-600 capitalize">
              {title === "Airbnb NLP Analysis for Los Angeles" 
                ? "NLP" 
                : title === "Seattle Housing Price Prediction" || title === "Chicago Construction Time Series Modeling" 
                  ? "ML" 
                  : title === "Real Estate Investment Dashboard" || title === "U.S. Data Center Market Dashboard" 
                    ? "Visualisation" 
                    : title === "Airbnb Seattle SQL Market Analysis" 
                      ? "SQL" 
                      : title === "Smoking Effects on Medical Charges Analysis" || title === "Airport Baggage Distribution Statistical Analysis" || title === "E-Commerce Consumer Analytics & Behavioral Segmentation" 
                        ? "Analytics" 
                        : category
              }
            </span>
          </div>
          
          <h3 className="text-xl font-medium mb-3 font-playfair group-hover:text-navy transition-colors">{title}</h3>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">{description}</p>
          
          {/* Stack Technologies */}
          <div className="mb-6">
            <p className="text-xs font-medium text-gray-500 mb-2">TECHNOLOGIES</p>
            <p className="text-sm text-terracotta font-medium">{stack}</p>
          </div>
          
          {/* Project Video - Déplacée après le texte, avant les liens */}
          {videoUrl && (
            <div className="mb-4 relative">
              <div className="h-48 w-full rounded-lg overflow-hidden shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/eujHW_2d-Zg?si=7ybDoeyq5j1-qiU-"
                  title="Streamlit Real Estate Dashboard Demo"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p className="text-xs text-gray-500 text-center mb-4">🎥 Streamlit Dashboard Demo - Click play to watch</p>
            </div>
          )}
          
          {/* Project Image - Déplacée après le texte */}
          {image && (
            <div className="mb-4 relative">
              <img
                src={image}
                alt={`${title} project illustration`}
                className="w-full h-48 object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          
          {/* Action Links */}
          <div className="flex flex-col gap-2 mt-auto">
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
      description: "Strategic analysis of Chicago's construction permit trends to assess office market dynamics and new development opportunities. As a real estate investment analyst evaluating office market entry strategies, I developed forecasting models to identify optimal timing based on construction permit signals.",
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
      title: "Real Estate Investment Dashboard",
      description: "Custom Streamlit application developed for a real estate investment strategy, adapted to specific data inputs and requirements. Enables comprehensive KPI analysis and geographic asset visualization from simple Excel files, providing strategic insights for portfolio management and investment decisions.",
      stack: "Streamlit, pandas, NumPy, dashboard design, stakeholder reporting, investment analytics",
      githubUrl: "https://github.com/SBrouck/streamlit-real-estate-dashboard",
      videoUrl: "https://youtu.be/eujHW_2d-Zg?si=7ybDoeyq5j1-qiU-", // YouTube video for Streamlit app
      category: 'analytics' as const
    },
    {
      title: "U.S. Data Center Market Dashboard",
      description: "Comprehensive market study of the U.S. data center industry through automated Python web scraping and data extraction. Built an automated pipeline that scrapes CBRE reports, FCC data, and EIA information to create a structured Excel dataset, then visualized market trends, hyperscaler presence, and capacity distribution using Tableau interactive dashboards.",
      stack: "Python, web scraping, pandas, data extraction, Excel automation, Tableau, market analysis",
      githubUrl: "https://github.com/SBrouck/usa-data-center-dashboard",
      image: "/Projects images/USADCtableau.png", // USA Data Center Tableau project
      category: 'analytics' as const
    },
    {
      title: "Airbnb Seattle SQL Market Analysis",
      description: "Strategic market analysis of Seattle's Airbnb ecosystem using SQL, completing my West Coast portfolio alongside LA. Built comprehensive SQL queries to analyze pricing dynamics, occupancy patterns, and neighborhood performance, providing actionable insights for real estate investment decisions in the Pacific Northwest market.",
      stack: "SQL, MySQL, BigQuery, Python, pandas, data modeling, market analysis, real estate analytics",
      githubUrl: "https://github.com/SBrouck/airbnb-seattle-sql-analytics",
      image: "/Projects images/SALairbnb.png", // Seattle Airbnb SQL project
      category: 'analytics' as const
    }
  ];

  const dataAnalyticsProjects = [
    {
      title: "Airport Baggage Distribution Statistical Analysis",
      description: "Statistical analysis and probability modeling for airport operations optimization. Developed comprehensive statistical models to help airports implement optimal baggage distribution strategies, analyzing passenger flow patterns, baggage handling efficiency, and resource allocation to minimize delays and maximize operational performance.",
      stack: "Python, Jupyter Notebook, statistical analysis, probability modeling, data science, operations research, airport analytics",
      githubUrl: "https://github.com/SBrouck/statistical-analysis-airport",
      image: "/Projects images/statairport.png",
      category: 'analytics' as const
    },
    {
      title: "Smoking Effects on Medical Charges Analysis",
      description: "Exploratory analysis of health insurance costs comparing smokers vs non-smokers using Python. Built comprehensive visualizations including histograms, boxplots, and line charts to identify smoking as the main driver of higher and volatile medical expenses across age groups and regions.",
      stack: "Python, pandas, matplotlib, seaborn, data visualization, statistical analysis, healthcare analytics",
      githubUrl: "https://github.com/SBrouck/smoking-effects-on-medical-charges",
      image: "/Projects images/smokingeffect.png",
      category: 'analytics' as const
    },
    {
      title: "E-Commerce Consumer Analytics & Behavioral Segmentation",
      description: "Consumer analytics project for an e-commerce boutique to optimize marketing strategy and website design. Built comprehensive user behavior analysis pipeline using simulated e-commerce data, implementing K-Means clustering for customer segmentation, engagement pattern analysis, and purchase funnel optimization to drive personalized marketing campaigns and improve conversion rates.",
      stack: "Python, pandas, seaborn, matplotlib, scikit-learn, K-Means clustering, data visualization, consumer analytics, e-commerce optimization",
      githubUrl: "https://github.com/SBrouck/product-analytics-simulator",
      image: "/Projects images/consumerecom.png",
      category: 'analytics' as const
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
              Selected projects in machine learning, analytics, and automation—built to deliver real-world impact.
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

        {/* Data Visualization & SQL */}
        <div className="mb-16">
          <FadeIn delay={150}>
            <h3 className="text-2xl font-playfair mb-8 border-b border-gray-100 pb-3">
              Data Visualization & SQL
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

        {/* Data Analytics */}
        <div className="mb-16 last:mb-4">
          <FadeIn delay={150}>
            <h3 className="text-2xl font-playfair mb-8 border-b border-gray-100 pb-3">
              Data Analytics
            </h3>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-6">
            {dataAnalyticsProjects.map((project, index) => (
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
