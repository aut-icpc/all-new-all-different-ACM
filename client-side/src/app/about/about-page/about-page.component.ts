import {Component, ElementRef, OnInit, QueryList, ViewChild} from '@angular/core';
import {HttpService} from "../../shared/services/http.service";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {AboutDto} from "../../shared/interfaces/DTO/about.dto";
import {API_URLS} from "../../shared/api-urls";
import {MetaService} from "../../shared/services/meta.service";

@Component({
  selector: 'acpc-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  @ViewChild('box') boxes!: QueryList<ElementRef>;
  descriptions!: AboutDto[];

  constructor(private http: HttpService, private meta: MetaService) { }

  ngOnInit(): void {
    this.http.sendGetRequest<BaseResponseDto<AboutDto[]>>(API_URLS.ABOUT).subscribe( response => {
      this.descriptions = response.result;
    });

    this.meta.setCustomMetaTag('description', 'Web page that contains information about ICPC history' +
      'and its roots in Amirkabir University of Technology');
    this.meta.setCustomMetaTag('keywords', 'ACPC, ICPC, Amirkabir, About, History, Information, Contest');
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
