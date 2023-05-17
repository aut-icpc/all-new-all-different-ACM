import { Component, OnInit } from '@angular/core';
import {HeaderOptionClass} from "../../shared/enums/header-option-class";
import {PlatformService} from "../../shared/services/platform.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'acpc-team-registration-page',
  templateUrl: './team-registration-page.component.html',
  styleUrls: ['./team-registration-page.component.scss']
})
export class TeamRegistrationPageComponent implements OnInit {

  headerTextColor = HeaderOptionClass;
  isDesktop !: boolean;
  genders = ['man', 'woman'];
  graduationLevels = ['under graduate', 'graduated'];
  captchaToken !: string;

  constructor(private platform: PlatformService) {
    this.isDesktop = this.platform.IsOnDesktopDevice();
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
