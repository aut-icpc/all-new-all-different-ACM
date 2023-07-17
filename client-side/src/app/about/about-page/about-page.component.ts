import {Component, OnInit} from '@angular/core';
import {HeaderOptionClass} from "../../shared/enums/header-option-class";
import {DescriptionDetails} from "../../shared/interfaces/description-details";

@Component({
  selector: 'acpc-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  headerTextColor = HeaderOptionClass;
  descriptions!: DescriptionDetails[];

  constructor() { }

  ngOnInit(): void {
  }

  getDirection(itemIndex: number) {
    if (itemIndex % 2 == 0)
      return 'rtl';
    return 'ltr';
  }

  naviagateToIcpcWbsite() {
    window.open('https://icpc.global/', '_blank');
  }

}
