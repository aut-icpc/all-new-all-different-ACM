import { Injectable } from '@angular/core';
import {Platform} from "@angular/cdk/platform";

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(private platform: Platform) { }

  IsOnDesktopDevice(): boolean {
    return !(this.platform.IOS || this.platform.ANDROID);
  }
}
