import { Component, OnInit } from '@angular/core';
import {TeamDto} from "../../shared/interfaces/DTO/team.dto";
import {HttpService} from "../../shared/services/http.service";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {ApiUrls} from "../../shared/api-urls";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'acpc-registration-success-page',
  templateUrl: './registration-success-page.component.html',
  styleUrls: ['./registration-success-page.component.scss']
})
export class RegistrationSuccessPageComponent implements OnInit {

  teamData!: TeamDto;
  telegramSupport = environment.telegramSupport;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    const id = sessionStorage.getItem('teamId') || '';
    const params = {id: '16'};
    this.http.sendGetRequest<BaseResponseDto<TeamDto>>(ApiUrls.TEAM_REGISTER, {params: params})
      .subscribe(response => {
        this.teamData = response.result;
      });
  }

}