import { Component } from '@angular/core';
import { socialMediaUrls, socials } from '../../interfaces/social.interfaces';

@Component({
  selector: 'app-footer',
  template: `
    <div class="h-1/3 flex justify-between p-10 text-[3vh] font-semibold bg-primary text-background">
      <p class="flex items-center text-left text-wrap w-[10%]">Jose Piedra, Developer</p>
      <app-socials-nav class="flex items-center"></app-socials-nav>
      <p class="flex items-center">&copy; 2024</p>
    </div>
  `})
  
export class FooterComponent {
  socialMediaUrls: socialMediaUrls[] = socials;
}
