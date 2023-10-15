import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {TeamDetailsPageComponent} from "./team-details-page/team-details-page.component";
import {AdminLoginPageComponent} from "./admin-login-page/admin-login-page.component";

const routes: Routes = [
  {
    path: 'admin', title: 'ACPC admin panel',
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'home', component: AdminPageComponent},
      {path: 'login', component: AdminLoginPageComponent},
      {path: 'team-details/:id', component: TeamDetailsPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
