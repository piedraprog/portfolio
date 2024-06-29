import { Component } from '@angular/core';
import { socialMediaUrls, socials } from '../../interfaces/social.interfaces';
import { ToastrService } from 'ngx-toastr';
import { Clipboard } from "@angular/cdk/clipboard";

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
          <button (click)="showSuccess()">
            <h1 class="font-bold text-[18vh] uppercase text-center hover:text-accent">
              {{email}}
            </h1>
          </button>
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
            class="font-bold text-[20vh] uppercase text-center leading-tight hover:text-accent"
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
