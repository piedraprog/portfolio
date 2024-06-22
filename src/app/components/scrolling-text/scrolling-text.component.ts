import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scrolling-text',
  templateUrl: './scrolling-text.component.html',
  styleUrl: './scrolling-text.component.scss',
  
})
export class ScrollingTextComponent {

  @Input() text:string = "";
}
