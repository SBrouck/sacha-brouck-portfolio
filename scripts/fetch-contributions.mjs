// Fetch the GitHub contribution calendar for the last year and write it to src/data/contributions.json.
// Runs in CI before the build (needs GITHUB_TOKEN). If the request fails, the existing snapshot is
// kept, so the site still builds.
import { writeFileSync } from 'node:fs';

const LOGIN = 'SBrouck';
const OUT = new URL('../src/data/contributions.json', import.meta.url);
const token = process.env.GITHUB_TOKEN;

const query = `query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount contributionLevel } }
      }
    }
  }
}`;

const LEVELS = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };

async function main() {
  if (!token) {
    console.warn('GITHUB_TOKEN not set: keeping the existing contributions snapshot.');
    return;
  }
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { login: LOGIN } }),
  });
  const body = await res.json();
  const calendar = body?.data?.user?.contributionsCollection?.contributionCalendar;
  if (!res.ok || !calendar) {
    console.warn('Contribution fetch failed, keeping the existing snapshot:', JSON.stringify(body).slice(0, 300));
    return;
  }
  const data = {
    login: LOGIN,
    fetchedAt: new Date().toISOString(),
    total: calendar.totalContributions,
    weeks: calendar.weeks.map((w) =>
      w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount, level: LEVELS[d.contributionLevel] ?? 0 })),
    ),
  };
  writeFileSync(OUT, JSON.stringify(data) + '\n');
  console.log(`Wrote ${data.total} contributions over ${data.weeks.length} weeks.`);
}

main().catch((err) => console.warn('Contribution fetch error, keeping the existing snapshot:', err.message));
