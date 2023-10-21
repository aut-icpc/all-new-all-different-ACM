import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateToHumanReadableString'
})
export class DateToHumanReadableStringPipe implements PipeTransform {

  transform(value: Date): string {
    const monthName = value.toLocaleDateString('en-US', {month: 'long'});
    return `${monthName} ${value.getDate()}, ${value.getFullYear()}`;
  }

}
