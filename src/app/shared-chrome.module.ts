import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialsNavComponent } from './components/socials-nav/socials-nav.component';
import { SectionHeroDirective } from './directives/section-hero.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SocialsNavComponent,
    SectionHeroDirective,
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    SocialsNavComponent,
    SectionHeroDirective,
  ],
})
export class SharedChromeModule {}
