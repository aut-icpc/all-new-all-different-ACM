import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild} from '@angular/core';
import {HeaderOptionClass} from "../../shared/enums/header-option-class";
import {HttpService} from "../../shared/services/http.service";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {AboutDto} from "../../shared/interfaces/DTO/about.dto";
import {Observable, Subject} from "rxjs";
import {distinctUntilChanged, map, mergeMap} from "rxjs/operators";
import {ApiUrls} from "../../shared/api-urls";

@Component({
  selector: 'acpc-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  @ViewChild('box') boxes!: QueryList<ElementRef>;
  descriptions!: AboutDto[];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.sendGetRequest<BaseResponseDto<AboutDto[]>>(ApiUrls.ABOUT).subscribe( response => {
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
