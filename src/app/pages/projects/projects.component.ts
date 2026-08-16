import { Component, ChangeDetectionStrategy } from '@angular/core';
import { projects, projectsData } from '../../interfaces/projects.interfaces';
import { Router } from '@angular/router';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProjectsComponent {

  pageName: string = "portfolio"

  projectsInfo: projects[] = projectsData

  constructor(
    private router: Router,
  ) {

  }

  openProject(projectId: string) {
    console.log("en el componente",projectId)

    this.router.navigate(['portfolio',projectId])
  }

}
