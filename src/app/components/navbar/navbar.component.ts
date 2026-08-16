import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    template: `
    <nav class="
        fixed top-0 right-0 md:p-4 xxs:pt-10 xxs:pb-2  z-50 w-full
        bg-background 
        flex 
        justify-center md:justify-end
        3xl:pt-20 3xl:pr-24"
      >
        <ul class="
          pr-4 md:pr-10
          flex flex-wrap justify-center space-x-2 md:space-x-4 text-[2.5vh] md:text-[4vh]
          font-semibold text-primary
        ">
        @for (item of items; track item; let i = $index) {
          <li>
            <button
              (click)="goTo(item)"
              [ngClass]="currentRoute == item ? 'underline decoration-4 underline-offset-[1vh]  3xl:decoration-[0.5vh] 3xl:border-r-2' : 'hover-underline-animation'"
              >
              {{item}}
            </button>
            @if (i !== items.length -1) {
              <span class="md:inline">,</span>
            }
          </li>
        }
      </ul>
    </nav>
    `,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NavbarComponent {
  items: string[] = ["home", "about", "portfolio", "contact"]

  currentRoute = this.router.url.split("/")[1]
  constructor(private router: Router) { }

  goTo(route: string) {
    this.router.navigate([route])
  }

}
