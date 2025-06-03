import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatOptionModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { SolutionComponent } from "./solution/solution.component";

export type Color = 'green' | 'blue' | 'red' | 'yellow';

@Component({
  standalone: true,
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    SolutionComponent,
  ],
})
export class CustomComponent {
  protected readonly form = new FormGroup({
    label: new FormControl('Super label', {nonNullable: true}),
    color: new FormControl<Color>('green', {nonNullable: true}),
  });
}
