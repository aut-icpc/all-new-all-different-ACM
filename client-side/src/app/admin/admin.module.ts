import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {MatTableModule} from "@angular/material/table";
import {AdminLoginPageComponent} from './admin-login-page/admin-login-page.component';
import {TeamDetailsPageComponent} from './team-details-page/team-details-page.component';
import {SharedModule} from "../shared/shared.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCheckboxModule} from "@angular/material/checkbox";


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
    MatProgressSpinnerModule,
    MatCheckboxModule
  ]
})
export class AdminModule { }
