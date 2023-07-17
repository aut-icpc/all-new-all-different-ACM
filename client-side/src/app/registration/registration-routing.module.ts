import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeamRegistrationPageComponent} from "./team-registration-page/team-registration-page.component";
import {RegistrationStatusPageComponent} from "./registration-status-page/registration-status-page.component";

const routes: Routes = [
  {path: 'registration', children: [
      {path: 'register', component: TeamRegistrationPageComponent},
      {path: 'reg-status', component: RegistrationStatusPageComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
