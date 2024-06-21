import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  items: string[] = ["home", "about", "portfolio","contact"]

  currentRoute = this.router.url.split("/")[1]
  constructor(private router: Router){}
  
  goTo(route: string) {
    this.router.navigate([route])
  }

}
