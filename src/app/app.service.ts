import { Injectable, signal } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { Data } from "./exercices/bugs/bugs.model";

@Injectable({providedIn: 'root'})
export class AppService {
  private readonly secondsElapsed = signal<number>(Number(localStorage.getItem('everysens_training_elapsedSeconds')));

  startTime(): void {
    setInterval(() => {
      this.secondsElapsed.update((v) => v+1);
      localStorage.setItem('everysens_training_elapsedSeconds', this.secondsElapsed().toString());
    }, 1000);
  }

  getElapsedTime(): string {
    const hour = Math.floor(Math.floor(this.secondsElapsed() / 60) / 60);
    const min = Math.floor(this.secondsElapsed() / 60) - (hour * 60);
    const sec = this.secondsElapsed() - (min +(hour * 60)) * 60;

    return `${hour}h${min.toString().padStart(2, '0')}m${sec.toString().padStart(2, '0')}s`;
  }

  getData(): Observable<Data> {
    return of({name: 'John Doe', permissions: ['user']}).pipe(delay(1000));
  }
}
