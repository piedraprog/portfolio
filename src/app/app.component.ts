import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  currentClass!: string;
  constructor() {
    // this.currentClass = localStorage.getItem('theme') || 'monochrome';
    // document.body.classList.add(this.currentClass);
  }

}
