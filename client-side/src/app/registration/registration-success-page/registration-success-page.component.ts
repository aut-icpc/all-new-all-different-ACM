import {Component, OnInit} from '@angular/core';
import {TeamDto} from "../../shared/interfaces/DTO/team.dto";
import {HttpService} from "../../shared/services/http.service";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {API_URLS} from "../../shared/api-urls";
import {ContactUsDto} from "../../shared/interfaces/DTO/contactUs.dto";
import {MetaService} from "../../shared/services/meta.service";

@Component({
  selector: 'acpc-registration-success-page',
  templateUrl: './registration-success-page.component.html',
  styleUrls: ['./registration-success-page.component.scss']
})
export class RegistrationSuccessPageComponent implements OnInit {

  teamData!: TeamDto;
  contactData!: ContactUsDto;

  constructor(private http: HttpService, private meta: MetaService) { }

  ngOnInit(): void {
    const id = sessionStorage.getItem('teamId') || '';
    this.http.sendGetRequest<BaseResponseDto<TeamDto>>(API_URLS.REGISTRATION.BASIC_OPERATIONS.BY_ID + `/${id}`)
      .subscribe(response => {
        this.teamData = response.result;
      });

    this.http.sendGetRequest<BaseResponseDto<ContactUsDto>>(API_URLS.CONTACT_US)
      .subscribe(response => {
        this.contactData = response.result;
      });

    this.meta.setPageIndexing("noindex");
  }

}
