import { Component, computed, inject } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly service = inject(AppService);

  protected readonly elapsedTime = computed(() => this.service.getElapsedTime());

  constructor() {
    this.service.startTime();
  }
}
