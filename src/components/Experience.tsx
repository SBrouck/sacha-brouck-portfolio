import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface ExperienceProps {
  className?: string;
}

interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  achievements: string[];
  delay?: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ role, company, period, achievements, delay = 0 }) => (
  <FadeIn delay={delay} className="relative pl-8 pb-12 last:pb-0 border-l border-gray-200 ml-4">
    <div className="absolute w-4 h-4 bg-terracotta rounded-full -left-2 top-0"></div>
    <div>
      <h3 className="text-xl font-playfair mb-1">{role}</h3>
      <p className="text-gray-600 mb-2">
        <span className="font-medium">{company}</span> <span className="italic text-gray-500">({period})</span>
      </p>
      <ul className="space-y-2 mt-3">
        {achievements.map((achievement, i) => (
          <li key={i} className="flex items-start">
            <span className="text-terracotta mr-2">—</span>
            <span className="text-gray-600">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  </FadeIn>
);

const Experience: React.FC<ExperienceProps> = ({ className }) => {
  const experiences = [
    {
      role: "Founder & CEO",
      company: "Kurauto",
      period: "2022–2024",
      achievements: [
        "Built and scaled an eco-friendly car care startup (€100K+ revenue)",
        "Closed €37,500 pre-seed round with AYOMI, exited at €300K valuation",
        "Led analytics, ops, growth, partnerships with luxury hotels"
      ]
    },
    {
      role: "Investment Analyst (Full-time offer received)",
      company: "Mantu / H4 Family Office",
      period: "2025",
      achievements: [
        "Built automated Python tool for email-based deal sourcing (7M+ EUR sourced)",
        "Developed financial models for acquisitions in Lisbon, Madrid, Bogota",
        "Created Power BI dashboard for board KPI tracking ($200M+ portfolio)",
        "Worked on data extraction, normalization, and modeling to support Yardi implementation across the portfolio"
      ]
    },
    {
      role: "Real Estate Analyst",
      company: "Engel & Völkers (Seattle)",
      period: "2024",
      achievements: [
        "Designed state-wide real estate performance dashboards (Power BI)",
        "Analyzed CRM + NWMLS data with SQL to optimize agent efficiency",
        "Developed a data model to analyze top agent performance and search behavior across Washington, supporting talent identification (first Master's thesis)",
        "Worked directly with the Washington State E&V President, providing business support on agent growth and recruitment"
      ]
    },
    {
      role: "Automation & Data Engineer",
      company: "MOSAIC",
      period: "2024/2025",
      achievements: [
        "Built GRE strategy engine for France's first graduate school prep company, analyzing student profiles and parsing question types to deliver personalized study plans",
        "Automated competitive intelligence from Chinese websites via web scraping and screenshot-based monitoring for real-time market tracking",
        "Created custom email-to-CRM data flow using scripts + n8n, automating lead registration and client onboarding processes",
        "Increased lead acquisition by 5× for an early-stage startup by automating LinkedIn scraping, prospect tracking, and outreach workflows"
      ]
    }
  ];

  return (
    <section id="experience" className={cn('py-20 md:py-32 bg-gray-50', className)}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-playfair mb-8 text-center">Experience</h2>
          </FadeIn>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={exp.company}
              role={exp.role}
              company={exp.company}
              period={exp.period}
              achievements={exp.achievements}
              delay={150 + index * 50}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
