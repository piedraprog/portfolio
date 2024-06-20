import { Component } from '@angular/core';
import { map } from 'rxjs';
import { TypewriterService } from '../../services/typewriter.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  lastName: string[] = ['piedra', 'drapie']
  titles: string[] = ['frontend', 'backend', 'chatbots', 'automatization', 'Software Developer']
  
  constructor(
    private typewriterService: TypewriterService
  ) { }

  typedText$ = this.typewriterService
    .getTypewriterEffect(this.lastName)
    .pipe(map((text) => text));

  typedTitle$ = this.typewriterService
    .getTypewriterEffect(this.titles, 100)
    .pipe(map((text) => text))
}
