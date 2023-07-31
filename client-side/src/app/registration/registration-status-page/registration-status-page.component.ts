import {Component, OnInit} from '@angular/core';
import {expandInAnimation} from "../../shared/animations/expand-animations";
import {fadeInAnimation} from "../../shared/animations/fade-animations";
import {FormControl, Validators} from "@angular/forms";
import {HttpService} from "../../shared/services/http.service";
import {ApiUrls} from "../../shared/api-urls";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {TeamDto} from "../../shared/interfaces/DTO/team.dto";

@Component({
  selector: 'acpc-registration-status-page',
  templateUrl: './registration-status-page.component.html',
  styleUrls: ['./registration-status-page.component.scss'],
  animations: [expandInAnimation, fadeInAnimation]
})
export class RegistrationStatusPageComponent implements OnInit {

  formControl = new FormControl('', Validators.required);

  teamDto!: TeamDto;

  isWrapperExpanded = false;
  isStatusBoxShowed = false;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  inquiryTeamStatus(event: any) {
    if (this.formControl.invalid || event?.keyCode != 13)
      return;

    const teamName = this.formControl.value;
    this.http.sendGetRequest<BaseResponseDto<TeamDto>>(ApiUrls.TEAM_REGISTER + `/${teamName}`).subscribe(response => {
      this.isWrapperExpanded = !this.isWrapperExpanded;
      this.teamDto = response.result;
      setTimeout(() => {
        this.isStatusBoxShowed = !this.isStatusBoxShowed;
      }, 0);
    })

  }

}
