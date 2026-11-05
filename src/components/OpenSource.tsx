import React from 'react';
import FadeIn from './animations/FadeIn';
import { openSourceContributions } from '@/data/openSource';

const OpenSource: React.FC = () => {
  return (
    <section id="open-source" className="home-block">
      <div className="article-column">
        <FadeIn>
          <p className="article-label">Open source</p>
          <ul className="oss-list">
            {openSourceContributions.map((c) => (
              <li key={c.url}>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="oss-row" title={c.title}>
                  <img src={c.logo} alt="" className="oss-logo" width={20} height={20} loading="lazy" />
                  <span className="oss-project">{c.project}</span>
                  <span className="oss-title">{c.title}</span>
                  <span className="oss-ref">
                    {c.kind} #{c.number} · <span className={`oss-status oss-status-${c.status.toLowerCase()}`}>{c.status}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
};

export default OpenSource;
