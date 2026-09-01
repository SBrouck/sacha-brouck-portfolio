import { projectDossiers, type Project, type ResearchContent } from './projectDossiers';

export type { Project, ResearchContent };

export interface WorkArea {
  id: string;
  title: string;
  badge?: string;
  description: string;
  research?: ResearchContent;
  projects?: Project[];
}

export const workAreas: WorkArea[] = projectDossiers.map(
  ({ id, title, badge, description, research, projects }) => ({
    id,
    title,
    badge,
    description,
    research,
    projects,
  })
);
