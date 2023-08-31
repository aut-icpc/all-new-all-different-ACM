import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {MatTableModule} from "@angular/material/table";
import {AdminLoginPageComponent} from './admin-login-page/admin-login-page.component';
import {TeamDetailsPageComponent} from './team-details-page/team-details-page.component';
import {SharedModule} from "../shared/shared.module";
import {MatExpansionModule} from "@angular/material/expansion";


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
    MatExpansionModule
  ]
})
export class AdminModule { }
