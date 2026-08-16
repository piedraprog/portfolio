import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { gsap } from 'gsap';
import { ScreenSizeService } from '../../services/screensize.service';
import { Router } from '@angular/router';
import { ShowIconService } from '../../services/show-arrow.service';
import { NAV_MENU_ITEMS, NavMenuItem } from '../../interfaces/nav-menu-item';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})

export class NavigationComponent implements AfterViewInit, OnDestroy {

  screenWidth!: number;
  screenWidthSubscription: Subscription = new Subscription;
  isScreenWidthGreaterThan800!: boolean;

  startPosition: string = "";

  iconClass: string = '';

  menuItems: NavMenuItem[] = NAV_MENU_ITEMS;

  private gsapContext?: gsap.Context;

  constructor(
    private screenSizeService: ScreenSizeService,
    private router: Router,
    private showIconService: ShowIconService,
    private readonly host: ElementRef<HTMLElement>,
  ) {
    
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

  ngAfterViewInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    this.gsapContext = gsap.context(() => {
      gsap.from('.nav-menu-item', {
        autoAlpha: 0,
        x: -48,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power3.out',
      });
    }, this.host.nativeElement);
  }

  ngOnDestroy() {
    this.screenWidthSubscription.unsubscribe();
    this.gsapContext?.revert();
  }

  goTo(item: NavMenuItem): void {
    if (!item.available) {
      return;
    }
    this.router.navigate([`/${item.route}`])
  }

  closeMenu(): void {
    this.router.navigate(['/home']);
  }

  onMouseEnter(): void {
    this.showIconService.showIcon();
  }

  onMouseLeave(): void {
    this.showIconService.hideIcon();
  }
}
