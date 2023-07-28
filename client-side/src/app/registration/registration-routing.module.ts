import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeamRegistrationPageComponent} from "./team-registration-page/team-registration-page.component";
import {RegistrationStatusPageComponent} from "./registration-status-page/registration-status-page.component";
import {RegistrationSuccessPageComponent} from "./registration-success-page/registration-success-page.component";

const routes: Routes = [
  {path: 'registration', children: [
      {path: 'register', component: TeamRegistrationPageComponent},
      {path: 'reg-status', component: RegistrationStatusPageComponent},
      {path: 'success', component: RegistrationSuccessPageComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
