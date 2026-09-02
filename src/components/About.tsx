import React from 'react';
import ArticleSection from '@/components/layout/ArticleSection';

const KURAUTO_TRAILER = 'https://www.youtube.com/watch?v=8eFU9nIxVkU';
const ELONGA_TEAM_PHOTO = '/images/elongasalon.jpg';

const About: React.FC = () => {
  return (
    <ArticleSection number="3" title="About Me">
      <p className="article-lead">
        My work has always extended beyond software. Before focusing on AI and systems engineering,
        I built companies, teams, and operational projects from the ground up. Those experiences
        shaped how I approach engineering today: start from the problem, understand the constraints,
        build quickly, measure what works, and iterate.
      </p>

      <p className="about-intro">
        I remain involved in entrepreneurial and nonprofit initiatives alongside my technical work,
        particularly where technology, operations, and economic opportunity intersect.
      </p>

      <div className="about-entries">
        <article className="about-entry">
          <h3 className="about-entry-title">Kurauto</h3>
          <p className="about-entry-body">
            I founded{' '}
            <a
              href={KURAUTO_TRAILER}
              target="_blank"
              rel="noopener noreferrer"
              className="about-text-link"
            >
              Kurauto
            </a>{' '}
            while still a student, building a waterless mobile car-care company from an initial
            product into a full operating business. I worked across product design, technology,
            fundraising, partnerships, hiring, and day-to-day operations, scaling the company to a
            six-person team and €100K+ in annual revenue while saving more than 50,000 liters of
            water. I exited the company in 2024.
          </p>
        </article>

        <article className="about-entry">
          <h3 className="about-entry-title">
            <span translate="no">Les Étoiles d&apos;Élonga</span>
          </h3>
          <p className="about-entry-body">
            I co-founded{' '}
            <a
              href={ELONGA_TEAM_PHOTO}
              target="_blank"
              rel="noopener noreferrer"
              className="about-text-link"
              translate="no"
            >
              Les Étoiles d&apos;Élonga
            </a>{' '}
            to support young Congolese entrepreneurs in turning early-stage ideas into structured,
            internationally oriented projects. We built a network of 50+ mentors and operators across
            multiple countries, combining mentorship, practical resources, and access to professional
            networks to help founders move from ideas toward execution.
          </p>
        </article>
      </div>
    </ArticleSection>
  );
};

export default About;
