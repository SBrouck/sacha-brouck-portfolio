
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
  description: string;
  stack: string;
  githubUrl?: string;
  externalUrl?: string;
  isWip?: boolean;
  isInternal?: boolean;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  stack, 
  githubUrl, 
  externalUrl, 
  isWip = false,
  isInternal = false,
  delay = 0 
}) => (
  <FadeIn delay={delay}>
    <Card className="border-0 shadow-sm h-full hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <h3 className="text-xl font-medium mb-2 font-playfair">{title}</h3>
        <p className="text-gray-600 mb-3">{description}</p>
        <p className="text-sm text-terracotta mb-4">Stack: {stack}</p>
        
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
        
        {externalUrl && (
          <a 
            href={externalUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-[#1B1F3B] hover:underline transition-all gap-1.5"
          >
            <span>View Portfolio</span>
          </a>
        )}
        
        {isWip && (
          <span className="inline-flex items-center text-sm text-gray-500 gap-1.5">
            <span>In progress</span>
          </span>
        )}
        
        {isInternal && (
          <span className="inline-flex items-center text-sm text-gray-500 gap-1.5">
            <span>Internal project</span>
          </span>
        )}
      </CardContent>
    </Card>
  </FadeIn>
);

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const categories = [
    {
      title: "Machine Learning & Predictive Modeling",
      projects: [
        {
          title: "Construction Permits Forecasting (Chicago)",
          description: "Forecasting monthly permits using XGBoost and Prophet, MAE < 5%.",
          stack: "Python, XGBoost, Prophet, pandas",
          githubUrl: "https://github.com/SBrouck/Chicago-Construction-Permits-Forecasting"
        },
        {
          title: "Seattle Housing Price Prediction",
          description: "Built regression models to estimate housing values using location + features.",
          stack: "scikit-learn, pandas, matplotlib",
          githubUrl: "https://github.com/SBrouck/ml-seattle-real-estate-modeling"
        },
        {
          title: "Master's Thesis — ML for Real Estate Signals",
          description: "ML model to identify off-market deals from weak signals (permits, moves…).",
          stack: "Python, NLP, vectorization, PostgreSQL",
          isWip: true
        }
      ]
    },
    {
      title: "Analytics Dashboards & BI",
      projects: [
        {
          title: "Power BI – RE Portfolio KPI Tracking",
          description: "Designed and deployed board dashboards across a €200M real estate portfolio.",
          stack: "Power BI, Excel, SQL",
          isInternal: true
        },
        {
          title: "USA Data Center Tableau Dashboard",
          description: "Market dashboard visualizing power, pricing, and vacancy trends across 18 markets.",
          stack: "Tableau, CSV",
          githubUrl: "https://github.com/SBrouck/usa-data-center-dashboard"
        },
        {
          title: "Conseil Régional Île-de-France — Survey Analytics",
          description: "Analyzed 3K+ survey entries for mobility & education policy insights.",
          stack: "pandas, seaborn, Python",
          externalUrl: "https://www.datacamp.com/portfolio/sachabrouck"
        }
      ]
    },
    {
      title: "Data Automation & Engineering",
      projects: [
        {
          title: "Airbnb & Booking.com Revenue Scraper",
          description: "Daily automation to extract and log revenue from user dashboards to Excel.",
          stack: "Python, Selenium, Openpyxl",
          githubUrl: "https://github.com/SBrouck/data-automation-booking-airbnb"
        },
        {
          title: "Real Estate Deal Screener",
          description: "Parsed and extracted acquisition leads from broker emails.",
          stack: "Python, Regex, Gmail API",
          githubUrl: "https://github.com/SBrouck/RealEstate-Deal-Screener"
        },
        {
          title: "Off-Market Watcher",
          description: "Web scraper detecting early RE opportunities via local news, permits, signals.",
          stack: "Scrapy, pandas",
          isWip: true
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
              Selected projects in machine learning, analytics, and automation — built to deliver real-world impact.
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
            
            <div className="grid md:grid-cols-3 gap-6">
              {category.projects.map((project, projIndex) => (
                <ProjectCard 
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  stack={project.stack}
                  githubUrl={project.githubUrl}
                  externalUrl={project.externalUrl}
                  isWip={project.isWip}
                  isInternal={project.isInternal}
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
