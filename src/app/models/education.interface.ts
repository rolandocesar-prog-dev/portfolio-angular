export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  startDate: string;
  endDate?: string;
  status: 'completed' | 'in-progress';
  description?: string;
  type: 'degree' | 'certification' | 'course';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  year: string;
  category: 'academic' | 'professional' | 'personal';
}

export interface EducationData {
  timeline: EducationItem[];
  achievements: Achievement[];
}