import { Component } from '@angular/core';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { MetricsSectionComponent } from './components/metrics-section/metrics-section.component';
import { JourneySectionComponent } from './components/journey-section/journey-section.component';
import { ExpertiseSectionComponent } from './components/expertise-section/expertise-section.component';
import { ProjectCarouselComponent } from './components/project-carousel/project-carousel.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';

@Component({
  selector: 'app-root',
  imports: [
    NavHeaderComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    MetricsSectionComponent,
    JourneySectionComponent,
    ExpertiseSectionComponent,
    ProjectCarouselComponent,
    ContactSectionComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
