import { Component, inject } from '@angular/core';
import { SkillsService } from '../../services/skills';  // 👈 CAMBIADO: de Skills a SkillsService
import { SkillsData } from '../../models/skill.interface';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  private skillsService = inject(SkillsService);  // 👈 CAMBIADO: de Skills a SkillsService
  
  skillsData: () => SkillsData = this.skillsService.skillsData;
}