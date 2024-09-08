import { Component, HostListener } from '@angular/core';
import { map } from 'rxjs';
import { TypewriterService } from '../../services/typewriter.service';
import { Router } from '@angular/router';
import { ShowIconService } from '../../services/show-arrow.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {
  lastName: string[] = ['piedra', 'drapie']
  titles: string[] = ['frontend', 'backend', 'chatbots', 'automatization', 'Software Developer']
  
  showArrow: boolean = false;

  callToAction: string = "";

  iconClass: string = '';
  screenWidth: number = 0;
  screenHeight: number = 0;
  
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  constructor(
    private router: Router,
    private typewriterService: TypewriterService,
    private showIconService: ShowIconService,
  ) { 
    this.getScreenSize()

    // this.callToAction = this.screenWidth > 600 ? `I've to tell you where's the nav?` : 'Need help finding the navigation? Click here!';
    this.callToAction = 'Need help finding the navigation? Click here!';
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
