import { Component, OnInit } from '@angular/core';
import {HeaderOptionClass} from "../../shared/enums/header-option-class";
import {PlatformService} from "../../shared/services/platform.service";
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'acpc-team-registration-page',
  templateUrl: './team-registration-page.component.html',
  styleUrls: ['./team-registration-page.component.scss']
})
export class TeamRegistrationPageComponent implements OnInit {

  headerTextColor = HeaderOptionClass;
  isDesktop !: boolean;
  captchaToken !: string;
  siteKey = environment.recaptcha.siteKey;
  teamInfoFormGroup !: FormGroup;

  constructor(private platform: PlatformService) {
    this.isDesktop = this.platform.IsOnDesktopDevice();
    this.teamInfoFormGroup = new FormGroup({
      teamName: new FormControl('', Validators.required),
      institution: new FormControl('', Validators.required),
      contestantOne: new FormControl(null),
      contestantTwo: new FormControl(null),
      contestantThree: new FormControl(null),
    })
  }

  ngOnInit(): void {
  }

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    console.debug(`Token [${this.captchaToken}] generated`);
  }

}
