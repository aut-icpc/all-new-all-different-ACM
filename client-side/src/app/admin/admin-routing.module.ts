import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'admin', title: 'ACPC admin panel',
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./admin-page/admin-page.module').then(m => m.AdminPageModule),
      },
      {
        path: 'login',
        loadChildren: () => import('./admin-login-page/admin-login-page.module').then(m => m.AdminLoginPageModule)
      },
      {
        path: 'team-details/:id',
        loadChildren: () => import('./team-details-page/team-details-page.module').then(m => m.TeamDetailsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
