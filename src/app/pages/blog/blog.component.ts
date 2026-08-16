import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { BLOG_ARTICLES, BlogArticle } from '../../interfaces/blog-article';
import { SharedChromeModule } from '../../shared-chrome.module';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [SharedChromeModule],
})
export class BlogComponent {
  pageName = 'blog';
  articles: BlogArticle[] = BLOG_ARTICLES;

  constructor(private readonly router: Router) {}

  openArticle(slug: string): void {
    void this.router.navigate(['blog', slug]);
  }

  articleIndex(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
