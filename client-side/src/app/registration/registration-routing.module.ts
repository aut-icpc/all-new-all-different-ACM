import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeamRegistrationPageComponent} from "./team-registration-page/team-registration-page.component";

const routes: Routes = [
  {path: 'registration', children: [
      {path: 'team', component: TeamRegistrationPageComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
