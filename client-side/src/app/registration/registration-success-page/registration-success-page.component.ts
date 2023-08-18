import {Component, OnInit} from '@angular/core';
import {TeamDto} from "../../shared/interfaces/DTO/team.dto";
import {HttpService} from "../../shared/services/http.service";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {API_URLS} from "../../shared/api-urls";
import {ContactUsDto} from "../../shared/interfaces/DTO/contactUs.dto";

@Component({
  selector: 'acpc-registration-success-page',
  templateUrl: './registration-success-page.component.html',
  styleUrls: ['./registration-success-page.component.scss']
})
export class RegistrationSuccessPageComponent implements OnInit {

  teamData!: TeamDto;
  contactData!: ContactUsDto;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    const id = sessionStorage.getItem('teamId') || '';
    const params = {id: id};
    this.http.sendGetRequest<BaseResponseDto<TeamDto>>(API_URLS.REGISTRATION.TEAM_REGISTER, {params: params})
      .subscribe(response => {
        this.teamData = response.result;
      });

    this.http.sendGetRequest<BaseResponseDto<ContactUsDto>>(API_URLS.CONTACT_US)
      .subscribe(response => {
        this.contactData = response.result;
      })
  }

}
