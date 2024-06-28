import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, pluck } from 'rxjs';
import { projects } from '../../interfaces/projects.interfaces';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss'
})
export class DetailPageComponent {

  machineLearningName$: Observable<any> = this.route.data.pipe(
    map(preload => preload)
  );

  constructor(
    private route: ActivatedRoute
  ) {

  }
}
