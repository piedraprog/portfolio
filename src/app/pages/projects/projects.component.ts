import { Component } from '@angular/core';
import { projects, projectsData } from '../../interfaces/projects.interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  pageName: string = "portfolio"

  projectsInfo: projects[] = projectsData


  openProject(projectId: string) {
    console.log(projectId)
  }

}
