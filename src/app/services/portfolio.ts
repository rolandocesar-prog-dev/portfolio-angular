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
    description: 'Profesional especializado en desarrollo de aplicaciones con experiencia en tecnologías modernas. Enfocado en crear soluciones eficientes, accesibles y escalables.',
    contact: {
      email: 'rolando.sha256@gmail.com',
      phone: '+591 78249575',
      location: 'Tarija, Bolivia',
      github: 'https://github.com/rolandocesar-prog-dev/portfolio-angular'
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