import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {HttpService} from "../../shared/services/http.service";
import {ActivatedRoute} from "@angular/router";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {TeamDto} from "../../shared/interfaces/DTO/team.dto";
import {API_URLS} from "../../shared/api-urls";
import {TeamStatus} from "../../shared/enums/team-status";
import {ModalService} from "../../shared/services/modal.service";
import {FormControl} from "@angular/forms";

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
    this.teamStatusList = Object.values(TeamStatus);
  }

  ngOnInit(): void {
    this.http.sendGetRequest<BaseResponseDto<TeamDto>>(API_URLS.REGISTRATION.TEAM_REGISTER + `/${this.teamId}`)
      .subscribe(response => {
        this.teamData = response.result;
      });
  }

  selectPhoto(photoAddress: string) {
    this.selectedCardPhotoAddress = photoAddress;
    this.modal.openModal(this.cardTemplate);
  }

}
