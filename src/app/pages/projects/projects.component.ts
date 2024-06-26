import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  pageName: string = "portfolio"

  projectsInfo: any[] = ['one','two','three','four']


  openProject(projectId: string) {
    console.log(projectId)
  }

}
