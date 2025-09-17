import { Component, inject } from '@angular/core';
import { EducationService } from '../../services/education';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  private educationService = inject(EducationService);
  
  educationData = this.educationService.educationData;
}