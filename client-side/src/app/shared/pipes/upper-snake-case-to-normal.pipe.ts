import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'upperSnakeCaseToNormal'
})
export class UpperSnakeCaseToNormalPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (!value)
      return '';
    const strValue = value.toString();
    return strValue.toLowerCase().replace(/_/g, ' ');
  }

}
