import { Component } from '@angular/core';
import { socialMediaUrls, socials } from '../../interfaces/social.interfaces';
import { ToastrService } from 'ngx-toastr';
import { Clipboard } from "@angular/cdk/clipboard";

@Component({
  selector: 'app-contact',
  template: `
    <section class="flex flex-col text-primary">
      <app-navbar class="nav flex justify-end mr-4 pt-5 xxs:mr-14 xxs:pt-0"></app-navbar>

      <div class="h-[70vh] flex items-center justify-center xxs:h-[50vh]">
        <div class="text-center">
          <p class="font-semibold text-lg uppercase text-center xxs:text-sm">
            send me a message
          </p>
          <button (click)="showSuccess()">
            <h1 class="
              font-bold text-[10vh] uppercase text-center 
              hover:text-accent 
              xxs:text-4xl"
            >
              {{email}}
            </h1>
          </button>
        </div>
      </div>
    </section>

    <section class="bg-background text-primary pt-16 xxs:pt-0">
      <div class="flex items-center justify-center">
        <div class="text-center">
          <p class="font-semibold text-lg uppercase text-center xxs:text-xl">
            or reach me on
          </p>
          <ul
            *ngFor="let social of socialMediaUrls"
            class="font-bold text-[10vh] uppercase text-center leading-tight hover:text-accent xxs:text-4xl"
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

  constructor(
    private toastr: ToastrService,
    private clipboard: Clipboard
  ) { }

  showSuccess() {
    this.clipboard.copy(this.email);


    this.toastr.success('Succesfull', 'Copy to clipboard', {
      timeOut: 1500,
      positionClass: 'toast-bottom-right'
    });


  }
}
