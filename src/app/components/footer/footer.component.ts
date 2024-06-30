import { Component } from '@angular/core';
import { socialMediaUrls, socials } from '../../interfaces/social.interfaces';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="h-1/3 flex flex-wrap justify-between items-center p-4 sm:p-6 md:p-10 text-[2vh] sm:text-[2.5vh] md:text-[3vh] font-semibold bg-primary text-background">
      <p class="w-full sm:w-auto flex items-center text-left text-wrap mb-4 sm:mb-0">
        Jose Piedra, Developer
      </p>
      <app-socials-nav class="w-full sm:w-auto flex items-center justify-center sm:justify-start mb-4 sm:mb-0"></app-socials-nav>
      <p class="w-full sm:w-auto flex items-center justify-end">
        &copy; 2024
      </p>
    </footer>
  `})

export class FooterComponent {
  socialMediaUrls: socialMediaUrls[] = socials;
}
