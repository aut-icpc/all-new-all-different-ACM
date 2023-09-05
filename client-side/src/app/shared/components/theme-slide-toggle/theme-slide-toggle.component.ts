import {AfterViewInit, ChangeDetectorRef, Component, DoCheck} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'acpc-theme-slide-toggle',
  templateUrl: './theme-slide-toggle.component.html',
  styleUrls: ['./theme-slide-toggle.component.scss'],
  animations: [
    trigger('moveToggle', [
      state('true', style({
        left: '44px'
      })),
      state('false', style({
        left: '4px'
      })),
      transition('* <=> *', [
        animate('.3s ease-in-out')
      ])
    ]),
  ]
})
export class ThemeSlideToggleComponent implements AfterViewInit, DoCheck {
  isDark = false;
  previousIsDark = false;

  constructor(private cd: ChangeDetectorRef) {
    const darkThemeFlag = localStorage.getItem('isDark');
    if (darkThemeFlag != null) {
      this.isDark = (darkThemeFlag !== 'false');
    } else {
      this.isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  }

  ngAfterViewInit(): void {
    this.applyTheme();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.cd.detectChanges();
  }

  ngDoCheck(): void {
    if (this.isDark !== this.previousIsDark) {
      this.previousIsDark = this.isDark;
      this.applyTheme();
      this.saveToLocalStorage();
    }
  }

  applyTheme() {
    const themeName = this.isDark ? 'dark' : 'light';
    document.body.setAttribute('theme', themeName);
  }

  saveToLocalStorage() {
    localStorage.setItem('isDark', String(this.isDark));
  }
}
