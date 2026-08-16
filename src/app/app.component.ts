import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioThemeService } from './services/portfolio-theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent  {
  constructor(readonly portfolioTheme: PortfolioThemeService) {
    // this.currentClass = localStorage.getItem('theme') || 'monochrome';
    // document.body.classList.add(this.currentClass);
  }

}
