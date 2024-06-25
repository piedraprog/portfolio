import { Component } from '@angular/core';
import { socialMediaUrls, socials } from '../../interfaces/social.interfaces';

@Component({
  selector: 'app-contact',
  template: `
    <section class="flex-col text-primary">
      <div class="nav flex justify-end mr-14 pt-5">
        <app-navbar></app-navbar>
      </div>

      <div class="h-[90vh] flex items-center justify-center">
        <div class="text-center">
          <p class="font-semibold text-xl  uppercase text-center">
            send me a message
          </p>
          <h1 class="font-bold text-[18vh] uppercase text-center">
            {{email}}
          </h1>
        </div>
      </div>
    </section>

    <section class="bg-background text-primary pt-32">
      <div class=" flex items-center justify-center">
        <div class="text-center">
          <p class="font-semibold text-xl  uppercase text-center">
            or reach me in
          </p>
          <ul
            *ngFor="let social of socialMediaUrls"
            class="font-bold text-[20vh] uppercase text-center leading-tight"
          >
            <a [href]="social.url" target="_blank" rel="noopener noreferrer">
              {{social.social}}
            </a>
        </ul>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  pageName: string = "contact me";

  email: string = "hello@drapie.dev"

  socialMediaUrls: socialMediaUrls[] = socials;
}
