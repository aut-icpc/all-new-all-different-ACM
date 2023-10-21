import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'contests-archive',
    loadChildren: () => import("./contests-archive-page/contests-archive-page.module").then(m => m.ContestsArchivePageModule),
    title: 'Contests archive'
  },
  {
    path: 'archive',
    loadChildren: () => import("./contest-details-page/contest-details-page.module").then(m => m.ContestDetailsPageModule),
    title: 'team details'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ContestsArchiveRoutingModule {
}
