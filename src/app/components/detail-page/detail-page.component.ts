import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable, map } from 'rxjs';
import { projects } from '../../interfaces/projects.interfaces';

@Component({
    selector: 'app-detail-page',
    templateUrl: './detail-page.component.html',
    styleUrl: './detail-page.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DetailPageComponent {

  pageDetailData$: Observable<projects> = this.route.data.pipe(
    map(({preload} )=> preload)
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly sanitizer: DomSanitizer,
  ) { } 

  goTo(route: string) {
    this.router.navigate([`/${route}`])
  }

  youtubeEmbedUrl(videoUrl: string): SafeResourceUrl {
    const watchMatch = videoUrl.match(/[?&]v=([^&]+)/);
    const shortMatch = videoUrl.match(/youtu\.be\/([^?]+)/);
    const videoId = watchMatch?.[1] ?? shortMatch?.[1];
    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : videoUrl;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
