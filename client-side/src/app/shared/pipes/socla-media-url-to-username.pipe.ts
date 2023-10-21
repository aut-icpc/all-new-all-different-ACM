import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'socialMediaUrlToUsername'
})
export class SocialMediaUrlToUsernamePipe implements PipeTransform {

  socialMediaDomainMap: Readonly<Record<socialMediaType, string>>;

  constructor() {
    this.socialMediaDomainMap = {
      'telegram': 'https://t.me/',
      'instagram': 'https://www.instagram.com/'
    }
  }

  transform(value: string | undefined, socialMedia: socialMediaType): unknown {
    if (!value)
      return '';
    let username = value.replace(this.socialMediaDomainMap[socialMedia], '');
    username = socialMedia == 'telegram' ? '@' + username : username.slice(0, -1);
    return username;
  }

}

export type socialMediaType = 'telegram' | 'instagram';
