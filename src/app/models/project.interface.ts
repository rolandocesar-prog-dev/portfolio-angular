export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'archived';
  technologies: Technology[];
  links: ProjectLink[];
  startDate: string;
  endDate?: string;
  category: 'current' | 'completed';
  featured?: boolean;
}

export interface Technology {
  name: string;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'tool' | 'other';
}

export interface ProjectLink {
  type: 'demo' | 'repository' | 'documentation';
  url: string;
  label: string;
}

export interface ProjectsData {
  current: Project[];
  completed: Project[];
}