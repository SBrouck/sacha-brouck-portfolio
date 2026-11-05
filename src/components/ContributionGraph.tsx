import React from 'react';
import FadeIn from './animations/FadeIn';
import contributions from '@/data/contributions.json';

interface Day {
  date: string;
  count: number;
  level: number;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const describe = (d: Day) => {
  const date = new Date(`${d.date}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return `${d.count === 0 ? 'No' : d.count} contribution${d.count === 1 ? '' : 's'} on ${date}`;
};

const ContributionGraph: React.FC = () => {
  const weeks = contributions.weeks as Day[][];

  // A month label sits above the first week whose first day falls in a new month.
  const monthLabels = weeks.map((week, i) => {
    const month = new Date(`${week[0].date}T00:00:00`).getMonth();
    const prev = i > 0 ? new Date(`${weeks[i - 1][0].date}T00:00:00`).getMonth() : -1;
    return month !== prev && i < weeks.length - 2 ? MONTHS[month] : '';
  });

  return (
    <section id="contributions" className="home-block">
      <div className="article-column">
        <FadeIn>
          <p className="article-label">A little, often.</p>
          <div className="contrib-scroll">
            <div className="contrib-graph" style={{ gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` }}>
              {monthLabels.map((label, i) => (
                <span key={`m${i}`} className="contrib-month" style={{ gridColumn: `${i + 1} / span 4` }}>
                  {label}
                </span>
              ))}
              {weeks.map((week, i) =>
                week.map((day) => (
                  <span
                    key={day.date}
                    className={`contrib-cell contrib-l${day.level}`}
                    style={{ gridColumn: i + 1, gridRow: new Date(`${day.date}T00:00:00`).getDay() + 2 }}
                    title={describe(day)}
                    aria-label={describe(day)}
                  />
                )),
              )}
            </div>
          </div>
          <div className="contrib-footer">
            <a
              href="https://github.com/SBrouck"
              target="_blank"
              rel="noopener noreferrer"
              className="contrib-total"
            >
              {contributions.total.toLocaleString('en-US')} contributions in the last year
            </a>
            <span className="contrib-legend" aria-hidden="true">
              Less
              {[0, 1, 2, 3, 4].map((l) => (
                <span key={l} className={`contrib-cell contrib-l${l}`} />
              ))}
              More
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContributionGraph;
