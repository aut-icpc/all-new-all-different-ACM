import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";
import {ContestsArchivePageComponent} from "./contests-archive-page.component";
import {EventCardComponent} from "./event-card/event-card.component";

const routes: Routes = [
  {
    path: "",
    component: ContestsArchivePageComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
    EventCardComponent
  ],
  declarations: [
    EventCardComponent,
    ContestsArchivePageComponent,
  ]
})
export class ContestsArchivePageModule {
}
