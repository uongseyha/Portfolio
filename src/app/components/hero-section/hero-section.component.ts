import { Component } from '@angular/core';
import { NAME, QUICK_FACTS, ROLE } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html'
})
export class HeroSectionComponent {
  protected readonly name = NAME;
  protected readonly role = ROLE;
  protected readonly quickFacts = QUICK_FACTS;
}
