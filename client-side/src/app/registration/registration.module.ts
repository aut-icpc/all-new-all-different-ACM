import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamRegistrationPageComponent} from './team-registration-page/team-registration-page.component';
import {RegistrationRoutingModule} from "./registration-routing.module";
import {SharedModule} from "../shared/shared.module";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatLegacySelectModule as MatSelectModule} from "@angular/material/legacy-select";
import {ContestantFormComponent} from './contestant-form/contestant-form.component';
import {RecaptchaFormsModule, RecaptchaModule} from "ng-recaptcha";
import {MatStepperModule} from "@angular/material/stepper";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {RegistrationStatusPageComponent} from './registration-status-page/registration-status-page.component';
import {PictureUploadInputComponent} from './picture-upload-input/picture-upload-input.component';
import {MatLegacyProgressBarModule as MatProgressBarModule} from "@angular/material/legacy-progress-bar";
import { IdentificationDocumentsFormComponent } from './identification-documents-form/identification-documents-form.component';
import { MatVerticalStepperScrollerDirective } from './mat-vertical-stepper-scroller.directive';
import { RegistrationSuccessPageComponent } from './registration-success-page/registration-success-page.component';
import { ComingSoonPageComponent } from './coming-soon-page/coming-soon-page.component';


@NgModule({
  declarations: [
    TeamRegistrationPageComponent,
    ContestantFormComponent,
    RegistrationStatusPageComponent,
    PictureUploadInputComponent,
    IdentificationDocumentsFormComponent,
    MatVerticalStepperScrollerDirective,
    RegistrationSuccessPageComponent,
    ComingSoonPageComponent
  ],
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
