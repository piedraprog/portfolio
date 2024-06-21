import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowIconService {

  private iconClassSubject = new BehaviorSubject<string>('');
  iconClass$ = this.iconClassSubject.asObservable();

  showIcon(): void {
    this.iconClassSubject.next('fa-solid fa-arrow-right show-icon');
  }

  hideIcon(): void {
    this.iconClassSubject.next('');
  }
}
