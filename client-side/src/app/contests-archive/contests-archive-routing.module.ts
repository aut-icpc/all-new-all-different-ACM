import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ContestsArchivePageComponent} from "./contests-archive-page/contests-archive-page.component";
import {ContestDetailsPageComponent} from "./contest-details-page/contest-details-page.component";

const routes: Routes = [
  {path: 'contests-archive', component: ContestsArchivePageComponent},
  {path: 'archive', component: ContestDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ContestsArchiveRoutingModule { }
