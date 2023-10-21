import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContestsArchiveRoutingModule} from "./contests-archive-routing.module";
import {MatTabsModule} from "@angular/material/tabs";
import {ContestsPhotosTabComponent} from './contests-photos-tab/contests-photos-tab.component';


@NgModule({
  declarations: [
    ContestsPhotosTabComponent
  ],
  imports: [
    CommonModule,
    ContestsArchiveRoutingModule,
    MatTabsModule,
  ]
})
export class ContestsArchiveModule {
}
