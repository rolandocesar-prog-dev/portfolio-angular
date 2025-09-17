import { Injectable, signal } from '@angular/core';
import { AboutInfo } from '../models/portfolio.interfaces';

@Injectable({
  providedIn: 'root'
})
export class Portfolio {
  private aboutDataSignal = signal<AboutInfo>({
    name: 'Rolando César Vásquez Tavera',
    title: 'Técnico Superior en Sistemas Informáticos',
    subtitle: 'Desarrollador Web',
    description: 'Profesional especializado en desarrollo web con experiencia en tecnologías modernas. Enfocado en crear soluciones eficientes, accesibles y escalables.',
    contact: {
      email: 'rolandovasquez.dev@gmail.com',
      phone: '+591 123 456 789',
      location: 'Tarija, Bolivia',
      linkedin: 'https://linkedin.com/in/rolando-vasquez',
      github: 'https://github.com/rolando-vasquez'
    },
    photoUrl: 'assets/images/perfil-web.webp'
  });

  // Getter reactivo para obtener los datos
  get aboutData() {
    return this.aboutDataSignal.asReadonly();
  }

  // Método para actualizar datos (si es necesario)
  updateAboutData(data: Partial<AboutInfo>) {
    this.aboutDataSignal.update(current => ({ ...current, ...data }));
  }
}