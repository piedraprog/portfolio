import { Component, ChangeDetectionStrategy } from '@angular/core';
import { socialMediaUrls, socials } from '../../interfaces/social.interfaces';

@Component({
    selector: 'app-socials-nav',
    template: `
    @for (item of socialMediaUrls; track item; let i = $index) {
      <ul class="flex capitalize">
        <li class="hover-underline-animation">
          <a [href]="item.url" target="_blank" rel="noopener noreferrer">
            {{item.social}}
          </a>
        </li>
        @if (i !== socialMediaUrls.length -1) {
          <span class="mr-1">,</span>
        }
      </ul>
    }
    `,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SocialsNavComponent {
  socialMediaUrls: socialMediaUrls[] = socials;
}
