import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { projectDetailGuard } from './guards/project-detail.guard';
import { projectDetailResolver } from './resolvers/project-detail.resolver';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogArticleComponent } from './pages/blog-article/blog-article.component';
import { blogArticleResolver } from './resolvers/blog-article.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path:'home',
    component: HomepageComponent
  },
  {
    path:'nav',
    component: NavigationComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'portfolio',
    children:[
      {
        path:'',
        component: ProjectsComponent
      },
      {
        path:':projectId',
        // canActivate:[projectDetailGuard],
        resolve: { preload: projectDetailResolver},
        component: DetailPageComponent
      }
    ]
  },
  {
    path: 'blog',
    children: [
      {
        path: '',
        component: BlogComponent,
      },
      {
        path: ':articleSlug',
        resolve: { article: blogArticleResolver },
        component: BlogArticleComponent,
      },
    ],
  },
  {
    path:'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
