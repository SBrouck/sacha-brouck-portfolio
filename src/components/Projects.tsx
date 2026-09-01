import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { projectDossiers, type Project } from '@/data/projectDossiers';
import { ExternalLink, Github, Play } from 'lucide-react';

interface ProjectsProps {
  className?: string;
}

const ProjectLinks: React.FC<{ project: Project }> = ({ project }) => (
  <div className="flex flex-wrap gap-x-5 gap-y-2">
    {project.githubUrl && (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-300 transition hover:text-white"
      >
        <Github size={14} />
        GitHub
      </a>
    )}
    {project.articleUrl && (
      <a
        href={project.articleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-300 transition hover:text-white"
      >
        <ExternalLink size={14} />
        {project.title === 'H&M Recommender System' ? 'Abstract & Code' : 'Abstract'}
      </a>
    )}
    {project.demoUrl && (
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-300 transition hover:text-white"
      >
        <Play size={14} />
        Demo
      </a>
    )}
    {project.kaggleUrl && (
      <a
        href={project.kaggleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-300 transition hover:text-white"
      >
        <ExternalLink size={14} />
        Kaggle
      </a>
    )}
  </div>
);

const ProjectEntry: React.FC<{ project: Project; delay: number }> = ({ project, delay }) => (
  <FadeIn delay={delay}>
    <article className="grid gap-6 border border-zinc-800 bg-zinc-900/40 p-6 md:grid-cols-[minmax(0,1fr)_220px] md:items-start">
      <div>
        <h4 className="font-playfair text-xl text-white">{project.title}</h4>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>
        <p className="mt-4 font-mono text-[12px] tracking-[0.02em] text-zinc-500">
          {project.implementation}
        </p>
        <div className="mt-5">
          <ProjectLinks project={project} />
        </div>
      </div>

      {project.image && (
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/60"
            >
              <img
                src={project.image}
                alt={`${project.title} illustration`}
                className="h-40 w-full object-contain p-2 transition hover:scale-[1.02]"
              />
            </button>
          </DialogTrigger>
          <DialogContent className="max-h-[95vh] max-w-[95vw] border-zinc-800 bg-zinc-950 p-2">
            <img
              src={project.image}
              alt={`${project.title} illustration enlarged`}
              className="max-h-[90vh] w-full object-contain"
            />
          </DialogContent>
        </Dialog>
      )}
    </article>
  </FadeIn>
);

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  return (
    <section id="projects" className={cn('bg-zinc-950 py-24 md:py-32 text-zinc-100', className)}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="font-serif text-sm italic text-zinc-500">
              Expertise
            </p>
            <h2 className="mt-4 font-playfair text-4xl text-white md:text-5xl">Project Dossiers</h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              Organized by system layer: inference, decision logic, mathematical modeling, and
              applied deployment. Each dossier maps to shipped work below.
            </p>
          </FadeIn>
        </div>

        <div className="mt-20 space-y-20">
          {projectDossiers.map((dossier, dossierIndex) => (
            <div key={dossier.id} className="border-t border-zinc-800 pt-16 first:border-t-0 first:pt-0">
              <FadeIn delay={dossierIndex * 40}>
                <div className="mb-10 max-w-3xl">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h3 className="font-playfair text-2xl text-white md:text-3xl">{dossier.title}</h3>
                    {dossier.badge && (
                      <span className="rounded-full border border-zinc-700 px-3 py-1 font-serif text-xs italic text-zinc-400">
                        {dossier.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-base leading-relaxed text-zinc-400">{dossier.description}</p>
                </div>
              </FadeIn>

              <div className="space-y-4">
                {dossier.projects.map((project, projectIndex) => (
                  <ProjectEntry
                    key={project.title}
                    project={project}
                    delay={120 + dossierIndex * 40 + projectIndex * 50}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
