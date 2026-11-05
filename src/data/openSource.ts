export type ContributionKind = 'PR' | 'Issue';
export type ContributionStatus = 'Merged' | 'Open' | 'Closed';

export interface OpenSourceContribution {
  project: string;
  repo: string;
  logo: string;
  kind: ContributionKind;
  number: number;
  status: ContributionStatus;
  title: string;
  url: string;
}

// Newest first. Add an entry here when a new contribution lands; logos live in public/images/oss/.
export const openSourceContributions: OpenSourceContribution[] = [
  {
    project: 'Hugging Face Datasets',
    repo: 'huggingface/datasets',
    logo: '/images/oss/huggingface.png',
    kind: 'PR',
    number: 8575,
    status: 'Merged',
    title: 'Fix async map checkpoint accounting across repeated resumes',
    url: 'https://github.com/huggingface/datasets/pull/8575',
  },
  {
    project: 'Meltano SDK',
    repo: 'meltano/sdk',
    logo: '/images/oss/meltano.png',
    kind: 'Issue',
    number: 3775,
    status: 'Open',
    title: 'First SIGTERM during a normal target drain can re-enter a sink and acknowledge uncommitted data',
    url: 'https://github.com/meltano/sdk/issues/3775',
  },
];
