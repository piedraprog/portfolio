import { Component } from '@angular/core';
import { socialMediaUrls, socials } from '../../interfaces/social.interfaces';

@Component({
  selector: 'app-socials-nav',
  template: `
    <ul class="flex capitalize" *ngFor="let item of socialMediaUrls;index as i">
      <li class="hover-underline-animation">
        <a [href]="item.url" target="_blank" rel="noopener noreferrer">
          {{item.social}}
        </a>
      </li> 
      <span class="mr-1" *ngIf="i !== socialMediaUrls.length -1">,</span>
    </ul>
  `
})
export class SocialsNavComponent {
  socialMediaUrls: socialMediaUrls[] = socials;
}
