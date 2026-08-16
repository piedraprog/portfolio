import { ResolveFn } from '@angular/router';
import { BLOG_ARTICLES, BlogArticle } from '../interfaces/blog-article';

export const blogArticleResolver: ResolveFn<BlogArticle | undefined> = (route) => {
  const articleSlug = route.paramMap.get('articleSlug');
  if (!articleSlug) {
    return undefined;
  }

  return BLOG_ARTICLES.find((article) => article.slug === articleSlug);
};
