import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ContestsArchivePageComponent} from "./contests-archive-page/contests-archive-page.component";
import {ContestDetailsPageComponent} from "./contest-details-page/contest-details-page.component";

const routes: Routes = [
  {
    path: 'contests-archive', component: ContestsArchivePageComponent,
    title: 'Contests archive'
  },
  {
    path: 'archive', component: ContestDetailsPageComponent,
    title: 'team details'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ContestsArchiveRoutingModule { }
