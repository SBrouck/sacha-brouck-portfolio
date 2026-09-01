import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const avatarImage = '/images/SBpic1bw.webp';

const keywords = [
  'AI Engineering',
  'ML Systems',
  'Data Engineering',
  'Inference Systems',
  'Agentic Systems',
  'Distributed Systems',
  'Causal Inference',
  'Evaluation',
];

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section id="home" className={cn('article-front-matter', className)}>
      <div className="article-column">
        <FadeIn delay={80}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <Avatar className="h-36 w-36 shrink-0 border border-neutral-300 bg-white shadow-sm md:h-44 md:w-44">
              <AvatarImage src={avatarImage} alt="Sacha Brouck" className="object-cover object-center" />
              <AvatarFallback>SB</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="article-title">Sacha Brouck</h1>
              <p className="article-subtitle">
                AI Engineer · Data & Systems Engineering · Applied ML
              </p>
              <div className="latex-formula-block">
                <p className="latex-formula" aria-label="SGD update on personal life objective">
                  <span className="math-var">θ</span>
                  <sub>t+1</sub>
                  <span className="math-op"> = </span>
                  <span className="math-var">θ</span>
                  <sub>t</sub>
                  <span className="math-op"> − </span>
                  <span className="math-var">η</span>
                  <sub>t</sub>
                  <span className="math-op"> ∇</span>
                  <sub>
                    <span className="math-var">θ</span>
                  </sub>
                  <span className="math-var">ℒ</span>
                  <sub>life</sub>
                  <span className="math-op">(</span>
                  <span className="math-var">θ</span>
                  <sub>t</sub>
                  <span className="math-op">; </span>
                  <span className="math-var">x</span>
                  <sup>(t)</sup>
                  <span className="math-op">)</span>
                </p>
                <p className="latex-formula-gloss">
                  Life, modeled as SGD on <span className="math-inline">ℒ</span>
                  <sub>life</sub>, one noisy minibatch per day. Convergence not guaranteed.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={160}>
          <div className="abstract-block">
            <p className="abstract-label">Abstract</p>
            <p className="abstract-text">
              I build AI systems at the intersection of machine learning, data, and systems
              engineering. My work spans inference infrastructure, agentic and decision systems, data
              pipelines, and production ML, with a strong quantitative foundation in causal inference,
              experimentation, and optimization. I focus on understanding systems from first principles,
              turning research ideas into working implementations, and building reliable, measurable
              software under real-world data and compute constraints.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={220}>
          <div className="keywords-block">
            <p className="keywords-label">Keywords</p>
            <div className="keywords-list">
              {keywords.map((keyword) => (
                <span key={keyword} className="keyword-chip">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={280}>
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

export default Hero;
