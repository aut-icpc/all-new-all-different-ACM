import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";
import {TeamDetailsPageComponent} from "./team-details-page.component";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {
    path: "",
    component: TeamDetailsPageComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    TeamDetailsPageComponent
  ]
})
export class TeamDetailsPageModule {
}
