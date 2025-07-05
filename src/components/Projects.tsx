
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import FadeIn from './animations/FadeIn';
import { Github, ExternalLink, Play, Linkedin } from 'lucide-react';

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
  delay = 0 
}) => (
  <FadeIn delay={delay}>
    <Card className="border-0 shadow-sm h-full hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <h3 className="text-xl font-medium mb-2 font-playfair">{title}</h3>
        <p className="text-gray-600 mb-3">{description}</p>
        <p className="text-sm text-terracotta mb-4">Stack: {stack}</p>
        
        <div className="flex flex-col gap-2">
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
              <ExternalLink size={16} />
              <span>View on Tableau</span>
            </a>
          )}
          
          {linkedinUrl && (
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-[#1B1F3B] hover:underline transition-all gap-1.5"
            >
              <Linkedin size={16} />
              <span>View on LinkedIn</span>
            </a>
          )}
          
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-terracotta hover:underline transition-all gap-1.5"
            >
              <Play size={16} />
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

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const mlProjects = [
    {
      title: "Construction Permits Forecasting (Chicago)",
      description: "Forecasting building permit volumes in Chicago through 2025 using time-series models. Includes feature engineering, benchmarking (XGBoost, Prophet), and accuracy evaluation.",
      stack: "Python, pandas, XGBoost, Prophet, forecasting, time-series modeling",
      githubUrl: "https://github.com/SBrouck/chicago-construction-ts-modeling"
    },
    {
      title: "Seattle Housing Price Prediction",
      description: "Built regression models to estimate housing prices using property and postal code features. Includes geospatial visualization with Folium.",
      stack: "Python, pandas, scikit-learn, XGBoost, Folium, data modeling",
      githubUrl: "https://github.com/SBrouck/ml-seattle-real-estate-modeling"
    },
    {
      title: "Real Estate Deal Screener",
      description: "Script to parse and extract off-market real estate leads from broker emails.",
      stack: "Python, Regex, Gmail API, automation workflows",
      githubUrl: "https://github.com/SBrouck/RealEstate-Deal-Screener"
    }
  ];

  const analyticsProjects = [
    {
      title: "Real Estate Dashboard – Leasing & KPIs",
      description: "Streamlit application to simulate real estate investments, track leasing performance, and visualize financial KPIs.",
      stack: "Streamlit, pandas, NumPy, dashboard design, stakeholder reporting",
      githubUrl: "https://github.com/SBrouck/real-estate-dashboard",
      demoUrl: "https://www.youtube.com/watch?v=eujHW_2d-Zg"
    },
    {
      title: "USA Data Center Dashboard",
      description: "Interactive Tableau dashboard analyzing pricing, power, and availability trends across 18 U.S. markets using CBRE data.",
      stack: "Python, Tableau, dashboard design, data visualization",
      githubUrl: "https://github.com/SBrouck/usa-data-center-dashboard"
    },
    {
      title: "Île-de-France Policy Analytics",
      description: "Survey analysis for a public policy evaluation project. Explored satisfaction levels across education and mobility domains.",
      stack: "Python, pandas, seaborn, stakeholder reporting",
      linkedinUrl: "https://www.linkedin.com/in/sacha-brouck/details/projects/"
    },
    {
      title: "Product Analytics Simulator",
      description: "Simulated e-commerce customer funnel for behavioral analytics and segmentation.",
      stack: "Python, NumPy, data modeling",
      githubUrl: "https://github.com/SBrouck/product-analytics-simulator"
    },
    {
      title: "Airbnb Seattle SQL Analysis",
      description: "Exploratory analysis of Airbnb listings using SQL. Built queries to investigate pricing trends and occupancy metrics.",
      stack: "PostgreSQL, SQL, BigQuery, data analysis",
      githubUrl: "https://github.com/SBrouck/airbnb-seattle-sql-analytics"
    }
  ];

  const automationProjects = [
    {
      title: "Airbnb & Booking.com Revenue Scraper",
      description: "Automated pipeline to extract, structure, and report rental income data from Airbnb and Booking dashboards into Excel.",
      stack: "Python, Selenium, Openpyxl, web scraping, automation workflows",
      githubUrl: "https://github.com/SBrouck/data-automation-booking-airbnb"
    },
    {
      title: "Master's Thesis – ML Workflow for Real Estate Sourcing",
      description: "Designing a machine learning pipeline to identify off-market real estate investment opportunities using weak signals from public data.",
      stack: "Python, NLP, scikit-learn, PostgreSQL, data modeling",
      linkedinUrl: "https://www.linkedin.com/in/sacha-brouck/details/projects/",
      isWip: true
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
                title={project.title}
                description={project.description}
                stack={project.stack}
                githubUrl={project.githubUrl}
                delay={200 + index * 50}
              />
            ))}
          </div>
        </div>

        {/* Analytics Dashboards & Business Intelligence - Carousel */}
        <div className="mb-16">
          <FadeIn delay={150}>
            <h3 className="text-2xl font-playfair mb-8 border-b border-gray-100 pb-3">
              Analytics Dashboards & Business Intelligence
            </h3>
          </FadeIn>
          
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {analyticsProjects.map((project, index) => (
                  <CarouselItem key={project.title} className="pl-2 md:pl-4 basis-full md:basis-1/3">
                    <ProjectCard 
                      title={project.title}
                      description={project.description}
                      stack={project.stack}
                      githubUrl={project.githubUrl}
                      demoUrl={project.demoUrl}
                      linkedinUrl={project.linkedinUrl}
                      delay={200 + index * 50}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
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
                title={project.title}
                description={project.description}
                stack={project.stack}
                githubUrl={project.githubUrl}
                linkedinUrl={project.linkedinUrl}
                isWip={project.isWip}
                delay={200 + index * 50}
              />
            ))}
            
            <ProjectCard 
              title="GRE Question Answering Model Training Pipeline"
              description="Automated web scraping pipeline to collect GRE practice questions and answers from multiple sources, enabling the training of a specialized question-answering model for GRE test preparation."
              stack="Python, Selenium, BeautifulSoup, Transformers, PyTorch, web scraping, NLP, model training"
              githubUrl="https://github.com/SBrouck/gre-qa-model-training"
              delay={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
