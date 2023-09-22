import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {MatLegacyTableModule as MatTableModule} from "@angular/material/legacy-table";
import {AdminLoginPageComponent} from './admin-login-page/admin-login-page.component';
import {TeamDetailsPageComponent} from './team-details-page/team-details-page.component';
import {SharedModule} from "../shared/shared.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatLegacySelectModule as MatSelectModule} from "@angular/material/legacy-select";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {MatLegacyTooltipModule as MatTooltipModule} from "@angular/material/legacy-tooltip";
import {MatLegacyPaginatorModule as MatPaginatorModule} from "@angular/material/legacy-paginator";
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from "@angular/material/legacy-progress-spinner";


@NgModule({
  declarations: [
    AdminPageComponent,
    AdminLoginPageComponent,
    TeamDetailsPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    SharedModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ]
})
export class AdminModule { }
