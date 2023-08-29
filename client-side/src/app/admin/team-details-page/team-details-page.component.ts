import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../shared/services/http.service";
import {ActivatedRoute} from "@angular/router";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {TeamDto} from "../../shared/interfaces/DTO/team.dto";
import {API_URLS} from "../../shared/api-urls";

@Component({
  selector: 'acpc-team-details-page',
  templateUrl: './team-details-page.component.html',
  styleUrls: ['./team-details-page.component.scss']
})
export class TeamDetailsPageComponent implements OnInit {

  teamId!: number;
  teamData!: TeamDto;

  constructor(private route: ActivatedRoute, private http: HttpService) {
    this.route.queryParams.subscribe(params => {
        this.teamId = params.id;
      }
    );
  }

  ngOnInit(): void {
    const params = {id: `${this.teamId}`};
    this.http.sendGetRequest<BaseResponseDto<TeamDto>>(API_URLS.REGISTRATION.TEAM_REGISTER, {params: params})
      .subscribe(response => {
        this.teamData = response.result;
      })
  }

}
