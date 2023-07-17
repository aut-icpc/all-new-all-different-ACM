import { Component, OnInit } from '@angular/core';
import {expandInAnimation} from "../../shared/animations/expand-animations";
import {fadeInAnimation} from "../../shared/animations/fade-animations";

@Component({
  selector: 'acpc-registration-status-page',
  templateUrl: './registration-status-page.component.html',
  styleUrls: ['./registration-status-page.component.scss'],
  animations: [expandInAnimation, fadeInAnimation]
})
export class RegistrationStatusPageComponent implements OnInit {

  statusMessage!: string;

  isWrapperExpanded = false;
  isStatusBoxShowed = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAnimationsState() {
    this.isWrapperExpanded = !this.isWrapperExpanded;
    setTimeout(() => {
      this.isStatusBoxShowed = !this.isStatusBoxShowed;
    }, 0);
  }

}
