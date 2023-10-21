import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineRoutingModule} from "./timeline-routing.module";
import {TimelinePageComponent} from './timeline-page/timeline-page.component';
import {SharedModule} from "../shared/shared.module";
import {TimelineMilestoneComponent} from './timeline-milestone/timeline-milestone.component';


@NgModule({
  declarations: [
    TimelinePageComponent,
    TimelineMilestoneComponent
  ],
  imports: [
    CommonModule,
    TimelineRoutingModule,
    SharedModule
  ]
})
export class TimelineModule { }
