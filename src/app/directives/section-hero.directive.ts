import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[appSectionHero]',
  standalone: false,
})
export class SectionHeroDirective implements AfterViewInit, OnDestroy {
  private media?: ReturnType<typeof gsap.matchMedia>;

  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.media = gsap.matchMedia();
    this.media.add(
      {
        reduceMotion: '(prefers-reduced-motion: reduce)',
        allowMotion: '(prefers-reduced-motion: no-preference)',
      },
      (context) => {
        const reduceMotion = Boolean(context.conditions?.['reduceMotion']);
        if (reduceMotion) {
          return;
        }

        gsap.from(this.host.nativeElement, {
          yPercent: 18,
          autoAlpha: 0,
          duration: 1,
          ease: 'power3.out',
        });
      },
    );
  }

  ngOnDestroy(): void {
    this.media?.revert();
  }
}
