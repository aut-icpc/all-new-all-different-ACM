import {Component, OnInit} from '@angular/core';
import {HeaderOptionClass} from "../../shared/enums/header-option-class";
import {HttpService} from "../../shared/services/http.service";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {AboutDto} from "../../shared/interfaces/DTO/about.dto";

@Component({
  selector: 'acpc-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  headerTextColor = HeaderOptionClass;
  descriptions!: AboutDto[];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    debugger
    this.http.sendGetRequest<BaseResponseDto<AboutDto[]>>('/api/about').subscribe( response => {
      this.descriptions = response.result;
    });
  }

  getDirection(itemIndex: number) {
    if (itemIndex % 2 == 0)
      return 'rtl';
    return 'ltr';
  }

  navigateToIcpcWebsite() {
    window.open('https://icpc.global/', '_blank');
  }

}
