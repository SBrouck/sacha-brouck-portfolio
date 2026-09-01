import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { cn } from '@/lib/utils';
import ArticleSection from '@/components/layout/ArticleSection';
import { workAreas, type Project, type ResearchContent } from '@/data/workAreas';
import { ExternalLink, Github, Play } from 'lucide-react';

const legacyAreaIds: Record<string, string> = {
  'causal-research': 'causal-applied-ml',
  'inference-systems': 'inference-engineering',
  'decision-systems': 'agentic-engineering',
  'mathematical-modeling': 'causal-applied-ml',
  'applied-data-science': 'data-science',
};

const resolveAreaId = (rawId: string | null) => {
  if (!rawId) return null;
  return legacyAreaIds[rawId] ?? rawId;
};

const ProjectEntry: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <article className="artifact-entry">
    <h4 className="artifact-title">
      <span className="font-mono text-xs text-neutral-500">{String(index + 1).padStart(2, '0')}.</span>{' '}
      {project.title}
      {project.isWip && <span className="project-status-badge ml-2">in progress</span>}
    </h4>
    <p className="artifact-body">{project.description}</p>
    {project.isWip && (
      <p className="artifact-wip-note">
        Open-source release and video documentation coming soon.
      </p>
    )}
    <p className="artifact-detail">{project.implementation}</p>
    <div className="artifact-links">
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="artifact-link">
          <Github size={13} /> repository
        </a>
      )}
      {project.articleUrl && (
        <a href={project.articleUrl} target="_blank" rel="noopener noreferrer" className="artifact-link">
          <ExternalLink size={13} />
          {project.title === 'H&M Recommender System' ? 'abstract & code' : 'abstract'}
        </a>
      )}
      {project.demoUrl && (
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="artifact-link">
          <Play size={13} /> demo
        </a>
      )}
      {project.kaggleUrl && (
        <a href={project.kaggleUrl} target="_blank" rel="noopener noreferrer" className="artifact-link">
          <ExternalLink size={13} /> kaggle
        </a>
      )}
    </div>
    {project.image && (
      <figure className="artifact-figure">
        <img src={project.image} alt={`${project.title} figure`} className="artifact-image" />
      </figure>
    )}
  </article>
);

const ResearchPanel: React.FC<{ research: ResearchContent }> = ({ research }) => (
  <div className="research-panel">
    <h3 className="research-panel-subtitle">{research.subtitle}</h3>
    {research.paragraphs.map((paragraph) => (
      <p key={paragraph.slice(0, 32)} className="artifact-body">
        {paragraph}
      </p>
    ))}
    <dl className="work-highlights">
      {research.highlights.map((item) => (
        <div key={item.label} className="work-highlight">
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
    <div className="keywords-block mt-6">
      <p className="keywords-label">Keywords</p>
      <div className="keywords-list">
        {research.keywords.map((keyword) => (
          <span key={keyword} className="keyword-chip">
            {keyword}
          </span>
        ))}
      </div>
    </div>
    <div className="artifact-links mt-6">
      {research.links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="artifact-link"
        >
          <ExternalLink size={13} /> {link.label}
        </a>
      ))}
    </div>
  </div>
);

const WorkSection: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const legacyDossierId = searchParams.get('dossier');
  const rawAreaId = searchParams.get('area') ?? legacyDossierId;
  const activeAreaId = resolveAreaId(rawAreaId);
  const activeArea = workAreas.find((area) => area.id === activeAreaId);

  useEffect(() => {
    if (!rawAreaId) return;
    const resolved = resolveAreaId(rawAreaId);
    if (resolved && resolved !== rawAreaId) {
      setSearchParams({ area: resolved }, { replace: true });
      return;
    }
    if (legacyDossierId && !searchParams.get('area')) {
      setSearchParams({ area: legacyDossierId }, { replace: true });
    }
  }, [legacyDossierId, rawAreaId, searchParams, setSearchParams]);

  const selectArea = (areaId: string) => {
    if (activeAreaId === areaId) {
      setSearchParams({});
    } else {
      setSearchParams({ area: areaId });
    }
  };

  return (
    <ArticleSection id="work" number="2" title="Work">
      <p className="article-lead">
        Selected personal research and open-source artifacts, outside professional and academic work.
        Production data engineering and live pipeline systems from my roles are not shown here; they
        sit in private, non-open-source codebases.
      </p>
      <nav className="dossier-nav" aria-label="Work areas">
        {workAreas.map((area, index) => {
          const isActive = area.id === activeAreaId;
          return (
            <button
              key={area.id}
              type="button"
              onClick={() => selectArea(area.id)}
              className={cn('dossier-nav-item', isActive && 'dossier-nav-item-active')}
            >
              <span className="font-mono text-[11px] text-neutral-500">2.{index + 1}</span>
              <span className="dossier-nav-title">{area.title}</span>
              {area.badge && <span className="dossier-badge">{area.badge}</span>}
            </button>
          );
        })}
      </nav>

      {!activeArea && (
        <p className="work-select-hint" aria-hidden>
          Select a line to open a dossier.
        </p>
      )}

      {activeArea ? (
        <div className="dossier-panel mt-8">
          <header className="dossier-panel-header">
            <h3 className="dossier-panel-title">{activeArea.title}</h3>
            <p className="dossier-panel-description">{activeArea.description}</p>
          </header>

          {activeArea.research ? (
            <ResearchPanel research={activeArea.research} />
          ) : null}

          {activeArea.projects && activeArea.projects.length > 0 ? (
            <div className={cn('artifact-list', activeArea.research && 'mt-10 border-t border-neutral-200 pt-10')}>
              {activeArea.projects.map((project, index) => (
                <ProjectEntry key={project.title} project={project} index={index} />
              ))}
            </div>
          ) : !activeArea.research ? (
            <p className="article-muted">No artifacts in this section yet.</p>
          ) : null}
        </div>
      ) : null}
    </ArticleSection>
  );
};

export default WorkSection;
