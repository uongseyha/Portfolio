import { Component } from '@angular/core';
import { METRICS } from '../../data/portfolio.data';
import { Metric } from '../../models/portfolio.models';

@Component({
  selector: 'app-metrics-section',
  imports: [],
  templateUrl: './metrics-section.component.html'
})
export class MetricsSectionComponent {
  protected readonly metrics: Metric[] = METRICS;
}
