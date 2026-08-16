import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { map } from 'rxjs';
import { gsap } from 'gsap';
import { Router } from '@angular/router';
import { TypewriterService } from '../../services/typewriter.service';
import { ShowIconService } from '../../services/show-arrow.service';
import { PortfolioThemeService } from '../../services/portfolio-theme.service';
import { PortfolioThemeName } from '../../interfaces/portfolio-theme';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HomepageComponent implements AfterViewInit, OnDestroy {

  lastName: string[] = ['piedra', 'drapie']
  titles: string[] = ['frontend', 'backend', 'chatbots', 'automatization', 'Software Developer']

  showArrow: boolean = false;

  callToAction: string = "";

  iconClass: string = '';
  screenWidth: number = 0;
  screenHeight: number = 0;

  // Calcula el número de barras según el ancho de la ventana, y lo divide entre
  // el alto de la barra o lo que deberia ser, en este caso 500px pondra dos barras
  barHeight: number = 350;
  @ViewChild('barsContainer', { static: true }) barsContainer!: ElementRef<HTMLElement>;
  @ViewChild('homeStage', { static: true }) homeStage!: ElementRef<HTMLElement>;
  @ViewChild('homeCopy', { static: true }) homeCopy!: ElementRef<HTMLElement>;
  @ViewChild('themeRingOuter') themeRingOuter?: ElementRef<HTMLElement>;
  @ViewChild('themeRingInner') themeRingInner?: ElementRef<HTMLElement>;

  isThemeCycling = false;

  private gsapContext?: gsap.Context;
  private themeWipe?: gsap.core.Timeline;
  private iconSubscription = this.showIconService.iconClass$.subscribe((className) => {
    this.iconClass = className;
  });

  @HostListener('window:resize')
  getScreenSize(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  constructor(
    private router: Router,
    private typewriterService: TypewriterService,
    private showIconService: ShowIconService,
    private readonly portfolioTheme: PortfolioThemeService,
    private readonly host: ElementRef<HTMLElement>,
  ) {
    this.getScreenSize()

    // this.callToAction = this.screenWidth > 600 ? `I've to tell you where's the nav?` : 'Need help finding the navigation? Click here!';
    this.callToAction = 'Need help finding the navigation? Click here!';
  }

  ngAfterViewInit(): void {
    // this.setRandomTheme();
  }

  ngOnDestroy(): void {
    this.iconSubscription.unsubscribe();
    this.themeWipe?.kill();
    this.gsapContext?.revert();
  }

  typedText$ = this.typewriterService
    .getTypewriterEffect(this.lastName)
    .pipe(map((text) => text));

  typedTitle$ = this.typewriterService
    .getTypewriterEffect(this.titles, 100)
    .pipe(map((text) => text))

  gotoNav(): void {
    if (this.prefersReducedMotion()) {
      void this.router.navigate(['/nav']);
      return;
    }

    this.gsapContext?.revert();
    this.gsapContext = gsap.context(() => {
      gsap.to(this.homeStage.nativeElement, {
        autoAlpha: 0,
        y: -40,
        duration: 0.45,
        ease: 'power3.in',
        onComplete: () => {
          void this.router.navigate(['/nav']);
        },
      });
    }, this.host.nativeElement);
  }

  cycleTheme(): void {
    const nextTheme = this.portfolioTheme.peekNext();
    if (this.prefersReducedMotion()) {
      this.portfolioTheme.apply(nextTheme);
      return;
    }

    this.playBarWipe(nextTheme);
  }

  onMouseEnter(): void {
    this.showIconService.showIcon();
  }

  onMouseLeave(): void {
    this.showIconService.hideIcon();
  }

  onThemeButtonEnter(): void {
    if (this.prefersReducedMotion() || this.isThemeCycling) {
      return;
    }

    const outer = this.themeRingOuter?.nativeElement;
    const inner = this.themeRingInner?.nativeElement;
    if (!outer || !inner) {
      return;
    }

    gsap.to(outer, { scale: 1.12, duration: 0.25, ease: 'power2.out' });
    gsap.to(inner, { scale: 0.88, duration: 0.25, ease: 'power2.out' });
  }

  onThemeButtonLeave(): void {
    const outer = this.themeRingOuter?.nativeElement;
    const inner = this.themeRingInner?.nativeElement;
    if (!outer || !inner) {
      return;
    }

    gsap.to([outer, inner], { scale: 1, duration: 0.25, ease: 'power2.out' });
  }

  private playBarWipe(nextTheme: PortfolioThemeName): void {
    this.themeWipe?.kill();
    this.isThemeCycling = true;

    const container = this.barsContainer.nativeElement;
    const copy = this.homeCopy.nativeElement;
    container.replaceChildren();

    const barCount = Math.max(2, Math.floor(window.innerWidth / this.barHeight));
    const bars: HTMLDivElement[] = [];

    for (let i = 0; i < barCount; i++) {
      const bar = document.createElement('div');
      bar.className = `bar h-[500px] w-full bg-background origin-left ${nextTheme}`;
      container.appendChild(bar);
      bars.push(bar);
    }

    gsap.set(bars, { scaleX: 0, autoAlpha: 1 });

    this.themeWipe = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      onComplete: () => {
        container.replaceChildren();
        this.isThemeCycling = false;
      },
    });

    this.themeWipe.to(copy, {
      autoAlpha: 0,
      y: -28,
      duration: 0.35,
      ease: 'power3.in',
    });
    this.themeWipe.fromTo(
      bars,
      { scaleX: 0, autoAlpha: 1 },
      { scaleX: 1, autoAlpha: 1, duration: 1, stagger: 0.25 },
    );
    this.themeWipe.add(() => {
      this.portfolioTheme.apply(nextTheme);
    });
    this.themeWipe.to(copy, {
      autoAlpha: 1,
      y: 0,
      duration: 0.45,
      ease: 'power3.out',
    });
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
