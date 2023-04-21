import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RootComponent} from "./root/root.component";

const routes: Routes = [
  {path: 'home', component: RootComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
