import { Injectable, signal } from '@angular/core';
import { EducationData } from '../models/education.interface';
import { EDUCATION_DATA } from '../data/portfolio-data';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private educationDataSignal = signal<EducationData>(EDUCATION_DATA);

  get educationData() {
    return this.educationDataSignal.asReadonly();
  }

  updateEducationData(data: Partial<EducationData>) {
    this.educationDataSignal.update(current => ({ ...current, ...data }));
  }
}