import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { map } from "rxjs";

@Component({
  standalone: true,
  selector: 'app-git',
  templateUrl: './git.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class GitComponent {
  protected readonly form = new FormGroup({
    tags: new FormControl<number | undefined>(undefined),
    branch: new FormControl<string | undefined>(undefined),
    hash: new FormControl<string | undefined>(undefined),
  });

  isTagNumberValid$ = this.form.controls.tags.valueChanges.pipe(map(v => v === 5));
  isBranchValid$ = this.form.controls.branch.valueChanges.pipe(map(v => v === 'main'));
  isHashValid$ = this.form.controls.hash.valueChanges.pipe(map(v => v === 'd30e5'));
}

