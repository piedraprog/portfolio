import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { projects } from '../../interfaces/projects.interfaces';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss'
})
export class DetailPageComponent {

  pageDetailData$: Observable<projects> = this.route.data.pipe(
    map(({preload} )=> preload)
  );

  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  videoWidth: number = 0;
  videoHeight: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { } 

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: './assets/img/angular.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: './assets/img/react.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };
    this.slides[2] = {
      id: 2,
      src: './assets/img/vue.jpg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    };

    this.calculateVideoSize();
  }

  // Escucha los cambios de tamaño de la ventana
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.calculateVideoSize();
  }

  goTo(route: string) {
    this.router.navigate([`/${route}`])
  }

  // Función para calcular el tamaño del video acorde a la pantalla
  calculateVideoSize(): void {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Define una proporción de 16:9 para el video
    const aspectRatio = 16 / 9;

    // Ajusta el ancho y alto según la proporción de la pantalla actual
    if (screenWidth / screenHeight < aspectRatio) {
      this.videoWidth = screenWidth * 0.6;
      this.videoHeight = this.videoWidth / aspectRatio;
    } else {
      this.videoHeight = screenHeight * 0.6;
      this.videoWidth = this.videoHeight * aspectRatio;
    }
  }

  
}
