import { DialogModule } from "@angular/cdk/dialog";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { tap } from "rxjs";
import { AppService } from "src/app/app.service";
import { Data } from "./bugs.model";

@Component({
  standalone: true,
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatButtonModule,
    DialogModule,
  ]
})
export class BugsComponent implements OnInit {
  private readonly service = inject(AppService);

  protected readonly isLoading = signal(true);
  protected readonly data = signal<Data | undefined>(undefined);

  ngOnInit(): void {
    this.service.getData().pipe(
      tap(() => this.isLoading.set(false)),
      tap((data) => this.data.set(data)),
    );
  }

  updatePermission(): void {
    if (this.data()?.permissions.includes('admin')) return;

    this.data.update((d) => {
      if (!d) return d;

      return {
        ...d,
        permissions: ['admin'],
      };
    });
  }
}
