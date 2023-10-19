import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AcpcIconComponent} from './acpc-icon/acpc-icon.component';
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";


@NgModule({
  declarations: [
    AcpcIconComponent
  ],
  exports: [
    AcpcIconComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class IconsModule {

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    const directoryPath = 'assets/icons/svg/';
    this.iconRegistry.addSvgIcon('failure',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'failure.svg'));
    this.iconRegistry.addSvgIcon('success',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'success.svg'));
    this.iconRegistry.addSvgIcon('left-arrow',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Arrow-Left.svg'));
    this.iconRegistry.addSvgIcon('right-arrow',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Arrow-Right.svg'));
    this.iconRegistry.addSvgIcon('attachment',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Attachment.svg'));
    this.iconRegistry.addSvgIcon('close',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Close.svg'));
    this.iconRegistry.addSvgIcon('error',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Error.svg'));
    this.iconRegistry.addSvgIcon('warn',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Warn.svg'));
    this.iconRegistry.addSvgIcon('image',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Image.svg'));
    this.iconRegistry.addSvgIcon('info',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Info.svg'));
    this.iconRegistry.addSvgIcon('hamburger',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Menu_Hamburger.svg'));
    this.iconRegistry.addSvgIcon('message',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Envelope.svg'));
    this.iconRegistry.addSvgIcon('profile',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Profile.svg'));
    this.iconRegistry.addSvgIcon('search',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Search.svg'));
    this.iconRegistry.addSvgIcon('tick',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Tick.svg'));
    this.iconRegistry.addSvgIcon('circle_arrow_up',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Circle_Arrow_Up.svg'));
    this.iconRegistry.addSvgIcon('circle_arrow_down',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Circle_Arrow_Down.svg'));
    this.iconRegistry.addSvgIcon('circle_arrow_left',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Circle_Arrow_Left.svg'));
    this.iconRegistry.addSvgIcon('circle_arrow_right',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Circle_Arrow_Right.svg'));
    this.iconRegistry.addSvgIcon('checkbox',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Checkbox.svg'));
    this.iconRegistry.addSvgIcon('archive',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Archive.svg'));
    this.iconRegistry.addSvgIcon('calender',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Calender.svg'));
    this.iconRegistry.addSvgIcon('home',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Home.svg'));
    this.iconRegistry.addSvgIcon('info_filled',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Info_Filled.svg'));
    this.iconRegistry.addSvgIcon('bubble',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Bubble.svg'));
    this.iconRegistry.addSvgIcon('edit',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Edit.svg'));
    this.iconRegistry.addSvgIcon('spinner',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Spinner.svg'));
    this.iconRegistry.addSvgIcon('close_square',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Close_Square.svg'));
    this.iconRegistry.addSvgIcon('instagram',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Instagram.svg'));
    this.iconRegistry.addSvgIcon('telegram',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Telegram.svg'));
    this.iconRegistry.addSvgIcon('call',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Call.svg'));
    this.iconRegistry.addSvgIcon('email',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Email.svg'));
    this.iconRegistry.addSvgIcon('map',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Map.svg'));
    this.iconRegistry.addSvgIcon('show',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Show.svg'));
    this.iconRegistry.addSvgIcon('hide',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Hide.svg'));
    this.iconRegistry.addSvgIcon('moon',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Moon.svg'));
    this.iconRegistry.addSvgIcon('sun',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Sun.svg'));
    this.iconRegistry.addSvgIcon('more',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'More.svg'));
    this.iconRegistry.addSvgIcon('refresh',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Refresh.svg'));
    this.iconRegistry.addSvgIcon('clipboard',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Clipboard.svg'));
    this.iconRegistry.addSvgIcon('add_user',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Add_User.svg'));
    this.iconRegistry.addSvgIcon('minimize',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Minimize.svg'));
    this.iconRegistry.addSvgIcon('maximize',
      this.sanitizer.bypassSecurityTrustResourceUrl(directoryPath + 'Maximize.svg'));
  }
}
