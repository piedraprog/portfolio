import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path:"home",
    component: HomepageComponent
  },
  {
    path:"nav",
    component: NavigationComponent
  },
  {
    path:"about",
    component: AboutComponent
  },
  {
    path:"portfolio",
    component: ProjectsComponent
  },
  {
    path:"contact",
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
