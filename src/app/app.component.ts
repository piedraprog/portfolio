import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  monochromeMode = signal<boolean>(false);

  currentClass: string = 'monochrome';
  classList: string[] = [
    'greenVeige', 
    'blueVeige', 
    'blueRedWine', 
    'blueOrange', 
    'class5'
  ];

  ngOnInit(): void {
    if (this.currentClass === 'monochrome') {
      const randomIndex = Math.floor(Math.random() * this.classList.length);
      this.currentClass = this.classList[randomIndex];
    } else {
      this.currentClass = 'monochrome';
    }
  }
}
