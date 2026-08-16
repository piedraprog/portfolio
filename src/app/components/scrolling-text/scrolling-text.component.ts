import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-scrolling-text',
    templateUrl: './scrolling-text.component.html',
    styleUrl: './scrolling-text.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ScrollingTextComponent {

  @Input() text:string = "";
}
