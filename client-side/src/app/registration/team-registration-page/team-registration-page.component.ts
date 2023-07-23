import {Component} from '@angular/core';
import {HeaderOptionClass} from "../../shared/enums/header-option-class";
import {PlatformService} from "../../shared/services/platform.service";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'acpc-team-registration-page',
  templateUrl: './team-registration-page.component.html',
  styleUrls: ['./team-registration-page.component.scss']
})
export class TeamRegistrationPageComponent {

  headerTextColor = HeaderOptionClass;
  isDesktop !: boolean;
  captchaToken !: string;
  siteKey = environment.recaptcha.siteKey;
  teamInfoFormGroup !: FormGroup;
  teamDocumentFormGroup !: FormGroup;

  showErrorOnCaptcha: boolean = false;

  constructor(private platform: PlatformService) {
    this.isDesktop = this.platform.isOnDesktopDevice();
    this.initializeTeamInfoFormGroup();
    this.initializeTeamDocumentFormGroup()
  }

  initializeTeamInfoFormGroup() {
    this.teamInfoFormGroup = new FormGroup({
      teamName: new FormControl('', Validators.required),
      institution: new FormControl('', Validators.required),
      contestantOne: new FormControl(null, Validators.required),
      contestantTwo: new FormControl(null, Validators.required),
      contestantThree: new FormControl(null, Validators.required),
    })
  }

  initializeTeamDocumentFormGroup() {
    this.teamDocumentFormGroup = new FormGroup({
      contestantOne: new FormControl(null, Validators.required),
      contestantTwo: new FormControl(null, Validators.required),
      contestantThree: new FormControl(null, Validators.required),
    })
  }

  getContestantName(number: 'One' | 'Two' | 'Three') {
    return this.teamInfoFormGroup.controls[`contestant${number}`].value.lastname;
  }

  getContestantStudentId(number: 'One' | 'Two' | 'Three') {
    return this.teamInfoFormGroup.controls[`contestant${number}`].value.studentId;
  }

  submitForm() {
    debugger
    if (!this.captchaToken) {
      this.showErrorOnCaptcha = true;
      return;
    }

    this.showErrorOnCaptcha = false;

    if (this.teamInfoFormGroup.invalid || this.teamDocumentFormGroup.invalid)
      return;

  }

}
