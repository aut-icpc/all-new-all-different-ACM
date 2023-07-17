import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvenCardComponent} from './even-card/even-card.component';
import {ContestsArchivePageComponent} from './contests-archive-page/contests-archive-page.component';
import {ContestsArchiveRoutingModule} from "./contests-archive-routing.module";
import {ContestDetailsPageComponent} from './contest-details-page/contest-details-page.component';
import {SharedModule} from "../shared/shared.module";
import {MatTabsModule} from "@angular/material/tabs";
import { ContestsPhotosTabComponent } from './contests-photos-tab/contests-photos-tab.component';


@NgModule({
  declarations: [
    EvenCardComponent,
    ContestsArchivePageComponent,
    ContestDetailsPageComponent,
    ContestsPhotosTabComponent
  ],
  imports: [
    CommonModule,
    ContestsArchiveRoutingModule,
    SharedModule,
    MatTabsModule,
  ]
})
export class ContestsArchiveModule { }
