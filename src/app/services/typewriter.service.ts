import { Injectable } from '@angular/core';
import { concat, concatMap, delay, from, ignoreElements, interval, map, of, repeat, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypewriterService {

  constructor() { }

  private type({ word, speed, backwards = false }: any) {
    return interval(speed).pipe(
      map(x => backwards ? word.substring(0, word.length - x) : word.substring(0, x + 1)),
      take(word.length)
    );
  }

  typeEffect(word: string, speed: number, delayWrite: number, delayDelete: number) {
    return concat(
      // write 
      this.type({ word, speed }),
      of('').pipe(delay(delayWrite), ignoreElements()),
      // delete
      this.type({ word, speed, backwards: true }),
      of('').pipe(delay(delayDelete), ignoreElements())
    );
  }

  getTypewriterEffect(
    titles: string[], 
    speed: number = 150, 
    delayWrite: number = 1200,
    delayDelete: number = 500
  ) {
    return from(titles).pipe(
      concatMap(title => this.typeEffect(title, speed, delayWrite, delayDelete)),
      repeat()
    );
 }
}
