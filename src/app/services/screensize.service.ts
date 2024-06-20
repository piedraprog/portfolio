import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  private screenWidth = new BehaviorSubject<number>(window.innerWidth);
  private screenHeight = new BehaviorSubject<number>(window.innerHeight);

  constructor() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  private onResize() {
    this.screenWidth.next(window.innerWidth);
    this.screenHeight.next(window.innerHeight);
  }

  getScreenWidth(): Observable<number> {
    return this.screenWidth.asObservable();
  }

  getScreenHeight(): Observable<number> {
    return this.screenHeight.asObservable();
  }

  isScreenWidthGreaterThan800(): boolean {
    return this.screenWidth.getValue() > 800;
  }

  isScreenHeightValid(): Observable<boolean> {
    return this.getScreenHeight().pipe(
      map(height => height > 800)
    );
  }
}
