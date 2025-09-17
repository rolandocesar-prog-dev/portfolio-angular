import { Injectable, signal } from '@angular/core';
import { ProjectsData } from '../models/project.interface';
import { PROJECTS_DATA } from '../data/portfolio-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projectsDataSignal = signal<ProjectsData>(PROJECTS_DATA);

  get projectsData() {
    return this.projectsDataSignal.asReadonly();
  }

  updateProjectsData(data: Partial<ProjectsData>) {
    this.projectsDataSignal.update(current => ({ ...current, ...data }));
  }

  getProjectsByCategory(category: 'current' | 'completed') {
    return this.projectsDataSignal()[category];
  }
}