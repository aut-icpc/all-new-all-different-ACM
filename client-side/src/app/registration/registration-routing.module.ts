import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamRegistrationPageComponent} from "./team-registration-page/team-registration-page.component";
import {RegistrationStatusPageComponent} from "./registration-status-page/registration-status-page.component";
import {RegistrationSuccessPageComponent} from "./registration-success-page/registration-success-page.component";
import {TeamSessionDataGuard} from "./guards/team-session-data.guard";
import {ComingSoonPageComponent} from "./coming-soon-page/coming-soon-page.component";
import {RegistrationBeginGuard} from "./guards/registration-begin.guard";
import {RulesAndTermsPageComponent} from "./rules-and-terms-page/rules-and-terms-page.component";

const routes: Routes = [
  {path: 'registration', children: [
      {
        path: 'register', component: TeamRegistrationPageComponent,
        canActivate: [RegistrationBeginGuard],
        title: 'Team registration',
      },
      {
        path: 'reg-status', component: RegistrationStatusPageComponent,
        canActivate: [RegistrationBeginGuard],
        title: 'Registration status'
      },
      {
        path: 'success', component: RegistrationSuccessPageComponent,
        canActivate: [TeamSessionDataGuard, RegistrationBeginGuard],
        title: 'Team registration successful'
      },
      {
        path: 'coming-soon', component: ComingSoonPageComponent,
        title: 'Coming soon'
      },
      {
        path: 'terms', component: RulesAndTermsPageComponent,
        title: 'Rules and Terms'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
