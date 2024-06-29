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
    'monochrome',
    // 'blueRedWine', 
    // 'blueOrange', 
  ];

  ngOnInit(): void {

    // if (this.currentClass === 'monochrome') {
      const randomIndex = Math.floor(Math.random() * this.classList.length);
      console.log(randomIndex)
      this.currentClass = this.classList[randomIndex];
    // } else {
    //   this.currentClass = 'monochrome';
    // }
  }
}
