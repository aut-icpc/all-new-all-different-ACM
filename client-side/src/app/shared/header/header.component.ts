import {AfterViewInit, Component, HostListener, Input, OnInit} from '@angular/core';
import {HeaderOptionClass} from "../enums/header-option-class";
import {Router} from "@angular/router";
import {fadeInAnimation} from "../animations/fade-animations";

@Component({
  selector: 'acpc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fadeInAnimation]
})
export class HeaderComponent implements OnInit, AfterViewInit {

  isMenuOpen = false;
  menuOptions = ['Home', 'About', 'Register',
    'Timeline', 'Contact Us', 'Past Results',
    'Registration Status']
  @Input() menuOptionColor !: HeaderOptionClass;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
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
