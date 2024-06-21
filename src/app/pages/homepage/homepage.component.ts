import { Component } from '@angular/core';
import { map } from 'rxjs';
import { TypewriterService } from '../../services/typewriter.service';
import { Router } from '@angular/router';
import { ShowIconService } from '../../services/show-arrow.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  lastName: string[] = ['piedra', 'drapie']
  titles: string[] = ['frontend', 'backend', 'chatbots', 'automatization', 'Software Developer']
  
  showArrow: boolean = false;

  iconClass: string = '';

  constructor(
    private router: Router,
    private typewriterService: TypewriterService,
    private showIconService: ShowIconService
  ) { 
    this.showIconService.iconClass$.subscribe(className => {
      this.iconClass = className;
    });
  }

  

  typedText$ = this.typewriterService
    .getTypewriterEffect(this.lastName)
    .pipe(map((text) => text));

  typedTitle$ = this.typewriterService
    .getTypewriterEffect(this.titles, 100)
    .pipe(map((text) => text))

  gotoNav(){
    this.router.navigate(['/nav'])
  }
  

  onMouseEnter(): void {
    this.showIconService.showIcon();
  }

  onMouseLeave(): void {
    this.showIconService.hideIcon();
  }

    
}
