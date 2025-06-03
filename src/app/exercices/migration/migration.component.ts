import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-migration',
  templateUrl: './migration.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MigrationComponent {}
