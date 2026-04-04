import { Component } from '@angular/core';
import { CERTIFICATIONS, EDUCATION, SKILL_GROUPS } from '../../data/portfolio.data';
import { Certification, SkillGroup } from '../../models/portfolio.models';

@Component({
  selector: 'app-expertise-section',
  imports: [],
  templateUrl: './expertise-section.component.html'
})
export class ExpertiseSectionComponent {
  protected readonly skillGroups: SkillGroup[] = SKILL_GROUPS;
  protected readonly certifications: Certification[] = CERTIFICATIONS;
  protected readonly education: string[] = EDUCATION;
}
