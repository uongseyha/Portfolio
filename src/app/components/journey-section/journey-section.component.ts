import { Component } from '@angular/core';
import { JOURNEY } from '../../data/portfolio.data';
import { TimelineRole } from '../../models/portfolio.models';

@Component({
  selector: 'app-journey-section',
  imports: [],
  templateUrl: './journey-section.component.html'
})
export class JourneySectionComponent {
  protected readonly journey: TimelineRole[] = JOURNEY;
}
