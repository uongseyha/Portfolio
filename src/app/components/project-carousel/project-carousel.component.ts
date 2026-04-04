import { Component } from '@angular/core';
import { LIVE_DEMO_PROJECTS } from '../../data/portfolio.data';
import { LiveDemoProject } from '../../models/portfolio.models';

@Component({
  selector: 'app-project-carousel',
  imports: [],
  templateUrl: './project-carousel.component.html'
})
export class ProjectCarouselComponent {
  protected readonly projects: LiveDemoProject[] = LIVE_DEMO_PROJECTS;
  protected activeIndex = 0;

  protected prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.projects.length) % this.projects.length;
  }

  protected next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.projects.length;
  }

  protected goTo(index: number): void {
    this.activeIndex = index;
  }
}
