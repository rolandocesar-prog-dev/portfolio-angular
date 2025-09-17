export interface TechnicalSkill {
  id: string;
  name: string;
  level: number; // 0-100
  category: 'language' | 'framework' | 'tool' | 'database' | 'other';
  icon?: string;
  color?: string;
}

export interface SoftSkill {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: TechnicalSkill[];
}

export interface SkillsData {
  technical: SkillCategory[];
  soft: SoftSkill[];
}