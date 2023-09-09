import { Pipe, PipeTransform } from '@angular/core';
import {TeamStatus} from "../enums/team-status";

@Pipe({
  name: 'upperSnakeCaseToNormal'
})
export class UpperSnakeCaseToNormalPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (!value)
      return '';
    const strValue = value.toString();
    return strValue.toLowerCase().replace('_', '');
  }

}
