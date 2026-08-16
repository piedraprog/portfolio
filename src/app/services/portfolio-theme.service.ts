import { Injectable, signal } from '@angular/core';
import {
  PORTFOLIO_THEME_NAMES,
  PortfolioThemeName,
  isPortfolioThemeName,
} from '../interfaces/portfolio-theme';

@Injectable({
  providedIn: 'root',
})
export class PortfolioThemeService {
  private readonly storageKey = 'theme';
  private readonly theme = signal<PortfolioThemeName>(this.readStoredTheme());

  readonly currentTheme = this.theme.asReadonly();

  constructor() {
    this.apply(this.theme());
  }

  peekNext(): PortfolioThemeName {
    const currentIndex = PORTFOLIO_THEME_NAMES.indexOf(this.theme());
    return PORTFOLIO_THEME_NAMES[(currentIndex + 1) % PORTFOLIO_THEME_NAMES.length];
  }

  next(): PortfolioThemeName {
    const nextTheme = this.peekNext();
    this.apply(nextTheme);
    return nextTheme;
  }

  apply(themeName: PortfolioThemeName): void {
    const roots = [document.documentElement, document.body];

    for (const root of roots) {
      for (const name of PORTFOLIO_THEME_NAMES) {
        root.classList.remove(name);
      }
      root.classList.add(themeName);
    }

    localStorage.setItem(this.storageKey, themeName);
    this.theme.set(themeName);
  }

  private readStoredTheme(): PortfolioThemeName {
    const stored = localStorage.getItem(this.storageKey);
    return isPortfolioThemeName(stored) ? stored : 'monochrome';
  }
}
