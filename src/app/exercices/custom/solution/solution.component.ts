import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Color } from '../custom.component';
import { SolutionPipe } from './solution.pipe';

@Component({
  standalone: true,
  selector: 'app-solution',
  template: `<div [class]="color | getSolution" class="w-fit px-4 py-2 rounded-md border-2 border-solid">
    {{label}}
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SolutionPipe],
})
export class SolutionComponent {
  @Input({required: true}) label: string | undefined;
  @Input({required: true}) color: Color | undefined;
}
