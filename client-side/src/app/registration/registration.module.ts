import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamRegistrationPageComponent} from './team-registration-page/team-registration-page.component';
import {RegistrationRoutingModule} from "./registration-routing.module";
import {SharedModule} from "../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ContestantFormComponent} from './contestant-form/contestant-form.component';
import {RecaptchaFormsModule, RecaptchaModule} from "ng-recaptcha";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import {RegistrationStatusPageComponent} from './registration-status-page/registration-status-page.component';
import {PictureUploadInputComponent} from './picture-upload-input/picture-upload-input.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";


@NgModule({
  declarations: [
    TeamRegistrationPageComponent,
    ContestantFormComponent,
    RegistrationStatusPageComponent,
    PictureUploadInputComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    SharedModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatStepperModule,
    MatButtonModule,
    MatProgressBarModule
  ]
})
export class RegistrationModule { }
