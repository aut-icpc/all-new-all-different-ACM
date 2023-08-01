import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalStringToSnakeCase'
})
export class NormalStringToSnakeCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value)
      return '';
    return value.toLowerCase().replace(' ', '-');
  }

}
