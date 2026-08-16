import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { NAVBAR_ITEMS, NavMenuItem } from '../../interfaces/nav-menu-item';

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
        @for (item of items; track item.route; let i = $index) {
          <li>
            <button
              type="button"
              (click)="goTo(item)"
              [disabled]="!item.available"
              [attr.aria-disabled]="!item.available"
              [class.cursor-pointer]="item.available"
              [class.opacity-40]="!item.available"
              [class.cursor-not-allowed]="!item.available"
              class="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              [ngClass]="currentRoute == item.route ? 'underline decoration-4 underline-offset-[1vh]  3xl:decoration-[0.5vh] 3xl:border-r-2' : 'hover-underline-animation'"
              >
              {{item.label}}
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
  items: NavMenuItem[] = NAVBAR_ITEMS;
  currentRoute = '';

  private readonly destroyRef = inject(DestroyRef);

  constructor(private router: Router) {
    this.currentRoute = this.routeSegment(this.router.url);
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => {
        this.currentRoute = this.routeSegment(event.urlAfterRedirects);
      });
  }

  goTo(item: NavMenuItem): void {
    if (!item.available) {
      return;
    }
    this.router.navigate([item.route]);
  }

  private routeSegment(url: string): string {
    return url.split('/')[1] ?? '';
  }

}
