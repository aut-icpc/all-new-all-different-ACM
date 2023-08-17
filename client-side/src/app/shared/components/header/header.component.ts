import {AfterViewInit, Component, TemplateRef, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {PlatformService} from "../../services/platform.service";
import {MatBottomSheet, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'acpc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {

  isDesktop !: boolean;
  isMenuOpen = false;
  menuOptions = ['Home', 'About', 'Register',
    'Timeline', 'Contact Us', 'Reg. Status', 'Contests Archive',]
  menuColor !: 'dark-text' | 'light-text';

  bottomSheetRef!: MatBottomSheetRef<any>;
  @ViewChild('bottomSheet') bottomSheetTemplate!: TemplateRef<any>;

  constructor(private router: Router, private bottomSheet: MatBottomSheet,
              private platform: PlatformService,
              private overlayContainer: OverlayContainer) {
    this.isDesktop = platform.isOnDesktopDevice();
    if (this.isDesktop) {
      this.menuOptions.splice(this.menuOptions.indexOf("Register"), 1);
      this.menuOptions.splice(this.menuOptions.indexOf("Home"), 1);
    }
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects; // Get the current URL
        if (currentUrl == '/home')
          this.menuColor = 'light-text';
        else
          this.menuColor = 'dark-text';
      }
    });
  }

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    this.bottomSheetRef = this.bottomSheet.open(this.bottomSheetTemplate);
    this.bottomSheetRef.backdropClick().subscribe(() => {
      this.isMenuOpen = !this.isMenuOpen;
    });

    const containerElement = this.overlayContainer.getContainerElement()
      .querySelector('.mat-bottom-sheet-container') as HTMLElement;

    let startY: number;
    containerElement.addEventListener('touchstart', (event) => {
      startY = event.touches[0].clientY;
    });

    containerElement.addEventListener('touchmove', (event) => {
      const deltaY = event.touches[0].clientY - startY;
      containerElement.style.bottom = `${-1 * deltaY}px`
      if (deltaY > 300)
        this.bottomSheetRef.dismiss();
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

  isHomePage() {
    return this.router.url.includes('/home');
  }

  //TODO: recheck colors of options
  //TODO: add image to option menu for desktop
  //TODO: change background color of option menu

}
