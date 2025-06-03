import { Pipe, PipeTransform } from '@angular/core';

import { Color } from '../custom.component';

@Pipe({
  standalone: true,
  name: 'getSolution',
})
export class SolutionPipe implements PipeTransform {
  transform(color: Color | undefined): string {
    switch (color) {
      case 'green':
        return 'bg-green-100 border-green-500';
      case 'blue':
        return 'bg-blue-100 border-blue-500';
      case 'red':
        return 'bg-red-100 border-red-500';
      case 'yellow':
        return 'bg-yellow-100 border-yellow-500';
      default:
        return '';
    }
  }
}
