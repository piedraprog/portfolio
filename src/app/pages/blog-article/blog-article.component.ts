import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogArticle } from '../../interfaces/blog-article';
import { SharedChromeModule } from '../../shared-chrome.module';

interface BlogArticleRouteData {
  article: BlogArticle | undefined;
}

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [SharedChromeModule],
})
export class BlogArticleComponent {
  readonly article: BlogArticle | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.article = (this.route.snapshot.data as BlogArticleRouteData).article;
  }

  goToBlog(): void {
    void this.router.navigate(['/blog']);
  }
}
