import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {TeamDto} from "../../shared/interfaces/DTO/team.dto";
import {API_URLS} from "../../shared/api-urls";
import {TeamStatus} from "../../shared/enums/team-status";
import {ModalService} from "../../shared/services/modal.service";
import {UntypedFormControl} from "@angular/forms";
import {UpdateStatusRequestDto} from "../../shared/interfaces/DTO/updateStatusRequest.dto";
import {ToastService} from "../../shared/services/toast.service";
import {AuthenticatedHttpService} from "../services/authenticated-http.service";

@Component({
  selector: 'acpc-team-details-page',
  templateUrl: './team-details-page.component.html',
  styleUrls: ['./team-details-page.component.scss']
})
export class TeamDetailsPageComponent implements OnInit {

  teamId!: number;
  teamData!: TeamDto;

  teamStatusList!: string[];

  isUpdateDisabled = true;
  teamCurrentStatus!: TeamStatus;
  selectedStatus!: TeamStatus;
  teamStatusControl = new UntypedFormControl();

  selectedCardPhotoAddress!: string;
  @ViewChild('cardPhoto') cardTemplate!: TemplateRef<any>;

  constructor(private route: ActivatedRoute,
              private http: AuthenticatedHttpService,
              private modal: ModalService,
              private toast: ToastService,
              private router: Router) {
    this.route.params.subscribe(params => {
        this.teamId = params.id;
      }
    );
    this.teamStatusList = Object.keys(TeamStatus);
  }

  ngOnInit(): void {
    this.http.sendGetRequest<BaseResponseDto<TeamDto>>(API_URLS.REGISTRATION.TEAM_REGISTER + `/id/${this.teamId}`)
      .subscribe(response => {
        this.teamData = response.result;
        this.teamCurrentStatus = this.teamData.status;
        this.selectedStatus = this.teamData.status;
      });

    this.teamStatusControl.valueChanges.subscribe(selected => {
      this.isUpdateDisabled = selected == this.teamCurrentStatus;
    })
  }

  selectPhoto(photoAddress: string) {
    this.selectedCardPhotoAddress = photoAddress;
    this.modal.openModal(this.cardTemplate);
  }

  updateTeamStatus() {
    const request = new UpdateStatusRequestDto();
    request.teamId = this.teamId;
    request.status = this.selectedStatus;
    this.http.sendPutRequest(API_URLS.REGISTRATION.TEAM_STATUS_UPDATE, request)
      .subscribe(() => {
        this.toast.showSuccess('team status has been updated.');
        this.router.navigateByUrl('/admin/home');
    });
  }
}
