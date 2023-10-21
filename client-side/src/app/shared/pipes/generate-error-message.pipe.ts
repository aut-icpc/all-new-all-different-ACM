import {Pipe, PipeTransform} from '@angular/core';
import {ValidationErrors} from "@angular/forms";

@Pipe({
  name: 'generateErrorMessage'
})
export class GenerateErrorMessagePipe implements PipeTransform {

  transform(value: ValidationErrors | null, formControlName?: formControlType): string {
    if (value?.minlength && formControlName == 'INSTITUTION')
      return 'Enter institution\'s full name';
    else if (value?.minlength && formControlName === 'PHONE')
      return 'Phone number must be at least 11 digits';
    else if (value?.pattern && formControlName == 'PHONE')
      return 'Phone number format isn\'t valid';
    else if (value?.email)
      return 'Email format isn\'t valid';
    else if (value?.uniqueTeamName)
      return 'name is already taken';
    else if (value?.repeatEmail)
      return 'email is already saved';
    else if (value?.required)
      return 'Fill the input';

    return '';
  }

}

export type formControlType = 'PHONE' | 'INSTITUTION';
