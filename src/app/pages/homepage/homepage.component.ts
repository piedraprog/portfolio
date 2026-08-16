import { Component, ElementRef, HostListener, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs';
import { TypewriterService } from '../../services/typewriter.service';
import { Router } from '@angular/router';
import { ShowIconService } from '../../services/show-arrow.service';
import { gsap } from 'gsap';
@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HomepageComponent {

  lastName: string[] = ['piedra', 'drapie']
  titles: string[] = ['frontend', 'backend', 'chatbots', 'automatization', 'Software Developer']

  showArrow: boolean = false;

  callToAction: string = "";

  iconClass: string = '';
  screenWidth: number = 0;
  screenHeight: number = 0;

  currentClass!: string;
  classList: string[] = ['blueOrange', 'blueRedWine', 'monochrome'];
  // Calcula el número de barras según el ancho de la ventana, y lo divide entre
  // el alto de la barra o lo que deberia ser, en este caso 500px pondra dos barras
  barHeight: number = 350;
  barCount: number = Math.floor(window.innerWidth / this.barHeight);
  @ViewChild('barsContainer', { static: true }) barsContainer!: ElementRef;

  @HostListener('window:resize', ['$event'])
  getScreenSize(_event?: any) {
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

  ngAfterViewInit(): void {
    // this.setRandomTheme();
    setInterval(() => {
      this.currentClass = this.getNextClass();
      this.createBars();
    }, 4000);
  }

  typedText$ = this.typewriterService
    .getTypewriterEffect(this.lastName)
    .pipe(map((text) => text));

  typedTitle$ = this.typewriterService
    .getTypewriterEffect(this.titles, 100)
    .pipe(map((text) => text))

  gotoNav() {
    this.router.navigate(['/nav'])
  }

  onMouseEnter(): void {
    this.showIconService.showIcon();
  }

  onMouseLeave(): void {
    this.showIconService.hideIcon();
  }

  
  getNextClass(): string {
    const currentIndex = this.classList.indexOf(this.currentClass);
    return this.classList[(currentIndex + 1) % this.classList.length];
  }

  getRandomTheme(): string {
    const randomIndex = Math.floor(Math.random() * this.classList.length);
    return this.classList[randomIndex];
  }

  createBars(): void {
    this.barsContainer.nativeElement.innerHTML = ''; // Limpia las barras anteriores
    for (let i = 0; i < this.barCount; i++) {
      const bar = document.createElement('div');
      bar.classList.add(
        'bar',
        'h-[500px]',
        'w-full',
        'opacity-0',
        'bg-background',
        this.currentClass
      );
      this.barsContainer.nativeElement.appendChild(bar);

      // GSAP Animation
      gsap.fromTo(
        bar,
        {
          width: 0,
          opacity: 1,
        },
        {
          width: '100%',
          opacity: 1,
          duration: 1,
          delay: i * 0.25,
          ease: 'power3.inOut',
        }
      );
    }

    // Cambia el tema al fondo después de la animación
    setTimeout(() => {
      document.body.className = '';
      document.body.classList.add(this.currentClass);
      localStorage.setItem('theme', this.currentClass);
      // this.cdr.detectChanges(); // Marca cambios
    }, 2000);
  }
  
}
