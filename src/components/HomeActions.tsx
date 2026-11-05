import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './animations/FadeIn';

const HomeActions: React.FC = () => {
  return (
    <section className="home-block">
      <div className="article-column">
        <FadeIn>
          <div className="article-actions">
            <Link to="/work" className="article-button">
              §2 Work
            </Link>
            <a
              href="https://github.com/SBrouck"
              target="_blank"
              rel="noopener noreferrer"
              className="article-button article-button-muted"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sacha-brouck/"
              target="_blank"
              rel="noopener noreferrer"
              className="article-button article-button-muted"
            >
              LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HomeActions;
