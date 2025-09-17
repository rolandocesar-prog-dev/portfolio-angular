import { Injectable, signal } from '@angular/core';
import { HobbiesData } from '../models/hobby.interface';
import { HOBBIES_DATA } from '../data/portfolio-data';

@Injectable({
  providedIn: 'root'
})
export class HobbiesService {
  private hobbiesDataSignal = signal<HobbiesData>(HOBBIES_DATA);

  get hobbiesData() {
    return this.hobbiesDataSignal.asReadonly();
  }

  updateHobbiesData(data: Partial<HobbiesData>) {
    this.hobbiesDataSignal.update(current => ({ ...current, ...data }));
  }

  getHobbiesByCategory(category: string) {
    return this.hobbiesDataSignal().hobbies.filter(hobby => hobby.category === category);
  }
}