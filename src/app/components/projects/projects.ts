import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../services/projects';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  private projectsService = inject(ProjectsService);
  
  projectsData = this.projectsService.projectsData;
}