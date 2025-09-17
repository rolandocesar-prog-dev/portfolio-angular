import { Component, inject } from '@angular/core';
import { Portfolio } from '../../services/portfolio';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  private portfolioService = inject(Portfolio);
  
  // Signal reactivo que se actualiza automáticamente
  aboutData = this.portfolioService.aboutData;
}