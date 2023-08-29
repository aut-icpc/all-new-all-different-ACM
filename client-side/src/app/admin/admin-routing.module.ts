import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {TeamDetailsPageComponent} from "./team-details-page/team-details-page.component";
import {AdminLoginPageComponent} from "./admin-login-page/admin-login-page.component";

const routes: Routes = [
  {path: 'admin', children: [
    {path: '/', component: AdminPageComponent},
    {path: 'login', component: AdminLoginPageComponent},
    {path: 'team-details', component: TeamDetailsPageComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
