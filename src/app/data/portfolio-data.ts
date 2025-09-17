import { EducationData } from '../models/education.interface';
import { ProjectsData } from '../models/project.interface';
import { HobbiesData } from '../models/hobby.interface';

export const EDUCATION_DATA: EducationData = {
  timeline: [
    {
      id: '1',
      title: 'Ingeniería en Sistemas',
      institution: 'Universidad Adventista de Bolivia',
      startDate: '2025',
      status: 'in-progress',
      type: 'degree',
      description: 'Carrera de Ingeniería en Sistemas con enfoque en desarrollo de software'
    },
    {
      id: '2',
      title: 'Técnico Superior en Sistemas Informáticos',
      institution: 'INCOS Tarija',
      startDate: '2018',
      endDate: '2020',
      status: 'completed',
      type: 'degree',
      description: 'Formación técnica especializada en sistemas informáticos'
    }
  ],
  achievements: [
    {
      id: '1',
      title: 'Primer Lugar',
      description: 'Desempeño Académico 2020 - INCOS Tarija',
      icon: '🏆',
      year: '2020',
      category: 'academic'
    },
    {
      id: '2',
      title: 'Segundo Lugar',
      description: 'Desempeño Académico 2019 - INCOS Tarija',
      icon: '🥈',
      year: '2019',
      category: 'academic'
    }
  ]
};

export const PROJECTS_DATA: ProjectsData = {
  current: [
    {
      id: '1',
      title: 'Voz Liberal Tarija',
      description: 'Desarrollo de página web para la plataforma política Voz Liberal Tarija. Proyecto desarrollado sin frameworks, enfocado en performance y accesibilidad.',
      status: 'active',
      technologies: [
        { name: 'HTML5', color: 'var(--tech-color-1)', category: 'frontend' },
        { name: 'CSS3', color: 'var(--tech-color-2)', category: 'frontend' },
        { name: 'JavaScript', color: 'var(--tech-color-3)', category: 'frontend' }
      ],
      links: [
        { type: 'demo', url: '#', label: 'Ver Demo' }
      ],
      startDate: '2024',
      category: 'current',
      featured: true
    }
  ],
  completed: [
    {
      id: '2',
      title: 'Portfolio Personal',
      description: 'Sitio web personal desarrollado con HTML5 y CSS3, enfocado en accesibilidad WCAG 2.1 AA y SEO.',
      status: 'completed',
      technologies: [
        { name: 'HTML5', color: 'var(--tech-color-1)', category: 'frontend' },
        { name: 'CSS3', color: 'var(--tech-color-2)', category: 'frontend' }
      ],
      links: [
        { type: 'demo', url: '#', label: 'Ver Sitio' },
        { type: 'repository', url: '#', label: 'Código' }
      ],
      startDate: '2024',
      endDate: '2024',
      category: 'completed'
    }
  ]
};

export const HOBBIES_DATA: HobbiesData = {
  hobbies: [
    {
      id: '1',
      title: 'Tocar Guitarra',
      description: 'Disfruto tocando guitarra en mis ratos libres, especialmente música clásica y folk.',
      icon: '🎸',
      category: 'music'
    },
    {
      id: '2',
      title: 'Fútbol',
      description: 'Practico fútbol regularmente, tanto recreativo como en equipos locales.',
      icon: '⚽',
      category: 'sports'
    },
    {
      id: '3',
      title: 'Aprendizaje Continuo',
      description: 'Siempre estoy aprendiendo nuevas tecnologías y mejorando mis habilidades.',
      icon: '📚',
      category: 'learning'
    },
    {
      id: '4',
      title: 'Fotografía',
      description: 'Me gusta capturar momentos especiales y explorar la fotografía digital.',
      icon: '📷',
      category: 'other'
    }
  ],
  quote: {
    text: 'La programación no es solo código, es arte, lógica y pasión combinados.',
    author: 'Rolando Vásquez'
  }
};