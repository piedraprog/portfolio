import { ResolveFn } from '@angular/router';
import { projects, projectsData } from '../interfaces/projects.interfaces';

export const projectDetailResolver: ResolveFn<any> = (route, state) => {


  const projectId: any = route.paramMap.get('projectId');

  return projectsData.find(project => project.id === projectId)
  
};
