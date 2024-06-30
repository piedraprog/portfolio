import { Component } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { ScreenSizeService } from '../../services/screensize.service';
import { Router } from '@angular/router';
import { ShowIconService } from '../../services/show-arrow.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})

export class NavigationComponent {

  screenWidth!: number;
  screenWidthSubscription: Subscription = new Subscription;
  isScreenWidthGreaterThan800!: boolean;
  isScreenHeightValid$: Observable<boolean>;

  startPosition: string = "";

  iconClass: string = '';

  menuItems = [
    { label: 'About', route: 'about' },
    { label: 'Portfolio', route: 'portfolio' },
    // Uncomment and add more items as needed
    // { label: 'Resources', route: 'resources' },
    { label: 'Contact', route: 'contact' }
  ];

  constructor(
    private screenSizeService: ScreenSizeService,
    private router: Router,
    private showIconService: ShowIconService
  ) {
    this.isScreenHeightValid$ = this.screenSizeService.isScreenHeightValid();
    
  }

  setStartPosition(event: MouseEvent): void {
    const textElement = event.target as HTMLElement;
    const textWidth = textElement.offsetWidth;
    this.startPosition = `${ textWidth +10 }px`;
  }

  ngOnInit() {
    this.showIconService.iconClass$.subscribe(className => {
      this.iconClass = className;
    });
    
    this.screenWidthSubscription = this.screenSizeService.getScreenWidth().subscribe(width => {
      this.screenWidth = width;
      this.isScreenWidthGreaterThan800 = width > 800;
    });
  }

  ngOnDestroy() {
    this.screenWidthSubscription.unsubscribe();
  }

  goTo(route: string) {
    this.router.navigate([`/${route}`])
  }

  onMouseEnter(): void {
    this.showIconService.showIcon();
  }

  onMouseLeave(): void {
    this.showIconService.hideIcon();
  }
}
