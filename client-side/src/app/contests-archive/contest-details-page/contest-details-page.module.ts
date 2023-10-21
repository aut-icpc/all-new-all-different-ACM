import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ContestDetailsPageComponent} from "./contest-details-page.component";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: "",
    component: ContestDetailsPageComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ContestDetailsPageComponent
  ]
})
export class ContestDetailsPageModule {
}
