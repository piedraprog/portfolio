import { CanActivateFn } from '@angular/router';

export const projectDetailGuard: CanActivateFn = (route, state) => {

 
  const projectId: any = route.paramMap.get('projectId');

  

  console.log("can activate",projectId)
  return true;
};
