import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'nameToRouterLink'
})
export class NameToRouterLinkPipe implements PipeTransform {

  transform(value: string): string {
    let formatted = this.formatName(value);
    formatted = '/' + formatted;
    if (formatted.includes('register') || formatted.includes('reg'))
      formatted = '/registration' + formatted;
    return formatted;
  }

  formatName(name: string): string {
    let formatted = name.replace('.', '');
    return formatted.replace(' ', '-').toLowerCase();
  }

}
