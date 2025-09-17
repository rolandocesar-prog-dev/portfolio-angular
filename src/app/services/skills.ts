import { Injectable, signal } from '@angular/core';
import { SkillsData, SkillCategory, SoftSkill } from '../models/skill.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {  // 👈 CAMBIADO: de Skills a SkillsService
  private skillsDataSignal = signal<SkillsData>({
    technical: [
      {
        name: 'Lenguajes de Programación',
        skills: [
          { id: '1', name: 'JavaScript', level: 90, category: 'language', color: 'var(--tech-color-1)' },
          { id: '2', name: 'TypeScript', level: 85, category: 'language', color: 'var(--tech-color-2)' },
          { id: '3', name: 'PHP', level: 80, category: 'language', color: 'var(--tech-color-3)' },
          { id: '4', name: 'Dart', level: 75, category: 'language', color: 'var(--tech-color-4)' },
          { id: '5', name: 'Java', level: 70, category: 'language', color: 'var(--tech-color-5)' }
        ]
      },
      {
        name: 'Frameworks y Librerías',
        skills: [
          { id: '6', name: 'Angular', level: 85, category: 'framework', color: 'var(--tech-color-1)' },
          { id: '7', name: 'React', level: 80, category: 'framework', color: 'var(--tech-color-2)' },
          { id: '8', name: 'Flutter', level: 75, category: 'framework', color: 'var(--tech-color-3)' },
          { id: '9', name: 'Laravel', level: 70, category: 'framework', color: 'var(--tech-color-4)' }
        ]
      },
      {
        name: 'Herramientas y Tecnologías',
        skills: [
          { id: '10', name: 'Git', level: 90, category: 'tool', color: 'var(--tech-color-1)' },
          { id: '11', name: 'Docker', level: 75, category: 'tool', color: 'var(--tech-color-2)' },
          { id: '12', name: 'VS Code', level: 95, category: 'tool', color: 'var(--tech-color-3)' },
          { id: '13', name: 'Figma', level: 80, category: 'tool', color: 'var(--tech-color-4)' }
        ]
      },
      {
        name: 'Bases de Datos',
        skills: [
          { id: '14', name: 'MySQL', level: 85, category: 'database', color: 'var(--tech-color-1)' },
          { id: '15', name: 'PostgreSQL', level: 80, category: 'database', color: 'var(--tech-color-2)' },
          { id: '16', name: 'MongoDB', level: 70, category: 'database', color: 'var(--tech-color-3)' }
        ]
      }
    ],
    soft: [
      {
        id: '1',
        title: 'Resolución de Problemas',
        description: 'Capacidad analítica para identificar y solucionar problemas técnicos complejos',
        icon: '🧠'
      },
      {
        id: '2',
        title: 'Trabajo en Equipo',
        description: 'Experiencia colaborando en equipos multidisciplinarios',
        icon: '👥'
      },
      {
        id: '3',
        title: 'Liderazgo',
        description: 'Experiencia en gestión de equipos y coordinación de proyectos',
        icon: '📈'
      },
      {
        id: '4',
        title: 'Adaptabilidad',
        description: 'Capacidad de adaptación a nuevas tecnologías y metodologías',
        icon: '🔄'
      }
    ]
  });

  get skillsData() {
    return this.skillsDataSignal.asReadonly();
  }

  getTechnicalSkillsByCategory(category: string) {
    return this.skillsDataSignal().technical.find(cat => cat.name === category)?.skills || [];
  }

  updateSkillLevel(skillId: string, newLevel: number) {
    this.skillsDataSignal.update(current => ({
      ...current,
      technical: current.technical.map(category => ({
        ...category,
        skills: category.skills.map(skill => 
          skill.id === skillId ? { ...skill, level: newLevel } : skill
        )
      }))
    }));
  }
}