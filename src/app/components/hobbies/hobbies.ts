import { Component, inject } from '@angular/core';
import { HobbiesService } from '../../services/hobbies';

@Component({
  selector: 'app-hobbies',
  imports: [],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.scss'
})
export class Hobbies {
  private hobbiesService = inject(HobbiesService);
  
  hobbiesData = this.hobbiesService.hobbiesData;
}