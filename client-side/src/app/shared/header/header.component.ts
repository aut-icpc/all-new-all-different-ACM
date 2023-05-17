import {AfterViewInit, Component, HostListener, Input, OnInit} from '@angular/core';
import {HeaderOptionClass} from "../enums/header-option-class";
import {Router} from "@angular/router";
import {fadeInAnimation} from "../animations/fade-animations";
import {PlatformService} from "../services/platform.service";

@Component({
  selector: 'acpc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fadeInAnimation]
})
export class HeaderComponent implements OnInit, AfterViewInit {

  isDesktop !: boolean;
  isMenuOpen = false;
  menuOptions = ['Home', 'About', 'Register',
    'Timeline', 'Contact Us', 'Reg. Status', 'Contests Archive',]
  @Input() menuOptionColor !: HeaderOptionClass;

  constructor(private router: Router, private platform: PlatformService) {
    this.isDesktop = platform.IsOnDesktopDevice();
    if (this.isDesktop) {
      this.menuOptions.splice(this.menuOptions.indexOf("Register"), 1);
      this.menuOptions.splice(this.menuOptions.indexOf("Home"), 1);
    }
  }

  ngOnInit(): void {
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  navigateToRegister() {
    this.router.navigateByUrl('/registration/team');
  }

  highlightCurrentRouteOption(){
    let options = document.getElementsByClassName('options');
    for (let option in options) {
      if (this.router.url == '/' + options[option].id)
        options[option].className += ' active';
    }
  }

  formatIdName(name: string): string {
    return name.replace(' ', '-').toLowerCase();
  }

  ngAfterViewInit(): void {
    this.highlightCurrentRouteOption();
  }

  //TODO: recheck colors of options
  //TODO: add image to option menu for desktop
  //TODO: change background color of option menu

}
