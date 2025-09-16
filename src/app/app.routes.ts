import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Education } from './components/education/education';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Hobbies } from './components/hobbies/hobbies';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'education', component: Education },
  { path: 'skills', component: Skills },
  { path: 'projects', component: Projects },
  { path: 'hobbies', component: Hobbies },
  { path: '**', redirectTo: '/about' } // Wildcard para rutas no encontradas
];