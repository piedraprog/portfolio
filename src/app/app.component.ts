import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent  {
  currentClass!: string;
  constructor() {
    // this.currentClass = localStorage.getItem('theme') || 'monochrome';
    // document.body.classList.add(this.currentClass);
  }

}
