
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import FadeIn from './animations/FadeIn';
import { Github, ExternalLink, Play } from 'lucide-react';

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
              <span>View on DataCamp</span>
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
      description: "Forecasted monthly building permits with XGBoost & Prophet, MAE < 5%.",
      stack: "Python, Prophet, XGBoost",
      githubUrl: "https://github.com/SBrouck/Chicago-Construction-Permits-Forecasting"
    },
    {
      title: "Seattle Housing Price Prediction",
      description: "Built regression models to predict housing value from listing metadata.",
      stack: "scikit-learn, matplotlib, pandas",
      githubUrl: "https://github.com/SBrouck/ml-seattle-real-estate-modeling"
    },
    {
      title: "Real Estate Deal Screener",
      description: "Parsed acquisition leads from email inbox using custom filters.",
      stack: "Python, Regex, Gmail API",
      githubUrl: "https://github.com/SBrouck/RealEstate-Deal-Screener"
    }
  ];

  const analyticsProjects = [
    {
      title: "Real Estate Dashboard – Leasing & KPIs (Power BI)",
      description: "Built leasing & risk visualizer dashboard from office portfolio data.",
      stack: "Power BI",
      githubUrl: "https://github.com/SBrouck/real-estate-dashboard",
      demoUrl: "https://www.youtube.com/watch?v=eujHW_2d-Zg"
    },
    {
      title: "USA Data Center Dashboard (Tableau)",
      description: "Interactive Tableau tool based on CBRE's 2024 US markets data.",
      stack: "Tableau, CSV",
      githubUrl: "https://github.com/SBrouck/usa-data-center-dashboard"
    },
    {
      title: "Île-de-France Policy Analytics",
      description: "Analyzed citizen survey data for policy feedback across 3000+ responses.",
      stack: "Python, seaborn, pandas",
      externalUrl: "https://www.datacamp.com/portfolio/sachabrouck"
    },
    {
      title: "Product Analytics Simulator",
      description: "Simulated product funnel for exploratory & retention analytics.",
      stack: "Python, NumPy",
      githubUrl: "https://github.com/SBrouck/product-analytics-simulator"
    },
    {
      title: "Airbnb SQL Analytics (Seattle)",
      description: "Data cleaning and EDA over 100k+ Airbnb listings.",
      stack: "SQL, PostgreSQL",
      githubUrl: "https://github.com/SBrouck/airbnb-seattle-sql-analytics"
    }
  ];

  const automationProjects = [
    {
      title: "Airbnb & Booking.com Revenue Scraper",
      description: "Built a script to extract revenues from user dashboards into Excel.",
      stack: "Python, Selenium, Openpyxl",
      githubUrl: "https://github.com/SBrouck/data-automation-booking-airbnb"
    },
    {
      title: "Master's Thesis – ML Workflow for RE Sourcing",
      description: "Building an automated ML pipeline to identify off-market real estate deals using weak signals.",
      stack: "Python, scikit-learn, NLP, PostgreSQL",
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
            <h3 className="text-2xl font-playfair mb-8 border-b border-gray-100 pb-3 flex items-center gap-2">
              <span>🤖</span>
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
            <h3 className="text-2xl font-playfair mb-8 border-b border-gray-100 pb-3 flex items-center gap-2">
              <span>📊</span>
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
                      externalUrl={project.externalUrl}
                      demoUrl={project.demoUrl}
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
            <h3 className="text-2xl font-playfair mb-8 border-b border-gray-100 pb-3 flex items-center gap-2">
              <span>⚙️</span>
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
                isWip={project.isWip}
                delay={200 + index * 50}
              />
            ))}
            
            {/* Placeholder card for symmetry */}
            <FadeIn delay={300}>
              <Card className="border-0 shadow-sm h-full hover:shadow-md transition-shadow opacity-50">
                <CardContent className="p-6 flex items-center justify-center h-full">
                  <div className="text-center text-gray-400">
                    <h3 className="text-xl font-medium mb-2 font-playfair">New Project Coming Soon</h3>
                    <p className="text-sm">→ Slot reserved for future development</p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
