
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import FadeIn from './animations/FadeIn';
import { Github } from 'lucide-react';

interface ProjectsProps {
  className?: string;
}

interface ProjectCardProps {
  title: string;
  tools: string;
  description: string;
  githubUrl?: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tools, description, githubUrl, delay = 0 }) => (
  <FadeIn delay={delay}>
    <Card className="border-0 shadow-sm h-full hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <h3 className="text-xl font-medium mb-2 font-playfair">{title}</h3>
        <p className="text-sm text-terracotta mb-3">{tools}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-[#1B1F3B] hover:underline transition-all gap-1.5"
          >
            <Github size={16} />
            <span>View on GitHub</span>
          </a>
        )}
      </CardContent>
    </Card>
  </FadeIn>
);

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const categories = [
    {
      title: "Forecasting & Predictive Modeling",
      projects: [
        {
          title: "Construction Permits Forecasting (Chicago)",
          tools: "Python, XGBoost, Prophet",
          description: "Built time-series models to predict monthly construction activity; <5% MAE.",
          githubUrl: "https://github.com/SBrouck/chicago-construction-forecast"
        },
        {
          title: "Seattle Housing Price Prediction",
          tools: "scikit-learn, regression, visualization",
          description: "Trained models to predict property value using listing + location features.",
          githubUrl: "https://github.com/SBrouck/seattle-housing-prediction"
        }
      ]
    },
    {
      title: "Data Automation & Engineering",
      projects: [
        {
          title: "Real Estate Deal Screener",
          tools: "Python, Email Parser, Regex, Excel",
          description: "Automatically extracted and filtered acquisition opportunities from broker emails.",
          githubUrl: "https://github.com/SBrouck/deal-screener-pipeline"
        },
        {
          title: "Off-Market Watcher (in progress)",
          tools: "Scrapy, APIs, PostgreSQL, Airflow",
          description: "Scraping local signals to detect early-stage real estate shifts."
        }
      ]
    },
    {
      title: "Dashboards & BI",
      projects: [
        {
          title: "Power BI Portfolio Dashboard",
          tools: "Power BI, SQL",
          description: "Unified view for board-level KPI tracking across a $200M RE portfolio.",
          githubUrl: "https://github.com/SBrouck/real-estate-powerbi-dashboard"
        },
        {
          title: "Streamlit Real Estate KPIs",
          tools: "Streamlit, pandas",
          description: "Web-based dashboard inspired by my work at Mantu.",
          githubUrl: "https://github.com/SBrouck/streamlit-re-kpis"
        }
      ]
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
              Selected projects in forecasting, automation, and visualization — built to deliver real-world impact.
            </p>
          </FadeIn>
        </div>
        
        {categories.map((category, catIndex) => (
          <div key={category.title} className="mb-16 last:mb-0">
            <FadeIn delay={150 + catIndex * 50}>
              <h3 className="text-2xl font-playfair mb-8 border-b border-gray-100 pb-3">
                {category.title}
              </h3>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 gap-6">
              {category.projects.map((project, projIndex) => (
                <ProjectCard 
                  key={project.title}
                  title={project.title}
                  tools={project.tools}
                  description={project.description}
                  githubUrl={project.githubUrl}
                  delay={200 + projIndex * 50}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
