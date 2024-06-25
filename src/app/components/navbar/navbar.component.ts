import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
  <ul class="flex space-x-4 text-[3vh] font-semibold text-primary">
    <li *ngFor="let item of items;index as i">
      <button 
        (click)="goTo(item)" 
        [ngClass]="currentRoute == item ? 'underline decoration-4 underline-offset-4' : 'hover-underline-animation'"
      >
        {{item}}
      </button>
      <span *ngIf="i !== items.length -1">,</span>
    </li>
  </ul>`,
})
export class NavbarComponent {
  items: string[] = ["home", "about", "portfolio","contact"]

  currentRoute = this.router.url.split("/")[1]
  constructor(private router: Router){}
  
  goTo(route: string) {
    this.router.navigate([route])
  }

}
