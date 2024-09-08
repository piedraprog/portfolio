import { Component } from '@angular/core';
import { socialMediaUrls, socials } from '../../interfaces/social.interfaces';
import { ToastrService } from 'ngx-toastr';
import { Clipboard } from "@angular/cdk/clipboard";

@Component({
  selector: 'app-contact',
  template: `
    <section class="flex-col text-primary">
      <app-navbar></app-navbar>

      <div class="md:h-[110vh] xxs:h-[50vh] flex items-center justify-center">
        <div class="text-center">
          <p class="
            font-semibold 
            min-md:text-2xl 
            text-lg 
            uppercase text-center
            3xl:text-5xl
            ">
            send me a message
          </p>
          <button (click)="showSuccess()">
            <h1 class="
              font-bold 
              text-[15vh]
              uppercase 
              text-center 
              hover:text-accent 
              max-md:text-4xl"
            >
              {{email}}
            </h1>
          </button>
        </div>
      </div>
    </section>

    <section class="bg-background text-primary pt-32 max-xs:pt-0">
      <div class="flex items-center justify-center px-4">
        <div class="text-center">
          <p class="font-semibold text-lg md:text-xl uppercase 3xl:text-4xl">
            or reach me on
          </p>
          <ul *ngFor="let social of socialMediaUrls" class="font-bold text-5xl md:text-[18vh] uppercase leading-tight hover:text-accent">
            <li>
              <a [href]="social.url" target="_blank" rel="noopener noreferrer">
                {{social.social}}
              </a>
            </li>
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
