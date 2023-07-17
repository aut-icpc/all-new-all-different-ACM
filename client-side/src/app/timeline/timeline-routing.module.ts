import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimelinePageComponent} from "./timeline-page/timeline-page.component";

const routes: Routes = [
  {path: 'timeline', component: TimelinePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TimelineRoutingModule { }
