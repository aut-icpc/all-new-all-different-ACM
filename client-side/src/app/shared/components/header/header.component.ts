import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {PlatformService} from "../../services/platform.service";
import {MatBottomSheet, MatBottomSheetRef} from "@angular/material/bottom-sheet";

@Component({
  selector: 'acpc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  isDesktop !: boolean;
  isMenuOpen = false;
  menuOptions = ['Home', 'About', 'Register',
    'Timeline', 'Contact Us', 'Reg. Status', 'Contests Archive',]
  @Input() menuOptionColor !: 'dark-text' | 'light-text';

  bottomSheetRef!: MatBottomSheetRef<any>;
  @ViewChild('bottomSheet') bottomSheetTemplate!: TemplateRef<any>;

  constructor(private router: Router, private bottomSheet: MatBottomSheet, private platform: PlatformService) {
    this.isDesktop = platform.isOnDesktopDevice();
    if (this.isDesktop) {
      this.menuOptions.splice(this.menuOptions.indexOf("Register"), 1);
      this.menuOptions.splice(this.menuOptions.indexOf("Home"), 1);
    }
    if (!this.menuOptionColor)
      this.menuOptionColor = 'dark-text';
  }

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    this.bottomSheetRef = this.bottomSheet.open(this.bottomSheetTemplate);
    this.bottomSheetRef.backdropClick().subscribe(e => {
      this.isMenuOpen = !this.isMenuOpen;
    });
    this.highlightCurrentRouteOption();
  }

  navigateToHome() {
    this.navigateToPage('home')
  }

  navigateToRegister() {
    this.navigateToPage('register')
  }

  navigateToPage(uri: string) {
    let formatted = this.formatName(uri);
    formatted = '/' + formatted;
    if (formatted.includes('register') || formatted.includes('reg'))
      formatted = '/registration' + formatted;
    this.router.navigateByUrl(formatted);
  }

  highlightCurrentRouteOption(){
    let options = document.getElementsByClassName('options');
    for (let option in options) {
      if (this.router.url.includes(options[option].id))
        options[option].className += ' active';
    }
  }

  formatName(name: string): string {
    let formatted = name.replace('.', '');
    return formatted.replace(' ', '-').toLowerCase();
  }

  //TODO: recheck colors of options
  //TODO: add image to option menu for desktop
  //TODO: change background color of option menu

}
