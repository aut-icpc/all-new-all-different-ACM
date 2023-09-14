import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {HttpService} from "../../shared/services/http.service";
import {ActivatedRoute} from "@angular/router";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {TeamDto} from "../../shared/interfaces/DTO/team.dto";
import {API_URLS} from "../../shared/api-urls";
import {TeamStatus} from "../../shared/enums/team-status";
import {ModalService} from "../../shared/services/modal.service";
import {FormControl} from "@angular/forms";
import {UpdateStatusRequestDto} from "../../shared/interfaces/DTO/updateStatusRequest.dto";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'acpc-team-details-page',
  templateUrl: './team-details-page.component.html',
  styleUrls: ['./team-details-page.component.scss']
})
export class TeamDetailsPageComponent implements OnInit {

  teamId!: number;
  teamData!: TeamDto;

  teamStatusList!: string[];

  formControl = new FormControl();

  selectedCardPhotoAddress!: string;
  @ViewChild('cardPhoto') cardTemplate!: TemplateRef<any>;

  constructor(private route: ActivatedRoute,
              private http: HttpService,
              private modal: ModalService) {
    this.route.params.subscribe(params => {
        this.teamId = params.id;
      }
    );
    this.teamStatusList = Object.keys(TeamStatus);
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.http.sendGetRequest<BaseResponseDto<TeamDto>>(API_URLS.REGISTRATION.TEAM_REGISTER + `/id/${this.teamId}`, {headers: headers})
      .subscribe(response => {
        this.teamData = response.result;
      });
  }

  selectPhoto(photoAddress: string) {
    this.selectedCardPhotoAddress = photoAddress;
    this.modal.openModal(this.cardTemplate);
  }

  updateTeamStatus() {
    const request = new UpdateStatusRequestDto();
    request.teamId = this.teamId;
    request.status = this.formControl.value;
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.http.sendPutRequest(API_URLS.REGISTRATION.TEAM_STATUS_UPDATE, request, {headers: headers})
      .subscribe(response => {
        console.log(response);
    })
  }
}
