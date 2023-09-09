import {Component} from '@angular/core';
import {expandInAnimation} from "../../shared/animations/expand-animations";
import {fadeInAnimation} from "../../shared/animations/fade-animations";
import {FormControl, Validators} from "@angular/forms";
import {HttpService} from "../../shared/services/http.service";
import {API_URLS} from "../../shared/api-urls";
import {BaseResponseDto} from "../../shared/interfaces/DTO/baseResponse.dto";
import {TeamBasicInformationDto} from "../../shared/interfaces/DTO/teamBasicInformation.dto";

@Component({
  selector: 'acpc-registration-status-page',
  templateUrl: './registration-status-page.component.html',
  styleUrls: ['./registration-status-page.component.scss'],
  animations: [expandInAnimation, fadeInAnimation]
})
export class RegistrationStatusPageComponent {

  formControl = new FormControl('', Validators.required);

  teamDto!: TeamBasicInformationDto;

  isWrapperExpanded = false;
  isStatusBoxShowed = false;

  constructor(private http: HttpService) { }

  inquiryTeamStatus(event: any) {
    if (this.formControl.invalid || ( event.type == 'keypress' && event?.keyCode != 13))
      return;

    const teamName = this.formControl.value;
    this.http.sendGetRequest<BaseResponseDto<TeamBasicInformationDto>>(API_URLS.REGISTRATION.BASIC_OPERATIONS + `/name/${teamName}`).subscribe(response => {
      this.isWrapperExpanded = !this.isWrapperExpanded;
      this.teamDto = response.result;
      setTimeout(() => {
        this.isStatusBoxShowed = !this.isStatusBoxShowed;
      }, 0);
    })

  }

}
