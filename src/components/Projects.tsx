
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
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  stack, 
  githubUrl, 
  externalUrl, 
  isWip = false, 
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
            <span>Work in progress</span>
          </span>
        )}
        {!githubUrl && !externalUrl && !isWip && (
          <span className="inline-flex items-center text-sm text-gray-500 gap-1.5">
            <span>Internal project – not public</span>
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
          description: "Time-series forecasting of construction permit volumes in Chicago using Prophet & XGBoost, with <5% MAE.",
          stack: "Python, pandas, Prophet, XGBoost",
          githubUrl: "https://github.com/SBrouck/Chicago-Construction-Permits-Forecasting"
        },
        {
          title: "Seattle Housing Price Prediction",
          description: "Regression models to predict property values based on listing and neighborhood features.",
          stack: "Python, scikit-learn, matplotlib",
          githubUrl: "https://github.com/SBrouck/ml-seattle-real-estate-modeling"
        },
        {
          title: "Master's Thesis – Real Estate ML Deal Sourcing",
          description: "Ongoing research project applying ML to identify off-market investment opportunities from weak signals.",
          stack: "NLP, scikit-learn, custom features, PostgreSQL",
          isWip: true
        }
      ]
    },
    {
      title: "Analytics Dashboards & Business Intelligence",
      projects: [
        {
          title: "Power BI – Real Estate Portfolio KPIs",
          description: "Developed investor-level dashboards tracking cash flow, tenant risk and leasing KPIs for a €200M portfolio.",
          stack: "Power BI, Excel, SQL"
        },
        {
          title: "USA Data Center Market Dashboard",
          description: "Interactive Tableau dashboard from CBRE 2024 data, benchmarking pricing, supply and power access across 18 U.S. markets.",
          stack: "Tableau, geospatial data",
          githubUrl: "https://github.com/SBrouck/usa-data-center-dashboard"
        },
        {
          title: "Data Analysis – Conseil Régional d'Île-de-France",
          description: "Analyzed survey data from 3,000+ respondents to evaluate regional education & mobility policy satisfaction.",
          stack: "Python, Pandas, DataCamp Workspace",
          externalUrl: "https://www.datacamp.com/portfolio/sachabrouck"
        }
      ]
    },
    {
      title: "Data Automation & Engineering",
      projects: [
        {
          title: "Airbnb & Booking.com Scraper",
          description: "Built a daily automation pipeline to extract revenues from Airbnb & Booking dashboards and sync them to Excel.",
          stack: "Python, Selenium, Pandas, Openpyxl",
          githubUrl: "https://github.com/SBrouck/data-automation-booking-airbnb"
        },
        {
          title: "Real Estate Deal Screener",
          description: "Automated the parsing of broker emails to extract and structure off-market acquisition opportunities.",
          stack: "Python, Regex, Gmail parser",
          githubUrl: "https://github.com/SBrouck/RealEstate-Deal-Screener"
        },
        {
          title: "Off-Market Investment Watcher",
          description: "Developing a real estate alert system scraping weak signals from public data (company moves, permits, news).",
          stack: "Scrapy, Airflow, Pandas",
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
